/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useWeb3React } from '@web3-react/core';
import {
  JSBI,
  TokenAmount,
} from '@uniswap/sdk';
import React, { useMemo, useCallback } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { AddressZero } from '@ethersproject/constants';
import Web3Status from '../Web3Status';
import images from '../../images';
import styles from './styles';
import MyButton from '../../components/Common/MyButton/index';
import ClaimModal from '../ClaimModal';
import { useClaimModalToggle } from '../../state/application/hooks';
import { useSingleCallResult } from '../../state/multicall/hooks';
import useTokenPrice from '../../hooks/useTokenPrice';
import { useVestingCallback, VestingState } from '../../hooks/useVestingCallback';
import {
  ChainId,
  HAKKA,
  VESTING_ADDRESSES,
} from '../../constants';
import { useVestingContract } from '../../hooks/useContract';

const VestingPage = () => {
  const { chainId, account } = useWeb3React();
  const toggleClaimModal = useClaimModalToggle();
  const hakkaPrice = useTokenPrice('hakka-finance');
  const [claimState, claimCallback] = useVestingCallback(VESTING_ADDRESSES[chainId], account);

  const vestingContract = useVestingContract(VESTING_ADDRESSES[chainId]);
  const vestingValue = useSingleCallResult(
    vestingContract,
    'balanceOf',
    [account],
  );
  const vestingProportion = useSingleCallResult(
    vestingContract,
    'proportion',
  );
  const lastWithdrawalTime = useSingleCallResult(
    vestingContract,
    'lastWithdrawalTime',
    [account],
  );
  const isWaitingCycle = useMemo(
    () => lastWithdrawalTime && Date.now() - parseInt(lastWithdrawalTime?.result?.toString()) * 1000 < 1641600000,
    [lastWithdrawalTime],
  );
  const vestingValueAmount = useMemo(
    () => (vestingValue.result && chainId
      ? new TokenAmount(HAKKA[chainId || 1], vestingValue.result.toString())
      : new TokenAmount(HAKKA[chainId || 1], '0')),
    [vestingValue, chainId],
  );
  const vestingValuePrice = useMemo(
    () => vestingValueAmount.multiply(JSBI.BigInt((hakkaPrice * 1e8).toFixed(0))).divide(JSBI.BigInt(1e8)),
    [vestingValueAmount],
  );
  const vestingProportionAmount = useMemo(
    () => (vestingProportion.result && chainId
      ? new TokenAmount(HAKKA[chainId || 1], vestingProportion.result.toString())
      : new TokenAmount(HAKKA[chainId || 1], '0')),
    [vestingProportion, chainId],
  );

  const addToMetamask = useCallback(() => {
    const _ethereum = window.ethereum;
    _ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: HAKKA[chainId].address,
          symbol: 'HAKKA',
          decimals: 18,
          image:
            'https://assets.coingecko.com/coins/images/12163/small/Hakka-icon.png?1597746776',
        },
      },
    });
  }, [chainId]);

  const countdownRenderer = ({
    days, hours, minutes, seconds,
  }) => (
    <div>
      {zeroPad(days)}D {zeroPad(hours)}H {zeroPad(minutes)}M {zeroPad(seconds)}S
    </div>
  );

  return (
    <>
      <div sx={styles.container}>
        <div sx={styles.vestingPageWrapper}>
          <div sx={styles.header}>
            <h1 sx={styles.title}>Vesting</h1>
            <Web3Status unsupported={VESTING_ADDRESSES[chainId as ChainId] === AddressZero} />
          </div>
          {/* <div sx={styles.backBtn}>
            <img src={images.iconBack} sx={styles.iconBack} />
            <span>Back</span>
          </div> */}
          
          {/* for temporary change, it should be 'Vesting' */}
          <h3 sx={styles.heading}></h3>
          <div sx={styles.vestingCardWrapper}>
            <div sx={styles.vestingCard}>
              <div sx={styles.balanceCard}>
                <div sx={styles.iconWaitingBackgroundColor}>
                  <img src={images.iconWaiting} />
                </div>
                <p sx={styles.vestingCardItemHeading}>Vesting Balance</p>
                <div sx={styles.balanceValueCard}>
                  <span sx={styles.balanceAmount}>
                    {vestingValueAmount.toFixed(4)}
                    {' '}
                    HAKKA
                  </span>
                  <span sx={styles.vestingBalanceValue}>
                    (=
                    {vestingValuePrice.toFixed(4)}
                    {' '}
                    USD)
                  </span>
                </div>
              </div>
              <div sx={styles.claimableCard}>
                <div sx={styles.iconWithdrawAvailableBackgroundColor}>
                  <img src={images.iconWithdrawAvailable} />
                </div>
                <p sx={styles.vestingCardItemHeading}>Claimable Amount</p>
                <div sx={styles.displayFlex}>
                  <span sx={styles.claimableAmount}>
                    {vestingValueAmount.multiply(vestingProportionAmount).toFixed(4)}
                    {' '}
                    HAKKA
                  </span>
                  <button
                    onClick={addToMetamask}
                    sx={styles.addMetamaskBtn}
                  >
                    <img src={images.iconAdd} sx={styles.iconAdd} />
                    <img src={images.iconMetamask} />
                  </button>
                </div>
              </div>
            </div>
            <div sx={styles.activeArea}>
              <a sx={styles.linkWrapper} target="_blank" href="https://medium.com/hakkafinance/vesting-contract-9ab2ff24bf76" rel="noreferrer">
                <span>Check vesting terms and learn more</span>
                <img src={images.iconLinkNormal} sx={styles.iconLink} />
              </a>
              <div sx={styles.claimBtn}>
                <MyButton
                  click={claimCallback}
                  type="green"
                  disabled={claimState === VestingState.PENDING || isWaitingCycle}
                >
                  {isWaitingCycle ? (
                    <Countdown
                      date={parseInt(lastWithdrawalTime?.result?.toString()) * 1000 + 1641600000}
                      renderer={countdownRenderer}
                    />
                  ) : 'Claim'}
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ClaimModal />
    </>
  );
};

export default VestingPage;
