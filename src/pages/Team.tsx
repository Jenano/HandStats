import React, { useState, useEffect } from "react";
import PlayerStatTable from "../components/agregate/PlayerStatTable";
import DropdownPicker from "../components/primary/DrpPicker";
import BTNSelect from "../components/primary/BTNSelect";
import PageTitle from "../components/primary/PageTitle";
import PlayerAllStat from "../components/agregate/PlayerAllStat";
import TeamSelector from "../components/primary/TeamSelector";
import {
  DropdownPickerProps,
  AllPlayersDataprops,
  PlayedMatchProps,
  PlayerData,
} from "../components/interfaces/interfaces";
import Header from "../components/primary/Header";
import PopUp from "../components/agregate/PopUp";
import PlayerDetail from "../components/agregate/PlayerDetail";
import { playerData, matches } from "../components/agregate/FictionalData";

function Team({ defaultValue, options, onSelect }: DropdownPickerProps) {
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

  const [openPopup, setOpenPopup] = useState(false);

  const [playerDetailData, setPlayerDetailData] = useState<{
    playedMatchData: PlayedMatchProps[];
    playerData: PlayerData;
  } | null>(null);

  const handleMatchClick = (idPlayer: string) => {
    const selectedPlayer = playerData.find(
      (player) => player.idPlayer === idPlayer
    );
    // const najdi hráče ktrí hráli  v zápase
    if (selectedPlayer) {
      console.log("Selected Match:", selectedPlayer);
      // Pass data to MatchDetail here
      setPlayerDetailData({
        playedMatchData: matches,
        playerData: selectedPlayer,
      });
    }
    setOpenPopup(true);
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
    <>
      <Header value="Pepík"></Header>
      <div className="mx-5 pt-5 pb-24">
        <PopUp
          open={openPopup}
          children={
            <PlayerDetail
              allPlayersDataprops={allPlayersStats}
              matches={matches}
            />
          }
          onClick={() => setOpenPopup(!openPopup)}
          heading="Player Details"
        ></PopUp>
        <TeamSelector
          defaultValue={defaultValue}
          options={options}
          onSelect={onSelect}
        ></TeamSelector>
        <PageTitle value="My Players"></PageTitle>
        <PlayerAllStat
          {...allPlayersStats}
          header="Total Stats"
          playerDetail={false}
        />
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
              margin="mt-6"
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
          onClick={(idHrace: string) => handleMatchClick(idHrace)}
        ></PlayerStatTable>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => setOpenPopup(!openPopup)}
      >
        Open Popup
      </button>
    </>
  );
}

export default Team;
