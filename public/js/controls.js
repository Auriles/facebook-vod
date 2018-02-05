/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

/*-------------------------------*/

$(document).ready(function () {

  // Fonction servant à afficher les informations du bouton contrôles et à cacher la section MoviePlayerSection
  var open = function () {
    $(".controlsBox").click(function () {
      $(".moviePlayerSection").show(1500);
      $(".controlsBox").hide(1500);
      $(".moviePlayerWrapper").removeClass("col-lg-12");
      $(".moviePlayerWrapper").addClass("col-lg-6");
      $(".global").addClass("col-lg-6");
    });
  }

  // Fonction de clique sur l'icon pour fermer le bloc et afficher de nouveau que le bouton
  var close = function () {
    $(".cross").click(function () {
      $(".moviePlayerSection").hide();
      $(".controlsBox").show(500);
      $(".moviePlayerWrapper").addClass("col-lg-12");
      $(".moviePlayerWrapper").removeClass("col-lg-6");
      $(".global").removeClass("col-lg-6");
    });
  }

  // Appel des fonctions
  $(".moviePlayerSection").hide();
  open();
  close();

});