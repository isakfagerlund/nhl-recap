import React, { Component } from 'react';
import YouTube from 'react-youtube';
import moment from 'moment';
import styled from 'styled-components';
import { teams, findByName } from '../../../helpers/teams';

const VideoWrapper = styled.div`
  width: 100%;
`;

const Text = styled.div`
  color: rgba(4, 15, 26, 0.7);
  padding: 10px;
  margin: 40px 0px 20px 0px;
  border-radius: 8px;

  p {
    margin: 0;
    font-weight: bold;
    padding-bottom: 10px;
  }

  span {
    opacity: 0.6;
  }
`;

const Thumbnail = styled.div`
  border-radius: 8px;
  cursor: pointer;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.07);
  background: white;
  background-position: center -46px;
  transition: transform 0.2s ease;

  p {
    color: white;
  }

  @media (hover: hover) { 
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TeamLogo = styled.img`
  height: 80px;
  width: 80px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  margin: 0 25px;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

class Game extends Component {
  state = {
    showVideo: false,
    date: '',
    teamOne: '',
    teamTwo: '',
  };

  componentDidMount() {
    this.parseVideoTitle(this.props.title);
  }

  sanitizeGameTitle = title => this.parseGameTitle(title)
    .slice('MM/DD/YY'.length)
    .replace('@', 'vs');

  parseGameTitle = title => title
    .replace('Condensed Game:', '')
    .replace('Condensed Games:', '')
    .replace('Condensed Gamed:', '')
    .replace(' at ', ' @ ')
    .replace(
      new RegExp(
        /((Cup Final|Second Round|First Round|Round 1|R1|ECF|WCF), Gm[0-9]):/,
        'gi',
      ),
      '',
    );

  parseVideoTitle = (videoTitle) => {
    const titleWords = this.parseGameTitle(videoTitle).split(' ');
    const date = moment(titleWords[0], 'MM/DD/YY')
      .startOf('day')
      .fromNow();

    let teams = titleWords
      .join(' ')
      .slice('MM/DD/YY'.length)
      .split('@');

    teams = teams.map(team => findByName(team.trim()));

    this.setState({
      date,
      teamOne: teams[0],
      teamTwo: teams[1],
    });
  };

  getLogo = item => item[0].logo;

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
    const {
      showVideo, teamOne, teamTwo, date,
    } = this.state;
    return (
      <VideoWrapper>
        <Text>
          <p>{this.sanitizeGameTitle(title)}</p>
          <span>{date}</span>
        </Text>
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
            <TeamLogo src={teamOne.logo} alt={teamOne.name} />
            <TeamLogo src={teamTwo.logo} alt={teamTwo.name} />
          </LogoWrapper>
        </Thumbnail>
        {showVideo ? <YouTube videoId={videoId} opts={playerOptions} /> : null}
      </VideoWrapper>
    );
  }
}

export default Game;
