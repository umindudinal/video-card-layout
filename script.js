// ********************************
const videoThumbs = document.querySelectorAll(".thumb-video");

videoThumbs.forEach((videoThumbs) => {
  videoThumbs.addEventListener("mouseover", function () {
    this.style.opacity = 1;
    this.play();
    this.playbackRate = 2.0;
  });
});
videoThumbs.forEach((videoThumbs) => {
  videoThumbs.addEventListener("mouseleave", function () {
    this.style.opacity = 0;
    this.pause();
  });
});

// ********************************
$(".video-card-title").each(function () {
  if ($(this).text().length > 50) {
    $(this).html($(this).text().substring(0, 60) + "....");
  }
});

// ********************************
const videoModelScreens = document.querySelectorAll(".video-model-screen");
const videoCards = document.querySelectorAll(".video-card-body");
const modelCloseBtns = document.querySelectorAll(".vid-model-clise-btn");

var videoModel = function (modelClick) {
  videoModelScreens[modelClick].classList.add("active");
};
videoCards.forEach((videoCard, i) => {
  videoCard.addEventListener("click", () => {
    videoModel(i);
  });
});

// ********************************
modelCloseBtns.forEach((modelCloseBtn) => {
  modelCloseBtn.addEventListener("click", () => {
    videoModelScreens.forEach((videoModelScreen) => {
      videoModelScreen.classList.remove("active");
    });
  });
});
