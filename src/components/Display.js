import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Home from './Home';
import { isLoggedIn } from '../utils/AuthService';
import axios from 'axios';



class Display extends Component {

  render() {

    return (
      <div>

        <Nav />

        <h3 className="text-center"> Bienvenue sur Facebook VOD </h3>
        <hr />

        <div className="col-sm-12">

          {/* FAIRE UN BOUTON POUR ACCEDER A L'APPLI */}


        </div>
      </div>
    );
  }
}

export default Display;