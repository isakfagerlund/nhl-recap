import React, { Component } from 'react';
import styled from 'styled-components';
import '../../../../index.css';

const Container = styled.div``;

const TeamName = styled.span`
  font-size: 2rem;
  color: #333;
`;

const TeamVersus = styled(TeamName)`
  font-family: 'NHL', sans-serif;
  color: red;
`;

class TeamTitle extends Component {
  render() {
    const { teamOne, teamTwo } = this.props;
    return (
      <Container>
        <img src={require('../../../../../public/logos/devils.svg')} alt="First Team" />
        <TeamName>{teamOne.name.toUpperCase()}</TeamName>
        <br />
        <TeamVersus>VS</TeamVersus>
        <br />
        <img src={require('../../../../../public/logos/islanders.svg')} alt="Second Team" />
        <TeamName>{teamTwo.name.toUpperCase()}</TeamName>
      </Container>
    );
  }
}

export default TeamTitle;
