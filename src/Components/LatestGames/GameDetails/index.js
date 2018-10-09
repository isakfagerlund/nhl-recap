import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { findByName } from '../../../helpers/teams';
import TeamTitle from './TeamTitle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
`;

class GameDetails extends Component {
  state = {
    date: '',
    teamOne: {},
    teamTwo: {},
    loading: true,
  };

  componentDidMount = async () => {
    moment.locale('us');
    this.parseVideoTitle();
  };

  parseVideoTitle = () => {
    const { videoTitle } = this.props;
    const titleWords = videoTitle.replace('Condensed Game:', '').split(' ');
    const date = moment(titleWords[0], 'DD/MM/YY').format('LLLL');
    let teams = titleWords
      .join(' ')
      .slice('MMDDYY  '.length)
      .split('@');

    teams = teams.map(team => findByName(team.trim()));

    this.setState({
      date,
      teamOne: teams[0],
      teamTwo: teams[1],
      loading: false,
    });
  };

  render() {
    const { teamOne, teamTwo, loading } = this.state;
    return (
      <Container>
        {!loading ? <TeamTitle teamOne={teamOne} teamTwo={teamTwo} /> : null}
      </Container>
    );
  }
}

export default GameDetails;
