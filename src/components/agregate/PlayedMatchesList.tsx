import React from "react";
import PlayedMatch, { PlayedMatchProps } from "../primary/PlayedMatch";

interface PlayedMatchesListProps {
  matches: PlayedMatchProps[];
}

function PlayedMatchesList({ matches }: PlayedMatchesListProps) {
  return (
    <div className="flex flex-col gap-2">
      {matches.map((match, index) => (
        <PlayedMatch
          key={index}
          date={match.date}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          homeScore={match.homeScore}
          awayScore={match.awayScore}
          homeLogo={match.homeLogo}
          homeMatch={match.homeMatch}
        />
      ))}
    </div>
  );
}

export default PlayedMatchesList;
