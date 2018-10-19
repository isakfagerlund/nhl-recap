import DevilsLogo from '../../assets/teamLogos/devils.svg';
import BruinsLogo from '../../assets/teamLogos/bruins.svg';
import FlyersLogo from '../../assets/teamLogos/flyers.svg';
import HurricanesLogo from '../../assets/teamLogos/hurricanes.svg';
import IslandersLogo from '../../assets/teamLogos/islanders.svg';
import MapleLeafsLogo from '../../assets/teamLogos/maple-leafs.svg';
import PanthersLogo from '../../assets/teamLogos/panthers.svg';
import PenguinsLogo from '../../assets/teamLogos/penguins.svg';
import SabresLogo from '../../assets/teamLogos/sabres.svg';
import SenatorsLogo from '../../assets/teamLogos/senators.svg';
import GoldenKnightsLogo from '../../assets/teamLogos/golden-knights.svg';
import CoyotesLogo from '../../assets/teamLogos/coyotes.svg';
import JetsLogo from '../../assets/teamLogos/jets.svg';
import WildLogo from '../../assets/teamLogos/wild.svg';
import BlueJacketsLogo from '../../assets/teamLogos/blue-jackets.svg';
import SharksLogo from '../../assets/teamLogos/sharks.svg';
import KingsLogo from '../../assets/teamLogos/kings.svg';
import StarsLogo from '../../assets/teamLogos/stars.svg';
import DucksLogo from '../../assets/teamLogos/ducks.svg';
import Canuckslogo from '../../assets/teamLogos/canucks.svg';
import OilersLogo from '../../assets/teamLogos/oilers.svg';
import AvalancheLogo from '../../assets/teamLogos/avalanche.svg';
import FlamesLogo from '../../assets/teamLogos/flames.svg';
import BluesLogo from '../../assets/teamLogos/blues.svg';
import PredatorsLogo from '../../assets/teamLogos/predators.svg';
import RedWingsLogo from '../../assets/teamLogos/red-wings.svg';
import BlackhawksLogo from '../../assets/teamLogos/blackhawks.svg';
import CapitalsLogo from '../../assets/teamLogos/capitals.svg';
import TampaBayLogo from '../../assets/teamLogos/tampa-bay.svg';
import CanadiensLogo from '../../assets/teamLogos/canadiens.svg';
import RangersLogo from '../../assets/teamLogos/rangers.svg';

