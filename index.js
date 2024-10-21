const DDay = document.querySelector("#DDay");

function find_day() {
  const christmas = new Date("2025-09-06");  // 디데이 설정
  const today = new Date();  // 현재 시간
  const day_gap = christmas - today;

  const day = Math.floor(day_gap / (1000 * 60 * 60 * 24));  // 남은 일수
  //const hour = Math.floor(day_gap / (1000 * 60 * 60) % 24);
  //const min = Math.floor(day_gap / (1000 * 60) % 60);
  //const sec = Math.floor(day_gap / 1000 % 60);

  //DDay.innerText = `D-day ${day}일 ${hour}시간 ${min}분 ${sec}초`;
  DDay.innerText = `D-${day}`;
}

find_day();
setInterval(find_day, 1000);  // 초마다 디데이 기능 실행

function toggleAccount(accountId) {
  var accountInfo = document.getElementById(accountId);
  // 클래스에 show가 있는지 확인하고 토글
  if (accountInfo.classList.contains('show')) {
    accountInfo.classList.remove('show');  // 슬라이드 위로 숨기기
  } else {
    accountInfo.classList.add('show');  // 슬라이드 아래로 나타내기
  }
}

function copyAccount(button) {
  // 클릭된 버튼의 부모 <p> 요소에서 계좌번호를 가져옵니다.
  var accountText = button.parentElement.querySelector('.account-number').innerText;

  // 클립보드에 복사
  navigator.clipboard.writeText(accountText).then(function() {
    alert('계좌번호가 복사되었습니다: ' + accountText);
  }).catch(function(err) {
    console.error('계좌번호 복사 실패:', err);
  });
}