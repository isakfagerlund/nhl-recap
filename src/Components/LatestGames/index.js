import React, { Component } from 'react';
import Game from './Game'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class LatestGames extends Component {

  constructor() {
    super();
    this.state = { videos: [], loaded: false };
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL1NbHSfosBuHInmjsLcBuqeSV256FqlOO&key=AIzaSyDFlX0LLCc1b2cZG8aBM0BoN4a8aOq6hMQ`)
      .then(res => res.json())
      .then(json => this.setState({ videos: json.items, loaded: true }));
  }

  render() {
    return (
      <Container>
        {this.state.videos.map(item => <Game key={item.id} id={item.id} title={item.snippet.title} thumbnail={item.snippet.thumbnails.high.url} videoId={item.snippet.resourceId.videoId} />)}
      </Container>
    );
  }
}

export default LatestGames;
