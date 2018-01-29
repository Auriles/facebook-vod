import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import axios from 'axios';

class Display extends Component {

  render() {

    return (
      <div>

        <Nav />

        <h3 className="text-center"> Bienvenue sur Facebook VOD </h3>

        <hr />

        <div className="col-sm-6">

          {/* FAIRE UN BOUTON POUR ACCEDER A L'APPLI */}

          <p>Afin de pouvoir naviguer librement sur le site,
            merci de bien vouloir vous connecter et de vous authentifier en cliquant sur le bouton "Se connecter" présent dans la barre de navigation</p>



        </div>
      </div>
    );
  }
}

export default Display;