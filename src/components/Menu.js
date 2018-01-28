import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    return (
      <div>

        <section id="home">

          {/* <!-- Menu de navigation --> */}
          <div id="wrapper">
            <div className="overlay"></div>
            <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
              <ul className="nav sidebar-nav">





                <li>
                  <Link to='/accueil'>
                    <a href="">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link>
                    <a href="">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link>
                    <a href="">
                      <i className="fa fa-play-circle" aria-hidden="true"></i>
                    </a>
                  </Link>
                </li>



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