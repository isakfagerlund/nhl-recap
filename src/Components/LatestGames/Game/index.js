import React, { Component } from 'react';
import YouTube from 'react-youtube';
import moment from 'moment';
import styled from 'styled-components';
import { teams, findByName } from '../../../helpers/teams';

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
  background: #333;
  background-position: center -46px;
  p {
    color: white;
  }
  
  &:hover {
    opacity: 0.8;
  }

`;

const TeamLogo = styled.img`
  height: 100px;
  width: 100px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  margin: 0 15px;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

class Game extends Component {
  state = {
    showVideo: false,
    teamOne: '',
    teamTwo: '',
  };

  componentDidMount() {
    this.parseVideoTitle(this.props.title);
  }

  parseGameTitle = title => title
    .replace('Condensed Game:', '')
    .replace('Condensed Gamed:', '')
    .replace('@', 'VS');

  parseVideoTitle = (videoTitle) => {
    const titleWords = videoTitle.replace('Condensed Game:', '').replace('Condensed Gamed:', '').split(' ');
    let teams = titleWords
      .join(' ')
      .slice('MMDDYY  '.length)
      .split('@');

    teams = teams.map(team => findByName(team.trim()));

    this.setState({
      teamOne: teams[0],
      teamTwo: teams[1],
    });
  };

  getLogo = item => item[0].logo

  render() {
    const playerOptions = {
      height: 270,
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const {
      thumbnail, title, videoId, selectedTeams,
    } = this.props;
    const { showVideo, teamOne, teamTwo } = this.state;
    return (
      <VideoWrapper>
        <Text>{this.parseGameTitle(title)}</Text>
        <Thumbnail
          className="gameThumbnail"
          showVideo
          src={thumbnail}
          onClick={
            !showVideo
              ? () => this.setState({ showVideo: true })
              : () => this.setState({ showVideo: false })
          }
        >
          <LogoWrapper>
            <TeamLogo
              src={teamOne.logo}
            />
            <TeamLogo
              src={teamTwo.logo}
            />
          </LogoWrapper>
        </Thumbnail>
        {showVideo ? <YouTube videoId={videoId} opts={playerOptions} /> : null}
      </VideoWrapper>
    );
  }
}

export default Game;
