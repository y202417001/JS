// 회원, 로그인, 장바구니를 이 브라우저에 저장합니다.
// 다른 페이지에서 책을 담을 때: addToCart("jpc-1", 1);
// price는 서점 판매가, listPrice는 정가입니다. image는 그 책의 표지입니다.

var books = [
  { id: "jpc-1", category: "정처기", color: "tone-a", title: "2026 시나공 정보처리기사 필기 기본서", author: "길벗알앤디", publisher: "길벗", price: 31500, listPrice: 35000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218197628", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140716142.jpg", summary: "NCS 학습 모듈을 기준으로 필기 이론, 예제, 핵심요약을 정리한 기본서입니다. 출제 비중 등급과 최신 기출 10회, 저자 무료 강의가 있습니다." },
  { id: "jpc-2", category: "정처기", color: "tone-a", title: "2026 시나공 정보처리기사 실기 기본서", author: "길벗알앤디, 김정준", publisher: "길벗", price: 36000, listPrice: 40000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000219186294", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140717507.jpg", summary: "기출을 분석해 실기 출제 경향을 반영한 기본서입니다. 기초가 없어도 따라갈 수 있게 이론과 예제를 풀었고, 학습 등급과 최신 기출 10회, 저자 무료 강의가 있습니다." },
  { id: "jpc-3", category: "정처기", color: "tone-a", title: "2026 시나공 정보처리기사 필기 기출문제집", author: "길벗알앤디", publisher: "길벗", price: 20700, listPrice: 23000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218500350", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140716654.jpg", summary: "2025년 기출까지 15회를 모은 필기 실전 문제집입니다. 출제 빈도 등급과 핵심 개념 요약, 저자 강의를 제공합니다." },
  { id: "jpc-4", category: "정처기", color: "tone-a", title: "2026 시나공 정보처리기사 실기 기출문제집", author: "길벗알앤디", publisher: "길벗", price: 20700, listPrice: 23000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000219055682", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140717491.jpg", summary: "2025년 기출까지 15회를 모은 실기 문제집입니다. 핵심 개념 요약 PDF와 문제별 저자 강의를 제공합니다." },
  { id: "jpc-5", category: "정처기", color: "tone-a", title: "2026 이기적 정보처리기사 필기 기본서", author: "강희영, 신면철", publisher: "영진닷컴", price: 31500, listPrice: 35000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218641525", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931479775.jpg", summary: "2026년 출제기준을 반영한 필기 이론서와 기출공략집으로 구성됩니다. 이론 확인 문제 뒤에 자주 나온 유형과 최신 기출을 풀어 보도록 되어 있습니다." },

  { id: "com-1", category: "컴활", color: "tone-b", title: "2026 시나공 컴퓨터활용능력 1급 필기 기본서", author: "길벗알앤디", publisher: "길벗", price: 28800, listPrice: 32000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000216758898", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140713714.jpg", summary: "컴퓨터활용능력 1급 필기의 최신 출제 경향을 반영한 기본서입니다. 이론, 문제, 요약을 반복하고 출제 빈도로 학습 순서를 나누며, 기출 10회와 저자 강의를 제공합니다." },
  { id: "com-2", category: "컴활", color: "tone-b", title: "2026 한 권으로 끝내는 시나공 컴활 1급 필기+실기", author: "길벗알앤디", publisher: "길벗", price: 36000, listPrice: 40000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218090665", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715879.jpg", summary: "필기와 실기를 한 권으로 묶었습니다. 필기는 핵심요약과 대표 기출, 실기는 실제 출제 유형을 반복해서 풀도록 구성되어 있고 엑셀 함수 사전과 무료 강의가 있습니다." },
  { id: "com-3", category: "컴활", color: "tone-b", title: "2026 시나공 컴퓨터활용능력 1급 실기 기본서", author: "길벗알앤디", publisher: "길벗", price: 36000, listPrice: 40000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000217066134", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140714926.jpg", summary: "엑셀과 액세스 실기를 따라 하며 익히는 기본서입니다. 모의고사와 최신 기출, 함수 사전, 온라인 채점과 저자 강의를 제공합니다." },
  { id: "com-4", category: "컴활", color: "tone-b", title: "2026 시나공 컴퓨터활용능력 1급 실기 총정리", author: "길벗알앤디", publisher: "길벗", price: 23400, listPrice: 26000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000217368956", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140715503.jpg", summary: "자주 나오는 기능과 기출을 시험 순서대로 묶은 단기 정리서입니다. 실전 모의고사 5회와 저자 강의가 있습니다." },
  { id: "com-5", category: "컴활", color: "tone-b", title: "2026 시나공 컴퓨터활용능력 1급 실기 기출문제집", author: "길벗알앤디", publisher: "길벗", price: 19800, listPrice: 22000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218629624", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140716661.jpg", summary: "2025년 기출까지 분석한 실기 유형 10회를 담은 문제집입니다. 저자 강의와 최신 실기 자료를 함께 안내합니다." },

  { id: "sqld-1", category: "SQLD", color: "tone-c", title: "2026 이기적 SQLD SQL 개발자 이론+기출문제", author: "강태우", publisher: "영진닷컴", price: 21600, listPrice: 24000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000217937565", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931477849.jpg", summary: "데이터산업진흥원 출제기준에 맞춘 SQLD 대비서입니다. 기출 유형 5회와 실전 모의고사 2회가 있고, CBT 모의고사와 동영상 강의를 제공합니다." },
  { id: "sqld-2", category: "SQLD", color: "tone-c", title: "2027 한 권으로 끝내는 시나공 SQLD", author: "서동재", publisher: "길벗", price: 23400, listPrice: 26000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000220308524", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791140719457.jpg", summary: "그림으로 SQL 개념을 이해하도록 구성한 책입니다. 헷갈리는 내용은 따로 정리하고, 시험 직전에 볼 킬러문항 32제 별책이 들어 있습니다." },
  { id: "sqld-3", category: "SQLD", color: "tone-c", title: "이지패스 2026 SQLD SQL 개발자", author: "전용문", publisher: "위키북스", price: 23400, listPrice: 26000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218962409", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158396589.jpg", summary: "초심자를 위해 SQLD 범위를 풀어 쓴 수험서입니다. 모의고사, 기출 변형, 수험용 앱, 유튜브 강의를 제공합니다." },
  { id: "sqld-4", category: "SQLD", color: "tone-c", title: "2026 박문각 SQL 개발자 SQLD 기출원스톱 400제", author: "윤소정", publisher: "박문각", price: 17100, listPrice: 19000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218830812", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175194540.jpg", summary: "핵심이론, 기출 변형 5회, 실전 모의고사, 최빈출 50제를 담은 문제 중심 교재입니다. 저자 직강이 함께 안내되어 있습니다." },
  { id: "sqld-5", category: "SQLD", color: "tone-c", title: "2026 아이리포 SQL 개발자 SQLD 모든 것", author: "조용학", publisher: "아이리포", price: 23400, listPrice: 26000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218822223", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791193747094.jpg", summary: "쿼리를 직접 풀어 보도록 구성한 SQLD 수험서입니다. 복합 쿼리 설명과 바로 볼 수 있는 강의 QR을 제공합니다." },

  { id: "net-1", category: "네트워크관리사", color: "tone-d", title: "이기적 네트워크관리사 1·2급 필기+실기 올인원", author: "임호진, 황성하", publisher: "영진닷컴", price: 27000, listPrice: 30000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218204635", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481211.jpg", summary: "1급과 2급의 필기, 실기를 함께 준비하는 책입니다. 과목마다 개념 확인 문제와 기출 해설이 있고, 기출 풀이 동영상과 CBT 응시를 제공합니다." },
  { id: "net-2", category: "네트워크관리사", color: "tone-d", title: "2027 최적합 네트워크 관리사 1,2급 필기+실기", author: "허준, 선세리", publisher: "성안당", price: 27000, listPrice: 30000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000220341549", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931584905.jpg", summary: "네트워크 구축, 운영체제, 보안, 패킷 분석 등 1·2급 범위를 한 권으로 다룹니다. 과목별 예상문제, 최근 기출, 모의고사 앱과 강의 자료를 제공합니다." },
  { id: "net-3", category: "네트워크관리사", color: "tone-d", title: "Let's 한권으로 끝내는 네트워크관리사 2급", author: "김기원", publisher: "엠제이씨북스", price: 22500, listPrice: 25000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000060622703", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788965121565.jpg", summary: "2급 필기와 실기를 프로토콜, 윈도우 서버, 리눅스, 라우터 실습 순으로 정리한 책입니다. 2급 필기 기출 5회가 들어 있습니다." },
  { id: "net-4", category: "네트워크관리사", color: "tone-d", title: "2026 최적합 네트워크관리사 1·2급 필기+실기", author: "허준, 선세리", publisher: "성안당", price: 27000, listPrice: 30000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000216966558", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931583045.jpg", summary: "2025년 8월 변경 출제기준을 반영한 1·2급 필기·실기 교재입니다. 같은 시리즈의 2027 개정판이 나와 있어, 최신 판은 위 2027년을 보는 편이 좋습니다." },
  { id: "net-5", category: "네트워크관리사", color: "tone-d", title: "2025 최적합 네트워크 관리사 1·2급 필기+실기", author: "허준, 선세리", publisher: "성안당", price: 27000, listPrice: 30000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000213673627", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931586718.jpg", summary: "동영상 강의와 CBT 모의고사가 있는 이전 판입니다. 네트워크 구축, NOS, 패킷 분석 범위를 필기와 실기로 나눠 설명합니다." },

  { id: "linux-1", category: "리눅스 마스터", color: "tone-e", title: "2026 이기적 리눅스마스터 2급(1·2차) 기본서", author: "권소라", publisher: "영진닷컴", price: 25200, listPrice: 28000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218787227", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481419.jpg", summary: "2급 1차와 2차의 핵심 이론과 출제 유형을 한 권에 정리했습니다. 단원 예상문제, 최신 기출, 무료 동영상, 합격자료집, CBT 문제집이 함께 있습니다." },
  { id: "linux-2", category: "리눅스 마스터", color: "tone-e", title: "2027 빠르게 따는 리눅스마스터 2급(1·2차)", author: "권대우", publisher: "골든래빗", price: 28000, listPrice: 28000, shop: "골든래빗", url: "https://goldenrabbit.co.kr/books/9791124516232", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791124516232.jpg", summary: "이론 권과 빈출·기출·모의고사 권으로 나뉜 2급 1·2차 수험서입니다. 웹 CBT를 풀 수 있고, 시험 직전 특강이 포함되어 있습니다." },
  { id: "linux-3", category: "리눅스 마스터", color: "tone-e", title: "리눅스마스터 2급 한권으로 끝내기", author: "박성업", publisher: "시대고시기획", price: 23400, listPrice: 26000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000219391330", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791143411198.jpg", summary: "핵심 이론, 챕터 예상문제, 기출 4회, 실전 모의고사 3회를 한 권에 넣었습니다. 시험 직전용 요약과 명령어 별지가 있습니다." },
  { id: "linux-4", category: "리눅스 마스터", color: "tone-e", title: "2026 박문각 리눅스마스터 2급 기출원스톱 800제", author: "오재관", publisher: "박문각", price: 22500, listPrice: 25000, shop: "영풍문고", url: "https://www.ypbooks.co.kr/books/202602236849457386", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175197763.jpg", summary: "자주 나오는 핵심 이론과 기출복원 모의고사 8회, 파이널 모의고사 2회로 구성된 문제집입니다. 저자 직강이 함께 안내되어 있습니다." },
  { id: "linux-5", category: "리눅스 마스터", color: "tone-e", title: "Rocky Linux 8로 리눅스마스터 2급 정복하기", author: "정성재, 이재웅", publisher: "북스홀릭퍼블리싱", price: 27000, listPrice: 30000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000211820693", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791162891186.jpg", summary: "Rocky Linux 8 화면으로 2급 범위와 기본 관리 명령을 따라 하는 실습서입니다. 시험 분류에 맞춰 꼭 나오는 내용 위주로 정리되어 있습니다." },

  { id: "sec-1", category: "정보보안기사", color: "tone-f", title: "2026 이기적 정보보안기사 필기+실기 올인원", author: "임호진", publisher: "영진닷컴", price: 44100, listPrice: 49000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218331600", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481297.jpg", summary: "필기와 실기를 한 세트로 준비하는 책입니다. 1권은 최신 출제와 법령을 반영한 핵심 이론, 2권과 3권은 필기·실기 기출과 단답형 연습으로 구성되어 있고 저자 동영상이 있습니다." },
  { id: "sec-2", category: "정보보안기사", color: "tone-f", title: "2026 이기적 정보보안기사 필기 기출 1400제", author: "임호진", publisher: "영진닷컴", price: 18000, listPrice: 20000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000219186340", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481310.jpg", summary: "필기 기출과 빈출 이론 노트를 모은 문제집입니다. 해설과 함께 보는 기출 4회, 따로 보는 기출 10회와 저자 강의가 있습니다." },
  { id: "sec-3", category: "정보보안기사", color: "tone-f", title: "2026 이기적 정보보안기사 실기 기출 600제", author: "임호진", publisher: "영진닷컴", price: 18000, listPrice: 20000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000219382035", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788931481303.jpg", summary: "실기 기출과 최신 용어, 실전 모의고사를 모은 문제집입니다. 2025년 기출은 저자 동영상과 함께 볼 수 있습니다." },
  { id: "sec-4", category: "정보보안기사", color: "tone-f", title: "2026 알기사 정보보안기사 필기+핵심기출 1200제 세트", author: "조현준", publisher: "지안에듀", price: 45000, listPrice: 50000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000218322836", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788966113217.jpg", summary: "필기 이론, 기출, 요약을 세트로 묶었습니다. 출제 영역을 그림과 표로 풀고, 2013년 이후 기사·산업기사 기출을 분석해 넣었습니다." },
  { id: "sec-5", category: "정보보안기사", color: "tone-f", title: "2026 알기사 정보보안기사 실기", author: "정일영", publisher: "지안에듀", price: 41400, listPrice: 46000, shop: "교보문고", url: "https://product.kyobobook.co.kr/detail/S000219083573", image: "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788966113422.jpg", summary: "실기에서 반복되는 시스템, 네트워크, 웹, 침해 대응 주제를 기출 분석으로 정리한 책입니다. 실습 화면과 도식을 함께 넣었습니다." }
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
      cart[i].image = book.image;
      cart[i].price = book.price;
      cart[i].listPrice = book.listPrice;
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
      url: book.url,
      image: book.image,
      listPrice: book.listPrice
    });
  }

  saveCart(cart);
}
