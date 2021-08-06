import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Trade, TradeType } from '@deazyyy/elixirswap-sdk'
import { Button, Text } from '@pancakeswap-libs/uikit'
import { ArrowDown, AlertTriangle } from 'react-feather'

import { Field } from '../../state/swap/actions'
import { TYPE } from '../Shared'
import { isAddress, shortenAddress } from '../../utils'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown, warningSeverity } from '../../utils/prices'
import { AutoColumn } from '../Column'
import CurrencyLogo from '../CurrencyLogo'
import { RowBetween, RowFixed } from '../Row'
import { SwapShowAcceptChanges } from './styleds'

const { main: Main } = TYPE

const PriceInfoText = styled(Text)`
  font-style: italic;
  line-height: 1.3;
  color:rgba(47, 75, 96, 0.5)

  span {
    color: #2F4B60;
    font-weight: 600;
  }
`

export default function SwapModalHeader({
  trade,
  allowedSlippage,
  recipient,
  showAcceptChanges,
  onAcceptChanges,
}: {
  trade: Trade
  allowedSlippage: number
  recipient: string | null
  showAcceptChanges: boolean
  onAcceptChanges: () => void
}) {
  const slippageAdjustedAmounts = useMemo(() => computeSlippageAdjustedAmounts(trade, allowedSlippage), [
    trade,
    allowedSlippage,
  ])
  const { priceImpactWithoutFee } = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  const priceImpactSeverity = warningSeverity(priceImpactWithoutFee)

  const theme = useContext(ThemeContext)

  return (
    <AutoColumn gap="md" style={{ marginTop: '20px' }}>
      <RowBetween align="flex-end">
        <RowFixed gap="0px">
          <CurrencyLogo currency={trade.inputAmount.currency} size="18px" style={{ marginRight: '12px' , fontWeight: 600 }} />
          <Text
            fontSize="18px"
            style={{ fontWeight: 600 }} 
            color={showAcceptChanges && trade.tradeType === TradeType.EXACT_OUTPUT ? theme.colors.primary : 'text'}
          >
            {trade.inputAmount.toSignificant(6)}
          </Text>
        </RowFixed>
        <RowFixed gap="0px">
          <Text fontSize="18px" style={{ marginLeft: '10px', fontWeight: 600 }}>
            {trade.inputAmount.currency.symbol}
          </Text>
        </RowFixed>
      </RowBetween>
      <RowFixed>
        {/* <ArrowDown size="16" color={theme.colors.textSubtle} style={{ marginLeft: '4px', minWidth: '16px' }} /> */}
        <img src="images/hiroshi/arrow.svg" alt="Arrow" style={{width:"auto",height:"12px"}} />
      </RowFixed>
      <RowBetween align="flex-end">
        <RowFixed gap="0px">
          <CurrencyLogo currency={trade.outputAmount.currency} size="18px" style={{ marginRight: '12px', fontWeight: 600  }} />
          <Text
            fontSize="18px"
            style={{ marginLeft: '10px', fontWeight: 600 }}
            color={
              priceImpactSeverity > 2
                ? theme.colors.failure
                : showAcceptChanges && trade.tradeType === TradeType.EXACT_INPUT
                ? theme.colors.text
                : 'text'
            }
          >
            {trade.outputAmount.toSignificant(6)}
          </Text>
        </RowFixed>
        <RowFixed gap="0px">
          <Text fontSize="18" style={{ marginLeft: '10px', fontWeight: 600 }}>
            {trade.outputAmount.currency.symbol}
          </Text>
        </RowFixed>
      </RowBetween>
      {showAcceptChanges ? (
        <SwapShowAcceptChanges justify="flex-start" gap="0px">
          <RowBetween>
            <RowFixed>
              <AlertTriangle size={20} style={{ marginRight: '8px', minWidth: 24 ,color:"#2F4B60"}} />
              <Main color={theme.colors.text}> Price Updated</Main>
            </RowFixed>
            <Button onClick={onAcceptChanges}>Accept</Button>
          </RowBetween>
        </SwapShowAcceptChanges>
      ) : null}
      <AutoColumn justify="flex-start" gap="sm" style={{ padding: '16px 0 0' }}>
        {trade.tradeType === TradeType.EXACT_INPUT ? (
          <PriceInfoText>
            {`Output is estimated. You will receive at least `}
            <span>
              {slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(6)} {trade.outputAmount.currency.symbol}
            </span>
            {' or the transaction will revert.'}
          </PriceInfoText>
        ) : (
          <PriceInfoText>
            {`Input is estimated. You will sell at most `}
            <span>
              {slippageAdjustedAmounts[Field.INPUT]?.toSignificant(6)} {trade.inputAmount.currency.symbol}
            </span>
            {' or the transaction will revert.'}
          </PriceInfoText>
        )}
      </AutoColumn>
      {recipient !== null ? (
        <AutoColumn justify="flex-start" gap="sm" style={{ padding: '16px 0 0' }}>
          <Main>
            Output will be sent to{' '}
            <b title={recipient}>{isAddress(recipient) ? shortenAddress(recipient) : recipient}</b>
          </Main>
        </AutoColumn>
      ) : null}
    </AutoColumn>
  )
}
