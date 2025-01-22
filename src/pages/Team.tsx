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

import {
  createFictionalAllPlayersStats,
  createFictionalPlayersByFilter,
  getFictionalMatchesArrayPrepless,
} from "../db/DbHnadler";

function Team({
  defaultValue,
  options,
  onSelect,
  signedUser,
}: DropdownPickerProps) {
  const [allPlayersStats, setAllPlayersStats] = useState<AllPlayersDataprops>({
    sixMetersGoals: 0,
    sixMetersShots: 0,
    sevenMetersGoals: 0,
    sevenMetersShots: 0,
    nineMetersGoals: 0,
    nineMetersShots: 0,
    wingGoals: 0,
    wingShots: 0,
    breakGoals: 0,
    breakShots: 0,
    technicalfaluts: 0,
    twoMinSusp: 0,
    differenceOffence: 0,
    differenceDefence: 0,
  });

  const [playerdataDeatail, setPlayerdataDeatail] =
    useState<AllPlayersDataprops>({
      sixMetersGoals: 0,
      sixMetersShots: 0,
      sevenMetersGoals: 0,
      sevenMetersShots: 0,
      nineMetersGoals: 0,
      nineMetersShots: 0,
      wingGoals: 0,
      wingShots: 0,
      breakGoals: 0,
      breakShots: 0,
      technicalfaluts: 0,
      twoMinSusp: 0,
      differenceOffence: 0,
      differenceDefence: 0,
    });

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

  const [playerData, setPlayerData] = useState<PlayerData[]>([]);
  const [matches, setMatches] = useState<PlayedMatchProps[]>([]);

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
    const fiteredPlayers = createFictionalPlayersByFilter(
      `${activeButton} ${selectedPostition} ${selectedOrder}`
    );
    const result = getFictionalMatchesArrayPrepless();
    const teamStats = createFictionalAllPlayersStats();
    const playerStats = createFictionalAllPlayersStats();
    setMatches(result);
    setPlayerData(fiteredPlayers);
    setAllPlayersStats(teamStats);
    setPlayerdataDeatail(playerStats);
  }, [activeButton, selectedOrder, selectedPostition, defaultValue]);

  //Toto už se nemění <- harddoded
  const positonOptions = ["All Positions", "LW", "RW", "LB", "RB", "CB", "LP"];

  const orderOptions =
    activeButton === "Players" ? ["Goals", "Shots"] : ["Saves", "Shots"];
  return (
    <>
      <Header value={signedUser || " "}></Header>
      <div className="mx-5 pt-5 pb-24">
        <PopUp
          open={openPopup}
          children={
            <PlayerDetail
              allPlayersDataprops={playerdataDeatail}
              matches={playerDetailData?.playedMatchData || []}
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
              defaultValue="Golas"
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
    </>
  );
}

export default Team;
