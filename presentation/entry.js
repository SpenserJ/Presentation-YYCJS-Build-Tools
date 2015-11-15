'use strict';

import slides from './slides.jade';
import reveal from 'reveal';
require('reveal/index.css');
require('reveal/theme/night.css');

document.querySelector('.reveal .slides').innerHTML = slides;

reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: false,
    theme: 'night', // available themes are in /css/theme
    transition: 'linear' // default/cube/page/concave/zoom/linear/fade/none
});
