import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal } from '@pancakeswap-libs/uikit'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

// TODO: use UI Kit
const CogIcon = () => (
  <img src="images/hiroshi/setting.svg" alt="Settings" />
)

const HistoryIcon = () => (
  <img src="images/hiroshi/cogicon.svg" alt="Timer" />
)

const StyledPageHeader = styled.div`
  padding: 24px;
  padding-bottom: 0;
`

const Details = styled.div`
  flex: 1;
`

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const [onPresentSettings] = useModal(<SettingsModal />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal />)

  return (
    <StyledPageHeader>
      <Flex alignItems="center">
        <Details>
          <Heading color="#2F4B60" mb="8px">{title}</Heading>
          {description && (
            <Text color="rgba(47, 75, 96, 0.5)" fontSize="14px">
              {description}
            </Text>
          )}
        </Details>
       
        <IconButton className="exchangeicon" variant="text" onClick={onPresentRecentTransactions} title="Recent transactions">
          <HistoryIcon />
        </IconButton>
        <IconButton className="exchangeicon" variant="text" onClick={onPresentSettings} title="Settings">
          <CogIcon  />
        </IconButton>
      </Flex>
      {children && <Text mt="16px">{children}</Text>}
    </StyledPageHeader>
  )
}

export default PageHeader
