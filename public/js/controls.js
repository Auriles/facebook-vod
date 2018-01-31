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
    });
  }

  // Fonction de clique sur l'icon pour fermer le bloc et afficher de nouveau que le bouton
  var close = function () {
    $(".cross").click(function () {
      $(".moviePlayerSection").hide(1500);
      $(".controlsBox").show(1500);
    });
  }

  // Appel des fonctions
  $(".moviePlayerSection").hide();
  open();
  close();

});