import React, { Component } from 'react';
import styled from 'styled-components';
import LatestGames from './Components/LatestGames';

const Container = styled.div`
  text-align: center;
`;
class App extends Component {
  render() {
    return (
      <Container>
        <LatestGames />
      </Container>
    );
  }
}

export default App;
