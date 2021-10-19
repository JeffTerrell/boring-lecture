$(document).ready(function() {
  $(".pintro").click(function() {
    $("p").addClass("highlighter");
  });

  $(".pintro").click(function() {
    $("p").removeClass();
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("body").addClass("dark-text");
  });
});
