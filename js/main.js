$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
  });
  const reviewsSlider = new Swiper(".reviews-slider", {
    // keyboard: {
    // enabled: true,
    // onlyInViewport: false,
    // },
    // Optional parameters
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("Click on menu");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom__visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(document).on("keydown", function (event) {
    if (event.key == "Escape") {
      closeModal(event);
    }
  });

  function openModal() {
    var modaOverlay = $(".modal__overlay");
    var modaDialog = $(".modal__dialog");
    modaOverlay.addClass("modal__overlay_visible");
    modaDialog.addClass("modal__dialog_visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modaOverlay = $(".modal__overlay");
    var modaDialog = $(".modal__dialog");
    modaOverlay.removeClass("modal__overlay_visible");
    modaDialog.removeClass("modal__dialog_visible");
  }

  $(".form").each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите имя!",
          minlength: "Имя доолжно быть не короче 2-х символов",
        },
        email: {
          required: "We need your email",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Телефон обязателен!",
        },
      },
    });
  })
});
