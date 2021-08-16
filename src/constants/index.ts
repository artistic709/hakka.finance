import { Token } from '@uniswap/sdk';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { AddressZero, Zero } from '@ethersproject/constants';
import images from '../images';

import {
  walletconnect,
  bscWalletconnect,
  walletlink,
  fortmatic,
  injected,
  portis,
} from '../connectors';
import { BigNumber } from '@ethersproject/bignumber';
import {
  bhsApy,
  balancer4tokenApy,
  balancer2tokenApy,
  mkrHakkaApy,
  tftApy,
  sHakkaApy,
  bscBhsApy,
} from '../utils/rewardsApy';
import {
  balancer4tokenTvl,
  balancer2tokenTvl,
} from '../utils/rewardsTvl';

export enum ChainId {
  MAINNET = 1,
  KOVAN = 42,
  BSC = 56,
}

export const stakingMonth = [12, 6, 3, 1];

export const ChainName: { [chainId in ChainId]: string } = {
  1: 'Ethereum Mainnet',
  42: 'Kovan Testnet',
  56: 'Binance Smart Chain',
};

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
  iconName: string;
  description: string;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'metamask',
    description: 'Injected web3 provider.',
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
  },
  BSC_WALLET_CONNECT: {
    connector: bscWalletconnect,
    name: 'BSC WalletConnect',
    iconName: 'walletConnectIcon',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon',
    description: 'Use Coinbase Wallet app on mobile device',
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon',
    description: 'Login using Fortmatic hosted wallet',
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon',
    description: 'Login using Portis hosted wallet',
  },
};

export const NetworkContextName = 'NETWORK';

export const HAKKA: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(
    1,
    '0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd',
    18,
    'HAKKA',
    'Hakka Finance',
  ),
  [ChainId.KOVAN]: new Token(
    42,
    '0xaFF4481D10270F50f203E0763e2597776068CBc5',
    18,
    'HAKKA',
    'Hakka Finance',
  ),
  [ChainId.BSC]: new Token(
    56,
    '0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac',
    18,
    'HAKKA',
    'Hakka Finance',
  ),
};

export const STAKING_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd9958826bce875a75cc1789d5929459e6ff15040',
  [ChainId.KOVAN]: '0xBf605Cb5f610C0aEDbf6e89af652892FF007B47c',
  [ChainId.BSC]: AddressZero,
};

export const VESTING_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x51F12323820b3c0077864990d9E6aD9604238Ed6',
  [ChainId.KOVAN]: AddressZero,
  [ChainId.BSC]: '0x6dbff20CAFf68B99b1e67B50D14A9D7BBdfA94DC',
};

export const BURNER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xde02313f8BF17f31380c63e41CDECeE98Bc2b16d',
  [ChainId.KOVAN]: '0x793f3a1427592f674113E97A1741D39c91904971',
  [ChainId.BSC]: AddressZero,
};

export const GUILDBANK: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x83D0D842e6DB3B020f384a2af11bD14787BEC8E7',
  [ChainId.KOVAN]: '0xB062FE463548FCEf976C9BC5B93f29813e142DB8',
  [ChainId.BSC]: AddressZero,
};

export const ETHADDRESS: string = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

const NAME: string = 'name';
const SYMBOL: string = 'symbol';
const DECIMALS: string = 'decimals';

