import "./App.css";
import PlayedMatch from "./components/PlayedMatch";
function App() {
  const matchData = {
    date: "02 Feb, 2024",
    homeTeam: "Melvik",
    awayTeam: "Tubor",
    homeScore: 32,
    awayScore: 25,
    homeLogo: "/path-to-home-logo.png",
    awayMatch: false,
  };
  return (
    <>
      <PlayedMatch
        date={matchData.date}
        homeTeam={matchData.homeTeam}
        awayTeam={matchData.awayTeam}
        homeScore={matchData.homeScore}
        awayScore={matchData.awayScore}
        homeLogo={matchData.homeLogo}
        homeMatch={matchData.awayMatch}
      ></PlayedMatch>
    </>
  );
}

export default App;
