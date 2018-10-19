import React, { Component } from 'react';
import styled from 'styled-components';
import '../../../../index.css';

const Container = styled.div``;

const TeamName = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: #333;
`;

const TeamVersus = styled(TeamName)`
  font-family: 'NHL', sans-serif;
  color: red;
`;

const TeamLogo = styled.img`
  width: 5%;
  height: 5%;
  padding: 0rem 1rem;
`;
class TeamTitle extends Component {
  render() {
    const { teamOne, teamTwo } = this.props;
    return (
      <Container>
        {teamOne.logo ? (
          <TeamLogo src={teamOne.logo} alt={teamOne.name} />
        ) : null}
        <TeamName>{teamOne.name.toUpperCase()}</TeamName>
        <br />
        <TeamVersus>VS</TeamVersus>
        <br />
        <TeamName>{teamTwo.name.toUpperCase()}</TeamName>
        {teamTwo.logo ? (
          <TeamLogo src={teamTwo.logo} alt={teamTwo.name} />
        ) : null}
      </Container>
    );
  }
}

export default TeamTitle;
