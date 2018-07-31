import React from 'react'
import { storiesOf } from '@storybook/react'

import Centered from './utils/Centered'
import {
  MiHeader,
  MiSearch,
  DropDownCard,
  DropDownList,
} from '../components/MiHeader/index.js'

const cagegoryLists = [
  //小米
  [
    {
      flag: '新品',
      href: 'https://www.mi.com/mix2/',
      imgUrl: '//i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png',
      title: '小米MIX 2',
      price: '3299起',
    },
    {
      flag: '新品',
      href: 'https://www.mi.com/minote3/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/note2320x220.png',
      title: '小米Note 3',
      price: '1999起',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi6/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/xm6-320.png',
      title: '小米6',
      price: '2299元起',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi5x/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/max2_toubu.png',
      title: '小米Max 2',
      price: '1399元起',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/5x-2.jpg',
      title: '小米5X',
      price: '1599起',
    },
  ],
  // 红米
  [
    {
      flag: '新品',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/5-320-220.png',
      title: '红米5',
      price: '799元起',
    },
    {
      flag: '新品',
      href: 'https://www.mi.com/minote3/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/5P-320-220.png',
      title: '红米5 Plus',
      price: '999元起',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi6/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/320-220-1.png',
      title: '红米5A',
      price: '599元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi5x/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/3205a.png',
      title: '红米Note 5A 标准版',
      price: '699元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/320-220.jpg',
      title: '红米Note 5A 高配版',
      price: '899元起',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/hmn4xtb.jpg',
      title: '红米Note 4X',
      price: '999元起',
    },
  ],
  // 笔记本
  [
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/video/bijiben32012.5.jpg',
      title: '小米笔记本Air 12.5"',
      price: '3599元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/minote3/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/video/bijiben32012.5.jpg',
      title: '小米笔记本Air 13.3" 独显',
      price: '5199元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi6/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/video/bijiben32012.5.jpg',
      title: '小米笔记本Air 13.3" 集显',
      price: '4599元起',
    },
    {
      flag: '新品',
      href: 'https://www.mi.com/mi5x/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/WechatIMG603.png',
      title: '小米笔记本Pro 15.6"',
      price: '5599元起',
    },
  ],
  // 电视
  [
    {
      flag: '超薄旗舰',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/xmds_55.png',
      title: '小米电视4 55英寸',
      price: '3699元',
    },
    {
      flag: '热卖',
      href: 'https://www.mi.com/minote3/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/4a65.png',
      title: '小米电视4A 65英寸',
      price: '4599元',
    },
    {
      flag: '热卖',
      href: 'https://www.mi.com/mi6/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/daohang.png',
      title: '小米电视4A 32英寸',
      price: '999元',
    },
    {
      flag: '热卖',
      href: 'https://www.mi.com/mi5x/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/320_43.png',
      title: '小米电视4A 43英寸',
      price: '1899元',
    },
    {
      flag: '热卖',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/320_49.png',
      title: '小米电视4A 49英寸',
      price: '2049元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/465.png',
      title: '查看全部',
      price: '小米电视',
    },
  ],
  // 盒子
  [
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mihezi.png',
      title: '小米盒子3s',
      price: '299元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/minote3/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mihezi.png',
      title: '小米盒子3c',
      price: '199元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi6/',
      imgUrl: 'https://i1.mifile.cn/f/i/15/goods/nav/hezi3s.jpg',
      title: '小米盒子3 增强版',
      price: '449元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi5x/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/320x220.png',
      title: '小米家庭影院',
      price: '2099元',
    },
  ],
  // 新品
  [],
  // 路由器
  [
    {
      flag: '新品',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/320X220.jpg',
      title: '小米路由器 3A',
      price: '99元',
    },
    {
      flag: '大容量',
      href: 'https://www.mi.com/minote3/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/HD-Pro.png',
      title: '小米路由器 HD/Pro',
      price: '499元起',
    },
    {
      flag: '双千兆',
      href: 'https://www.mi.com/mi6/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/3G.png',
      title: '小米路由器 3G',
      price: '229元',
    },
    {
      flag: '双频',
      href: 'https://www.mi.com/mi5x/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/xmlyq3.png',
      title: '小米路由器 3',
      price: '119元',
    },
    {
      flag: '包邮',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/3C.png',
      title: '小米路由器 3C',
      price: '79元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/fdq2.jpg',
      title: '小米WiFi放大器 2',
      price: '34元',
    },
  ],
  // 智能硬件
  [
    {
      flag: '航拍利器',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/123321.jpg',
      title: '小米无人机',
      price: '2999元',
    },
    {
      flag: '包邮',
      href: 'https://www.mi.com/minote3/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/sh2-320-220.png',
      title: '小米手环2',
      price: '149元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi6/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/jsqcs-320-220.png',
      title: '小米净水器',
      price: '1499元起',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mi5x/',
      imgUrl:
        'https://i1.mifile.cn/f/i/g/2015/cn-index/saodijiqiren320-220.jpg',
      title: '米家扫地机器人',
      price: '1699元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/dfb.jpg',
      title: '米家压力IH电饭煲',
      price: '999元',
    },
    {
      flag: '',
      href: 'https://www.mi.com/mix2/',
      imgUrl: 'https://i1.mifile.cn/f/i/g/2015/cn-index/fdq2.jpg',
      title: '查看全部',
      price: '智能硬件',
    },
  ],
  //    服务
  [],
  //    社区
  [],
]

storiesOf('页头二级导航 - MiHeader', module)
  .add('基础 - 搜索框', () => (
    <Centered>
      <MiSearch />
    </Centered>
  ))
  .add('基础 - 导航条', () => <MiHeader />)
  .add('组合 - 导航条 + 搜索框', () => <MiHeader RightSlot={MiSearch} />)
  .add('基础 - 卡片 - 类型1', () => <DropDownCard {...cagegoryLists[0][4]} />)
  .add('基础 - 卡片 - 类型2', () => <DropDownCard {...cagegoryLists[0][0]} />)
  .add('组合 - 弹出卡片组', () => <DropDownList list={cagegoryLists[3]} />)
  .add('整合 - 页头二级导航', () => (
    <MiHeader
      lists={cagegoryLists}
      RightSlot={MiSearch}
      Dropdown={DropDownList}
    />
  ))
