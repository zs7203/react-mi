import React, { Component } from 'react'
import styled from 'styled-components'

import { BaseContainer, BaseBoard } from './Base.jsx'
import MiSlide from '../components/MiSlide'

export default ({ data }) => (
  <BaseContainer title={'内容'}>
    <BaseBoard>{data.map(slide => <MiSlide {...slide} />)}</BaseBoard>
  </BaseContainer>
)
