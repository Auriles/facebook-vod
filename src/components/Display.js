/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Page Display.js
// Cette page est la pincipale lorsque l'utilisateur n'est pas connecté ou se déconnecte

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import axios from 'axios';

class Display extends Component {

  render() {

    return (
      <div>

        {/* Barre de navigation */}
        <Nav />

        {/* Titre principale */}
        <div className="displayDivTitle">
          <h3 className="text-center displayTitle"> Bienvenue sur Facebook VOD </h3>
        </div>

        {/* Séparateur */}
        <hr />

        {/* Paragraphe */}
        <div className="col-sm-12 displayDivParagraph">
          {/* Appel de la fonction de connexion, permettant de savoir si un utilisateur est connecté ou non */}
          {
            (!isLoggedIn())
              ? <p className="text-center">
                Afin de pouvoir naviguer librement sur le site, <br />
                merci de bien vouloir vous connecter en cliquant sur le bouton "Connexion".
              </p> : ''
          }
        </div>

      </div>
    );
  }
}

export default Display;