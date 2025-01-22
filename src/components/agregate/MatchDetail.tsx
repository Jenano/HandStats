import PlayedMatch from "../primary/PlayedMatch";
import PlayerStatTable from "./PlayerStatTable";
import { MatchDetailProps } from "../interfaces/interfaces";

function MatchDetail({ playedMatchData, playerData }: MatchDetailProps) {
  return (
    <div className="max-h-screen overflow-y-auto pb-40 scrollbar-none ">
      {/* PlayedMatch */}
      <PlayedMatch
        idZapasu={playedMatchData.idZapasu}
        date={playedMatchData.date}
        myTeam={playedMatchData.myTeam}
        awayTeam={playedMatchData.awayTeam}
        homeScore={playedMatchData.homeScore}
        awayScore={playedMatchData.awayScore}
        myLogo={playedMatchData.myLogo}
        awayLogo={playedMatchData.awayLogo}
        homeMatch={playedMatchData.homeMatch}
        shadow="border-t"
      />

      {/* Notes */}
      <div className=" min-h-20 p-2 mx-4 mt-4 bg-white rounded-xl flex flex-col justify-start items-start gap-1">
        {/* Notes Title */}
        <div className="self-stretch text-cerna text-md font-medium">
          Notes:
        </div>

        {/* Notes Content */}
        <div className="self-stretch text-[#787878] text-[15px] font-normal font-['Roboto']">
          {playedMatchData.notes ? playedMatchData.notes : "No notes"}
        </div>
      </div>

      {/* Player Stats Table */}
      <div className="ml-4 mt-8">
        <div className="text-lg font-medium p-1">Players</div>
        <PlayerStatTable
          playerData={playerData.filter((player) => player.position !== "GK")}
          goalkeeper={false}
          onClick={function (idHrace: string): void {
            throw new Error(idHrace);
          }}
        />
      </div>

      {/* Goalkeeper Stats Table */}
      <div className="ml-4 mt-8">
        <div className="text-lg font-medium p-1">Goalkeepers</div>
        <PlayerStatTable
          playerData={playerData.filter((player) => player.position === "GK")}
          goalkeeper={true}
          onClick={function (idHrace: string): void {
            throw new Error(idHrace);
          }}
        />
      </div>
    </div>
  );
}

export default MatchDetail;