export const VAULT_TOKENS: { [chainId in ChainId]: any } = {
  [ChainId.MAINNET]: {
    '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE': {
      [NAME]: 'Ether',
      [SYMBOL]: 'ETH',
      [DECIMALS]: 18,
    },
    '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2': {
      [NAME]: 'Maker',
      [SYMBOL]: 'MKR',
      [DECIMALS]: 18,
    },
    '0x35101c731b1548B5e48bb23F99eDBc2f5c341935': {
      [NAME]: 'BlackHoleSwap-Compound DAI/USDC v1',
      [SYMBOL]: 'BHSc$',
      [DECIMALS]: 18,
    },
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': {
      [NAME]: 'USD Coin',
      [SYMBOL]: 'USDC',
      [DECIMALS]: 6,
    },
  },
  [ChainId.KOVAN]: {
    '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE': {
      [NAME]: 'Ether',
      [SYMBOL]: 'ETH',
      [DECIMALS]: 18,
    },
    '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa': {
      [NAME]: 'Dai Stablecoin',
      [SYMBOL]: 'DAI',
      [DECIMALS]: 18,
    },
    '0xb7a4F3E9097C08dA09517b5aB877F7a917224ede': {
      [NAME]: 'USD Coin ',
      [SYMBOL]: 'USDC',
      [DECIMALS]: 6,
    },
    '0x61460874a7196d6a22D1eE4922473664b3E95270': {
      [NAME]: 'Compound',
      [SYMBOL]: 'COMP',
      [DECIMALS]: 18,
    },
  },
  [ChainId.BSC]: {
  },
};

export const DEFAULT_TOKENS_COIN_GECKO_ID_BOOK : { [address: string]: string } = {
  '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE': 'ethereum',
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'usd-coin',
  '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2': 'maker',
  '0x35101c731b1548B5e48bb23F99eDBc2f5c341935': 'blackholeswap-compound-dai-usdc',
};

export const BHS_USDC_DAI_HAKKA_BPT = '0x1B8874BaceAAfba9eA194a625d12E8b270D77016'
export const BHS_USDC_DAI_HAKKA_POOL = '0x6EE6683Cb9b44810369C873679f8073bCBE52F27'
export const BHS_HAKKA_BPT = '0xaE95D3198d602acFB18F9188d733d710e14A27Dd'
export const BHS_HAKKA_POOL = '0x3792ee68E736b8214D4eDC91b1B3340B525e00BF'
export const DAI_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
export const USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
export const BHS_ADDRESS = '0x35101c731b1548B5e48bb23F99eDBc2f5c341935'

export const TOKEN_PRICE_SLUGS: string[] = [
  'ethereum',
  'hakka-finance',
  'binancecoin',
  'binance-usd',
  'pancakeswap-token',
  'wbnb',
  'alpaca-finance',
  'maker',
  'blackholeswap-compound-dai-usdc',
  'dai',
  'usd-coin',
  'tether',
]

export type Pool = {
  name: string;
  icon: any;
  website: string;
  url: string;
  tokenAddress: string;
  tokenSymbol: string;
  rewardsAddress: string;
  rewardsSymbol: string;
  archived: boolean;
  getApy: (...args: any[]) => Promise<BigNumber>;
  getTvl: (...args: any[]) => Promise<BigNumber>;
}

