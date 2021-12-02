function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
var hidden = false;
var cnt = 0;
var dur = getRandomArbitrary(1,7) * 1000;

window.addEventListener('load', visible(cnt, dur));
