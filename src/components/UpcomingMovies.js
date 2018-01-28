import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Nav from './Nav';
import Menu from './Menu';

class UpcomingMovies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    let sortByPopularity = "&sort_by=popularity.desc";
    let upcomingMovies = 'https://api.themoviedb.org/3/movie/upcoming?api_key=62903433da4304fcd4c249e07f22c550&language=en-US&page=1' + sortByPopularity;
    axios.get(upcomingMovies).then(response => {
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


        <div>
          {this.state.movie.map(movie =>
            <div className="">
              <div className="">
                <img className="" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />
                <div className="" key={movie.id}>{movie.title}</div>
              </div>
            </div>
          )}
        </div>

      </div>
    );

  }

}


export default UpcomingMovies;