import React from "react";
import logo from "../assets/docasnaLoga/arsenal.png";
import calendarIcon from "../assets/elements/elements.svg";
export interface PlayedMatchProps {
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeLogo: string;
  homeMatch: boolean;
}

function PlayedMatch({
  date,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  homeLogo,
  homeMatch,
}: PlayedMatchProps) {
  return (
    <div className="flex flex-col p-4 gap-4 border rounded-lg shadow-md bg-white">
      {/* Top Row */}
      <div className="flex justify-between items-center self-stretch">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <img
            src={calendarIcon}
            alt="Calendar Icon"
            className="w-4 h-4 object-contain"
          />
          <p className="text-center text-[#404145] text-[10px] font-normal font-['Roboto']">
            {date}
          </p>
        </div>
        {/* Right Side */}
        <div>
          <p className="text-center text-gray-800 text-[0.625rem] font-normal leading-normal font-['Roboto'] custom-liga">
            {homeMatch ? "Home" : "Away"}
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center self-stretch">
        {/* Home Team */}
        <div className="flex flex-col w-[5.5rem] items-center gap-2">
          <img
            src={homeLogo}
            alt={`${homeTeam} Logo`}
            className="w-12 h-12 object-cover rounded-full"
          />
          <p className="text-center text-gray-800 font-['Roboto'] text-[0.9375rem] font-medium">
            {homeTeam}
          </p>
        </div>

        {/* Score */}
        <div className="text-center text-[#404145] text-2xl font-semibold font-['Roboto']">
          {homeScore} : {awayScore}
        </div>

        {/* Away Team */}
        <div className="flex flex-col w-[5.5rem] items-center gap-2">
          <img
            src={logo}
            alt={`${awayTeam} Logo`}
            className="w-12 h-12 object-cover rounded-full"
          />
          <p className="text-center text-gray-800 font-['Roboto'] text-[0.9375rem] font-medium">
            {awayTeam}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayedMatch;
