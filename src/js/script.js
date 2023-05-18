$(document).ready(function () {
  var slideCount = $(".slide").length;
  var slideWidth = $(".slide").width();
  var slideContainerWidth = slideCount * slideWidth;

  $(".slider").css("width", slideContainerWidth);

  function slideNext() {
    $(".slider").animate({ "margin-left": -slideWidth }, 500, function () {
      $(".slider").css("margin-left", 0);
      $(".slide:first").appendTo(".slider");
    });
  }

  function slidePrev() {
    $(".slide:last").prependTo(".slider");
    $(".slider").css("margin-left", -slideWidth);
    $(".slider").animate({ "margin-left": 0 }, 500);
  }

  $(".next-slide").click(function () {
    slideNext();
  });

  $(".prev-slide").click(function () {
    slidePrev();
  });
});
