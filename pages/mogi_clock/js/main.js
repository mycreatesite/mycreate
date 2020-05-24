$(function(){

  var test = $("#test");

  function rotate(){
    $("img").toggleClass("rotate");
  }

  function clock(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var days = now.getDate();
    var day = now.getDay();
    var week = ["日","月","火","水","木","金","土",];
    var hour = now.getHours();
    //挙動確認
    //hour = 2;
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var greet = [
      {col:"#405587",gr:"こんばんわぁ！"},
      {col:"#f9e54a",gr:"こんにちわぁ！"},
      {col:"#89DDDC",gr:"おはよぉ！"},
      {col:"#112c4f",gr:"もう寝るんだや！！"},
      {col:"#123a6b",gr:"zzz... はっ！"}
    ];
    var greetNum;
      if (hour > 17){
        greetNum = 0;
      } else if (hour > 9){
        greetNum = 1;
      } else if (hour > 5){
        greetNum = 2;
      } else if (hour > 1) {
        greetNum = 3;
      } else {
        greetNum = 4;
      }
    if (hour < 10){
      hour = "0" + hour;
    }
    if (minute < 10){
      minute = "0" + minute;
    }
    if (second < 10){
      second = "0" + second;
    }
    var str = "<p>" + greet[greetNum]["gr"]
            + "<br>ただいま<br>"
            + year + "年 " + month + "月" + days + "日 " + "<br>" + week[day] + "曜日<br>"
            + hour + "時 " + minute + "分 " + second
            + "秒<br>ですもぎぃ！</p>";
    test.html(str).css("background-color", greet[greetNum]["col"]);
  };
  clock();
  test.after("<p><img src='img/mogitan.png'></p>");
  $("body").css("display","none").fadeIn(1000);

  setInterval(function(){
    clock();
    rotate();
  }, 500);

});
