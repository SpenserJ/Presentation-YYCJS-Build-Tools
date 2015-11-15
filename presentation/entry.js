'use strict';

import slides from './slides.jade';

import reveal from 'reveal';
import 'reveal/index.css';
import 'reveal/theme/night.css';

import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night.css';

document.querySelector('.reveal .slides').innerHTML = slides;

reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    transition: 'linear',
});

hljs.initHighlightingOnLoad();
