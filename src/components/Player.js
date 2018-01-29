import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'




// import './reset.css'
// import './defaults.css'
// import './range.css'
// import './player.css'


import ReactPlayer from 'react-player'
import Duration from 'react-player'


class Player extends Component {

  state = {
    url: 'https://www.youtube.com/watch?v=Jm8h3ugBLc0',
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
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

  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }

  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

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

    const { url, playing, volume, played, loaded, duration } = this.state
    const SEPARATOR = ' · '

    return (
      <div className='app'>
        <section className='section'>
          <h1>Facebook VOD Player</h1>
          <div className='player-wrapper'>
            <ReactPlayer
              controls // A enlever avec Jquery et rendre accessible au besoin
              ref={this.ref}
              className='react-player'
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

          <table><tbody>

            <tr>
              <th>Play / Pause</th>
              <td>

                <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>

              </td>
            </tr>

            <tr>
              <th>Plein écran</th>
              <td>

                <button onClick={this.onClickFullscreen}>Fullscreen</button>

              </td>
            </tr>

            <tr>
              <th>Volume de la vidéo</th>
              <td>
                <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
              </td>
            </tr>

            <tr>
              <th>Avancement de la vidéo</th>
              <td>

                <input
                  type='range' min={0} max={1} step='any'
                  value={played}
                  onMouseDown={this.onSeekMouseDown}
                  onChange={this.onSeekChange}
                  onMouseUp={this.onSeekMouseUp}
                  className=''
                />
                <progress max={1} value={played} /></td>
            </tr>
            <tr>
              <th>Chargement de la vidéo</th>
              <td><progress max={1} value={loaded} /></td>
            </tr>
          </tbody></table>
        </section>

        <section className='section'>
          <table><tbody>

            <tr>
              <th>URL personnalisée</th>
              <td>
                <input ref={input => { this.urlInput = input }} type='text' placeholder='Entrez une URL' />
                <button onClick={() => this.setState({ url: this.urlInput.value })}>OK</button>
              </td>
            </tr>
          </tbody></table>
        </section>

      </div>
    )
  }
}

export default Player;