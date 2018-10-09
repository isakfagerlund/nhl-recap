import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class LatestGames extends Component {
  state = {
    videos: [],
    loaded: false,
  };

  componentDidMount = async () => {
    const { data: { items } } = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL1NbHSfosBuHInmjsLcBuqeSV256FqlOO&key=AIzaSyDFlX0LLCc1b2cZG8aBM0BoN4a8aOq6hMQ');

    this.setState({ videos: items, loaded: true });
  }

  render() {
    const { videos } = this.state;
    return (
      <Container>
        {videos.map(item => <Game key={item.id} id={item.id} title={item.snippet.title} thumbnail={item.snippet.thumbnails.high.url} videoId={item.snippet.resourceId.videoId} />)}
      </Container>
    );
  }
}

export default LatestGames;
