/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Component Footer.js
// Ce component permet d'afficher le footer

import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (

      <footer>

        <div className="container">
          <div className="row">

            {/* Partie gauche du footer */}
            <div className="col-sm-4 text-center">
              <h4>Réseaux sociaux</h4>
              <div className="chite-divider"></div>
              <div className="icons">
                <a href="https://www.linkedin.com/in/auriles-el-haddad-80a992110/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square icon-linkedin" aria-hidden="true"></i></a>
                <a href="https://github.com/Auriles" target="_blank" rel="noopener noreferrer"  ><i class="fa fa-github-square icon-github" aria-hidden="true"></i></a>
              </div>
            </div>

            {/* Partie centre du footer */}
            <div className="col-sm-4 text-center">
              <a href="#navbar" id="aboutFooter">
                <span class="glyphicon glyphicon-chevron-up"></span>
              </a>
              <h5>© Copyright - Mentions légales <br /> <br />
                Auriles El Haddad. Tous droits réservés.</h5>
            </div>

            {/* Partie droite du footer */}
            <div className="col-sm-4 text-center">
              <h4>Me contacter</h4>
              <div class="white-divider"></div>
              <div>
                <a href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#097;&#117;&#114;&#105;&#108;&#101;&#115;&#046;&#099;&#111;&#109;"><i class="fa fa-envelope-o icons icon-mail" aria-hidden="true"></i></a>
                <p>&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#097;&#117;&#114;&#105;&#108;&#101;&#115;&#046;&#099;&#111;&#109;</p>
              </div>
              <div>
                <i class="fa fa-phone icons icon-phone" aria-hidden="true"></i>
                <p>06.50.37.44.78</p>
              </div>
            </div>
          </div>
        </div>

      </footer>

    );
  }
}

export default Footer;