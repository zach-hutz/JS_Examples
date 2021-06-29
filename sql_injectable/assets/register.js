$(document).ready(function () {
  const subBtnEl = document.getElementById("sub_btn");
  let username = document.getElementById("input_username").value;
  let password = document.getElementById("input_password").value;

  subBtnEl.addEventListener("click", function (e) {
    // OPEN DATABASE
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    username = document.getElementById("input_username").value;
    password = document.getElementById("input_password").value;
    if (username.length > 1) {
      if (password.length > 1) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        document.getElementById("success").classList.toggle("hidden");
        setTimeout(function () {
          document.getElementById("form").submit();
        }, 1500);
      }
    } else {
      document.getElementById("hideme").classList.toggle("hidden");
    }
  });
});
