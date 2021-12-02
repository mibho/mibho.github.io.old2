function getRandomArbitrary2(min, max) {
  return Math.random() * (max - min) + min;
}
var hidden = false;
var cnt = 0;
var dur = getRandomArbitrary2(3,15) * 1000;

window.addEventListener('load', visible(cnt, dur));
