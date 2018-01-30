import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/accueil";
  }

  render() {
    return null;
  }
}

export default Callback;