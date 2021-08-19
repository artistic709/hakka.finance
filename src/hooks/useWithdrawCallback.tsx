/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState, useCallback, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useRewardsContract } from './useContract';
import { getEtherscanLink, shortenTxId } from '../utils';
import { parseUnits } from '@ethersproject/units';
import { toast } from 'react-toastify';
import { ExternalLink } from 'react-feather';

export enum WithdrawState {
  UNKNOWN,
  PENDING
}

export function useWithdrawCallback(
  withdrawAddress?: string,
  amount?: string,
  spender?: string,
): [WithdrawState, () => Promise<void>] {
  const { chainId } = useWeb3React();
  const [currentTransaction, setCurrentTransaction] = useState(null);

  const withdrawState: WithdrawState = useMemo(() => {
    if (!spender) return WithdrawState.UNKNOWN;

    return currentTransaction
      ? WithdrawState.PENDING
      : WithdrawState.UNKNOWN;
  }, [currentTransaction, spender]);

  const withdrawContract = useRewardsContract(withdrawAddress);

  const withdraw = useCallback(async (): Promise<void> => {
    if (!spender) {
      console.error('no spender');
      return;
    }

    try {
      const amountParsed = parseUnits(amount || '0', 18);
      const tx = await withdrawContract.withdraw(amountParsed);
      setCurrentTransaction(tx.hash);
      toast(
        <a
          target="_blank"
          href={getEtherscanLink(chainId ?? 1, tx.hash, 'transaction')}
          rel="noreferrer"
          sx={{ textDecoration: 'none', color: '#253e47' }}
        >
        {shortenTxId(tx.hash)} <ExternalLink size={16} />
        </a>
      , { containerId: 'tx' });
      await tx.wait();
    } catch (err) {
       toast.error(<div>{err.message}</div>,  { containerId: 'error' });
    } finally {
      setCurrentTransaction(null);
    }
  }, [
    withdrawContract,
    amount,
    spender,
  ]);

  return [withdrawState, withdraw];
}
