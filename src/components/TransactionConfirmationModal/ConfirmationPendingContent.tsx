import React from 'react'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'
import { Spinner } from '../Shared'
import { AutoColumn } from '../Column'
import Circle from '../../assets/images/blue-loader.svg'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'

type ConfirmationPendingContentProps = { onDismiss: () => void; pendingText: string }

const CustomLightSpinner = styled(Spinner)<{ size: string }>`
  height:36px;
  width:36px;
`
const Confirmloader = styled.div`
position:relative;
  
  img{
    position:absolute;
    left:calc( 50% - 18px );
    transform:translateX(-50%)scale(0.6);
    top:112px;
    z-index:10;
  }
  .confirmswap{
    position:static;
    transform:none;
    display:block;
    margin:auto;
    height:180px;
    width:auto;
  }
`

const ConfirmationPendingContent = ({ onDismiss, pendingText }: ConfirmationPendingContentProps) => {
  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Waiting for confirmation</ContentHeader>
        <Confirmloader>
            <img src="images/hiroshi/confirmswap.png" className="confirmswap" alt="confirm" />
          <ConfirmedIcon >
            <CustomLightSpinner src={Circle} alt="loader" size="90px" />
          </ConfirmedIcon>
        </Confirmloader>
        <AutoColumn gap="12px" justify="center">
          <AutoColumn gap="12px" justify="center">
            <Text fontSize="14px">
              <strong>{pendingText}</strong>
            </Text>
          </AutoColumn>
          <Text fontSize="14px" color="#47CDB8">Confirm this transaction in your wallet</Text>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default ConfirmationPendingContent
