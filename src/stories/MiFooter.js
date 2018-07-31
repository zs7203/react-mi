import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Centered from './utils/Centered'

import { MiPolicy, FooterNav, Footer } from '../components/MiFooter'
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #fff;
  & > div:first-child {
    border-bottom: 1px solid #e0e0e0;
  }
`

storiesOf('页脚 - MiFooter', module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add('基础 - 政策', () => <MiPolicy />)
  .add('基础 - 导航', () => <FooterNav />)
  .add('基础 - 页脚', () => <Footer />)
  .add('整合 - 政策+导航+页脚', () => (
    <Container>
      <MiPolicy />
      <FooterNav />
      <Footer />
    </Container>
  ))
