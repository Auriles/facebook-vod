/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Index.js
// Fichier racine qui permet de gérer les imports de librairies, des composants créés ainsi que d'effectuer le routing de l'application

// Librairies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Components
import Display from './components/Display';
import Callback from './components/Callback';
import Menu from './components/Menu';
import { isLoggedIn } from './utils/AuthService';

// Pages
import Home from './components/Home';
import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import NowPlayingMovies from './components/NowPlayingMovies';
import MoviePlayer from './components/MoviePlayer';

const Root = () => {

  return (
    <div className="container">
      {
        (isLoggedIn()) ? <Menu /> : ' '
      }
      <Router history={browserHistory}>
        <Route path="/" component={Display} />
        <Route path="/callback" component={Callback} />
        <Route path="/accueil" component={Home} />
        <Route path="/films-populaires" component={PopularMovies} />
        <Route path="/films-mieux-notes" component={TopRatedMovies} />
        <Route path="/films-prochaines-sorties" component={UpcomingMovies} />
        <Route path="/films-actuellement-au-cinema" component={NowPlayingMovies} />
        <Route path="/lecteur-video" component={MoviePlayer} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

