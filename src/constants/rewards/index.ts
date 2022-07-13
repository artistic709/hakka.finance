import { AddressZero } from '@ethersproject/constants';
import {
  ChainId,
  BHS_POOL,
  BHS_USDC_DAI_HAKKA_POOL,
  BHS_HAKKA_POOL,
  MKR_HAKKA_POOL,
  TFT_POOL,
  SHAKKA_POOL,
  ETH_SHAKKA_POOL,
  // BSC_SHAKKA_POOL,
  // POLYGON_SHAKKA_POOL,
  BSC_BHS_POOL,
  IGAIN_BNB_BUSD_POOL,
  IGAIN_IG_POLYGON_ETH_USDC_POOL_1,
  IGAIN_POLYGON_DAI_POOL_1,
  IGAIN_POLYGON_USDC_POOL_1,
  IGAIN_POLYGON_USDT_POOL_1,
  IGAIN_POLYGON_DAI_POOL_2,
  IGAIN_POLYGON_USDC_POOL_2,
  IGAIN_POLYGON_USDT_POOL_2,
  IGAIN_POLYGON_USDC_POOL_3,
  IGAIN_FANTOM_DAI_POOL_1,
  IGAIN_FANTOM_USDT_POOL_1,
  IGAIN_FANTOM_ETH_POOL_1,
  NEW_SHAKKA_ADDRESSES
} from '../../constants';

export type Pool = {
  name: string;
  subtitle?: string;
  closeTime?: string;
  chain: ChainId;
  website: string;
  url: string;
  tokenAddress: string;
  tokenSymbol: string;
  decimal: number;
  rewardsAddress: string;
  rewardsSymbol: string;
  archived: boolean;
}

const timeOption: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};

