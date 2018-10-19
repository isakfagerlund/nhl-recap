import React, { Component } from 'react';
import styled from 'styled-components';
import teams from '../../helpers/teams';
import '../../index.scss';

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(31, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  align-items: center;
  text-align: center;
  border-bottom: 4px solid gray;
  background: white;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Team = styled.div``;

const TeamLogo = styled.img`
  height: 2rem;
  opacity: 0.3;

  &:hover,
  &.selected {
    opacity: 1;
  }

  &.selected:hover {
    opacity: 0.7;
  }
`;

class TeamSelector extends Component {
  isSelected = (teamName) => {
    const { selectedTeams } = this.props;

    return teamName && selectedTeams.includes(teamName) ? 'selected' : '';
  };

  render() {
    const { selectTeam } = this.props;
    return (
      <NavContainer>
        {teams.map(team => (
          <Team key={team.id} onClick={() => selectTeam(team.teamName)}>
            <TeamLogo
              src={team.logo}
              alt={team.name}
              className={this.isSelected(team.teamName)}
            />
          </Team>
        ))}
      </NavContainer>
    );
  }
}

export default TeamSelector;
