import React from 'react'
import { storiesOf } from '@storybook/react'

import Centered from './utils/Centered'
import data from './data'

import {
  VideoContainer,
  SlideContainer,
  ProductContainer,
  HotContainer,
  SuggestionContainer,
  ArrowNavigator,
} from '../containers'

storiesOf('集成组件 - MiContainer', module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add('视频板块', () => <VideoContainer data={data.videoContainer} />)
  .add('滑动展板板块', () => <SlideContainer data={data.slideContainer} />)
  .add('热评板块', () => <HotContainer data={data.hotContainer} />)
  .add('推荐板块', () => <SuggestionContainer data={data.suggestionContainer}/>)
  .add('产品板块', () => <ProductContainer data={data.productContainers[0]} />)
