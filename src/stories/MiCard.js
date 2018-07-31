import React from 'react'
import { storiesOf } from '@storybook/react'

import Centered from './utils/Centered'
import {
  FloatCard,
  PicCard,
  CommentBar,
  ProductCard,
  HotCard,
  PlayBtn,
  VideoCard,
  MiniProductCard,
  NavCard,
  Modal,
} from '../components/MiCard'

const plainProduct = {
  info: {
    name: '米家运动鞋 男款',
    price: '179',
    picUrl: 'https://i1.mifile.cn/a1/pms_1504778935.57065093!140x140.jpg',
    commentCount: '1.6万',
    href: 'https://item.mi.com/1173100112.html',
  },
}

const productA = {
  flag: { type: 0, name: '新品' },
  info: {
    name: '小米电视4A 40英寸',
    description: 'FHD全高清屏 / 人工智能语音系统 ',
    price: '1399',
    originalPrice: '1599',
    picUrl: 'https://i1.mifile.cn/a1/pms_1519959193.42473450!220x220.jpg',
    href: 'https://item.mi.com/1175200010.html',
  },
  comment: {
    content: '电视收到了，质量很好，操作简单，老爸老妈一学就会，女...',
    author: 'oops`',
  },
}

const productB = {
  flag: { type: 1, name: '减200' },
  info: {
    name: '小米电视4A 50英寸',
    description: '人工智能语音系统 / 蓝牙语音遥控器',
    price: '1999',
    originalPrice: '2199',
    picUrl: 'https://i1.mifile.cn/a1/pms_1516011154.79573723!220x220.jpg',
    href: 'https://item.mi.com/product/7575.html',
  },
  comment: {
    content: '自从买了这电视，小孩放假天天看动画片。看着她看到饭都...',
    author: 'oops`',
  },
}

const hotProduct = {
  info: {
    name: '90分旅行箱 20寸',
    price: '299',
    picUrl: 'https://i1.mifile.cn/a4/62d44838-f464-4c11-887c-9168645ae797',
    href: 'https://item.mi.com/1153700018.html',
  },
  comment: {
    content: '这箱子很好，外观漂亮，实用性强。很轻，有点软但不影响它的坚固。',
    author: 'oops`',
    href: 'https://order.mi.com/comment/commentDetail/comment_id/12155128',
  },
}

const video = {
  title: '品质之魂 存于匠心',
  description: '红米手机品质的工程师访谈',
  coverImg: 'https://i1.mifile.cn/a4/xmad_15159163504023_uToSM.jpg',
  href: '',
}

const mini = {
  name: '小白摄像机',
  price: '399',
  picUrl: 'https://i1.mifile.cn/a1/pms_1468806372.46368911!220x220.jpg',
  href: 'https://www.mi.com/micamera/',
}

const modal = {
  title: '艺术品般陶瓷机身，惊艳、璀璨',
  onClose: null,
  videoUrl:
    'https://v.mifile.cn/b2c-mimall-media/53fc775dd6b29ecd8df3e2ea35129766.mp4',
  coverImg:
    'https://i8.mifile.cn/b2c-mimall-media/850c08e77da8d346b3a0145252d114bb.jpg',
}

storiesOf('卡片-MiCard', module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add('基础组件 - 带悬浮效果的卡片', () => <FloatCard />)
  .add('基础组件 - 评论条', () => (
    <CommentBar show author={'oops`'}>
      '电视收到了，质量很好，操作简单，老爸老妈一学就会，女...'
    </CommentBar>
  ))
  .add('基础组件 - modal', () => <Modal {...modal} />)
  .add('组合 - 图片卡片', () => (
    <PicCard src={'https://i1.mifile.cn/a4/xmad_15232552838083_SWVqL.jpg'} />
  ))
  .add('组合 - 产品卡片mini', () => <MiniProductCard product={mini} />)
  .add('组合 - 导航卡片', () => <NavCard category={'家居'} />)
  .add('组合 - 热门产品卡片', () => <HotCard product={hotProduct} />)
  .add('组合 - 视频卡片', () => <VideoCard video={video} />)
  .add('组合 - 产品卡片 - 类型1', () => <ProductCard product={plainProduct} />)
  .add('组合 - 产品卡片 - 类型2', () => <ProductCard product={productA} />)
  .add('组合 - 产品卡片 - 类型3', () => <ProductCard product={productB} />)
