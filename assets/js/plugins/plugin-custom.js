"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let onboardingStepsSlider = document.querySelectorAll(
    ".onboarding-steps-slider"
  );
  const swiperNavButtonText = document.querySelector(".nextButton");

  onboardingStepsSlider &&
    onboardingStepsSlider.forEach(function (onboardingStepsSlider) {
      const swiper = new Swiper(onboardingStepsSlider, {
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 4,
        pagination: {
          el: ".onBoardingsliderPagingation",
          clickable: true,
        },
        navigation: {
          nextEl: onboardingStepsSlider.querySelector(".ara-next"),
        },
      });

      swiper.on("reachEnd", function () {
        swiperNavButtonText.innerHTML = `<a href="./import-seed.html" class="text-white py-4 bg-g300 font-semibold block rounded-full bg-g60 text-center px-6 text-base text-nowrap ">開始遊戲</a>`;
      });
    });
});
