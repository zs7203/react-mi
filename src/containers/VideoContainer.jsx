import React, { Component } from 'react'
import styled from 'styled-components'

import { BaseContainer, BaseBoard } from './Base.jsx'
import { VideoCard } from '../components/MiCard'

export default ({ data }) => (
  <BaseContainer title={'视频'}>
    <BaseBoard>
      {data.map((video, i) => <VideoCard key={i} video={video} />)}
    </BaseBoard>
  </BaseContainer>
)
