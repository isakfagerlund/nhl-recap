import React, { Component } from 'react';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import '../../../../index.css';
import DevilsLogo from '../../../../../assets/teamLogos/devils.svg';

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
        <img src={DevilsLogo} />
        <TeamName>{teamOne.name.toUpperCase()}</TeamName>
        <br />
        <TeamVersus>VS</TeamVersus>
        <br />
        {/* <img src={require('../../../../../assets/teamL/islanders.svg')} /> */}
        <TeamName>{teamTwo.name.toUpperCase()}</TeamName>
      </Container>
    );
  }
}

export default TeamTitle;
