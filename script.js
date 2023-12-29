document.querySelector(".play-demo").addEventListener("click", function () {
  openPopup("https://www.youtube.com/embed/TnSEND33feY?si=qbeJSMjsMTzQERrW");
});

function openPopup(videoUrl) {
  var popup = document.getElementById("videoPopup");
  var iframe = document.getElementById("videoIframe");

  iframe.src = videoUrl;
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("videoPopup");
  var iframe = document.getElementById("videoIframe");

  iframe.src = "";
  popup.style.display = "none";
}
