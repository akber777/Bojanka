$(".header__mobBtn").on("click", function () {
  $(".header__mobileMenu").addClass("openMobMenu");
});

$(".closeMob").on("click", function () {
    $(".header__mobileMenu").removeClass("openMobMenu");
  });
