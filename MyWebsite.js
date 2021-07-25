function toggleDarkMode () {
  var bodyElement = document.getElementById("MainBackground");
  if ( bodyElement.style.background == "black") {
    bodyElement.style.background = "#ffd166";
    } else {
      bodyElement.style.background = "black";
    }
  }
