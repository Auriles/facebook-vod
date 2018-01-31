/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Page Home.js
// Cette page est la pincipale lorsque l'utilisateur est connecté

import React from 'react';
import Nav from './Nav';

class Home extends React.Component {

  render() {

    return (
      <div className="container">

      {/* Barre de navigation */}
      <Nav />

        {/* Titre principale */}
        <div className="homeDivTitle">
          <h3 className="text-center homeTitle"> Bienvenue sur Facebook VOD </h3>
        </div>

        {/* Titre secondaire */}
        <div className="homeDivTitle2">
          <h4 className="text-center"> Afin de faciliter votre navigation, voici une petite explication du projet </h4>
        </div>

        <div class="container">

          <div class="row">

            {/* Div globale */}
            <div class="col-lg-12 homeDivGlobal">

              <div class="row">

                {/* Card explicative gauche */}
                <div class="col-sm-4 homeDivParagraph1 homeCard">
                  <p>
                    Ce projet consistait à <span className="homeBold">créer une plateforme de vidéo à la demande</span>. <br /> <br />
                    De ce fait, il fallait créer un menu de navigation comportant <span className="homeBold">différents filtres</span>. <br /> <br />
                    Les filtres une fois effectués, font <span className="homeBold">appel à une API </span> <br /> <i className="fa fa-arrow-right homeLink" aria-hidden="true"></i>
                    <a href="https://www.themoviedb.org/" className="homeLink"> The Movie Database</a>, <br />
                    et permettent d'afficher les films en question.
                  </p>
                </div>

                {/* Card explicative milieu */}
                <div class="col-sm-3 homeDivParagraph2 homeCard">
                  <p>
                    Le menu à gauche vous permet de retourner à la <span className="homeBold">page d'accueil</span> et d'accéder au <span className="homeBold">lecteur vidéo</span>. <br /> <br />
                    Le lecteur permet d'entrer une url et ainsi pouvoir regarder la vidéo en question.
                  </p>
                </div>

                {/* Card explicative droite */}
                <div class="col-sm-3 homeDivParagraph3 homeCard">
                  <p>
                    La barre de navigation contenant les <span className="homeBold">différents filtres</span>, <br/>
                    permet d'accéder aux pages de ces derniers et d'<span className="homeBold">afficher les films</span> correspondants.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    );

  }

}


export default Home;