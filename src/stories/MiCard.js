import React from 'react';
import {storiesOf} from '@storybook/react';

import Centered from './utils/Centered';
import MiCard from '../components/MiCard';

const books = [
    {
        title: '哈利·波特与被诅咒的孩子',
        description: '哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本!',
        price: '29.37元',
        url: 'https://i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757'
    },
    {
        title: '好吗好的',
        description: '畅销作家大冰2016年新书！讲给你听，好吗好的！',
        price: '17.99元',
        url: 'https://i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14'
    }
];

const themes = [
    {
        title: '米奇-有你有我',
        description: '米奇来啦！小米主题和迪士尼首度合作，打造精品迪士尼系列主题',
        price: '12米币',
        url: 'https://i1.mifile.cn/a4/xmad_15106277789889_NVKse.png'
    },
    {
        title: '钢铁侠-科技控',
        description: 'I\'m Iron Man! 小米主题和迪士尼首度合作，打造精品漫威系列主题',
        price: '12米币',
        url: 'https://i1.mifile.cn/a4/xmad_15106285428716_UgNzb.png'
    },
    {
        title: '大白-戳戳我抱抱你',
        description: '大白(●—●)吧啦啦啦~小米主题和迪士尼首度合作，打造精品迪士尼系列主题',
        price: '15米币',
        url: 'https://i1.mifile.cn/a4/xmad_151062859387_ECIuV.png'
    }
];

const games = [
    {
        title: '小米枪战',
        description: '组好队 去跳伞！！',
        price: '免费',
        url: 'https://i1.mifile.cn/a4/xmad_15094191317724_FNyjV.png'
    },
    {
        title: '米柚手游模拟器',
        description: '在电脑上玩遍小米所有手游',
        price: '免费',
        url: 'https://i1.mifile.cn/a4/T1czW_BXCv1R4cSCrK.png'
    },
    {
        title: '剑侠世界',
        description: '一生不容错过的浪漫武侠！！',
        price: '免费',
        url: 'https://i1.mifile.cn/a4/695c909b-f541-4575-bace-d08b6465025b'
    },
];

const apps = [
    {
        title: '2017金米奖',
        description: '最优秀的应用和游戏',
        price: '',
        url: 'https://i1.mifile.cn/a4/3332da7d-4056-4694-9548-c83b7b3af7d3'
    },
    {
        title: 'Forest',
        description: '帮助您专心于生活中每个重要时刻',
        price: '免费',
        url: 'https://i1.mifile.cn/a4/T1TkKvBCKv1R4cSCrK.png'
    },
    {
        title: '小米应用',
        description: '小米出品 必属精品',
        price: '免费',
        url: 'https://i1.mifile.cn/a4/T15VZvB5Kv1R4cSCrK.png'
    },
];

storiesOf('内容-MiCard', module)
    .addDecorator(story =>
        <Centered>
            {story()}
        </Centered>
    )
    .add('卡片-图书', () => <MiCard category="book" themeColor="orange" items={books}/>)
    .add('卡片-MIUI主题', () => <MiCard category="theme" themeColor="green" items={themes}/>)
    .add('卡片-游戏', () => <MiCard category="game" themeColor="red" items={games}/>)
    .add('卡片-应用', () => <MiCard category="app" themeColor="blue" items={apps}/>);