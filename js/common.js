// 회원, 로그인, 장바구니를 이 브라우저에 저장합니다.
// 다른 페이지에서 책을 담을 때: addToCart("jpc-pil", 1);

var books = [
  { id: "jpc-pil", category: "정처기", color: "tone-a", title: "한권으로 끝내는 정보처리기사 필기", price: 38000 },
  { id: "jpc-sil", category: "정처기", color: "tone-a", title: "정보처리기사 실기 한 권 완성", price: 34000 },
  { id: "com-pil", category: "컴활", color: "tone-b", title: "컴퓨터활용능력 1급 필기 핵심정리", price: 23000 },
  { id: "com-sil", category: "컴활", color: "tone-b", title: "컴퓨터활용능력 1급 실기 기출문제", price: 27000 },
  { id: "sqld-1", category: "SQLD", color: "tone-c", title: "SQLD 한 번에 합격하기", price: 22000 },
  { id: "sqld-2", category: "SQLD", color: "tone-c", title: "SQLD 실전 문제집", price: 19000 },
  { id: "net-1", category: "네트워크관리사", color: "tone-d", title: "네트워크관리사 2급 필기", price: 28000 },
  { id: "net-2", category: "네트워크관리사", color: "tone-d", title: "네트워크관리사 실기 대비", price: 26000 },
  { id: "linux-1", category: "리눅스 마스터", color: "tone-e", title: "리눅스 마스터 2급 필기", price: 32000 },
  { id: "linux-2", category: "리눅스 마스터", color: "tone-e", title: "리눅스 마스터 2급 실기", price: 30000 },
  { id: "sec-1", category: "정보보안기사", color: "tone-f", title: "정보보안기사 필기 핵심", price: 36000 },
  { id: "sec-2", category: "정보보안기사", color: "tone-f", title: "정보보안기사 실기 정리노트", price: 33000 }
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
      qty: qty
    });
  }

  saveCart(cart);
}
