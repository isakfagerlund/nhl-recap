import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './style.css';

class Game extends Component {

  constructor() {
    super();
    this.state = { showVideo: false };
  }

  render() {
    const playerOptions = {
      height: 270,
      width: 480,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const { thumbnail, title, videoId } = this.props
    return (
      <div className="game">
        <p>{title}</p>
        <div className="gameThumbnail" onClick={!this.state.showVideo ? () => this.setState({ showVideo: true }) : () => this.setState({ showVideo: false })}>
          <img src={thumbnail} />
        </div>
        {this.state.showVideo ? <YouTube videoId={videoId} opts={playerOptions} /> : null}
      </div>
    );
  }
}

export default Game;
