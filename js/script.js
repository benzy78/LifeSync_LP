$(document).ready(function () {
  $(".acco_btn").click(function () {
    // ボタンの次の要素（acco_content）をスライドトグル
    $(this).next(".acco_content").slideToggle(300);

    // ボタンの矢印を回転
    $(this).toggleClass("active");
  });
});