const teams = [
  {
    id: 1,
    name: 'New Jersey Devils',
    abbreviation: 'NJD',
    teamName: 'Devils',
    shortName: 'New Jersey',
    logo: DevilsLogo,
  },
  {
    id: 2,
    name: 'New York Islanders',
    abbreviation: 'NYI',
    teamName: 'Islanders',
    shortName: 'NY Islanders',
    logo: IslandersLogo,
  },
  {
    id: 3,
    name: 'New York Rangers',
    abbreviation: 'NYR',
    teamName: 'Rangers',
    shortName: 'NY Rangers',
    logo: RangersLogo,
  },
  {
    id: 4,
    name: 'Philadelphia Flyers',
    abbreviation: 'PHI',
    teamName: 'Flyers',
    shortName: 'Philadelphia',
    logo: FlyersLogo,
  },
  {
    id: 5,
    name: 'Pittsburgh Penguins',
    abbreviation: 'PIT',
    teamName: 'Penguins',
    shortName: 'Pittsburgh',
    logo: PenguinsLogo,
  },
  {
    id: 6,
    name: 'Boston Bruins',
    abbreviation: 'BOS',
    teamName: 'Bruins',
    shortName: 'Boston',
    logo: BruinsLogo,
  },
  {
    id: 7,
    name: 'Buffalo Sabres',
    abbreviation: 'BUF',
    teamName: 'Sabres',
    shortName: 'Buffalo',
    logo: SabresLogo,
  },
  {
    id: 8,
    name: 'Montréal Canadiens',
    abbreviation: 'MTL',
    teamName: 'Canadiens',
    shortName: 'Montréal',
    logo: CanadiensLogo,
  },
  {
    id: 9,
    name: 'Ottawa Senators',
    abbreviation: 'OTT',
    teamName: 'Senators',
    shortName: 'Ottawa',
    logo: SenatorsLogo,
  },
  {
    id: 10,
    name: 'Toronto Maple Leafs',
    abbreviation: 'TOR',
    teamName: 'Maple Leafs',
    shortName: 'Toronto',
    logo: MapleLeafsLogo,
  },
  {
    id: 12,
    name: 'Carolina Hurricanes',
    abbreviation: 'CAR',
    teamName: 'Hurricanes',
    shortName: 'Carolina',
    logo: HurricanesLogo,
  },
  {
    id: 13,
    name: 'Florida Panthers',
    abbreviation: 'FLA',
    teamName: 'Panthers',
    shortName: 'Florida',
    logo: PanthersLogo,
  },
  {
    id: 14,
    name: 'Tampa Bay Lightning',
    abbreviation: 'TBL',
    teamName: 'Lightning',
    shortName: 'Tampa Bay',
    logo: TampaBayLogo,
  },
  {
    id: 15,
    name: 'Washington Capitals',
    abbreviation: 'WSH',
    teamName: 'Capitals',
    shortName: 'Washington',
    logo: CapitalsLogo,
  },
  {
    id: 16,
    name: 'Chicago Blackhawks',
    abbreviation: 'CHI',
    teamName: 'Blackhawks',
    shortName: 'Chicago',
    logo: BlackhawksLogo,
  },
  {
    id: 17,
    name: 'Detroit Red Wings',
    abbreviation: 'DET',
    teamName: 'Red Wings',
    shortName: 'Detroit',
    logo: RedWingsLogo,
  },
  {
    id: 18,
    name: 'Nashville Predators',
    abbreviation: 'NSH',
    teamName: 'Predators',
    shortName: 'Nashville',
    logo: PredatorsLogo,
  },
  {
    id: 19,
    name: 'St. Louis Blues',
    abbreviation: 'STL',
    teamName: 'Blues',
    shortName: 'St Louis',
    logo: BluesLogo,
  },
  {
    id: 20,
    name: 'Calgary Flames',
    abbreviation: 'CGY',
    teamName: 'Flames',
    shortName: 'Calgary',
    logo: FlamesLogo,
  },
  {
    id: 21,
    name: 'Colorado Avalanche',
    abbreviation: 'COL',
    teamName: 'Avalanche',
    shortName: 'Colorado',
    logo: AvalancheLogo,
  },
  {
    id: 22,
    name: 'Edmonton Oilers',
    abbreviation: 'EDM',
    teamName: 'Oilers',
    shortName: 'Edmonton',
    logo: OilersLogo,
  },
  {
    id: 23,
    name: 'Vancouver Canucks',
    abbreviation: 'VAN',
    teamName: 'Canucks',
    shortName: 'Vancouver',
    logo: Canuckslogo,
  },
  {
    id: 24,
    name: 'Anaheim Ducks',
    abbreviation: 'ANA',
    teamName: 'Ducks',
    shortName: 'Anaheim',
    logo: DucksLogo,
  },
  {
    id: 25,
    name: 'Dallas Stars',
    abbreviation: 'DAL',
    teamName: 'Stars',
    shortName: 'Dallas',
    logo: StarsLogo,
  },
  {
    id: 26,
    name: 'Los Angeles Kings',
    abbreviation: 'LAK',
    teamName: 'Kings',
    shortName: 'Los Angeles',
    logo: KingsLogo,
  },
  {
    id: 28,
    name: 'San Jose Sharks',
    abbreviation: 'SJS',
    teamName: 'Sharks',
    shortName: 'San Jose',
    logo: SharksLogo,
  },
  {
    id: 29,
    name: 'Columbus Blue Jackets',
    abbreviation: 'CBJ',
    teamName: 'Blue Jackets',
    shortName: 'Columbus',
    logo: BlueJacketsLogo,
  },
  {
    id: 30,
    name: 'Minnesota Wild',
    abbreviation: 'MIN',
    teamName: 'Wild',
    shortName: 'Minnesota',
    logo: WildLogo,
  },
  {
    id: 52,
    name: 'Winnipeg Jets',
    abbreviation: 'WPG',
    teamName: 'Jets',
    shortName: 'Winnipeg',
    logo: JetsLogo,
  },
  {
    id: 53,
    name: 'Arizona Coyotes',
    abbreviation: 'ARI',
    teamName: 'Coyotes',
    shortName: 'Arizona',
    logo: CoyotesLogo,
  },
  {
    id: 54,
    name: 'Vegas Golden Knights',
    abbreviation: 'VGK',
    teamName: 'Golden Knights',
    shortName: 'Vegas',
    logo: GoldenKnightsLogo,
  },
];

export function findByName(name) {
  const teamObject = teams.find(team => team.teamName === name);
  return teamObject || { name };
}

export default teams;
