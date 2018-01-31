/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Components Callback.js
// Cette page est la page qui sert de redirection lors de l'authentification d'un utilisateur qui le renvoie automatiquement vers la page d'accueil

import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/accueil";
  }

  render() {
    return null;
  }
}

export default Callback;