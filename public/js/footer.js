$(function () {

  // Scroll
  $("footer a#aboutFooter").on("click", function (event) {
    event.preventDefault();
    var hash = this.hash;

    $('body,html').animate({ scrollTop: $(hash).offset().top }, 900, function () { window.location.hash = hash; })

  });

});