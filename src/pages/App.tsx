import React, { Suspense, useEffect, useState ,useRef} from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ResetCSS ,Button} from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
// import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
// import Farm from './Farm'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'
import FailNotify from './Modals/notifications/FailNotify'
import SuccessNotify from './Modals/notifications/SuccessNotify'

import Menu from '../components/Menu'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 200px);
  padding:0 15px;
  align-items: center;
  flex: 1;
  // margin-top: 64px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  max-width:1200px;
  margin-left:auto;
  margin-right:auto;
  position:relative;
  // background-image: url('/static/media/bg.bfd323f2.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  @media (max-width: 768px) {
    margin-top:0px;
  }
`
const Marginer = styled.div`
  margin-top: 0;
`

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const dom = document.getElementsByClassName("logoimg")
  if(isTabletOrMobile){
    for(let i =0 ; i< dom.length;i++){
      dom[i].attributes[0].value ="images/hiroshi/logo-mobile.png"
    }
  }else{
    for(let i =0 ; i< dom.length;i++){
      dom[i].attributes[0].value ="images/hiroshi/logo.png"
    }
  }


  const failnotifyRef = useRef(null)
  const successnotifyRef = useRef(null)


  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage, translatedLanguage, setTranslatedLanguage }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
            {/* <div className="connectbtn"><Button>Connect</Button></div> */}
              <Menu> 
                <BodyWrapper>
                  <Popups />
                  <div className="invinciheight" />
                  <FailNotify ref={failnotifyRef} />
                  <SuccessNotify ref={successnotifyRef} />
                  <Web3ReactManager>
                    <Switch>
                      <Route exact strict path='/swap' component={Swap} />
                      <Route exact strict path='/swap/:outputCurrency' component={RedirectToSwap} />
                      <Route exact strict path='/send' component={RedirectPathToSwapOnly} />
                      <Route exact strict path='/find' component={PoolFinder} />
                      <Route exact strict path='/pool' component={Pool} />
                      <Route exact strict path='/create' component={RedirectToAddLiquidity} />
                      <Route exact path='/add' component={AddLiquidity} />
                      <Route exact path='/add/:currencyIdA' component={RedirectOldAddLiquidityPathStructure} />
                      <Route exact path='/add/:currencyIdA/:currencyIdB' component={RedirectDuplicateTokenIds} />
                      <Route exact strict path='/remove/v1/:address' component={RemoveV1Exchange} />
                      <Route exact strict path='/remove/:tokens' component={RedirectOldRemoveLiquidityPathStructure} />
                      <Route exact strict path='/remove/:currencyIdA/:currencyIdB' component={RemoveLiquidity} />
                      <Route exact strict path='/migrate/v1' component={MigrateV1} />
                      <Route exact strict path='/migrate/v1/:address' component={MigrateV1Exchange} />
                      <Route component={RedirectPathToSwapOnly} />
                    </Switch>
                  </Web3ReactManager>
                  <Marginer />
                </BodyWrapper>
              </Menu>
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
