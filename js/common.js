// 회원, 로그인, 장바구니를 이 브라우저에 저장합니다.
// 다른 페이지에서 책을 담을 때: addToCart("jpc-pil", 1);
// 가격은 출판사·서점 기준 정가입니다.

var books = [
  { id: "jpc-pil", category: "정처기", color: "tone-a", title: "2026 시나공 정보처리기사 필기 기본서", author: "길벗알앤디, 김정준", publisher: "길벗", price: 35000, shop: "예스24", url: "https://www.yes24.com/product/goods/159574278", summary: "출제기준의 NCS 학습 모듈을 나눠 필기 범위를 정리한 기본서입니다. 예제와 학습 방향, 기출문제집 부록, 저자 동영상을 제공합니다. 예스24에는 개정판이 나와 이 판의 새 상품 구매가 제한된다고 안내되어 있습니다." },
  { id: "jpc-sil", category: "정처기", color: "tone-a", title: "2026 시나공 정보처리기사 실기 기본서", author: "길벗알앤디, 김정준", publisher: "길벗", price: 40000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000219186294", summary: "기출을 분석해 실기 출제 경향을 반영한 기본서입니다. 기초가 없어도 따라갈 수 있게 이론과 예제를 풀었고, 출제 비중별 학습 등급과 최신 기출 10회, 저자 무료 강의가 있습니다." },
  { id: "com-pil", category: "컴활", color: "tone-b", title: "2026 시나공 컴퓨터활용능력 1급 필기 기본서", author: "길벗알앤디", publisher: "길벗", price: 32000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000216758898", summary: "컴퓨터활용능력 1급 필기의 최신 출제 경향을 반영한 2권 기본서입니다. 이론, 문제, 요약을 반복하고 출제 빈도로 학습 순서를 나누며, 기출 10회와 저자 강의를 제공합니다." },
  { id: "com-sil", category: "컴활", color: "tone-b", title: "2026 한 권으로 끝내는 시나공 컴활 1급 필기+실기", author: "길벗알앤디", publisher: "길벗", price: 40000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218090665", summary: "필기와 실기를 한 권으로 묶었습니다. 필기는 핵심요약과 대표 기출, 실기는 실제 출제 유형을 반복해서 풀도록 구성되어 있고 엑셀 함수 사전과 무료 강의가 있습니다." },
  { id: "sqld-1", category: "SQLD", color: "tone-c", title: "2026 이기적 SQLD SQL 개발자 이론+기출문제", author: "강태우", publisher: "영진닷컴", price: 24000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000217937565", summary: "데이터산업진흥원 출제기준에 맞춘 SQLD 대비서입니다. 기출 유형 5회와 실전 모의고사 2회가 있고, CBT 모의고사와 비전공자도 볼 수 있는 동영상 강의를 제공합니다." },
  { id: "sqld-2", category: "SQLD", color: "tone-c", title: "2027 한 권으로 끝내는 시나공 SQLD", author: "서동재", publisher: "길벗", price: 26000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000220308524", summary: "기출을 외우기보다 그림으로 SQL 개념을 이해하도록 구성한 책입니다. 헷갈리는 내용은 따로 정리하고, 시험 직전에 볼 킬러문항 32제 별책이 들어 있습니다." },
  { id: "net-1", category: "네트워크관리사", color: "tone-d", title: "이기적 네트워크관리사 1·2급 필기+실기 올인원", author: "임호진, 황성하", publisher: "영진닷컴", price: 30000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218204635", summary: "네트워크관리사 1급과 2급의 필기, 실기를 함께 준비하는 책입니다. 과목마다 개념 확인 문제와 기출 해설이 있고, 기출 풀이 동영상과 CBT 응시를 제공합니다." },
  { id: "net-2", category: "네트워크관리사", color: "tone-d", title: "2027 최적합 네트워크 관리사 1,2급 필기+실기", author: "허준, 선세리", publisher: "성안당", price: 30000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000220341549", summary: "네트워크 구축, 운영체제, 보안, 패킷 분석 등 1·2급 범위를 필기와 실기 한 권으로 다룹니다. 과목별 예상문제, 최근 기출, 모의고사 앱과 강의 자료를 제공합니다." },
  { id: "linux-1", category: "리눅스 마스터", color: "tone-e", title: "2026 이기적 리눅스마스터 2급(1·2차) 기본서", author: "권소라", publisher: "영진닷컴", price: 28000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218787227", summary: "리눅스마스터 2급 1차와 2차의 핵심 이론과 출제 유형을 한 권에 정리했습니다. 단원 예상문제, 최신 기출, 무료 동영상, 합격자료집, CBT 문제집이 함께 있습니다." },
  { id: "linux-2", category: "리눅스 마스터", color: "tone-e", title: "2027 빠르게 따는 리눅스마스터 2급(1·2차)", author: "권대우", publisher: "골든래빗", price: 28000, shop: "골든래빗", url: "https://goldenrabbit.co.kr/books/9791124516232", summary: "이론 권과 빈출·기출·모의고사 권으로 나뉜 2급 1·2차 수험서입니다. 웹 CBT를 풀 수 있고, 시험 직전 특강이 포함되어 있습니다." },
  { id: "sec-1", category: "정보보안기사", color: "tone-f", title: "2026 이기적 정보보안기사 필기+실기 올인원", author: "임호진", publisher: "영진닷컴", price: 49000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218331600", summary: "필기와 실기를 한 세트로 준비하는 책입니다. 1권은 최신 출제와 법령을 반영한 핵심 이론, 2권과 3권은 필기·실기 기출과 단답형 연습으로 구성되어 있고 저자 동영상이 있습니다." }
];

function loadUsers() {
  var text = localStorage.getItem("users");
  if (!text) {
    var demo = [{
      id: "demo",
      password: "demo1234",
      name: "홍길동",
      email: "demo@example.com",
      phone: "010-1234-5678"
    }];
    localStorage.setItem("users", JSON.stringify(demo));
    return demo;
  }
  return JSON.parse(text);
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function loadCart() {
  var text = localStorage.getItem("cart");
  if (!text) return [];
  return JSON.parse(text);
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getLoginUser() {
  var loginId = localStorage.getItem("loginId");
  if (!loginId) return null;

  var users = loadUsers();
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === loginId) return users[i];
  }
  return null;
}

function won(price) {
  return price.toLocaleString("ko-KR") + "원";
}

function findBook(bookId) {
  for (var i = 0; i < books.length; i++) {
    if (books[i].id === bookId) return books[i];
  }
  return null;
}

function showHeader() {
  var user = getLoginUser();
  var guest = document.getElementById("guest-menu");
  var member = document.getElementById("member-menu");

  if (user) {
    guest.style.display = "none";
    member.style.display = "inline-flex";
    document.getElementById("member-name").textContent = user.name + "님";
  } else {
    guest.style.display = "inline-flex";
    member.style.display = "none";
  }

  var cart = loadCart();
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
    count = count + cart[i].qty;
  }

  var badge = document.getElementById("cart-count");
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = "inline-flex";
  } else {
    badge.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("loginId");
  location.href = "index.html";
}

function togglePw(inputId) {
  var input = document.getElementById(inputId);
  if (input.type === "password") input.type = "text";
  else input.type = "password";
}

function addToCart(bookId, qty) {
  var book = findBook(bookId);
  if (!book) return;

  qty = Number(qty);
  if (!qty || qty < 1) qty = 1;
  if (qty > 99) qty = 99;

  var cart = loadCart();
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === bookId) {
      cart[i].qty = cart[i].qty + qty;
      if (cart[i].qty > 99) cart[i].qty = 99;
      cart[i].url = book.url;
      cart[i].shop = book.shop;
      found = true;
    }
  }

  if (!found) {
    cart.push({
      id: book.id,
      title: book.title,
      price: book.price,
      category: book.category,
      color: book.color,
      qty: qty,
      shop: book.shop,
      url: book.url
    });
  }

  saveCart(cart);
}