export const REWARD_POOLS: { [key: string]: Pool } = {
  [BHS_POOL]: {
    name: 'BHS',
    chain: ChainId.MAINNET,
    website: 'BlackHoleSwap',
    url: 'https://blackholeswap.com/deposit',
    tokenAddress: '0x35101c731b1548B5e48bb23F99eDBc2f5c341935',
    tokenSymbol: 'BHSc$',
    decimal: 18,
    rewardsAddress: BHS_POOL,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [BHS_USDC_DAI_HAKKA_POOL]: {
    name: 'BHS/USDC/DAI/HAKKA',
    chain: ChainId.MAINNET,
    website: 'Balancer LP token',
    url:
      'https://pools.balancer.exchange/#/pool/0x1b8874baceaafba9ea194a625d12e8b270d77016',
    tokenAddress: '0x1b8874baceaafba9ea194a625d12e8b270d77016',
    tokenSymbol: 'BPT',
    decimal: 18,
    rewardsAddress: BHS_USDC_DAI_HAKKA_POOL,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [BHS_HAKKA_POOL]: {
    name: 'BHS/HAKKA',
    chain: ChainId.MAINNET,
    website: 'Balancer LP token',
    url:
      'https://pools.balancer.exchange/#/pool/0xae95d3198d602acfb18f9188d733d710e14a27dd',
    tokenAddress: '0xae95d3198d602acfb18f9188d733d710e14a27dd',
    tokenSymbol: 'BPT',
    decimal: 18,
    rewardsAddress: BHS_HAKKA_POOL,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [MKR_HAKKA_POOL]: {
    name: 'MKR/HAKKA',
    chain: ChainId.MAINNET,
    website: 'Uniswap MKR-HAKKA',
    url:
      'https://app.uniswap.org/#/add/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd',
    tokenAddress: '0xB8b84Ce0CAde916988BD129EaFd7934ADE5Fa6a9',
    tokenSymbol: 'UNI-V2',
    decimal: 18,
    rewardsAddress: MKR_HAKKA_POOL,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [TFT_POOL]: {
    name: 'TFT',
    chain: ChainId.MAINNET,
    website: '3FMutual',
    url: 'http://3fmutual.com',
    tokenAddress: '0xBdDa9670Bc2a672c36ccE0102ce8C69B12E9deE3',
    tokenSymbol: 'TFT',
    decimal: 18,
    rewardsAddress: TFT_POOL,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [SHAKKA_POOL]: {
    name: 'sHAKKA v1 (Legacy)',
    chain: ChainId.MAINNET,
    website: 'sHAKKA v1 (Legacy)',
    url: 'https://hakka.finance/staking-v1',
    tokenAddress: '0xd9958826Bce875A75cc1789D5929459E6ff15040',
    tokenSymbol: 'sHAKKA',
    decimal: 18,
    rewardsAddress: SHAKKA_POOL,
    rewardsSymbol: 'HAKKA',
    archived: false,
  },
  [ETH_SHAKKA_POOL]: {
    name: 'sHAKKA v2 (New)',
    chain: ChainId.MAINNET,
    website: 'sHAKKA v2 (New)',
    url: 'https://hakka.finance/staking',
    tokenAddress: NEW_SHAKKA_ADDRESSES[ChainId.MAINNET],
    tokenSymbol: 'sHAKKA',
    decimal: 18,
    rewardsAddress: ETH_SHAKKA_POOL,
    rewardsSymbol: 'HAKKA',
    archived: false,
  },
  // [BSC_SHAKKA_POOL]: {
  //   name: 'sHAKKA',
  //   chain: ChainId.BSC,
  //   website: 'sHAKKA',
  //   url: 'https://hakka.finance/staking',
  //   tokenAddress: '', // TODO: address is not ready
  //   tokenSymbol: 'sHAKKA',
  //   decimal: 18,
  //   rewardsAddress: BSC_SHAKKA_POOL,
  //   rewardsSymbol: 'HAKKA',
  //   archived: false,
  // },
  // [POLYGON_SHAKKA_POOL]: {
  //   name: 'sHAKKA',
  //   chain: ChainId.POLYGON,
  //   website: 'sHAKKA',
  //   url: 'https://hakka.finance/staking',
  //   tokenAddress: '', // TODO: address is not ready
  //   tokenSymbol: 'sHAKKA',
  //   decimal: 18,
  //   rewardsAddress: POLYGON_SHAKKA_POOL,
  //   rewardsSymbol: 'HAKKA',
  //   archived: false,
  // },
  // 
  [BSC_BHS_POOL]: {
    name: 'BHS',
    chain: ChainId.BSC,
    website: 'USDT-BUSD BHS',
    url: 'https://bsc.blackholeswap.com/deposit',
    tokenAddress: '0x75192D6f3d51554CC2eE7B40C3aAc5f97934ce7E',
    tokenSymbol: 'BHSc$',
    decimal: 18,
    rewardsAddress: BSC_BHS_POOL,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_BNB_BUSD_POOL]: {
    name: 'iGain',
    chain: ChainId.BSC,
    website: 'iGain IG BNB-BUSD',
    url: 'https://igain.finance/markets/bnb-busd/0xc9d710CdE965521944BCB4D4eF73ADA6113FAE27',
    tokenAddress: '0xc9d710CdE965521944BCB4D4eF73ADA6113FAE27',
    tokenSymbol: 'LP',
    decimal: 18,
    rewardsAddress: IGAIN_BNB_BUSD_POOL,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  // POLYGON term start from here
  // latest at top
  [IGAIN_POLYGON_USDT_POOL_2]: {
    name: 'iGain IRS USDT',
    subtitle: new Date(1648755529000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1648753240000',
    chain: ChainId.POLYGON,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0xC1C194D4c8E9ddc69396BCCfEf811e72113695Cc?targetChain=137',
    tokenAddress: '0xC1C194D4c8E9ddc69396BCCfEf811e72113695Cc',
    tokenSymbol: 'LP',
    decimal: 6,
    rewardsAddress: IGAIN_POLYGON_USDT_POOL_2,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_POLYGON_DAI_POOL_2]: {
    name: 'iGain IRS DAI',
    subtitle: new Date(1648754430000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1648754430000',
    chain: ChainId.POLYGON,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0x3Eb8286b22C35174Faf02b4E4293cFb5e8652079?targetChain=137',
    tokenAddress: '0x3Eb8286b22C35174Faf02b4E4293cFb5e8652079',
    tokenSymbol: 'LP',
    decimal: 18,
    rewardsAddress: IGAIN_POLYGON_DAI_POOL_2,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_POLYGON_USDC_POOL_2]: {
    name: 'iGain IRS USDC',
    subtitle: new Date(1648753240000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1648753240000',
    chain: ChainId.POLYGON,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0xC6A3CCaaBACC6e6a5A2903B0500a1A5285f442c1?targetChain=137',
    tokenAddress: '0xC6A3CCaaBACC6e6a5A2903B0500a1A5285f442c1',
    tokenSymbol: 'LP',
    decimal: 6,
    rewardsAddress: IGAIN_POLYGON_USDC_POOL_2,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_POLYGON_USDC_POOL_3]: {
    name: 'iGain IRS USDC',
    subtitle: new Date(1652998884000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1652998884000',
    chain: ChainId.POLYGON,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0xafCec95937c3392Ac0D96320427b0d0c1C62fdE8?targetChain=137',
    tokenAddress: '0xafCec95937c3392Ac0D96320427b0d0c1C62fdE8',
    tokenSymbol: 'LP',
    decimal: 6,
    rewardsAddress: IGAIN_POLYGON_USDC_POOL_3,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_IG_POLYGON_ETH_USDC_POOL_1]: {
    name: 'iGain IG ETH-USDC',
    subtitle: new Date(1652347832000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1652347832000',
    chain: ChainId.POLYGON,
    website: 'iGain IG',
    url: 'https://igain.finance/ig/markets/eth-usdc/0xe69cB8e21D20b196717072364718812DC0Bf38BB?targetChain=137',
    tokenAddress: '0xe69cB8e21D20b196717072364718812DC0Bf38BB',
    tokenSymbol: 'LP',
    decimal: 6,
    rewardsAddress: IGAIN_IG_POLYGON_ETH_USDC_POOL_1,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_POLYGON_USDT_POOL_1]: {
    name: 'iGain IRS USDT',
    subtitle: new Date(1656548685000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1656548685000',
    chain: ChainId.POLYGON,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0xc6183a902FD287CC47b525a75C8d3381C6eae42f?targetChain=137',
    tokenAddress: '0xc6183a902FD287CC47b525a75C8d3381C6eae42f',
    tokenSymbol: 'LP',
    decimal: 6,
    rewardsAddress: IGAIN_POLYGON_USDT_POOL_1,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_POLYGON_DAI_POOL_1]: {
    name: 'iGain IRS DAI',
    subtitle: new Date(1656578065000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1656578065000',
    chain: ChainId.POLYGON,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0x6ac0Ad00A7002047c49d289Ac9E87Cf087CE5529?targetChain=137',
    tokenAddress: '0x6ac0Ad00A7002047c49d289Ac9E87Cf087CE5529',
    tokenSymbol: 'LP',
    decimal: 18,
    rewardsAddress: IGAIN_POLYGON_DAI_POOL_1,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_POLYGON_USDC_POOL_1]: {
    name: 'iGain IRS USDC',
    subtitle: new Date(1656575394000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1656575394000',
    chain: ChainId.POLYGON,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0x11bafFebd829B490Cf077Ce7eF7700dd3cB1e534?targetChain=137',
    tokenAddress: '0x11bafFebd829B490Cf077Ce7eF7700dd3cB1e534',
    tokenSymbol: 'LP',
    decimal: 6,
    rewardsAddress: IGAIN_POLYGON_USDC_POOL_1,
    rewardsSymbol: 'HAKKA',
    archived: true,
  },
  [IGAIN_FANTOM_USDT_POOL_1]: {
    name: 'iGain IRS USDT',
    subtitle: new Date(1672390290000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1672390290000',
    chain: ChainId.FANTOM,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0x5bA39a707A27b34c5658B8c537b2a71F844801b7?targetChain=250',
    tokenAddress: '0x5bA39a707A27b34c5658B8c537b2a71F844801b7',
    tokenSymbol: 'LP',
    decimal: 6,
    rewardsAddress: IGAIN_FANTOM_USDT_POOL_1,
    rewardsSymbol: 'HAKKA',
    archived: false,
  },
  [IGAIN_FANTOM_DAI_POOL_1]: {
    name: 'iGain IRS DAI',
    subtitle: new Date(1664614290000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1664614290000',
    chain: ChainId.FANTOM,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0x03d05f73De6290C47CD9cB4502fa04caCFA05631?targetChain=250',
    tokenAddress: '0x03d05f73De6290C47CD9cB4502fa04caCFA05631',
    tokenSymbol: 'LP',
    decimal: 18,
    rewardsAddress: IGAIN_FANTOM_DAI_POOL_1,
    rewardsSymbol: 'HAKKA',
    archived: false,
  },
  [IGAIN_FANTOM_ETH_POOL_1]: {
    name: 'iGain IRS ETH',
    subtitle: new Date(1664619331000).toLocaleString(
      'en-US',
      timeOption,
    ),
    closeTime: '1664619331000',
    chain: ChainId.FANTOM,
    website: 'iGain IRS',
    url: 'https://igain.finance/irs/apy-trade-pools/detail/0x5bbbBD02ee9AE74f31d3479Bd3c4FA458D92Fac7?targetChain=250',
    tokenAddress: '0x5bbbBD02ee9AE74f31d3479Bd3c4FA458D92Fac7',
    tokenSymbol: 'LP',
    decimal: 18,
    rewardsAddress: IGAIN_FANTOM_ETH_POOL_1,
    rewardsSymbol: 'HAKKA',
    archived: false,
  },
}
