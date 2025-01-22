import React from "react";
import PlayedMatch from "../primary/PlayedMatch";
import { PlayedMatchesListProps } from "../interfaces/interfaces";

function PlayedMatchesList({ matches, onClick }: PlayedMatchesListProps) {
  return (
    <div className="flex flex-col gap-2">
      {matches.map((match, index) => (
        <div
          key={index}
          onClick={() => onClick(match.idZapasu)} // Pass the match ID to the handler
        >
          <PlayedMatch
            idZapasu={match.idZapasu}
            date={match.date}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            homeScore={match.homeScore}
            awayScore={match.awayScore}
            homeLogo={match.homeLogo}
            homeMatch={match.homeMatch}
          />
        </div>
      ))}
    </div>
  );
}

export default PlayedMatchesList;
