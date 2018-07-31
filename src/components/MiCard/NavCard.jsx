import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FloatCard from './FloatCard.jsx'
import rightPic from './assets/right.png'

const NavContainer = FloatCard.extend`
  width: 234px;
  height: 143px;
  display: flex;
  padding: 0 35px;
  justify-content: space-between;
  padding-top: 50px;
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`

const More = styled.p`
  font-size: 18px;
  color: #333;
  margin: 0;
`

const Category = styled.p`
  font-size: 12px;
  color: #757575;
`

const LeftArrow = styled.img.attrs({
  src: rightPic,
})`
  width: 48px;
  height: 48px;
`

const NavCard = ({ category, ...rest }) => (
  <NavContainer {...rest}>
    <Wrapper>
      <More>浏览更多</More>
      <Category>{category}</Category>
    </Wrapper>
    <LeftArrow />
  </NavContainer>
)

export default NavCard
