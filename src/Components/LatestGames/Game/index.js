import React, { Component } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import GameDetails from '../GameDetails';

const Text = styled.p`
  color: rgba(4, 15, 26, 0.7);
  background: white;
  padding: 10px;
  margin: 40px 0px 30px 0px;
  border-radius: 4px;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);
`;

const Thumbnail = styled.div`
  border-radius: 4px;
  cursor: pointer;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  height: auto;
  width: 100%;

  @media (min-width: 600px) {
    height: 360px;
    width: 480px;
  }
`;

class Game extends Component {
  state = {
    showVideo: false,
  };

  render() {
    const playerOptions = {
      height: 270,
      width: 480,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const { thumbnail, title, videoId } = this.props;
    const { showVideo } = this.state;
    return (
      <div>
        <Text>{title.replace('Condensed Game:', '').replace('@', 'VS')}</Text>
        {/* <GameDetails videoTitle={title} /> */}
        <Thumbnail
          className="gameThumbnail"
          onClick={
            !showVideo
              ? () => this.setState({ showVideo: true })
              : () => this.setState({ showVideo: false })
          }
        >
          <Image src={thumbnail} />
        </Thumbnail>
        {showVideo ? <YouTube videoId={videoId} opts={playerOptions} /> : null}
      </div>
    );
  }
}

export default Game;
