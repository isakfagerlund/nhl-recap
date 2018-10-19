import React, { Component } from 'react';
import styled from 'styled-components';
import teams from '../../helpers/teams';
import '../../index.css';

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(31, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  padding: 1rem 1rem;
  align-items: center;
  text-align: center;
  border-bottom: 4px solid gray;
  background: white;
`;

const Team = styled.div``;

const TeamLogo = styled.img`
  height: 2rem;
  opacity: 0.3;

  &:hover,
  &.selected {
    opacity: 1;
  }
`;

class TeamSelector extends Component {
  isSelected = (team) => {
    const { selectedTeams } = this.props;

    return team && selectedTeams.includes(team) ? 'selected' : '';
  };

  render() {
    const { selectTeam } = this.props;
    return (
      <NavContainer>
        {teams.map(team => (
          <Team key={team.id} team={team} onClick={() => selectTeam(team)}>
            <TeamLogo
              src={team.logo}
              alt={team.name}
              className={this.isSelected(team)}
            />
          </Team>
        ))}
      </NavContainer>
    );
  }
}

export default TeamSelector;
