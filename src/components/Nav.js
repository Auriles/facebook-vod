/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Component Nav.js
// Ce component permet de naviguer entre les différents filtres demandés par l'application, ainsi que se connecter ou se déconnecter.

import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import Auth from '../utils/AuthService.js';

class Nav extends Component {

  render() {
    return (

      // Barre de navigation
      <nav className="navbar navbar-default">

        {/* Lien vers la page d'accueil + appel de la fonction de connexion */}
        <div className="navbar-header">
          {
            (isLoggedIn()) ? <Link className="navbar-brand" to="/accueil"><i className="fa fa-home" aria-hidden="true"></i> Accueil</Link> : ''
          }
        </div>

        {/* Liste des éléments de navigation + appel de la fonction de connexion */}
        <ul className="nav navbar-nav">

          {/* Filtre des films populaires de l'API The Movie Database */}
          <li>
            {
              (isLoggedIn()) ? <Link to="/films-populaires">Populaires</Link> : ''
            }
          </li>

          {/* Filtre des films les mieux notés de l'API The Movie Database */}
          <li>
            {
              (isLoggedIn()) ? <Link to="/films-mieux-notés">Mieux notés</Link> : ''
            }
          </li>

          {/* Filtre des films prochaines sorties de l'API The Movie Database */}
          <li>
            {
              (isLoggedIn()) ? <Link to="/films-prochaines-sorties">Prochainement</Link> : ''
            }
          </li>

          {/* Filtre des films actuellement au cinéma de l'API The Movie Database */}
          <li>
            {
              (isLoggedIn()) ? <Link to="/films-actuellement-au-cinéma">Actuellement au cinéma</Link> : ''
            }
          </li>

        </ul>

        {/* Bouton de connexion / déconnexion + appel de la fonction de connexion et déconnexion */}
        <ul className="nav navbar-nav navbar-right">

          <li>
            {
              (isLoggedIn()) ? (<button className="btn btn-danger log" onClick={() => logout()}><i class="fa fa-sign-out" aria-hidden="true"></i> Déconnexion </button>) : (<button className="btn btn-info log" onClick={() => login()}><i class="fa fa-sign-in" aria-hidden="true"></i> Connexion</button>)
            }
          </li>

        </ul>

      </nav>
    );
  }
}

export default Nav;