import React from 'react'
import styled, { css } from 'styled-components'
import playPic from './assets/play.png'

const Play = styled.div`
  position: absolute;
  left: 20px;
  bottom: 10px;
  width: 36px;
  height: 24px;
  border: 2px solid #fff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url(${playPic});
  transition: background-color 0.2s linear;
  ${props =>
    props.hover &&
    css`
      background-color: #ff6700;
      border: 0;
    `};
`

const PlayBtn = ({hover}) => (
  <Play hover={hover}>
    <img src={playPic} width={`20px`} height={`15px`} />
  </Play>
)

export default PlayBtn
