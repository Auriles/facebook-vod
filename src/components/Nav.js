import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import Auth from '../utils/AuthService.js';


class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/accueil">Facebook VOD</Link>
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
            <Link to="/films-prochaines-sorties">Prochainement</Link>
          </li>
          <li>
            <Link to="/films-actuellement-au-cinéma">Actuellement au cinéma</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            {
              (isLoggedIn()) ? (<button className="btn btn-danger log" onClick={() => logout()}>Log out </button>) : (<button className="btn btn-info log" onClick={() => login()}>Log In</button>)
            }
          </li>
        </ul>

        <div>

          <section id="home">

            {/* <!-- Menu de navigation --> */}
            <div id="wrapper">
              <div className="overlay"></div>
              <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
                <ul className="nav sidebar-nav">
                  <li className="sidebar-brand">
                  </li>
                  {/* <li>
                  <a id="date"></a>
                </li>
                <li>
                  <a id="hour"></a>
                </li> */}
                  <li>
                    <Link className="" to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>

                  </li>
                  <li>
                    <a href="login/login.html"><i class="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-play-circle" aria-hidden="true"></i>
                    </a>
                  </li>

                </ul>
              </nav>

              {/* <!-- Bouton menu --> */}
              <div id="page-content-wrapper">
                <button type="button" className="hamburger is-closed" data-toggle="offcanvas">
                  <span className="hamb-top"></span>
                  <span className="hamb-middle"></span>
                  <span className="hamb-bottom"></span>
                </button>
              </div>
            </div>

          </section>

        </div>
      </nav>


    );
  }
}
export default Nav;