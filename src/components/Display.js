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

        <div className="col-sm-12 blue">
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