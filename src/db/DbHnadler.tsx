import {
  MatchStatistics,
  PlayedMatchProps,
} from "../components/interfaces/interfaces";

import p1 from "../assets/docasnaLoga/p1.png";
import p2 from "../assets/docasnaLoga/p2.png";
import p4 from "../assets/docasnaLoga/p4.png";
import myTeamLogo from "../assets/docasnaLoga/myTeamLogo.png";
import opoopnetLogo from "../assets/docasnaLoga/opoopnetLogo.png";
import p3 from "../assets/docasnaLoga/p3.png";

// Function to generate a single fictional match
export const getFictionalPlayedMatch = (
  activeButton: string,
  selectedOpponent: string,
  pickedDate: Date | null,
  defaultValue: string
): PlayedMatchProps => {
  // Determine the date or use a default value
  const date = pickedDate
    ? pickedDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "01 Jan, 2024";

  // Generate a random opponent if "All Opponents" is selected
  const opponentNames = ["Ravens", "Wolves", "Sharks", "Titans", "Lions"];
  const randomOpponent =
    opponentNames[Math.floor(Math.random() * opponentNames.length)];
  const opponent =
    selectedOpponent !== "All Opponents" ? selectedOpponent : randomOpponent;

  // Determine if it's a home or away match
  const isHomeMatch =
    activeButton === "Home" || (activeButton === "All" && Math.random() > 0.5);

  // Assign teams and logos based on match type
  const myTeam = "Melvik";
  const myLogo = myTeamLogo; // Replace with the correct path
  const awayLogo = opoopnetLogo; // Replace with a correct path
  const homeTeam = myTeam;
  const awayTeam = opponent;

  // Generate random scores
  const homeScore = Math.floor(Math.random() * 30) + 20; // Random score between 20 and 50
  const awayScore = Math.floor(Math.random() * 30) + 15; // Random score between 15 and 45

  // Calculate additional stats
  const differenceStat = homeScore - awayScore;
  const golas = homeScore + awayScore;

  return {
    idZapasu: Math.random().toString(36).substr(2, 9), // Generate a random match ID
    date: date,
    myTeam: homeTeam,
    awayTeam: awayTeam,
    homeScore: homeScore,
    awayScore: awayScore,
    myLogo: myLogo,
    awayLogo: awayLogo,
    homeMatch: isHomeMatch,
    shadow: "Generated shadow", // Optional field
    notes: `Generated match for ${defaultValue}`, // Optional field
    playerDetail: Math.random() > 0.5, // Random boolean
    golas: golas, // Total goals
    differenceStat: differenceStat, // Goal difference
  };
};

// Function to generate an array of fictional matches
export const getFictionalMatchesArray = (
  count: number,
  activeButton: string,
  selectedOpponent: string,
  pickedDate: Date | null,
  defaultValue: string
): PlayedMatchProps[] => {
  const matches: PlayedMatchProps[] = [];
  for (let i = 0; i < count; i++) {
    matches.push(
      getFictionalPlayedMatch(
        activeButton,
        selectedOpponent,
        pickedDate,
        defaultValue
      )
    );
  }
  return matches;
};

