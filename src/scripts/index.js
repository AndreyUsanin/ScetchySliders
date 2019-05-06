import '../styles/index.scss';
import '../../node_modules/tiny-slider/src/tiny-slider.scss';


import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
  container: '.fs-slider',
  "items": 1,
  "speed": 400,
  controls: true,
  "controlsContainer": ".fs-slider__controls",
  nav: false
});
