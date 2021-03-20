"use strict";


// Reset Folder position on Clean Up

/*$(".reset-position").click(function () {
  // Reset position
  $(".resize-drag").removeAttr("style").css("transition", ".5s");
  setTimeout(function () {
    $(".resize-drag").removeAttr("style");
  }, 600);
});*/

$(".reset-position").click(function () {
  // Reset position
  $(".resize-drag").removeAttr("style").css("transition", ".5s");
  $(".resize-drag").removeAttr('data-x data-y');
  setTimeout(function () {
    $(".resize-drag").removeAttr("style");
  }, 600);
 });