export const getFictionalMatchStatistics = (
  activeButton: string,
  selectedOpponent: string,
  pickedDate: Date | null,
  defaultValue: string
): MatchStatistics => {
  // Base values
  let wins = Math.floor(Math.random() * 10) + 5; // Random wins between 5 and 15
  let draws = Math.floor(Math.random() * 5); // Random draws between 0 and 5
  let loses = Math.floor(Math.random() * 10) + 5; // Random loses between 5 and 15
  let goalsFor = Math.floor(Math.random() * 300) + 50; // Random goals for between 50 and 350
  let goalsAgainst = Math.floor(Math.random() * 300) + 50; // Random goals against between 50 and 350

  // Adjustments based on activeButton
  if (activeButton === "Home") {
    wins += 3; // Favor home matches with more wins
    goalsFor += 20;
    goalsAgainst -= 10;
  } else if (activeButton === "Away") {
    loses += 2; // Favor away matches with more losses
    goalsFor -= 15;
    goalsAgainst += 15;
  }

  // Adjustments based on selectedOpponent
  if (selectedOpponent !== "All Opponents") {
    // Assume stronger opponents lead to more draws and fewer wins
    draws += 2;
    wins -= 1;
  }

  // Adjustments based on pickedDate
  if (pickedDate) {
    const currentYear = new Date().getFullYear();
    const pickedYear = pickedDate.getFullYear();

    // If matches are in a past year, reduce performance stats slightly
    if (pickedYear < currentYear) {
      wins = Math.max(0, wins - 2);
      goalsFor = Math.max(0, goalsFor - 30);
    }
  }

  // Adjustments based on defaultValue (team)
  if (defaultValue === "Melvik") {
    // Example team-specific adjustments
    wins += 2;
    goalsFor += 25;
    goalsAgainst -= 10;
  }

  // Ensure no negative values
  wins = Math.max(0, wins);
  draws = Math.max(0, draws);
  loses = Math.max(0, loses);
  goalsFor = Math.max(0, goalsFor);
  goalsAgainst = Math.max(0, goalsAgainst);

  return {
    wins,
    draws,
    loses,
    goalsFor,
    goalsAgainst,
  };
};

import { PlayerData } from "../components/interfaces/interfaces";

