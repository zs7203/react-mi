import React, { Component } from 'react'
import styled from 'styled-components'

import { BaseContainer, GridContainer, TabGroup } from './Base.jsx'
import {
  PicCard,
  ProductCard,
  MiniProductCard,
  NavCard,
} from '../components/MiCard'

const PicPosition1 = styled(PicCard)`
  grid-row: 1;
  grid-column: 1;
`
const PicPosition2 = styled(PicCard)`
  grid-row: 2;
  grid-column: 1;
`
const ProductPosition1 = styled(ProductCard)`
  grid-row: 1;
  grid-column: 2;
`
const ProductPosition2 = styled(ProductCard)`
  grid-row: 1;
  grid-column: 3;
`
const ProductPosition3 = styled(ProductCard)`
  grid-row: 1;
  grid-column: 4;
`
const ProductPosition4 = styled(ProductCard)`
  grid-row: 1;
  grid-column: 5;
`
const ProductPosition5 = styled(ProductCard)`
  grid-row: 2 / 4;
  grid-column: 2;
`
const ProductPosition6 = styled(ProductCard)`
  grid-row: 2 / 4;
  grid-column: 3;
`
const ProductPosition7 = styled(ProductCard)`
  grid-row: 2 / 4;
  grid-column: 4;
`

const MiniProductPosition = styled(MiniProductCard)`
  grid-row: 2;
  grid-column: 5;
`

const NavPosition = styled(NavCard)`
  grid-row: 3;
  grid-column: 5;
`
const picCards = [PicPosition1, PicPosition2]

const productCards = [
  ProductPosition1,
  ProductPosition2,
  ProductPosition3,
  ProductPosition4,
  ProductPosition5,
  ProductPosition6,
  ProductPosition7,
  MiniProductPosition,
]

export default class extends Component {
  state = {
    index: 0,
  }

  handleMouseEnter = index => {
    this.setState({ index })
  }

  render() {
    const {
      data: { category, pics, tabs },
    } = this.props
    const { index } = this.state
    return (
      <BaseContainer
        title={category}
        slot={
          <TabGroup
            tabs={tabs.map(tab => tab.title)}
            onMouseEnter={this.handleMouseEnter}
          />
        }
      >
        <GridContainer>
          {/* 图片卡片位 */}
          {pics.map((src, i) => React.createElement(picCards[i], { src }))}
          {/* 产品卡片位 */}
          {tabs[index].products.map((product, i) =>
            React.createElement(productCards[i], { product })
          )}
          {/* 导航卡片位 */}
          <NavPosition category={tabs[index].title} />
        </GridContainer>
      </BaseContainer>
    )
  }
}
