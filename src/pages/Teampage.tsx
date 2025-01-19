import React, { useState, useEffect } from "react";
import PlayerStatTable from "../components/agregate/PlayerStatTable";
import { PlayerData } from "../components/agregate/PlayerStatTable";
import { AllPlayersDataprops } from "../components/agregate/PlayerAllStat";
import DropdownPicker from "../components/primary/DrpPicker";
import BTNSelect from "../components/primary/BTNSelect";
import PageTitle from "../components/primary/PageTitle";
import PlayerAllStat from "../components/agregate/PlayerAllStat";
import TeamSelector from "../components/primary/TeamSelector";
import { DropdownPickerProps } from "../components/primary/DrpPicker";

import Profiel from "../assets/docasnaLoga/profile.jpeg";
function Teampage({ defaultValue, options, onSelect }: DropdownPickerProps) {
  const playerData: PlayerData[] = [
    {
      name: "Richard N.",
      position: "LB",
      goals: 32,
      playedMatches: 24,
      shots: 40,
      dresNumber: 11,
      accuracy: 80,
      profileImg: Profiel,
      sixMetersGoals: 10,
      sixMetersShots: 15,
      sevenMetersGoals: 5,
      sevenMetersShots: 7,
      nineMetersGoals: 3,
      nineMetersShots: 5,
      wingGoals: 12,
      wingShots: 16,
      breakGoals: 2,
      breakShots: 3,
      differenceOffence: -15,
      differenceDefence: 3,
      yellowCards: 1,
      twoMinutes: 2,
      redCards: 0,
      assists: 10,
    },
    {
      name: "Jane D.",
      position: "FW",
      goals: 28,
      playedMatches: 11,
      shots: 35,
      dresNumber: 31,
      accuracy: 78,
      profileImg: Profiel,
      sixMetersGoals: 8,
      sixMetersShots: 10,
      sevenMetersGoals: 4,
      sevenMetersShots: 6,
      nineMetersGoals: 6,
      nineMetersShots: 9,
      wingGoals: 10,
      wingShots: 12,
      breakGoals: 1,
      breakShots: 2,
      differenceOffence: 12,
      differenceDefence: 20,
      yellowCards: 0,
      twoMinutes: 1,
      redCards: 0,
      assists: 8,
    },
  ];

  const allPlayersStats: AllPlayersDataprops = {
    sixMetersGoals: 100,
    sixMetersShots: 150,
    sevenMetersGoals: 50,
    sevenMetersShots: 70,
    nineMetersGoals: 80,
    nineMetersShots: 120,
    wingGoals: 60,
    wingShots: 90,
    breakGoals: 40,
    breakShots: 50,
    technicalfaluts: 15,
    twoMinSusp: 5,
  };

  const [selectedPostition, setSelectedPostition] = useState("All Positions");
  const handlePostionChange = (value: string) => {
    setSelectedPostition(value);
  };

  const [selectedOrder, setSelectedOrder] = useState("Goals");
  const handleOrderChange = (value: string) => {
    setSelectedOrder(value);
  };
  const [activeButton, setActiveButton] = useState("Players");
  const handleActiveButtonChange = (label: string) => {
    setActiveButton(label);
    setSelectedPostition(label === "Players" ? "All Positions" : "GK");
  };

  useEffect(() => {
    console.log(activeButton + " " + selectedPostition + " " + selectedOrder);
  }, [activeButton, selectedOrder, selectedPostition]);

  //Toto už se nemění <- harddoded
  const positonOptions = ["All Positions", "LW", "RW", "LB", "RB", "CB", "LP"];

  const orderOptions =
    activeButton === "Players"
      ? [
          "Jersey Number",
          "Matches Played",
          "Goals",
          "Shots",
          "Shot Accuracy",
          "Offence +-",
          "Defence +-",
        ]
      : [
          "Jersey Number",
          "Matches Played",
          "Saves",
          "Shots Faced",
          "Save Accuracy",
        ];
  return (
    <div className="mx-5 max-w-3xl">
      <TeamSelector
        defaultValue={defaultValue}
        options={options}
        onSelect={onSelect}
      ></TeamSelector>
      <PageTitle value="My Players"></PageTitle>
      <PlayerAllStat {...allPlayersStats} />
      <div className="h-6 self-stretch flex justify-between items-center">
        <BTNSelect
          active={activeButton === "Players"}
          onClick={(label) => handleActiveButtonChange(label)}
          label="Players"
        />
        <BTNSelect
          active={activeButton === "Goalkeepers"}
          onClick={(label) => handleActiveButtonChange(label)}
          label="Goalkeepers"
        />
      </div>
      <div className="px-4 mb-3 pt-1">
        {activeButton === "Players" && (
          <DropdownPicker
            defaultValue={selectedPostition}
            options={positonOptions}
            onSelect={handlePostionChange}
          />
        )}

        <div className="flex items-center gap-2">
          {/* Filter By Text */}
          <div className="mt-3 font-medium">Order By:</div>

          {/* Dropdown Picker */}
          <DropdownPicker
            defaultValue="Jersey Number"
            options={orderOptions}
            onSelect={handleOrderChange}
          />
        </div>
      </div>
      <PlayerStatTable
        playerData={playerData}
        goalkeeper={activeButton === "Goalkeepers"}
      ></PlayerStatTable>
    </div>
  );
}

export default Teampage;
