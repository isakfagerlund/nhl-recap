import React, { Component, createContext, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import posed, { PoseGroup } from 'react-pose';
import Game from './Game';
import teams from '../../helpers/teams';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  margin-top: 15px;
  display: inline-block;
`;

const Button = styled.button`
  margin-top: 15px;
  display: inline-block;
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
    resetState: [],
  };

  favoriteTeam = (e) => {
    const { videos, resetState } = this.state;
    const filtered = resetState.filter(item => item.snippet.title.includes(e.target.value));

    this.setState({ videos: filtered, initState: false });
  }

  resetTeams = () => {
    const { resetState, initState } = this.state;
    this.setState({ videos: resetState, initState: true });
  }

  componentDidMount = async () => {
    const {
      data: { items },
    } = await axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL1NbHSfosBuHInmjsLcBuqeSV256FqlOO&key=AIzaSyDFlX0LLCc1b2cZG8aBM0BoN4a8aOq6hMQ',
    );

    this.setState({ videos: items, resetState: items, loaded: true });
  };

  render() {
    const { videos, initState } = this.state;
    return (
      <Container>
        <Select onChange={e => this.favoriteTeam(e)}>{teams.map(team => <option key={team.id} value={team.teamName}>{team.name}</option>)}</Select>
        {!initState ? <Button onClick={this.resetTeams}>Reset</Button> : null}
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
      </Container>
    );
  }
}

export default LatestGames;
