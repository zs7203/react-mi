import React, { Component } from 'react'
import styled from 'styled-components'

import { BaseContainer, BaseBoard, ArrowNavigator } from './Base.jsx'
import { ProductCard } from '../components/MiCard'

const WideBoard = BaseBoard.extend`
  width: 2466px;
  margin-left: ${props => (props.index === 0 ? '0' : '-1240px')};
  transition: all 0.5s ease-in-out;
`

export default class extends Component {
  state = {
    index: 0,
  }

  handleLeftClick = () => {
    this.setState({ index: 0 })
  }

  handleRightClick = () => {
    this.setState({ index: 1 })
  }

  render() {
    const { data } = this.props

    return (
      <BaseContainer
        title={'推荐商品'}
        slot={
          <ArrowNavigator
            index={this.state.index}
            handleLeftClick={this.handleLeftClick}
            handleRightClick={this.handleRightClick}
          />
        }
      >
        <WideBoard index={this.state.index}>
          {data.map(product => <ProductCard product={product} />)}
        </WideBoard>
      </BaseContainer>
    )
  }
}
