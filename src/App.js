import React, { Component } from 'react';
import styled from 'styled-components';
import Provider from './Provider';
import LatestGames from './Components/LatestGames';

const Container = styled.div`
  text-align: center;
`;
class App extends Component {
  render() {
    return (
      <Provider>
        <Container>
          <LatestGames />
        </Container>
      </Provider>
    );
  }
}

export default App;
