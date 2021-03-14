
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

$(".components-folder").on("click", function () {
  if (touchtime == 0) {
    // set first click
    touchtime = new Date().getTime();
  } else {
    // compare first click to this click and see if they occurred within double click threshold
    if (new Date().getTime() - touchtime < 800) {
      // double click occurred
      window.location.href = "https://components.rutledgeismyname.com/";

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
