$(document).ready(function () {
  $(".acco_btn").click(function () {
    // ボタンの次の要素（acco_content）をスライドトグル
    $(this).next(".acco_content").slideToggle(300);

    // ボタンの矢印を回転
    $(this).toggleClass("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".header_nav");
  const navItems = document.querySelectorAll(".nav_links a"); 

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active"); // メニューを閉じる
    });
  });
});

