// Auriles El Haddad

$(document).ready(function () {

  // Variables et fonctions

  // Définition des variables pour le menu hamburger et fonctions appliquées à celui-ci
  var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

  var toggle = $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  var hour = setInterval(function () {
    document.getElementById('hour').innerHTML = new Date().toLocaleTimeString();
  }, 1000);

  trigger.click(function () {
    hamburger_cross();
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

  // Affichage de la date
  var globalDate = new Date();
  var year = globalDate.getFullYear();
  var month = globalDate.getMonth();
  var day = globalDate.getDate();
  var day_week = globalDate.getDay();
  var MONTH = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  var DAY_WEEK = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  month = MONTH[month];
  day_week = DAY_WEEK[day_week];
  document.getElementById("date").innerHTML = day_week + " " + day + " " + month + " " + year;

  // Appel des fonctions
  $(".rules").hide();
  open();
  close();

});