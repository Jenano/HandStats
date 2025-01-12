import React from "react";

export interface PlayedMatchProps {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeLogo: string;
  awayLogo: string;
}

function PlayedMatch({
  date,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeLogo,
  awayLogo,
}: PlayedMatchProps) {
  return (
    <div className="flex items-center justify-between bg-red-400 shadow-md rounded-lg p-4 my-2">
      <div className="flex items-center">
        <img src={homeLogo} alt={homeTeam} className="w-12 h-12 mr-4" />
        <div>
          <p className="text-sm text-red-500">{date}</p>
          <p className="font-bold">{homeTeam}</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xl font-bold">
          {homeScore} : {awayScore}
        </p>
      </div>

      <div className="flex items-center">
        <div className="text-right bg-red-500">
          <p className="font-bold">{awayTeam}</p>
          <p className="text-sm text-gray-500">Home/Away</p>
        </div>
        <img src={awayLogo} alt={awayTeam} className="w-12 h-12 ml-4" />
      </div>
    </div>
  );
}

export default PlayedMatch;
