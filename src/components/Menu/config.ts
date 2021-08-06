import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.mozartfinance.io/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Elixir Mix',
    icon: 'FarmIcon',
    href: 'https://www.mozartfinance.io/farms'
  },
  {
    label: 'Potion Brew',
    icon: 'PoolIcon',
    href: 'https://www.mozartfinance.io/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/elixir-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/elixir-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/goosedefi/",
      },
      {
        label: "Docs",
        href: "https://goosedefi.gitbook.io/goose-finance/",
      },
      {
        label: "Blog",
        href: "https://goosefinance.medium.com/",
      },
    ],
  },
]

export default config
