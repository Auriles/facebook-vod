/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

/*-------------------------------*/

$(document).ready(function () {

  // Variables et fonctions

  // Définition des variables pour le menu hamburger et fonctions appliquées à celui-ci
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

  var toggle = $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  trigger.click(function () {
    hamburger_cross();
  });

});




