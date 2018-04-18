import {configure} from '@storybook/react';

import '../src/styles/index.css';
import '../src/assets/iconfont.css';

function loadStories() {
    require('../src/stories');
    require('../src/stories/MiCard')
    require('../src/stories/MiNav')
    require('../src/stories/MiHeader')
    require('../src/stories/MiHero')
}

configure(loadStories, module);
