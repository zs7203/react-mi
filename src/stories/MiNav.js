import React from 'react';
import {storiesOf} from '@storybook/react';

import MiNav from '../components/MiNav';

const navs = [
    {
        name: '小米商城',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: 'MIUI',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: 'IoT',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: '云服务',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: '水滴',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: '金融',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: '有品',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: 'Select Region',
        href: 'https://www.mi.com/index.html'
    },
];

const operations = [
    {
        name: '登录',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: '注册',
        href: 'https://www.mi.com/index.html'
    },
    {
        name: '消息通知',
        href: 'https://www.mi.com/index.html'
    }
];

storiesOf("MiNav", module)
    .add('navbar', () => <MiNav navs={navs} operations={operations}/>);