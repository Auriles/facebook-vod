import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Nav from './Nav';

class PopularMovies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    let sortByPopularity = "&sort_by=popularity.desc";
    let popularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=62903433da4304fcd4c249e07f22c550&language=fr-FR&page=1' + sortByPopularity;
    axios.get(popularMovies).then(response => {
      this.setState({ movie: response.data.results })
    });
  }

  render() {

    let baseImgURL = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
    let posterImgPath = this.state.movie.map(movie => movie.poster_path);
    let posterLink = baseImgURL + posterImgPath;

    return (
      <div className="">

        <Nav />

        <div className="container">
          {this.state.movie.map(movie =>
          <div>
            <div className="row">
              <div className="col-lg-12" key={movie.id}>Titre : {movie.title} </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <img className="" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="col-lg-10" key={movie.id}>
                Description : <br/> {movie.overview} <br /> <br/>
                Date de sortie : <br/> {movie.release_date} <br /> <br/>
                Note globale du film : <br/> {movie.vote_average} / 10
              </div>
            </div>
          </div>
          )}

        </div>

      </div>
    );

  }

}


export default PopularMovies;