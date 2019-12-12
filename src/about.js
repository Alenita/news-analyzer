import "./pages/about.css";

import Flickity from 'flickity';

const slider = new Flickity( '.carousel', {
    // Настройки плагина
    cellAlign: 'center',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: 2
 });