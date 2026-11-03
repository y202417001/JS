showHeader();

function doSignup() {
  var name = document.getElementById("name").value.trim();
  var id = document.getElementById("user-id").value.trim().toLowerCase();
  var password = document.getElementById("signup-password").value;
  var password2 = document.getElementById("signup-password2").value;
  var email = document.getElementById("email").value.trim().toLowerCase();
  var phone = document.getElementById("phone").value.trim();
  var error = document.getElementById("signup-error");

  if (name.length < 2) {
    error.textContent = "이름을 두 글자 이상 입력해 주세요.";
    return false;
  }
  if (id.length < 4) {
    error.textContent = "아이디는 4글자 이상 입력해 주세요.";
    return false;
  }
  if (password.length < 6) {
    error.textContent = "비밀번호는 6자 이상 입력해 주세요.";
    return false;
  }
  if (password !== password2) {
    error.textContent = "비밀번호가 서로 다릅니다.";
    return false;
  }
  if (email.indexOf("@") === -1) {
    error.textContent = "이메일 형식을 확인해 주세요.";
    return false;
  }
  if (phone === "") {
    error.textContent = "휴대폰 번호를 입력해 주세요.";
    return false;
  }
  if (!document.getElementById("agree").checked) {
    error.textContent = "개인정보 수집 및 이용에 동의해 주세요.";
    return false;
  }

  var users = loadUsers();
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      error.textContent = "이미 사용 중인 아이디입니다.";
      return false;
    }
  }

  users.push({
    id: id,
    password: password,
    name: name,
    email: email,
    phone: phone
  });
  saveUsers(users);
  location.href = "login.html?joined=1";
  return false;
}
