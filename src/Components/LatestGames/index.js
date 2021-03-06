import React, { Component, createContext, Fragment } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from 'react-loading';
import axios from 'axios';
import uuid from 'uuid/v4';
import posed, { PoseGroup } from 'react-pose';
import Game from './Game';
import teams from '../../helpers/teams';
import TeamSelector from '../TeamSelector';

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

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2rem;
  justify-content: center;
`;

class LatestGames extends Component {
  state = {
    videos: [],
    spoiler: false,
    nextPageToken: true,
    resetState: [],
    selectedTeams: [],
  };

  getVideos = async (type) => {
    const nonSpoilerVideos = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL1NbHSfosBuHInmjsLcBuqeSV256FqlOO&key=AIzaSyDFlX0LLCc1b2cZG8aBM0BoN4a8aOq6hMQ${
      this.state.nextPageToken && this.state.nextPageToken !== true
        ? `&pageToken=${this.state.nextPageToken}`
        : ''
    }`;
    const spoilerVideos = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL1NbHSfosBuHQUCC9DPnnaHqGOGYJRjQV&key=AIzaSyDFlX0LLCc1b2cZG8aBM0BoN4a8aOq6hMQ${
      this.state.nextPageToken && this.state.nextPageToken !== true
        ? `&pageToken=${this.state.nextPageToken}`
        : ''
    }`;
    const {
      data: { items, nextPageToken },
    } = await axios.get(type === 'spoiler' ? spoilerVideos : nonSpoilerVideos);

    this.setState({ nextPageToken });

    return items;
  };

  getSpoilerGames = async () => {
    const items = await this.getVideos('spoiler');

    this.setState({ videos: items, spoiler: true });
  };

  selectTeam = (teamName) => {
    const { resetState, selectedTeams } = this.state;
    let displayTeams = [...selectedTeams];

    if (teamName) {
      if (displayTeams.includes(teamName)) {
        displayTeams = displayTeams.filter(item => item !== teamName);
      } else {
        displayTeams.push(teamName);
      }
    }

    const filtered = resetState.filter(item => item.snippet.title.match(new RegExp(displayTeams.join('|'), 'ig')));

    this.setState({
      videos: filtered,
      selectedTeams: displayTeams,
    });
  };

  fetchVideos = async () => {
    const items = await this.getVideos();

    this.setState({ resetState: this.state.resetState.concat(items) });

    if (this.state.selectedTeams.length !== 0) {
      this.selectTeam();
    } else {
      this.setState({
        videos: this.state.videos.concat(items),
      });
    }
  };

  render() {
    const { videos, selectedTeams } = this.state;
    return (
      <Wrapper>
        <TeamSelector
          selectTeam={this.selectTeam}
          selectedTeams={selectedTeams}
        />
        <InfiniteScroll
          pageStart={0}
          loadMore={this.fetchVideos}
          hasMore={this.state.nextPageToken || false}
          loader={(
            <LoadingWrapper key={uuid()}>
              <ReactLoading type="bubbles" color="#2D6669" key={uuid()} />
            </LoadingWrapper>
)}
        >
          <VideoContainer>
            <PoseGroup>
              {videos.map(item => (
                <PoseItem key={uuid()}>
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
        </InfiniteScroll>
      </Wrapper>
    );
  }
}

export default LatestGames;
