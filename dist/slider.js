var $slider = $(".slideshow .slider"),
  maxItems = $(".item", $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $(".slideshow")
  .clone()
  .addClass("slideshow-right")
  .appendTo($(".split-slideshow"));

rightItems = $(".item", $sliderRight).toArray();
reverseItems = rightItems.reverse();
$(".slider", $sliderRight).html("");
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($(".slider", $sliderRight));
}

$slider.addClass("slideshow-left");
$(".slideshow-left")
  .slick({
    vertical: true,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 1000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    draggable: false,
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (
      currentSlide > nextSlide &&
      nextSlide == 0 &&
      currentSlide == maxItems - 1
    ) {
      $(".slideshow-right .slider").slick("slickGoTo", -1);
      $(".slideshow-text").slick("slickGoTo", maxItems);
    } else if (
      currentSlide < nextSlide &&
      currentSlide == 0 &&
      nextSlide == maxItems - 1
    ) {
      $(".slideshow-right .slider").slick("slickGoTo", maxItems);
      $(".slideshow-text").slick("slickGoTo", -1);
    } else {
      $(".slideshow-right .slider").slick(
        "slickGoTo",
        maxItems - 1 - nextSlide
      );
      $(".slideshow-text").slick("slickGoTo", nextSlide);
    }
  });

$(".slideshow-right .slider").slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  initialSlide: maxItems - 1,
});
$(".slideshow-text").slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
});

setInterval(function () {
  $(".slideshow-left").slick("slickNext");
}, 6500);
