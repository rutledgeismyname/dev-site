"use strict";

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
/////// Copy URL so users can share ////////////
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
  }, 2300);
}

//////////////
/////// Username login ////////////
/////////////

const randomUsername = Math.trunc(Math.random() * 999) + 1;
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
      ).innerHTML = `Welcome, user${randomUsername}`;
    }
  });

function hideLogin() {
  $(".form-container").css("display", "none");
  $(".folder-container-1").css("display", "block");
  $(".folder-container-2").css("display", "block");
  $(".notification").delay(4300).fadeIn();
  $(".navbar").css("visibility", "visible");
}

function showLogin() {
  $(".form-container").css("display", "block");
  $(".folder-container-1").css("display", "none");
  $(".folder-container-2").css("display", "none");
  $(".notification").css("display", "none");
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

// Reset Folder position on Clean Up
$(".organizeFolder").click(function () {
  // Reset position
  $(".resize-drag").removeAttr("style").css("transition", ".5s");
  $(".resize-drag").removeAttr('data-x data-y');
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
  if (batteryObject.level <= 0.29) {
    
    setTimeout(function() { alert("Looks like you are running low on battery life. You should plug in."); }, 15500);
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
function bgSand() {
  document.querySelector("body").style.backgroundImage = "url(images/sand.jpg)";
}
function bgMountains() {
  document.querySelector("body").style.backgroundImage = "url(images/mountains.jpg)";
}
function bgRocks() {
  document.querySelector("body").style.backgroundImage = "url(images/rocks.jpg)";
}

/*
function bgPaint() {
  document.querySelector("body").style.backgroundImage = "url(images/paint.jpg)";
}*/

//////////////
/////// Custom Notification Hiding ////////////
/////////////

function closeNotification() {
  document.querySelector('.notification').style.display = 'none';
}

// Fix below 
/*
const notificationClosed = document.querySelector('.closed');
notificationClosed.addEventListener('click', function () {
  document.querySelector('.notification').style.display = 'none';
});
*/