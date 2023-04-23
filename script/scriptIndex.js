function showInfo(infoId) {
  var info = document.getElementById(infoId);
  if (info) {
    info.style.display = "block";
  }
}

function hideInfo(infoId) {
  var info = document.getElementById(infoId);
  if (info) {
    info.style.display = "none";
  }
}
