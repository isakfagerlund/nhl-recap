import React, { Component, createContext, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import posed, { PoseGroup } from 'react-pose';
import Game from './Game';
import teams from '../../helpers/teams';

const Wrapper = styled.div`
  text-align: center;
`;

const VideoContainer = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 75px;
    margin-top: 10px;
    margin-left: 75px;
    margin-right: 75px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Select = styled.select`
  margin-top: 15px;
  display: inline-block;
`;

const Button = styled.button`
  width: 250px;
  height: 30px;
  margin: 20px;
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  border: 0;
`;

const PoseItem = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

class LatestGames extends Component {
  state = {
    videos: [],
    loaded: false,
    initState: true,
    spoiler: false,
    resetState: [],
  };

  favoriteTeam = (e) => {
    const { videos, resetState } = this.state;
    const filtered = resetState.filter(item => item.snippet.title.includes(e.target.value));

    this.setState({ videos: filtered, initState: false });
  };

  resetTeams = () => {
    const { resetState, initState } = this.state;
    this.setState({ videos: resetState, initState: true, spoiler: false });
  };

  getVideos = async (type) => {
    const nonSpoilerVideos = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL1NbHSfosBuHInmjsLcBuqeSV256FqlOO&key=AIzaSyDFlX0LLCc1b2cZG8aBM0BoN4a8aOq6hMQ';
    const spoilerVideos = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL1NbHSfosBuHQUCC9DPnnaHqGOGYJRjQV&key=AIzaSyDFlX0LLCc1b2cZG8aBM0BoN4a8aOq6hMQ';
    const {
      data: { items },
    } = await axios.get(type === 'spoiler' ? spoilerVideos : nonSpoilerVideos);

    return items;
  };

  getSpoilerGames = async () => {
    const items = await this.getVideos('spoiler');

    this.setState({ videos: items, initState: false, spoiler: true });
  };

  componentDidMount = async () => {
    const items = await this.getVideos();

    this.setState({ videos: items, resetState: items, loaded: true });
  };

  render() {
    const { videos, initState, spoiler } = this.state;
    return (
      <Wrapper>
        <Select onChange={e => this.favoriteTeam(e)}>
          {teams.map(team => (
            <option key={team.id} value={team.teamName}>
              {team.name}
            </option>
          ))}
        </Select>
        {!initState ? <Button onClick={this.resetTeams}>Reset</Button> : null}
        {spoiler ? (
          <p>Showing Spoiler Games</p>
        ) : (
          <Button onClick={this.getSpoilerGames}>
            Change to spoiler games
          </Button>
        )}
        <VideoContainer>
          <PoseGroup>
            {videos.map(item => (
              <PoseItem key={item.id}>
                <Game
                  id={item.id}
                  title={item.snippet.title}
                  thumbnail={item.snippet.thumbnails.high.url}
                  videoId={item.snippet.resourceId.videoId}
                />
              </PoseItem>
            ))}
          </PoseGroup>
        </VideoContainer>
      </Wrapper>
    );
  }
}

export default LatestGames;
