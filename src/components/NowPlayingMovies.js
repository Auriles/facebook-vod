/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Page NowPlayingMovies.js
// Cette page est la page filtre affichant les films actuellement au cinéma de l'API The Movie Database

import React from 'react';
import axios from 'axios';
import Nav from './Nav';

class NowPlayingMovies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
  }

  // Ici axios remplace fetch.
  // On initialise la variable sortByPopularity pour avoir les films par ordre de popularité depuis l'api
  // On initialise la variable nowPlayingMovies pour récupérer les informations des films actuellement au cinéma depuis l'api
  componentDidMount() {
    let sortByPopularity = "&sort_by=popularity.desc";
    let nowPlayingMovies = 'https://api.themoviedb.org/3/movie/now_playing?api_key=62903433da4304fcd4c249e07f22c550&language=fr-FR&page=1' + sortByPopularity;
    axios.get(nowPlayingMovies).then(response => {
      this.setState({ movie: response.data.results })
    });
  }

  render() {

    return (
      <div className="">

        {/* Barre de navigation */}
        <Nav />

        {/* Titre principal */}
        <h3 className="movieTitlePage">Films actuellement au cinéma</h3>

        <div className="container">

          {/* On parcourt le state afin de récupérer les données de l'api grâce au .map */}
          {/* Div movieGlobalDiv globale contenant toutes les informations des films */}
          {this.state.movie.map(movie =>

          <div className="movieGlobalDiv">

            {/* Titre du film */}
            <div className="col-lg-6 movieTitle" key={movie.id}> {movie.title} </div>

            {/* Contenant des informations de chaque film */}
            <div className="row">

              {/* Image du film */}
              <div className="col-lg-2 movieImage">
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
              </div>

              {/* Informations du film */}
              <div className="col-lg-9 movieContent" key={movie.id}>
                <span className="movieBold">Description :</span> <br/> {movie.overview} <br /> <hr/>
                <span className="movieBold">Date de sortie :</span> <br/> {movie.release_date} <br /> <hr/>
                <span className="movieBold">Note globale du film :</span> <br/> {movie.vote_average} / 10
              </div>

            </div> <br />

          </div>

          )}

        </div>

      </div>
    );

  }

}


export default NowPlayingMovies;