import React, { useState, useEffect } from "react";
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
} from "../components/interfaces/interfaces";
import Header from "../components/primary/Header";
import PopUp from "../components/agregate/PopUp";
import MatchDetail from "../components/agregate/MatchDetail";

import { matches, playerData } from "../components/agregate/FictionalData";

function Homepage({ defaultValue, options, onSelect }: DropdownPickerProps) {
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
    "Opponent A",
    "Opponent BddddddddddddddddddddddddBdddddddddddddddddddddddd",
    "Opponent C",
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
        playerData: playerData,
      });
    }
    setOpenPopup(true);
  };

  const [activeButton, setActiveButton] = useState("All");
  useEffect(() => {
    console.log(activeButton + " " + selectedOpponent + " " + pickedDate);
  }, [activeButton, selectedOpponent, pickedDate]);

  // Data for MyMatches component
  const myMatchesStats = {
    wins: 8,
    draws: 1,
    loses: 1,
    goalsFor: 200,
    goalsAgainst: 140,
  };

  return (
    <>
      <Header value="Pepík"></Header>
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

        <MyMatches {...myMatchesStats} />
        <PlayedMatchesList
          matches={matches}
          onClick={(idZapasu: string) => handleMatchClick(idZapasu)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => setOpenPopup(!openPopup)}
        >
          Open Popup
        </button>
      </div>
    </>
  );
}

export default Homepage;
