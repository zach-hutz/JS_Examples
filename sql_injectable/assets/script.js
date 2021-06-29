"use strict";
$(document).ready(function () {
  let SIGNEDIN = 0;
  localStorage.setItem("SIGNEDIN", SIGNEDIN);
  console.log(localStorage.getItem("SIGNEDIN"));
  const hPageEl = document.getElementById("home-page");
  const bPageEl = document.getElementById("blog-page");
  const lPageEl = document.getElementById("login-page");
  const sPageEl = document.getElementById("signup-page");
});
