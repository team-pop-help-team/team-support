
let isFullScreen = false

function goFullScreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
      isFullScreen = true;
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
      isFullScreen = true;
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
      isFullScreen = true;
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
      isFullScreen = true;
    }
    document.getElementById("myAudio").play()
    document.getElementById("fullscreen").style.display = "none"
  }

  document.addEventListener("keydown", function (event) {
    if (isFullScreen && event.key === "Escape") {
        event.preventDefault();
        console.log(isFullScreen);
    }
    console.log(event.key);
});


const considerFirstPopup = () => {
  document.getElementById("firstPopup").style.display = "none"
  setTimeout(function() {
    document.getElementById("firstPopup").style.display = "block";
  }, 500);
}
const considerSecondPopup = () => {
    document.getElementById("secondPopup").style.display = "none"
    setTimeout(function() {
      document.getElementById("secondPopup").style.display = "block";
    }, 500);
  }