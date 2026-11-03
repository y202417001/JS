showHeader();

var pageSearch = new URLSearchParams(location.search);
var currentCat = pageSearch.get("cat");
var keyword = pageSearch.get("q");
if (!currentCat) currentCat = "전체";
if (!keyword) keyword = "";

function showBooks() {
  var html = "";
  var key = keyword.toLowerCase();

  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var text = (book.title + " " + book.category).toLowerCase();

    if (currentCat !== "전체" && book.category !== currentCat) continue;
    if (key !== "" && text.indexOf(key) === -1) continue;

    html += "<article class='product'>";
    html += "<div class='book " + book.color + "'><strong>" + book.category + "</strong></div>";
    html += "<p class='cat'>" + book.category + "</p>";
    html += "<h3>" + book.title + "</h3>";
    html += "<p class='price'>" + won(book.price) + "</p>";
    html += "<p>수량 <input id='qty-" + book.id + "' type='number' min='1' max='99' value='1'></p>";
    html += "<button type='button' class='btn btn-primary btn-block' onclick=\"putBook('" + book.id + "')\">장바구니 담기</button>";
    html += "</article>";
  }

  if (html === "") html = "<div class='empty'><p>조건에 맞는 도서가 없습니다.</p></div>";
  document.getElementById("book-list").innerHTML = html;

  var title = "자격증 도서 담기";
  if (currentCat !== "전체") title = currentCat + " 관련 도서";
  if (keyword !== "") title = keyword + " 검색 결과";
  document.getElementById("book-title").textContent = title;

  var chips = document.getElementsByClassName("chip");
  for (var c = 0; c < chips.length; c++) {
    if (chips[c].textContent === currentCat) chips[c].className = "chip is-on";
    else chips[c].className = "chip";
  }
}

function putBook(bookId) {
  var qty = document.getElementById("qty-" + bookId).value;
  addToCart(bookId, qty);
  document.getElementById("message").textContent = "장바구니에 담았습니다.";
  showCart();
  showHeader();
}

function changeQty(bookId, diff) {
  var cart = loadCart();
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === bookId) {
      cart[i].qty = cart[i].qty + diff;
      if (cart[i].qty < 1) cart[i].qty = 1;
      if (cart[i].qty > 99) cart[i].qty = 99;
    }
  }
  saveCart(cart);
  showCart();
  showHeader();
}

function deleteItem(bookId) {
  var cart = loadCart();
  var next = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id !== bookId) next.push(cart[i]);
  }
  saveCart(next);
  showCart();
  showHeader();
}

function showCart() {
  var cart = loadCart();
  var list = document.getElementById("cart-list");
  var sumBox = document.getElementById("cart-sum");
  var count = 0;
  var sum = 0;
  var html = "";

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var line = item.price * item.qty;
    count = count + item.qty;
    sum = sum + line;

    html += "<div class='cart-item'>";
    html += "<div class='book small " + item.color + "'><strong>" + item.category + "</strong></div>";
    html += "<div class='ci-info'>";
    html += "<p class='cat'>" + item.category + "</p>";
    html += "<p class='item-title'>" + item.title + "</p>";
    html += "<p class='muted'>권당 " + won(item.price) + "</p>";
    html += "</div>";
    html += "<div><span class='qty-label'>수량</span><div class='qty'>";
    html += "<button type='button' onclick=\"changeQty('" + item.id + "', -1)\">-</button>";
    html += "<span>" + item.qty + "</span>";
    html += "<button type='button' onclick=\"changeQty('" + item.id + "', 1)\">+</button>";
    html += "</div></div>";
    html += "<div class='ci-price'><span class='qty-label'>금액</span><strong>" + won(line) + "</strong></div>";
    html += "<button type='button' class='text-btn' onclick=\"deleteItem('" + item.id + "')\">삭제</button>";
    html += "</div>";
  }

  document.getElementById("cart-title").textContent = "장바구니 " + count + "권";

  if (cart.length === 0) {
    list.innerHTML = "<div class='empty'><p>장바구니가 비어 있습니다.</p><p>아래 자격증 도서를 담아 보세요.</p></div>";
    sumBox.style.display = "none";
    return;
  }

  var ship = 0;
  var shipText = "무료";
  var hint = "무료배송이 적용되었습니다.";
  if (sum < 15000) {
    ship = 3000;
    shipText = won(ship);
    hint = won(15000 - sum) + " 더 담으면 무료배송입니다.";
  }

  list.innerHTML = "<div class='cart-panel'>" + html + "</div>";
  sumBox.style.display = "block";
  sumBox.innerHTML = ""
    + "<h2>결제 금액</h2>"
    + "<div class='sum-row'><span>상품금액</span><span>" + won(sum) + "</span></div>"
    + "<div class='sum-row'><span>배송비</span><span>" + shipText + "</span></div>"
    + "<div class='sum-row total'><span>결제예정</span><strong>" + won(sum + ship) + "</strong></div>"
    + "<p class='hint'>" + hint + "</p>"
    + "<button type='button' class='btn btn-primary btn-block' onclick='order()'>주문하기</button>";
}

function order() {
  var user = getLoginUser();
  if (!user) {
    location.href = "login.html?next=cart.html";
    return;
  }

  var cart = loadCart();
  if (cart.length === 0) {
    alert("장바구니가 비어 있습니다.");
    return;
  }

  var sum = 0;
  var lines = "";
  for (var i = 0; i < cart.length; i++) {
    sum = sum + cart[i].price * cart[i].qty;
    lines = lines + cart[i].title + " " + cart[i].qty + "권\n";
  }

  var ship = 0;
  if (sum < 15000) ship = 3000;
  var pay = sum + ship;
  var ok = confirm(lines + "\n결제금액 " + won(pay) + "\n\n수업용 화면이라 실제 결제는 되지 않습니다.\n주문할까요?");
  if (!ok) return;

  saveCart([]);
  alert(user.name + "님의 주문이 완료되었습니다.\n결제금액 " + won(pay));
  document.getElementById("message").textContent = "";
  showCart();
  showHeader();
}

showBooks();
showCart();
