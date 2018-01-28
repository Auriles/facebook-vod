import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

import Display from './components/Display';
import Callback from './components/Callback';

import Home from './components/Home';
import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';



const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Display} />
        <Route path="/callback" component={Callback} />
        <Route path="/accueil" component={Home} />
        <Route path="/films-populaires" component={PopularMovies} />
        <Route path="/films-mieux-notés" component={TopRatedMovies} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
