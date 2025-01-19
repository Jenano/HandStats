import React, { useState, useEffect } from "react";
import PlayedMatchesList from "../components/agregate/PlayedMatchesList";
import MyMatches from "../components/agregate/MyMatches";
import BTNSelect from "../components/primary/BTNSelect";
import DropdownPicker from "../components/primary/DrpPicker";
import DatePicker from "../components/primary/DatePicker";
import PageTitle from "../components/primary/PageTitle";
import TeamSelector from "../components/primary/TeamSelector";
import { DropdownPickerProps } from "../components/primary/DrpPicker";

function Homepage({ defaultValue, options, onSelect }: DropdownPickerProps) {
  const matches = [
    {
      date: "02 Feb, 2024",
      homeTeam: "Melvik",
      awayTeam: "Tubor",
      homeScore: 32,
      awayScore: 25,
      homeLogo: "/path-to-home-logo.png",
      homeMatch: true,
    },
    {
      date: "10 Jan, 2024",
      homeTeam: "Arsenal",
      awayTeam: "West Ham",
      homeScore: 28,
      awayScore: 22,
      homeLogo: "/path-to-arsenal-logo.png",
      homeMatch: false,
    },
    {
      date: "15 Jan, 2024",
      homeTeam: "Chelsea",
      awayTeam: "Liverpool",
      homeScore: 18,
      awayScore: 21,
      homeLogo: "/path-to-chelsea-logo.png",
      homeMatch: true,
    },
  ];

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
      <div className="max-w-3xl mx-5 mt-5">
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
        <PlayedMatchesList matches={matches} />
      </div>
    </>
  );
}

export default Homepage;
