import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import Waves from 'components/Waves'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  position: relative;
  width: 100%;
  max-width: 436px;
  header {
    margin-bottom: -65px;
  }
  .header {
    border-top-left-radius: 20px !important;
    border-top-right-radius: 20px !important;
    overflow: hidden;
  }
  .navOuter {
    z-index: 10;
    position: absolute;
    top: 34px;
    left: 30px;
    a{
      border:0;
      font-weight:500
    }
    div:first-child {
      background-color: transparent;
    }
    a {
      background: transparent;
      padding: 0 10px;
      // color: #C5FFFF;
    }

  }
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    <header>
      <div className="navOuter">
        <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
          <a id="swap-nav-link" href="#/swap" >
            <TranslatedText translationId={8}>Swap</TranslatedText>
          </a>
          <a id="pool-nav-link" href="#/pool" >
            <TranslatedText translationId={74}>Liquidity</TranslatedText>
          </a>
          <a
            id="pool-nav-link"

            href="https://www.binance.org/en/panama"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bridge
          </a>
        </ButtonMenu>
      </div>
      <div className="header">
        <Waves url="images/hiroshi/dog.png" />
      </div>
    </header>
  </StyledNav>
)

export default Nav
