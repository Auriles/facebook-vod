import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import Auth from '../utils/AuthService.js';



class Nav extends Component {

  render() {
    return (

      <nav className="navbar navbar-default">
        <div className="navbar-header">
          {
            (isLoggedIn()) ? <Link className="navbar-brand" to="/accueil">Accueil</Link> : ''
          }
        </div>
         <ul className="nav navbar-nav">
          <li>

            {
              (isLoggedIn()) ? <Link to="/films-populaires">Populaires</Link> : ''
            }
          </li>
          <li>
            {
              (isLoggedIn()) ? <Link to="/films-mieux-notés">Mieux notés</Link> : ''
            }
          </li>
          <li>
            {
              (isLoggedIn()) ? <Link to="/films-prochaines-sorties">Prochainement</Link> : ''
            }
          </li>
          <li>
            {
              (isLoggedIn()) ? <Link to="/films-actuellement-au-cinéma">Actuellement au cinéma</Link> : ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            {
              (isLoggedIn()) ? (<button className="btn btn-danger log" onClick={() => logout()}>Déconnexion </button>) : (<button className="btn btn-info log" onClick={() => login()}>Connexion</button>)
            }
          </li>
        </ul>

      </nav>


    );
  }
}

export default Nav;