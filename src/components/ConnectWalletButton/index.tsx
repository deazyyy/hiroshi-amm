import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, ConnectorId, useWalletModal } from '@pancakeswap-libs/uikit'
import { injected, walletconnect } from 'connectors'
import styled , { ThemeContext } from 'styled-components'
import useI18n from 'hooks/useI18n'

const UnlockButton: React.FC<ButtonProps> = props => {
  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()

  const handleLogin = (connectorId: ConnectorId) => {
    if (connectorId === 'walletconnect') {
      return activate(walletconnect)
    }
    return activate(injected)
  }
  const ButtonGrad = styled(Button)`
  width:auto;
  margin:auto;
  display:block;
  background: linear-gradient(90deg, #99BFEC 0%, #69D9C9 100%);
`

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)
  return (
    <ButtonGrad onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </ButtonGrad>
  )
}

export default UnlockButton
