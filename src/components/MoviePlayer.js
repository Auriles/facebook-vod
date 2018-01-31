/* Auriles El Haddad
31 / 01 / 2018
Facebook VOD - Tous droits reservés. */

// Page MoviePlayer.js
// Cette page est la page de lecteur de vidéo

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import ReactPlayer from 'react-player'
import Nav from './Nav';


class MoviePlayer extends Component {

  // Définition des éléments du state
  state = {
    url: 'https://www.youtube.com/watch?v=0WWzgGyAH6Y',
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    playbackRate: 1.0,
    loop: false
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }

  // Définition de la fonction playPause()
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  // Définition de la fonction setVolume()
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  // Définition de la fonction onSeekMouseDown()
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  // Définition de la fonction onSeekChange()
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  // Définition de la fonction onSeekMouseUp()
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  // Définition de la fonction onClickFullscreen()
  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }

  // Définition de la fonction onProgress()
  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  // Définition de la fonction renderLoadButton()
  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }

  ref = player => {
    this.player = player
  }

  render() {

    // Définition des constantes
    const { url, playing, volume, played, loaded } = this.state

    return (
      <div>

        {/* Barre de navigation */}
        <Nav />

        {/* Contenant global */}
        <div className='container'>

          <div className="row">

            {/* Titre Principal */}
            <h1 className="moviePlayerTitle">Facebook VOD Player</h1> <br/>

            {/* Contenant de la vidéo et du player */}
            <div className="col-lg-12 moviePlayerWrapper">

                <ReactPlayer
                  controls // En ajoutant cet attribut, les contrôles basiques du lecteur lié à l'url sont disponibles
                  ref={this.ref}
                  className='moviePlayerReact'
                  width='100%'
                  height='100%'
                  url={url}
                  playing={playing}
                  volume={volume}
                  onPlay={this.onPlay}
                  onPause={this.onPause}
                  onProgress={this.onProgress}
                  onDuration={this.onDuration}
                />

            </div>

          </div>

          <br/>

          <div className="row">

            {/* Affichage des contrôles manuels */}
            <div class="controlsBox">
              <div>
                <button class="moviePlayerButton">Afficher les contrôles manuels</button>
              </div>
            </div>

            {/* Contenant de la partie contrôle */}
            <div className="col-lg-6">

              <section className='moviePlayerSection'>

                <div className="row">

                  {/* Titre secondaire */}
                  <h3 className="moviePlayerTitle col-lg-8">Contrôles de la vidéo</h3>
                  <div className="col-lg-4">
                    <i className="fa fa-times cross" aria-hidden="true"></i>
                  </div>
                </div>

                <hr/>

                {/* Partie play / pause */}
                <div>
                  <h5 className="moviePlayerElements">Play / Pause</h5>
                  <div className="moviePlayerElements">
                    <button onClick={this.playPause} className="moviePlayerButton">{playing ? 'Pause' : 'Play'}</button>
                  </div>
                </div>

                <hr />

                {/* Partie plein écran */}
                <div>
                  <h5 className="moviePlayerElements">Plein écran</h5>
                  <div className="moviePlayerElements">
                    <button onClick={this.onClickFullscreen} className="moviePlayerButton">Fullscreen</button>
                  </div>
                </div>

                <hr />

                {/* Partie volume de la vidéo */}
                <div className="row">
                  <h5 className="moviePlayerElements col-lg-6">Volume de la vidéo</h5>
                  <div className="moviePlayerElements col-lg-6">
                    <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                  </div>
                </div>

                <hr />

                {/* Partie avancement de la vidéo (j'ai préféré utiliser cela plutôt que le +30s/-30s) */}
                <div className="row">
                  <h5 className="moviePlayerElements col-lg-6">Avancement de la vidéo</h5>
                  <div className="moviePlayerElements col-lg-6">
                    <input
                      type='range' min={0} max={1} step='any'
                      value={played}
                      onMouseDown={this.onSeekMouseDown}
                      onChange={this.onSeekChange}
                      onMouseUp={this.onSeekMouseUp}
                      className=''
                    />
                    <progress max={1} value={played} />
                  </div>
                </div>

                <hr />

                {/* Partie chargement de la vidéo */}
                <div className="row">
                  <h5 className="moviePlayerElements col-lg-6">Chargement de la vidéo</h5>
                  <div className="moviePlayerElements col-lg-6">
                    <progress max={1} value={loaded} />
                  </div>
                </div>

                <hr />

                {/* Partie Url personnalisée */}
                <div className="row">
                  <h5 className="moviePlayerElements col-lg-6">URL personnalisée</h5>
                  <div className="moviePlayerElements col-lg-6">
                    <input ref={input => { this.urlInput = input }} type='text' placeholder=' Entrez une URL' className="moviePlayerInput"/>
                    <button onClick={() => this.setState({ url: this.urlInput.value })} className="moviePlayerButton">OK</button>
                  </div>
                </div>

                <hr/>

                {/* Partie sous-titres (non implémentée) */}
                <div>
                  <h5 className="moviePlayerElements">Sous-titres</h5>
                  <div className="moviePlayerElements">
                    <button className="moviePlayerButton">Activer les sous-titres</button>
                  </div>
                </div>

                <hr/>

                {/* Partie choix de la langue (non implémentée) */}
                <div>
                  <h5 className="moviePlayerElements">Langue</h5>
                  <div className="moviePlayerElements">
                    <button className="moviePlayerButton">Changer la langue</button>
                  </div>
                </div>

                <hr/>

              </section>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default MoviePlayer;