$(document).ready(function () {
  $(".search .inp_cont input").keyup(function () {
    value = $(this).val();
    $(".search .result").fadeOut(10);
    if (value == "") {
      $(".related").fadeOut("fast");
      $(this).css({
        "border-radius": "20px 0px 0px 20px",
      });
      $(".search .inp_cont button").css({
        "border-radius": "0px 20px 20px 0px",
      });
    } else {
      $(this).css({
        "border-radius": "20px 0px 0px 0px",
      });
      $(".search .inp_cont button").css({
        "border-radius": "0px 20px 0px 0px",
      });
      $("#first").text(value);
      $(".related").fadeIn("fast");
      $(".search .inp_cont button").click(function () {
        $(".related").fadeOut(10);
        $(".search .inp_cont input").css({
          "border-radius": "20px 0px 0px 20px",
        });
        $(this).css({
          "border-radius": "0px 20px 20px 0px",
        });
        $("#search_for").text($(".search .inp_cont input").val());
        $(".search .result").fadeIn(1500);
      });
    }
  });
  $("#close_search").click(function () {
    $(".search").slideUp("fast");
  });
  $(".related li").click(function () {
    $(".search .inp_cont input").val($(this).text());
  });
  $("#click_search i").click(function () {
    $(".search").slideDown("fast");
  });
  $(window).scroll(function () {
    if (window.pageYOffset >= 1) {
      $("nav").addClass("bg-warning");
      $("nav ul li a, #click_search").addClass("text-dark");
      $(".logo a").addClass("text-dark");
      $(".bars_ul span").addClass("text-dark");
    } else {
      $("nav").removeClass("bg-warning");
      $(".logo a").removeClass("text-dark");
      $(".bars_ul span").removeClass("text-dark");
      $("nav ul li a, #click_search").removeClass("text-dark");
    }
  });
  if (
    $(".bars_ul span").click(function () {
      $(this).children("i").toggleClass("text-dark fa-solid fa-times");
      $(".logo a").addClass("text-dark");
      $("nav").addClass("bg-warning");
      $("nav ul").slideToggle("fast");
      $("nav ul li button i").removeClass("fa-light");
      $("nav ul li button i").addClass("fa-solid");
    })
  ) {
  } else {
    $("nav").removeClass("bg-warning");
    $(".logo a").removeClass("text-dark");
  }
});
