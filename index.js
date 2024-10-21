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






// 카카오 SDK 초기화
Kakao.init('4a8ae79f847849b761fc92e3177717ca');  // 'YOUR_APP_KEY'에 카카오 JavaScript 키를 넣으세요
console.log(Kakao.isInitialized());  // 초기화 확인

// 카카오톡 공유 기능
document.getElementById('kakao-share-btn').addEventListener('click', function () {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '모바일 청첩장',
      description: '우리의 결혼식에 초대합니다!',
      imageUrl: 'https://your-image-url.com/image.jpg', // 이미지 URL
      link: {
        mobileWebUrl: 'https://your-wedding-invitation-url.com',
        webUrl: 'https://your-wedding-invitation-url.com',
      },
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: 'https://your-wedding-invitation-url.com',
          webUrl: 'https://your-wedding-invitation-url.com',
        },
      },
    ]
  });
});

// 카카오스토리 공유 기능
document.getElementById('kakao-story-btn').addEventListener('click', function () {
  Kakao.Story.share({
    url: 'https://your-wedding-invitation-url.com',
    text: '우리의 결혼식에 초대합니다!'
  });
});

// 네이버 라인 공유 기능
document.getElementById('line-share-btn').addEventListener('click', function () {
  const url = 'https://your-wedding-invitation-url.com';
  const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
  window.open(lineShareUrl, '_blank');
});

// 페이스북 공유 기능
document.getElementById('facebook-share-btn').addEventListener('click', function () {
  const url = 'https://your-wedding-invitation-url.com';
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookShareUrl, '_blank');
});
