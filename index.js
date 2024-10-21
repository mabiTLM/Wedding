const DDay = document.querySelector("#DDay");

function find_day(){
  const christmas = new Date("2025-09-06");  //디데이 설정
  const today = new Date();  //밀리세컨드 단위의 시간 표시 1초=1000
  
  day_gap = christmas - today;
  
  const day = Math.floor(day_gap / (1000*60*60*24));  //디데이까지 남은 밀리세컨드초 / 하루의 밀리세컨드초 = 남은 일수
  const hour = Math.floor(day_gap / (1000*60*60) % 24);
  const min = Math.floor(day_gap / (1000*60) % 60);
  const sec = Math.floor(day_gap / 1000%60);
  
  DDay.innerText = `D-day까지 ${day}일 ${hour}시간 ${min}분 ${sec}초`;
}
find_day();
setInterval(find_day, 1000);  //초마다 디데이 기능 실행

function showAccount() {
  var accountInfo = document.getElementById('account');
  if (accountInfo.style.display === "none") {
    accountInfo.style.display = "block";
  } else {
    accountInfo.style.display = "none";
  }
}