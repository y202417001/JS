showHeader();

var search = new URLSearchParams(location.search);
if (search.get("joined") === "1") {
  document.getElementById("joined").style.display = "block";
}

var me = getLoginUser();
if (me) {
  document.getElementById("already").style.display = "block";
  document.getElementById("already-name").textContent = me.name;
}

function doLogin() {
  var id = document.getElementById("user-id").value.trim().toLowerCase();
  var password = document.getElementById("password").value;
  var error = document.getElementById("login-error");

  if (id === "" || password === "") {
    error.textContent = "아이디와 비밀번호를 입력해 주세요.";
    return false;
  }

  var users = loadUsers();
  var user = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id && users[i].password === password) {
      user = users[i];
    }
  }

  if (!user) {
    error.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
    return false;
  }

  localStorage.setItem("loginId", user.id);

  if (search.get("next") === "cart.html") location.href = "cart.html";
  else location.href = "index.html";
  return false;
}

function fillDemo() {
  document.getElementById("user-id").value = "demo";
  document.getElementById("password").value = "demo1234";
}

function showBox(boxId) {
  var box = document.getElementById(boxId);
  if (box.style.display === "none") box.style.display = "block";
  else box.style.display = "none";
}

function findMyId() {
  var name = document.getElementById("find-name").value.trim();
  var email = document.getElementById("find-email").value.trim().toLowerCase();
  var users = loadUsers();
  var found = "";

  for (var i = 0; i < users.length; i++) {
    if (users[i].name === name && users[i].email === email) {
      found = users[i].id;
    }
  }

  var result = document.getElementById("find-result");
  if (found !== "") result.textContent = "아이디는 " + found + " 입니다.";
  else result.textContent = "일치하는 회원을 찾지 못했습니다.";
}

function resetPw() {
  var id = document.getElementById("reset-id").value.trim().toLowerCase();
  var email = document.getElementById("reset-email").value.trim().toLowerCase();
  var password = document.getElementById("reset-password").value;
  var password2 = document.getElementById("reset-password2").value;
  var result = document.getElementById("reset-result");

  if (password.length < 6) {
    result.textContent = "비밀번호는 6자 이상 입력해 주세요.";
    return;
  }
  if (password !== password2) {
    result.textContent = "비밀번호가 서로 다릅니다.";
    return;
  }

  var users = loadUsers();
  var ok = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id && users[i].email === email) {
      users[i].password = password;
      ok = true;
    }
  }

  if (!ok) {
    result.textContent = "일치하는 회원 정보가 없습니다.";
    return;
  }

  saveUsers(users);
  result.textContent = "비밀번호를 변경했습니다. 새 비밀번호로 로그인해 주세요.";
}
