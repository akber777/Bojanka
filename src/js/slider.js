document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".blogBoxSlider") !== null) {
    new Splide(".blogBoxSlider", {
      type: "loop",
      pagination: false,
    }).mount();
  }

  if (document.querySelector(".relatedSlider") !== null) {
    new Splide(".relatedSlider", {
      type: "loop",
      perPage: 4,
      pagination: false,
      arrows: false,
      gap: "1rem",
      breakpoints: {
        1701: {
          perPage: 4,
        },
        1428: {
          perPage: 3,
        },
        992: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
      },
    }).mount();
  }

  if (document.querySelector(".homeSlider") !== null) {
    new Splide(".homeSlider", {
      perPage: 3,
      type: "loop",
      pagination: false,
      padding: "15rem",
      arrows: window.innerWidth < 575 ? false : true,
      breakpoints: {
        3040: {
          perPage: 3,
          gap: "15rem",
        },
        1701: {
          perPage: 3,
          gap: "8rem",
          padding: "5rem",
        },
        1428: {
          perPage: 3,
          gap: "5rem",
          padding: "5rem",
        },
        992: {
          perPage: 2,
          gap: "5rem",
          padding: "2rem",
        },
        575: {
          perPage: 1,
          gap: "0",
          padding: "0",
        },
      },
    }).mount();
  }

  if (document.querySelector(".blogBoxSlider") !== null) {
    document.querySelectorAll(".blogBoxSlider").forEach((element) => {
      new Splide(element, {
        type: "loop",
        pagination: false,
      }).mount();
    });
  }

  if (document.querySelector(".sliderLand__slider") !== null) {
    new Splide(".sliderLand__slider", {
      type: "loop",
      perPage: 6,
      gap: "10rem",
      pagination: false,
      arrows: false,
      autoplay: true,
      breakpoints: {
        1701: {
          perPage: 4,
        },
        1428: {
          perPage: 3,
        },
        992: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
      },
    }).mount();
  }

  if (document.querySelector(".instagramSlider") !== null) {
    new Splide(".instagramSlider", {
      perPage: 5,
      arrows: false,
      gap: "2rem",
      type: "loop",
      pagination: false,
      breakpoints: {
        1701: {
          perPage: 4,
        },
        1428: {
          perPage: 3,
        },
        992: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
      },
    }).mount();
  }
});
