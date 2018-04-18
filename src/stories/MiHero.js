import React from 'react';
import {storiesOf} from '@storybook/react';

import Centered from './utils/Centered';
import MiHero from '../components/MiHero';
import MiHeroCategories from '../components/MiHero/MiHeroCategories';

const slides = [
    {
        title: 'hongmi 5',
        src: 'https://i1.mifile.cn/a4/xmad_15138394015475_WYRah.jpg'
    },
    {
        title: 'hongmi 5',
        src: 'https://i1.mifile.cn/a4/xmad_15136945527624_dQYGX.jpg'
    },
    {
        title: 'hongmi 5',
        src: 'https://i1.mifile.cn/a4/xmad_15138595992231_MZWRe.jpg'
    },
    {
        title: 'hongmi 5',
        src: 'https://i1.mifile.cn/a4/xmad_15137396701328_JtIRP.jpg'
    },
    {
        title: 'hongmi 5',
        src: 'https://i1.mifile.cn/a4/xmad_15136956235016_ricPZ.jpg'
    },
];

const categories = {
    cateNames: ['手机 电话卡', '笔记本', '电视 盒子', '路由器 智能硬件', '移动电源 电池 插线板', '耳机 音箱', '保护套 贴膜', '线材 支架 存储卡', '箱包 服饰 鞋 眼镜', '米兔 生活周边'],
    cateItems: [
        //    手机 电话卡
        [
            {text: '小米Note 3', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/note3-80-2.png?width=80&height=80'},
            {text: '小米MIX 2', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mix2-80.png?width=80&height=80'},
            {text: '小米6', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/xm6_80.png?width=80&height=80'},
            {text: '小米5X', img: 'https://i1.mifile.cn/f/i/g/2015/80pc-5x.png?width=80&height=80'},
            {text: '小米Max 2', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/max2_80.jpg?width=80&height=80'},
            {text: '红米5A', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/80-5a.png?width=80&height=80'},
            {text: '红米Note 5A', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/805a.png?width=80&height=80'},
            {text: '红米Note 4X', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/hmn4x80.png?width=80&height=80'},
            {text: '红米 4X', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/hm4x_80.png?width=80&height=80'},
            {text: '红米5', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/redmi5-80-80.png?width=80&height=80'},
            {text: '红米5 Plus', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/redmi5-80-80.png?width=80&height=80'},
            {text: '移动4G+专区', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/80.jpg?width=80&height=80'},
            {text: '对比手机', img: 'https://i1.mifile.cn/f/i/15/goods/sidebar/compare.jpg?width=80&height=80'},
            {text: '米粉卡 日租卡', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mifenka-1.jpg?width=80&height=80'},
            {text: '小米移动 电话卡', img: 'https://i1.mifile.cn/f/i/15/goods/sidebar/mimobile.jpg?width=80&height=80'},
        ],
        //    笔记本
        [
            {
                text: '笔记本Air 12.5\'\'',
                img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=80&height=80'
            },
            {
                text: '笔记本Air 13.3\'\' 独显',
                img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=80&height=80'
            },
            {
                text: '笔记本Air 13.3\'\' 集显',
                img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=80&height=80'
            },
            {
                text: '笔记本Pro 15.6\'\'',
                img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/WechatIMG605.png?width=80&height=80'
            },
            {text: 'USB-C电源适配器', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/bjbcdq80.jpg?width=80&height=80'},
            {text: 'USB-C转接器', img: 'https://i1.mifile.cn/f/i/15/goods/sidebar/usbzjqggg80.jpg?width=80&height=80'},
            {text: 'VGA 千兆网口转接器', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/vga.png?width=80&height=80'},
            {text: '小米笔记本内胆包', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/neidanbao80.jpg?width=80&height=80'},
            {text: '悦米机械键盘', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/ymjp80.jpg?width=80&height=80'},
            {text: '小米便携鼠标', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/shubiao80.jpg?width=80&height=80'},
            {text: '小米无线鼠标', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/wxsb80.png?width=80&height=80'},
            {text: '鼠标垫', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/xmsbd80.jpg?width=80&height=80'},
            {text: 'DisplayPort转接器', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/USBC80.jpg?width=80&height=80'},
        ],
        //    电视 盒子
        [
            {text: '小米电视4C 43英寸', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/xin55.png?width=80&height=80'},
        ],
        //    路由器 智能硬件
        [
            {text: '九号平衡车', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/phcplus80.jpg?width=80&height=80'},
        ],
        //    移动电源 电池 插线板
        [
            {text: '小米移动电源', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/phcplus80.jpg?width=80&height=80'},
        ],
        //    耳机 音箱
        [
            {text: '小米头戴式耳机', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/toudai80.jpg?width=80&height=80'},
        ],
        //    保护套 贴膜
        [
            {text: '贴膜', img: 'https://i1.mifile.cn/f/i/15/goods/sidebar/tiemo.jpg?width=80&height=80'},
        ],
        //    线材 支架 存储卡
        [
            {text: '线材', img: 'https://i1.mifile.cn/f/i/15/goods/sidebar/xiancai.jpg?width=80&height=80'},
        ],
        //    箱包 服饰 鞋 眼镜
        [
            {text: '箱包', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/xiangbao-80.jpg?width=80&height=80'},
        ],
        //    米兔 生活周边
        [
            {text: '米兔玩偶', img: 'https://i1.mifile.cn/f/i/g/2015/cn-index/mitu-80.jpg?width=80&height=80'},
        ],
    ]
};

const heroData = {
    slides,
    categories
};

storiesOf('Mi Hero', module)
    .addDecorator(story =>
        <Centered>
            {story()}
        </Centered>
    )
    .add('Slide w/o Categories', () =>
            <MiHero slides={slides}/>
        )
    .add('Categories', () =>
            <div style={{width: '1226px'}}>
                <MiHeroCategories
                    categories={categories}
                />
            </div>
    )
    .add('Slide with Categories', () =>
        <MiHero
            {...heroData}
            Slot={MiHeroCategories}
        />
    )