/*"use strict";*/

//////////////
/////// Easter Egg ////////////
/////////////
const element = document.querySelector(".background-fun");
function rotateAnimate() {
  document.documentElement.style.setProperty("--animate-duration", "3s");
  element.classList.add("animate__animated", "animate__rotateOut");
  element.addEventListener("animationend", () => {
    element.classList.remove("animate__animated", "animate__rotateOut");
  });
}
//////////////
/////// Date ////////////
/////////////
var topRightDate = new Date();
var topRightDateString = topRightDate.toDateString();
document.getElementById("date").innerHTML = `${topRightDateString}`;

//////////////
/////// Copy URL so user can share ////////////
/////////////
const $temp = $("<input>");
const $url = $(location).attr("href");
$(".clip").on("click", function () {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $temp.remove();
});

//////////////
/////// Clipboard Alert ////////////
/////////////
function clipAlert() {
  $("#clipAlert").show();
  setTimeout(function () {
    $("#clipAlert").hide();
  }, 2400);
}

//////////////
/////// Username login ////////////
/////////////

const randomNumber = Math.trunc(Math.random() * 999) + 1;
const nameInput = document.getElementById("name");

document
  .querySelector("form.form-signin")
  .addEventListener("submit", function (sign) {
    sign.preventDefault();
    //  console.log(nameInput.value);
    if (`${nameInput.value}` !== "") {
      document.getElementById(
        "username"
      ).innerHTML = `Welcome, ${nameInput.value}`;
    } else {
      document.getElementById(
        "username"
      ).innerHTML = `Welcome, user${randomNumber}`;
    }
  });

function hideLogin() {
  $(".form-container").css("display", "none");
  $(".folder-container").css("display", "block");
  $(".navbar").css("visibility", "visible");
}

function showLogin() {
  $(".form-container").css("display", "block");
  $(".folder-container").css("display", "none");
  $(".navbar").css("visibility", "hidden");
}

function sleep() {
  document.querySelector("body").style.visibility = "visible";
  document.querySelector("html").style.backgroundColor = "black";
  document.querySelector("body").style.opacity = "0";
  document.querySelector("body").style.transition = ".3s";
}
function sleepOff() {
  document.querySelector("body").style.visibility = "visible";
  document.querySelector("html").style.backgroundColor = "black";
  document.querySelector("body").style.opacity = "1";
  document.querySelector("body").style.transition = ".3s";
  document.querySelector("body").style.transitionDelay = ".3s";
}

//////////////
/////// Force Double Click Mobile.Desktop  ////////////
/////////////

var touchtime = 0;

$(".projects-folder").on("click", function () {
  if (touchtime == 0) {
    // set first click
    touchtime = new Date().getTime();
  } else {
    // compare first click to this click and see if they occurred within double click threshold
    if (new Date().getTime() - touchtime < 800) {
      // double click occurred
      $("#myProjects").modal();

      touchtime = 0;
    } else {
      // not a double click so set as a new first click
      touchtime = new Date().getTime();
    }
  }
});
$(".about-folder").on("click", function () {
  if (touchtime == 0) {
    // set first click
    touchtime = new Date().getTime();
  } else {
    // compare first click to this click and see if they occurred within double click threshold
    if (new Date().getTime() - touchtime < 800) {
      // double click occurred
      $("#aboutMe").modal();

      touchtime = 0;
    } else {
      // not a double click so set as a new first click
      touchtime = new Date().getTime();
    }
  }
});
$(".readme-file").on("click", function () {
  if (touchtime == 0) {
    // set first click
    touchtime = new Date().getTime();
  } else {
    // compare first click to this click and see if they occurred within double click threshold
    if (new Date().getTime() - touchtime < 800) {
      // double click occurred
      $("#readMe").modal();

      touchtime = 0;
    } else {
      // not a double click so set as a new first click
      touchtime = new Date().getTime();
    }
  }
});

//////////////
/////// Mode Switch ////////////
/////////////
/*
const modeSwitch = document.querySelector(".retro");

modeSwitch.addEventListener("click", function () {
  document.body.classList.toggle("retro").css("transition", ".3s");
});*/

$(".organizeFolder").click(function () {
  // Reset position

  $(".resize-drag").removeAttr("style").css("transition", ".5s");
  setTimeout(function () {
    $(".resize-drag").removeAttr("style");
  }, 600);
});

//////////////
/////// Batter Level ////////////
/////////////
const batteryPromise = navigator.getBattery();
batteryPromise.then(batteryCallback);

function batteryCallback(batteryObject) {
  printBatteryStatus(batteryObject);
}
function printBatteryStatus(batteryObject) {
  if (batteryObject.level >= 0.9) {
    document.querySelector(
      ".battery"
    ).innerHTML = `<i class="fa fa-battery-full">  <span>${Math.trunc(
      batteryObject.level * 100
    )}%</span>`;
  } else if (batteryObject.level <= 0.89 >= 0.4) {
    document.querySelector(
      ".battery"
    ).innerHTML = `<i class="fa fa-battery-half"> <span>${Math.trunc(
      batteryObject.level * 100
    )}%</span>`;
  }
  if (batteryObject.level <= 0.39) {
    document.querySelector(
      ".battery"
    ).innerHTML = `<i class="fa fa-battery-quarter"> <span>${Math.trunc(
      batteryObject.level * 100
    )}%</span>`;
  }
}

//////////////
/////// Change Background for Users ////////////
/////////////

function bgImgNone() {
  document.querySelector("body").style.backgroundImage =
    "url(images/bgnone.jpg)";
}
function bgImg1() {
  document.querySelector("body").style.backgroundImage = "url(images/bg1.jpg)";
}
function bgImg2() {
  document.querySelector("body").style.backgroundImage = "url(images/bg2.jpg)";
}

function bgImg3() {
  document.querySelector("body").style.backgroundImage = "url(images/bg3.jpg)";
}

/////////////
////// Random Folder Placement /////////////
////////////

// collect all the divs
var folderDivs = document.querySelectorAll(".folder-container .resize-drag");
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for (var i = 0; i < folderDivs.length; i++) {
  // shortcut! the current div in the list
  var thisDiv = folderDivs[i];

  // get random numbers for each element
  var imgSizeWithOffset = 400;
  // get random numbers for each element
  randomTop = getRandomNumber(100, winHeight - imgSizeWithOffset);
  randomLeft = getRandomNumber(0, winWidth - imgSizeWithOffset);

  // update top and left position
  thisDiv.style.top = randomTop + "px";
  thisDiv.style.left = randomLeft + "px";
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