export const REWARD_POOLS: { [key: string]: Pool } = {
  '0x6b1ecbbd69eeaf8d089bdce4daaa4165f8c3ff11': {
    name: 'BHS',
    icon: images.iconBHS,
    website: 'BlackHoleSwap',
    url: 'https://blackholeswap.com/deposit',
    tokenAddress: '0x35101c731b1548B5e48bb23F99eDBc2f5c341935',
    tokenSymbol: 'BHSc$',
    rewardsAddress: '0x6b1ecbbd69eeaf8d089bdce4daaa4165f8c3ff11',
    rewardsSymbol: 'HAKKA',
    archived: true,
    getApy: bhsApy,
    getTvl: (tokenPrice: any) => Promise.resolve(Zero),
  },
  '0x6EE6683Cb9b44810369C873679f8073bCBE52F27': {
    name: 'BHS/USDC/DAI/HAKKA',
    icon: images.icon4Tokens,
    website: 'Balancer LP token',
    url:
      'https://pools.balancer.exchange/#/pool/0x1b8874baceaafba9ea194a625d12e8b270d77016',
    tokenAddress: '0x1b8874baceaafba9ea194a625d12e8b270d77016',
    tokenSymbol: 'BPT',
    rewardsAddress: '0x6EE6683Cb9b44810369C873679f8073bCBE52F27',
    rewardsSymbol: 'HAKKA',
    archived: false,
    getApy: balancer4tokenApy,
    getTvl: balancer4tokenTvl,
  },
  '0x3792ee68E736b8214D4eDC91b1B3340B525e00BF': {
    name: 'BHS/HAKKA',
    icon: images.icon2TokensCompHakka,
    website: 'Balancer LP token',
    url:
      'https://pools.balancer.exchange/#/pool/0xae95d3198d602acfb18f9188d733d710e14a27dd',
    tokenAddress: '0xae95d3198d602acfb18f9188d733d710e14a27dd',
    tokenSymbol: 'BPT',
    rewardsAddress: '0x3792ee68E736b8214D4eDC91b1B3340B525e00BF',
    rewardsSymbol: 'HAKKA',
    archived: false,
    getApy: balancer2tokenApy,
    getTvl: balancer2tokenTvl,
  },
  '0x3BD145F66203B19CE7BeDaAC9A8147E08EA64645': {
    name: 'MKR/HAKKA',
    icon: images.icon2TokensMkrHakka,
    website: 'Uniswap MKR-HAKKA',
    url:
      'https://app.uniswap.org/#/add/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd',
    tokenAddress: '0xB8b84Ce0CAde916988BD129EaFd7934ADE5Fa6a9',
    tokenSymbol: 'UNI-V2',
    rewardsAddress: '0x3BD145F66203B19CE7BeDaAC9A8147E08EA64645',
    rewardsSymbol: 'HAKKA',
    archived: true,
    getApy: mkrHakkaApy,
    getTvl: (tokenPrice: any) => Promise.resolve(Zero),
  },
  '0x0AA6C4Ff04e4E6512c5348f4B04685af2Cd11058': {
    name: 'TFT',
    icon: images.iconTFT,
    website: '3FMutual',
    url: 'http://3fmutual.com',
    tokenAddress: '0xBdDa9670Bc2a672c36ccE0102ce8C69B12E9deE3',
    tokenSymbol: 'TFT',
    rewardsAddress: '0x0AA6C4Ff04e4E6512c5348f4B04685af2Cd11058',
    rewardsSymbol: 'HAKKA',
    archived: true,
    getApy: tftApy,
    getTvl: (tokenPrice: any) => Promise.resolve(Zero),
  },
  '0xF4D1F9674c8e9f29A69DC2E6f841292e675B7977': {
    name: 'sHAKKA',
    icon: images.iconSealedHakka,
    website: 'sHAKKA',
    url: 'https://hakka.finance/staking',
    tokenAddress: '0xd9958826Bce875A75cc1789D5929459E6ff15040',
    tokenSymbol: 'sHAKKA',
    rewardsAddress: '0xF4D1F9674c8e9f29A69DC2E6f841292e675B7977',
    rewardsSymbol: 'HAKKA',
    archived: false,
    getApy: sHakkaApy,
    getTvl: (tokenPrice: any) => Promise.resolve(Zero),
  },
}

export const BSC_REWARD_POOLS: { [key: string]: Pool } = {
  '0x79EB6F02E9aC26a6fbc4e73DEE0b8991D0c55F4a': {
    name: 'BHS',
    icon: images.iconBSC_BHS,
    website: 'USDT-BUSD BHS',
    url: 'https://bsc.blackholeswap.com/deposit',
    tokenAddress: '0x75192D6f3d51554CC2eE7B40C3aAc5f97934ce7E',
    tokenSymbol: 'BHSc$',
    rewardsAddress: '0x79EB6F02E9aC26a6fbc4e73DEE0b8991D0c55F4a',
    rewardsSymbol: 'HAKKA',
    archived: false,
    getApy: bscBhsApy,
    getTvl: (tokenPrice: any) => Promise.resolve(Zero),
  },
}
