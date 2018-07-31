import React from 'react'
import styled from 'styled-components'

import DropDownCard from './DropDownCard.jsx'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: ${props => (props.show ? '229px' : '0')};
  border-top: 1px solid #eee;
  overflow-y: hidden;
  background-color:#fff;  
  box-shadow: 0 3px 4px rgba(0,0,0,0.18);
  //transform: scaleY(${props => (props.show ? '1' : '0')});
  opacity: ${props => (props.show ? '1' : '0')};
  transition: all .5s cubic-bezier(0, 1, 0.5, 1);
`

const DropDownList = props => {
  let { list } = props
  let show = list.length > 0
  return (
    <Container show={show}>
      {props.list
        ? props.list.map((card, index) => (
            <DropDownCard {...card} fence={index !== 0} key={index} />
          ))
        : null}
    </Container>
  )
}

export default DropDownList
