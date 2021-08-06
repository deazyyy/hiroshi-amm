import { ChainId } from '@deazyyy/elixirswap-sdk'
import React, { useContext } from 'react'
import { Button, LinkExternal } from '@pancakeswap-libs/uikit'
import styled ,{ ThemeContext } from 'styled-components'
import { ArrowUpCircle } from 'react-feather'
import { AutoColumn } from '../Column'
import { getEtherscanLink } from '../../utils'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const Borderbutton = styled(Button)`
background:transparent;
border: 2px solid #C7EBF3;
color: #2F4B60;
font-weight:600
`
const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <Section>
        {/* <ContentHeader onDismiss={onDismiss}>Transaction submitted</ContentHeader> */}
        <ConfirmedIcon>
        <img src="images/hiroshi/submitted.png" alt="submitted" style={{width:"200px"}}/>
          {/* <ArrowUpCircle strokeWidth={0.5} size={97} color={theme.colors.primary} /> */}
        </ConfirmedIcon>
        <h2 style={{color:"#2F4B60",fontSize:"26px",textAlign:"center",fontWeight:500,margin:"-12px 0 14px 0"}}>Transaction Submitted</h2>
        <AutoColumn gap="8px" justify="center">
          {chainId && hash && (
            <LinkExternal href={getEtherscanLink(chainId, hash, 'transaction')} color="#47CDB8">View on bscscan</LinkExternal>
          )}
          <Borderbutton onClick={onDismiss} mt="20px">
            Close
          </Borderbutton>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
