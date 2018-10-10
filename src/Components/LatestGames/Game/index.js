import React, { Component } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import GameDetails from '../GameDetails';

const VideoWrapper = styled.div`
  width: 100%;
`;

const Text = styled.p`
  color: rgba(4, 15, 26, 0.7);
  background: white;
  padding: 10px;
  margin: 40px 0px 30px 0px;
  border-radius: 0px;
`;

const Thumbnail = styled.div`
  border-radius: 8px;
  cursor: pointer;
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.2);
  background: url(${props => props.src});
  background-position: center -46px;
`;

const Image = styled.img`
  height: auto;
  width: 100%;

  @media (min-width: 600px) {
    height: 360px;
  }

`;

class Game extends Component {
  state = {
    showVideo: false,
  };

  render() {
    const playerOptions = {
      height: 270,
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const { thumbnail, title, videoId } = this.props;
    const { showVideo } = this.state;
    return (
      <VideoWrapper>
        <Text>{title.replace('Condensed Game:', '').replace('@', 'VS')}</Text>
        <GameDetails videoTitle={title} />
        <Thumbnail
          className="gameThumbnail"
          showVideo
          src={thumbnail}
          onClick={
            !showVideo
              ? () => this.setState({ showVideo: true })
              : () => this.setState({ showVideo: false })
          }
        />
        {showVideo ? <YouTube videoId={videoId} opts={playerOptions} /> : null}
      </VideoWrapper>
    );
  }
}

export default Game;
