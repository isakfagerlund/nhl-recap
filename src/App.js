import React, { Component } from 'react';
import LatestGames from './Components/LatestGames'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`
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
