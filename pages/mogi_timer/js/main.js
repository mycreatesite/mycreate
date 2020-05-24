window.onload = function(){
  //要素取得
  var setMin = document.getElementById('setMin');
  var setSec = document.getElementById('setSec');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var clear = document.getElementById('clear');
  var mogitan = document.getElementById('mogitan');
  var baloon = document.getElementById('baloon');
  var minTalken = document.getElementById('minTalken');
  var secTalken = document.getElementById('secTalken');
  var modalClose = document.getElementById('modalClose');
  //関数変数
  var counter;
  var mogiRotate;
  //時間設定取得
  var timerMin = 0;
  var timerSec = 0;
  var timer = 0;
  setMin.oninput = function(){
    timerMin = setMin.value;
    timer = parseInt(timerMin * 60) + parseInt(timerSec);
    min.innerText = ('00' + timerMin).slice(-2);
  };
  setSec.oninput = function(){
    timerSec = setSec.value;
    timer = parseInt(timerMin * 60) + parseInt(timerSec);
    sec.innerText = ('00' + timerSec).slice(-2);
  };
  //初期化
  min.innerText = '00';
  sec.innerText = '00';
  //クリックイベント
  start.onclick = function() {
    counter = setInterval(count,1000);
    toggle();
    baloon.classList.remove('isShow');
  }
  stop.onclick = function() {
    counter = clearInterval(counter);
    mogiRotate = clearInterval(mogiRotate);
    toggle();
    baloon.classList.remove('isShow');
  }
  clear.onclick = function() {
    counter = clearInterval(counter);
    mogiRotate = clearInterval(mogiRotate);
    start.disabled = false;
    stop.disabled = true;
    timerMin = 0;
    timerSec = 0;
    timer = 0;
    setMin.value = null;
    setSec.value = null;
    min.innerText = ('00' + timerMin).slice(-2);
    sec.innerText = ('00' + timerSec).slice(-2);
    baloon.classList.remove('isShow');
  }
  modalClose.onclick = function() {
    baloon.classList.toggle('isShow');
  }
  //関数定義
  function toggle(){
    if(!start.disabled){
      start.disabled = true;
      stop.disabled = false;
    } else {
      start.disabled = false;
      stop.disabled = true;
    }
  }
  function count(){
    if(!timer){
      timerMin = setMin.value;
      timerSec = setSec.value;
      timer = parseInt(timerMin * 60) + parseInt(timerSec);
      min.innerText = ('00' + timerMin).slice(-2);
      sec.innerText = ('00' + timerSec).slice(-2);
      if(!timerMin){
        minTalken.innerText = 0;
      } else {
        minTalken.innerText = timerMin;
      }
      if(!timerSec){
        secTalken.innerText = 0;
      } else {
        secTalken.innerText = timerSec;
      }
      baloon.classList.toggle('isShow');
      clearInterval(counter);
      clearInterval(mogiRotate);
      toggle();
      navigator.vibrate(3000);
    } else {
      timer -= 1;
      min.innerText = ( '00' + Math.floor(timer/60) ).slice( -2 );
      sec.innerText = ( '00' + timer % 60 ).slice( -2 );
      mogitan.classList.toggle('rotate');
    }
  }
}
