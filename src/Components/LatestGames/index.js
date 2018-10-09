import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';
import loading from './loading.gif';
import './style.css';

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
      <div className="LatestGames">
        {videos.map(item => <Game key={item.id} id={item.id} title={item.snippet.title} thumbnail={item.snippet.thumbnails.high.url} videoId={item.snippet.resourceId.videoId} />)}
      </div>
    );
  }
}

export default LatestGames;
