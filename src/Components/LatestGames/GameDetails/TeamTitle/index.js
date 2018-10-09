import React, { Component } from 'react';
import styled from 'styled-components';

import kebabCase from 'lodash/kebabCase';
import { slugifyName } from '../../../../helpers/teams';
import '../../../../../public/nhl-sprite.css';
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
        <TeamName>{teamOne.name.toUpperCase()}</TeamName>
        <br />
        <TeamVersus>VS</TeamVersus>
        <br />
        <TeamName>{teamTwo.name.toUpperCase()}</TeamName>
      </Container>
    );
  }
}

export default TeamTitle;