// Function to generate random player names
const generateRandomName = (): string => {
  const firstNames = [
    "John",
    "Jane",
    "Richard",
    "Emily",
    "Michael",
    "Sarah",
    "Robert",
    "Jessica",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Williams",
    "Jones",
    "Miller",
    "Davis",
    "Garcia",
  ];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

// Function to generate a single player
const createFictionalPlayer = (id: string, position: string): PlayerData => {
  const goals = Math.floor(Math.random() * 50);
  const shots = Math.floor(goals * 1.5) + 10; // More shots than goals
  const assists = Math.floor(Math.random() * 20);
  const accuracy = Math.floor((goals / shots) * 100);
  const sixMetersGoals = Math.floor(goals * 0.3);
  const sixMetersShots = sixMetersGoals + Math.floor(Math.random() * 5);
  const sevenMetersGoals = Math.floor(goals * 0.2);
  const sevenMetersShots = sevenMetersGoals + Math.floor(Math.random() * 3);
  const nineMetersGoals = Math.floor(goals * 0.15);
  const nineMetersShots = nineMetersGoals + Math.floor(Math.random() * 5);
  const wingGoals = Math.floor(goals * 0.25);
  const wingShots = wingGoals + Math.floor(Math.random() * 5);
  const breakGoals = Math.floor(goals * 0.1);
  const breakShots = breakGoals + Math.floor(Math.random() * 2);
  const differenceOffence = Math.floor(Math.random() * 20) - 10; // Random positive/negative value
  const differenceDefence = Math.floor(Math.random() * 20) - 10;
  const yellowCards = Math.floor(Math.random() * 5);
  const twoMinutes = Math.floor(Math.random() * 3);
  const redCards = Math.floor(Math.random() * 2);

  const profileImages = [p1, p2, p3, p4];
  const randomImage =
    profileImages[Math.floor(Math.random() * profileImages.length)];

  return {
    idPlayer: id,
    name: generateRandomName(),
    position,
    playedMatches: Math.floor(Math.random() * 30) + 5, // Between 5 and 35 matches
    goals,
    dresNumber: Math.floor(Math.random() * 99) + 1, // Jersey numbers 1–99
    shots,
    assists,
    accuracy,
    profileImg: randomImage,
    sixMetersGoals,
    sixMetersShots,
    sevenMetersGoals,
    sevenMetersShots,
    nineMetersGoals,
    nineMetersShots,
    wingGoals,
    wingShots,
    breakGoals,
    breakShots,
    differenceOffence,
    differenceDefence,
    yellowCards,
    twoMinutes,
    redCards,
  };
};

// Function to generate an array of players
export const createFictionalPlayers = (): PlayerData[] => {
  const positions = ["LW", "RW", "LB", "RB", "CB", "LP"];
  const players: PlayerData[] = [];

  // Generate 2 goalkeepers
  for (let i = 0; i < 2; i++) {
    players.push(createFictionalPlayer(`GK-${i + 1}`, "GK"));
  }

  // Generate at least 10 players for outfield positions
  for (let i = 0; i < 10; i++) {
    const position = positions[i % positions.length]; // Rotate through positions
    players.push(createFictionalPlayer(`P-${i + 1}`, position));
  }

  return players;
};

// Function to generate random player names

// Function to generate a single player
const generatePlayerStats = (position: string, index: number): PlayerData => {
  const goals = Math.floor(Math.random() * 50);
  const shots = Math.floor(goals * 1.5) + 10;
  const assists = Math.floor(Math.random() * 20);
  const accuracy = Math.floor((goals / shots) * 100);
  const sixMetersGoals = Math.floor(goals * 0.3);
  const sixMetersShots = sixMetersGoals + Math.floor(Math.random() * 5);
  const sevenMetersGoals = Math.floor(goals * 0.2);
  const sevenMetersShots = sevenMetersGoals + Math.floor(Math.random() * 3);
  const nineMetersGoals = Math.floor(goals * 0.15);
  const nineMetersShots = nineMetersGoals + Math.floor(Math.random() * 5);
  const wingGoals = Math.floor(goals * 0.25);
  const wingShots = wingGoals + Math.floor(Math.random() * 5);
  const breakGoals = Math.floor(goals * 0.1);
  const breakShots = breakGoals + Math.floor(Math.random() * 2);
  const differenceOffence = Math.floor(Math.random() * 20) - 10;
  const differenceDefence = Math.floor(Math.random() * 20) - 10;

  const profileImages = [p1, p2, p3, p4];
  const randomImage =
    profileImages[Math.floor(Math.random() * profileImages.length)];

  return {
    idPlayer: `P-${index + 1}`,
    name: generateRandomName(), // Assign a random name
    position,
    playedMatches: Math.floor(Math.random() * 30) + 5,
    goals,
    dresNumber: Math.floor(Math.random() * 99) + 1,
    shots,
    assists,
    accuracy,
    profileImg: randomImage,
    sixMetersGoals,
    sixMetersShots,
    sevenMetersGoals,
    sevenMetersShots,
    nineMetersGoals,
    nineMetersShots,
    wingGoals,
    wingShots,
    breakGoals,
    breakShots,
    differenceOffence,
    differenceDefence,
    yellowCards: Math.floor(Math.random() * 5),
    twoMinutes: Math.floor(Math.random() * 3),
    redCards: Math.floor(Math.random() * 2),
  };
};

// Main function to generate players based on filters
export const createFictionalPlayersByFilter = (
  filters: string
): PlayerData[] => {
  const [activeButton, selectedPosition, selectedOrder] = filters.split(" ");
  const positions = ["LW", "RW", "LB", "RB", "CB", "LP"];
  const totalPlayers = 15; // Total number of players to generate
  let players: PlayerData[] = [];

  // Generate players based on the activeButton and selectedPosition
  if (activeButton === "Players") {
    // If "All" is selected, allow all positions
    const filteredPositions =
      selectedPosition === "All" ? positions : [selectedPosition];

    players = Array.from({ length: totalPlayers }, (_, index) => {
      // Randomly pick a position if "All" is selected
      const position =
        selectedPosition === "All"
          ? positions[Math.floor(Math.random() * positions.length)]
          : filteredPositions[index % filteredPositions.length];
      return generatePlayerStats(position, index);
    });
  } else if (activeButton === "Goalkeepers") {
    // Generate only goalkeepers
    players = Array.from({ length: totalPlayers }, (_, index) =>
      generatePlayerStats("GK", index)
    );
  }

  // Sorting logic based on selectedOrder
  const sortFunctions: Record<
    string,
    (a: PlayerData, b: PlayerData) => number
  > = {
    "Jersey Number": (a, b) => a.dresNumber - b.dresNumber,
    "Matches Played": (a, b) => b.playedMatches - a.playedMatches,
    Goals: (a, b) => b.goals - a.goals,
    Shots: (a, b) => b.shots - a.shots,
    "Shot Accuracy": (a, b) => b.accuracy - a.accuracy,
    "Offence +-": (a, b) => b.differenceOffence - a.differenceOffence,
    "Defence +-": (a, b) => b.differenceDefence - a.differenceDefence,
  };

  // Default to sorting by "Goals" if no valid sort function is found
  const sortFunction = sortFunctions[selectedOrder] || sortFunctions["Goals"];
  players.sort(sortFunction);

  return players;
};

export const getFictionalPlayedMatchPrepless = (): PlayedMatchProps => {
  const opponentNames = ["Ravens", "Wolves", "Sharks", "Titans", "Lions"];
  const randomOpponent =
    opponentNames[Math.floor(Math.random() * opponentNames.length)];
  const isHomeMatch = Math.random() > 0.5;

  const homeTeam = "Melvik";
  const awayTeam = randomOpponent;

  const homeScore = Math.floor(Math.random() * 30) + 20; // Random score between 20 and 50
  const awayScore = Math.floor(Math.random() * 30) + 15; // Random score between 15 and 45

  const differenceStat = homeScore + awayScore;
  const golas = homeScore - awayScore;

  return {
    idZapasu: Math.random().toString(36).substr(2, 9), // Generate a random match ID
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    myTeam: homeTeam,
    awayTeam: awayTeam,
    homeScore: homeScore,
    awayScore: awayScore,
    myLogo: myTeamLogo,
    awayLogo: opoopnetLogo,
    homeMatch: isHomeMatch,
    shadow: "Generated shadow", // Example fictional field
    notes: "This is a generated match.", // Example fictional field
    playerDetail: Math.random() > 0.5, // Random boolean
    golas: golas, // Fictional stat
    differenceStat: differenceStat, // Fictional stat
  };
};

export const getFictionalMatchesArrayPrepless = (): PlayedMatchProps[] => {
  const matchCount = 5; // Number of matches to generate
  const matches: PlayedMatchProps[] = [];
  for (let i = 0; i < matchCount; i++) {
    matches.push(getFictionalPlayedMatchPrepless());
  }
  return matches;
};

import { AllPlayersDataprops } from "../components/interfaces/interfaces";

export const createFictionalAllPlayersStats = (): AllPlayersDataprops => {
  // Generate random values for stats
  const sixMetersGoals = Math.floor(Math.random() * 100);
  const sixMetersShots = sixMetersGoals + Math.floor(Math.random() * 50);
  const sevenMetersGoals = Math.floor(Math.random() * 50);
  const sevenMetersShots = sevenMetersGoals + Math.floor(Math.random() * 20);
  const nineMetersGoals = Math.floor(Math.random() * 70);
  const nineMetersShots = nineMetersGoals + Math.floor(Math.random() * 30);
  const wingGoals = Math.floor(Math.random() * 80);
  const wingShots = wingGoals + Math.floor(Math.random() * 40);
  const breakGoals = Math.floor(Math.random() * 40);
  const breakShots = breakGoals + Math.floor(Math.random() * 10);
  const technicalfaluts = Math.floor(Math.random() * 30);
  const twoMinSusp = Math.floor(Math.random() * 10);
  const differenceOffence = Math.floor(Math.random() * 20) - 10; // Positive or negative
  const differenceDefence = Math.floor(Math.random() * 20) - 10; // Positive or negative

  return {
    sixMetersGoals,
    sixMetersShots,
    sevenMetersGoals,
    sevenMetersShots,
    nineMetersGoals,
    nineMetersShots,
    wingGoals,
    wingShots,
    breakGoals,
    breakShots,
    technicalfaluts,
    twoMinSusp,
    differenceOffence,
    differenceDefence,
  };
};
