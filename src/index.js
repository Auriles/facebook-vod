import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

import Display from './components/Display';
import Callback from './components/Callback';
import Menu from './components/Menu';


import Home from './components/Home';
import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';
import UpcomingMovies from './components/UpcomingMovies';
import NowPlayingMovies from './components/NowPlayingMovies';
import MoviePlayer from './components/MoviePlayer';
import Player from './components/Player';

const Root = () => {

  return (
    <div className="container">
      <Menu />
      <Router history={browserHistory}>
        <Route path="/" component={Display} />
        <Route path="/callback" component={Callback} />
        <Route path="/accueil" component={Home} />
        <Route path="/films-populaires" component={PopularMovies} />
        <Route path="/films-mieux-notés" component={TopRatedMovies} />
        <Route path="/films-prochaines-sorties" component={UpcomingMovies} />
        <Route path="/films-actuellement-au-cinéma" component={NowPlayingMovies} />
        <Route path="/lecteur-vidéo" component={MoviePlayer} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

