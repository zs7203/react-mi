import React, { Component } from 'react'
import styled from 'styled-components'

import { BaseContainer, BaseBoard } from './Base.jsx'
import { HotCard } from '../components/MiCard'

export default ({ data }) => (
  <BaseContainer title={'热评产品'}>
    <BaseBoard>{data.map(product => <HotCard product={product} />)}</BaseBoard>
  </BaseContainer>
)
