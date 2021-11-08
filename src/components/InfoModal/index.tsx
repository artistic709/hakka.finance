/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  JSBI,
  TokenAmount,
} from '@uniswap/sdk';
import { useWeb3React } from '@web3-react/core';
import { Interface } from '@ethersproject/abi';
import { ArrowRightCircle } from 'react-feather';
import { useStakingData } from '../../data/StakingData';
import ERC20_ABI from '../../constants/abis/erc20.json';
import {
  ChainId,
  HAKKA,
  VESTING_ADDRESSES,
} from '../../constants';
import {
  useInfoModalOpen,
  useInfoModalToggle,
} from '../../state/application/hooks';
import { useMultipleContractMultipleData } from '../../state/multicall/hooks';
import useTokenPrice from '../../hooks/useTokenPrice';
import images from '../../images';
import Modal from '../Modal';
import styles from './styles';
import AddToMetamaskBtn from '../AddToMetamaskBtn'

export default function WalletModal() {
  const { chainId, account } = useWeb3React();
  const hakkaPrice = useTokenPrice('hakka-finance');

  const ERC20_INTERFACE = new Interface(ERC20_ABI);
  const hakkaBalances = useMultipleContractMultipleData(
    [
      HAKKA[chainId as ChainId]?.address,
      VESTING_ADDRESSES[chainId as ChainId],
    ],
    ERC20_INTERFACE,
    'balanceOf',
    [[account], [account]],
  );

  const [
    hakkaValueAmount,
    vestingValueAmount,
  ] = hakkaBalances?.map((balance) => new TokenAmount(
    HAKKA[chainId as ChainId || 1],
    JSBI.BigInt(balance?.result?.[0] ?? 0),
  ));

  const { stakingBalance } = useStakingData();

  const infoModalOpen = useInfoModalOpen();
  const toggleInfoModal = useInfoModalToggle();

  function getModalContent() {
    return (
      <div sx={styles.upperSection}>
        <div sx={styles.illustration} />
        <div sx={styles.closeIcon} onClick={toggleInfoModal}>
          <img src={images.iconDeleteRound} />
        </div>
        <div>
          <div sx={styles.title}>Your HAKKA breakdown</div>
        </div>
        <img sx={styles.sakura} src={images.sakura} />
        <div sx={styles.contentWrapper}>
          <div sx={styles.balance}>
            <img sx={styles.hakkaIcon} src={images.hakkaAccount} />
            <div sx={styles.hakkaValue}>{hakkaValueAmount?.toFixed(2) || '-'}</div>
            <AddToMetamaskBtn />
          </div>
          <div sx={styles.displayBetween}>
            <div sx={styles.label}>Price</div>
            <div sx={styles.data}>
              {hakkaPrice}
              {' '}
              USD
            </div>
          </div>
        </div>
        <div sx={styles.divider} />
        <div sx={styles.contentWrapper}>
          <div sx={styles.displayBetween}>
            <div>
              <div sx={styles.label}>Staking balance</div>
              <div sx={styles.data}>
                {stakingBalance?.toFixed(2) || '-'}
                {' '}
                HAKKA
              </div>
            </div>
            <button
              onClick={() => { location.href = '/staking'; }}
              sx={styles.pageBtn}
            >
              Staking
              <ArrowRightCircle size="20" />
            </button>
          </div>
          <div sx={styles.displayBetween}>
            <div>
              <div sx={styles.label}>Vesting balance</div>
              <div sx={styles.data}>
                {vestingValueAmount?.toFixed(2) || '-'}
                {' '}
                HAKKA
              </div>
            </div>
            <button
              onClick={() => { location.href = '/vesting'; }}
              sx={styles.pageBtn}
            >
              Vesting
              <ArrowRightCircle size="20" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Modal
      isOpen={infoModalOpen}
      onDismiss={toggleInfoModal}
    >
      <div sx={styles.wrapper}>{getModalContent()}</div>
    </Modal>
  );
}
