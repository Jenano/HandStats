import PlayerAllStat from "./PlayerAllStat";
import { PlayerDetailProps } from "../interfaces/interfaces";
import PlayedMatchesList from "./PlayedMatchesList";

function PlayerDetail({ allPlayersDataprops, matches }: PlayerDetailProps) {
  return (
    <div className="max-h-screen overflow-y-auto pb-40 scrollbar-none ">
      {/* PlayerAllStat */}
      <PlayerAllStat
        sixMetersGoals={allPlayersDataprops.sixMetersGoals}
        sixMetersShots={allPlayersDataprops.sixMetersShots}
        sevenMetersGoals={allPlayersDataprops.sevenMetersGoals}
        sevenMetersShots={allPlayersDataprops.sevenMetersShots}
        nineMetersGoals={allPlayersDataprops.nineMetersGoals}
        nineMetersShots={allPlayersDataprops.nineMetersShots}
        wingGoals={allPlayersDataprops.wingGoals}
        wingShots={allPlayersDataprops.wingShots}
        breakGoals={allPlayersDataprops.breakGoals}
        breakShots={allPlayersDataprops.breakShots}
        differenceOffence={allPlayersDataprops.differenceOffence}
        differenceDefence={allPlayersDataprops.differenceDefence}
        matches={allPlayersDataprops.matches}
        twoMinSusp={allPlayersDataprops.twoMinSusp}
        header="Season Stats"
        playerDetail={true}
      />

      <PlayedMatchesList
        matches={matches}
        onClick={function (idZapasu: string): void {
          throw new Error(idZapasu);
        }}
      />
    </div>
  );
}

export default PlayerDetail;
