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


function copyLink(button) {
  var accountText = "https://mabitlm.github.io/Wedding/"
  // 클립보드에 복사
  navigator.clipboard.writeText(accountText).then(function() {
    alert('링크가 복사되었습니다: ' + accountText);
  }).catch(function(err) {
    console.error('복사 실패:', err);
  });
}

// 카카오 SDK 초기화
Kakao.init('4a8ae79f847849b761fc92e3177717ca');  // 'YOUR_APP_KEY'에 카카오 JavaScript 키를 넣으세요
console.log(Kakao.isInitialized());  // 초기화 확인

document.getElementById('kakao-share-btn').addEventListener('click', function () {
  Kakao.Share.sendDefault({
    objectType: 'text',
    text: '우리의 결혼식에 초대합니다!',
    link: {
      mobileWebUrl: 'https://mabitlm.github.io/Wedding/',
      webUrl: 'https://mabitlm.github.io/Wedding/',
    },
    buttonTitle: '청첩장 보기' // 공유 시 표시되는 버튼 제목
  });
});
