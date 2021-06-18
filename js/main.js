var i = 0;
var txt = "Web Development";
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
(function () {
  typeWriter();
})();

$(function () {
  $(".header-link").click(function () {
    $("#about-popup").addClass("active");
  });

  $(".pop-btn").click(function () {
    $("#about-popup").removeClass("active");
  });
});

$(document).on("mousemove", function (e) {
  var xPos = e.pageX;
  var yPos = e.pageY;
  $(".list-item--img").css({
    top: yPos - 100 + "px",
    left: xPos + 130 + "px",
  });
});
