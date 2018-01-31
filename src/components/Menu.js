
/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Component Menu.js
// Menu présent sur toutes les pages

import React from 'react';
import { Link } from 'react-router';
import { isLoggedIn } from '../utils/AuthService';

class Menu extends React.Component {
  render() {
    return (
      <div>

        <section id="home">

          {/* <!-- Menu de navigation --> */}
          <div id="wrapper">
            <div className="overlay"></div>
            <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper">
              <ul className="nav sidebar-nav">

                {
                  (isLoggedIn()) ? (
                    <li>
                      <Link to='/accueil'>
                        <a href="/accueil">
                          <i className="fa fa-home" aria-hidden="true"></i>
                        </a>
                      </Link>
                    </li>
                  ) : ''
                }

                {
                  (isLoggedIn()) ? (
                    <li>
                      <Link to=''>
                        <a href="/lecteur-video">
                          <i className="fa fa-play-circle" aria-hidden="true"></i>
                        </a>
                      </Link>
                    </li>
                  ) : ''
                }

              </ul>
            </nav>

            {/* <!-- Bouton menu --> */}
            <div id="page-content-wrapper">
              <button type="button" className="hamburger is-closed"  data-toggle="offcanvas">
                <span className="hamb-top"></span>
                <span className="hamb-middle"></span>
                <span className="hamb-bottom"></span>
              </button>
            </div>
          </div>

        </section>

      </div>
    );
  }
}

export default Menu;