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
  // 클릭된 버튼의 부모 <p> 에서 계좌번호
  var accountText = button.parentElement.querySelector('.account-number').innerText;

  // 하이픈(-) 제거
  var cleanedAccountText = accountText.replace(/-/g, '');

  // 클립보드에 복사
  navigator.clipboard.writeText(cleanedAccountText).then(function() {
    alert('계좌번호가 복사되었습니다: ' + cleanedAccountText);
  }).catch(function(err) {
    console.error('계좌번호 복사 실패:', err);
  });
}


function copyLink(button) {
  var accountText = "https://mabitlm.github.io/Wedding/"
  // 링크 복사
  navigator.clipboard.writeText(accountText).then(function() {
    alert('링크가 복사되었습니다: ' + accountText);
  }).catch(function(err) {
    console.error('복사 실패:', err);
  });
}

// 카카오 SDK 초기화
Kakao.init('4a8ae79f847849b761fc92e3177717ca');  // 'YOUR_APP_KEY'에 카카오 JavaScript 키를 넣으세요
console.log(Kakao.isInitialized());  // 초기화 확인
// objectType: 'text',
document.getElementById('kakao-share-btn').addEventListener('click', function () {
  Kakao.Share.sendDefault({    
    objectType: 'feed',
    content:{
      title: '임현규♡최수진의 모바일청첩장',
      description: '25년 9월 6일 11시 세인트 메리엘',
      imageUrl: 'https://github.com/mabiTLM/Wedding/blob/master/images/gallery/temp_img1.jpg?raw=true',
      link: {
        mobileWebUrl: 'https://mabitlm.github.io/Wedding/',
        webUrl: 'https://mabitlm.github.io/Wedding/',
      },
    },
    buttons: [
      {
        title: '눌러서 확인하기',
        link: {
          mobileWebUrl: 'https://mabitlm.github.io/Wedding/',
          webUrl: 'https://mabitlm.github.io/Wedding/',
        },
      },
    ],
  });
});


/* =========  갤러리 모달 & 뒤로가기 처리 ========= */
const imageModalEl    = document.getElementById('imageModal');
const modalCarouselEl = document.getElementById('modalCarousel');
const bsModal         = new bootstrap.Modal(imageModalEl);
const bsCarousel      = bootstrap.Carousel.getOrCreateInstance(modalCarouselEl);

/* 1) 썸네일 클릭 → 모달 열고 같은 index 슬라이드로 */
document.querySelectorAll('.slide-img').forEach((img, idx) => {
  img.addEventListener('click', () => {
    bsCarousel.to(idx);
    bsModal.show();
  });
});

/* 2) 모달이 열리면 히스토리 스택에 가짜 state 하나 push */
imageModalEl.addEventListener('show.bs.modal', () => {
  history.pushState({ modalOpen: true }, '');
});

/* 3) popstate(← 뒤로가기) 발생 시:  
      - 모달이 켜져 있으면 **모달만** 닫고,  
      - 아니면(모달이 꺼진 상태) 브라우저 기본 동작 */
window.addEventListener('popstate', () => {
  if (imageModalEl.classList.contains('show')) {
    bsModal.hide();          // 모달만 끄기
    /* popstate 안에서 모달을 닫으면,  
       이미 한 칸 뒤로간 상태라 추가 히스토리 조작은 필요 없음 */
  }
});