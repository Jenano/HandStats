import { useState, useEffect } from "react";
import PlayedMatchesList from "../components/agregate/PlayedMatchesList";
import MyMatches from "../components/agregate/MyMatches";
import BTNSelect from "../components/primary/BTNSelect";
import DropdownPicker from "../components/primary/DrpPicker";
import DatePicker from "../components/primary/DatePicker";
import PageTitle from "../components/primary/PageTitle";
import TeamSelector from "../components/primary/TeamSelector";
import {
  DropdownPickerProps,
  PlayedMatchProps,
  PlayerData,
  MatchStatistics,
} from "../components/interfaces/interfaces";
import Header from "../components/primary/Header";
import PopUp from "../components/agregate/PopUp";
import MatchDetail from "../components/agregate/MatchDetail";

import {
  getFictionalMatchesArray,
  getFictionalMatchStatistics,
  createFictionalPlayers,
} from "../db/DbHnadler";

function Homepage({
  defaultValue,
  options,
  onSelect,
  signedUser,
}: DropdownPickerProps) {
  const [myMatchesStats, setMyMatchesStats] = useState<MatchStatistics>();
  const [playerData, setPlayerData] = useState<PlayerData[]>();
  const [matches, setMatches] = useState<PlayedMatchProps[]>([]);

  const [selectedOpponent, setSelectedOpponent] = useState("All Opponents");
  const handleOpponentChange = (value: string) => {
    setSelectedOpponent(value); // Update the selected opponent
  };

  const [pickedDate, setPickedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setPickedDate(date);
  };

  const pickerOptions = [
    "All Opponents",
    "Slavia Prague",
    "Sparta",
    "Brno",
    "Ostrava",
  ];

  const [openPopup, setOpenPopup] = useState(false);
  const [matchDetailData, setMatchDetailData] = useState<{
    playedMatchData: PlayedMatchProps;
    playerData: PlayerData[];
  } | null>(null);

  const handleMatchClick = (idZapasu: string) => {
    const selectedMatch = matches.find((match) => match.idZapasu === idZapasu);
    // const najdi hráče ktrí hráli  v zápase
    if (selectedMatch) {
      console.log("Selected Match:", selectedMatch);
      // Pass data to MatchDetail here
      setMatchDetailData({
        playedMatchData: selectedMatch,
        playerData: playerData || [],
      });
    }
    setOpenPopup(true);
  };

  const [activeButton, setActiveButton] = useState("All");
  useEffect(() => {
    console.log(
      activeButton +
        " " +
        selectedOpponent +
        " " +
        pickedDate +
        " " +
        defaultValue
    );
    const result = getFictionalMatchesArray(
      5,
      activeButton,
      selectedOpponent,
      pickedDate,
      defaultValue
    );
    const matchStats = getFictionalMatchStatistics(
      activeButton,
      selectedOpponent,
      pickedDate,
      defaultValue
    );
    const playInfo = createFictionalPlayers();
    setMatches(result);
    setMyMatchesStats(matchStats);
    setPlayerData(playInfo);
  }, [activeButton, selectedOpponent, pickedDate]);

  return (
    <>
      <Header value={signedUser || " "}></Header>
      <div className="max-w-3xl mx-5 pt-5 pb-24">
        <PopUp
          open={openPopup}
          children={
            matchDetailData && (
              <MatchDetail
                playedMatchData={matchDetailData.playedMatchData}
                playerData={matchDetailData.playerData}
              />
            )
          }
          onClick={() => setOpenPopup(!openPopup)}
          heading="Match Details"
        ></PopUp>
        <TeamSelector
          defaultValue={defaultValue}
          options={options}
          onSelect={onSelect}
        ></TeamSelector>
        <PageTitle value="My Matches"></PageTitle>

        <div className="h-6 self-stretch flex justify-between items-center">
          <BTNSelect
            active={activeButton === "All"}
            onClick={(label) => setActiveButton(label)}
            label="All"
          />
          <BTNSelect
            active={activeButton === "Home"}
            onClick={(label) => setActiveButton(label)}
            label="Home"
          />
          <BTNSelect
            active={activeButton === "Away"}
            onClick={(label) => setActiveButton(label)}
            label="Away"
          />
        </div>

        <div className="px-4">
          <DatePicker onSelect={handleDateChange}></DatePicker>
          <DropdownPicker
            defaultValue="All Opponents"
            options={pickerOptions}
            onSelect={handleOpponentChange}
          />
        </div>

        <MyMatches
          {...(myMatchesStats || {
            wins: 0,
            draws: 0,
            loses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
          })}
        />
        <PlayedMatchesList
          matches={matches}
          onClick={(idZapasu: string) => handleMatchClick(idZapasu)}
        />
      </div>
    </>
  );
}

export default Homepage;
