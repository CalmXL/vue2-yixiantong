// rem适配
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

// 初始化 fastclick
window.addEventListener('load', function () {
  FastClick.attach(document.body);
}, false);

// 多指错误禁止
document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
  	e.preventDefault();
  }
}, false);