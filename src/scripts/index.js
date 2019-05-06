import "../styles/index.scss";
import "../../node_modules/tiny-slider/src/tiny-slider.scss";

import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
  container: ".slider-a",
  items: 4,
  speed: 400,
  gutter: 20,
  controls: true,
  controlsContainer: ".slider-a__controls",
  nav: false,

  "responsive": {
    "1200": {
      "items": 4
    },
    "992": {
      "items": 3
    },
    "576": {
      "items": 2
    },
    "0": {
      "items": 1
    }
  }
});
