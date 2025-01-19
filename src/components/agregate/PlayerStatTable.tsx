import React from "react";
import PlayerStat from "../primary/PlayerStat";
import OneStat from "../primary/OneStatNormal";
import OneStatSlash from "../primary/OneStatSlash";
import OneStatDifr from "../primary/OneStatDifr";
import TableHead from "../primary/TableHead";

export interface PlayerData {
  name: string; // Player name
  position: string; // Player position
  playedMatches: number;
  goals: number; // Goals scored
  dresNumber: number;
  shots: number; // Shots taken
  assists: number; // Assists
  accuracy: number; // Shot accuracy
  profileImg: string; // Player profile image URL

  // Additional attributes with Goals and Shots
  sixMetersGoals: number; // 6m goals
  sixMetersShots: number; // 6m shots
  sevenMetersGoals: number; // 7m goals
  sevenMetersShots: number; // 7m shots
  nineMetersGoals: number; // 9m goals
  nineMetersShots: number; // 9m shots
  wingGoals: number; // Wing goals
  wingShots: number; // Wing shots
  breakGoals: number; // Fast break goals
  breakShots: number; // Fast break shots

  // Differences
  differenceOffence: number; // Positive difference
  differenceDefence: number; // Negative difference

  // Card-related stats
  yellowCards: number; // Yellow cards
  twoMinutes: number; // 2-minute suspensions
  redCards: number; // Red cards

  // Other stats
}

interface PlayerStatTableProps {
  playerData: PlayerData[]; // Data for table rows
  goalkeeper: boolean;
}

function PlayerStatTable({ playerData, goalkeeper }: PlayerStatTableProps) {
  return (
    <div className="h-auto bg-white rounded-2xl shadow-md overflow-x-auto">
      <table className="table-auto min-w-full">
        {/* Table Header */}
        <thead>
          <tr>
            {/* Sticky Name Column */}
            <th className="sticky left-0 bg-white px-4 py-2 text-start font-medium w-36 text-cerna">
              Players
            </th>
            <TableHead label="#Number" />
            <TableHead label="Position" />
            <TableHead label="Matches Played" />
            <TableHead label={goalkeeper ? "Saves" : "Goals"} />
            <TableHead label={goalkeeper ? "Shots Faced" : "Goals"} />
            <TableHead label="Assists" />
            <TableHead label={goalkeeper ? "Save Accuracy" : "Shot Accuracy"} />
            <TableHead label="6m" />
            <TableHead label="7m" />
            <TableHead label="9m" />
            <TableHead label="Wing" />
            <TableHead label="Break" />
            <TableHead label="Offence +-" />
            <TableHead label="Defence +-" />
            <TableHead label='2"' />
            <TableHead label="YC🟨" />
            <TableHead label="RC🟥" />
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {playerData.map((player, index) => (
            <tr key={index}>
              {/* Sticky Name */}
              <td className="sticky left-0 bg-white px-4 py-2 flex items-center gap-3">
                <PlayerStat name={player.name} profileImg={player.profileImg} />
              </td>
              {/* Number */}
              <td className="px-4 py-2 text-center">
                <OneStat value={"#" + player.dresNumber} />
              </td>
              {/* Posistion */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.position} />
              </td>
              {/* Played matches */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.playedMatches.toString()} />
              </td>
              {/* Goals */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.goals.toString()} />
              </td>
              {/* Strely */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.shots.toString()} />
              </td>
              {/* Asistence */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.assists.toString()} />
              </td>
              {/* Accuracy */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.accuracy + "%"} />
              </td>
              {/* 6m */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.sixMetersGoals.toString()}
                  shots={player.sixMetersShots.toString()}
                ></OneStatSlash>
              </td>
              {/* 7m */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.sevenMetersGoals.toString()}
                  shots={player.sevenMetersShots.toString()}
                ></OneStatSlash>
              </td>
              {/* 9m */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.nineMetersGoals.toString()}
                  shots={player.nineMetersShots.toString()}
                ></OneStatSlash>
              </td>
              {/* Wing */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.wingGoals.toString()}
                  shots={player.wingShots.toString()}
                ></OneStatSlash>
              </td>
              {/* Break */}
              <td className="px-4 py-2 text-center">
                <OneStatSlash
                  goals={player.breakGoals.toString()}
                  shots={player.breakShots.toString()}
                ></OneStatSlash>
              </td>
              {/* Rating of */}
              <td className="px-4 py-2 text-center">
                <OneStatDifr rating={player.differenceOffence}></OneStatDifr>
              </td>
              {/* Rating def */}
              <td className="px-4 py-2 text-center">
                <OneStatDifr rating={player.differenceDefence}></OneStatDifr>
              </td>
              {/* Vylouceni */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.twoMinutes.toString()} />
              </td>
              {/* Zluta */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.yellowCards.toString()} />
              </td>
              {/* Cervena */}
              <td className="px-4 py-2 text-center">
                <OneStat value={player.redCards.toString()} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerStatTable;
