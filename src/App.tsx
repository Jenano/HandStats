import "./App.css";
import React, { useState, useEffect } from "react";
import Teampage from "./pages/Teampage";
import Homepage from "./pages/Homepage";

function App() {
  const [selectedTeam, setSelectedTeam] = useState("A-team");

  const handleTeamChange = (value: string) => {
    setSelectedTeam(value);
  };

  useEffect(() => {
    console.log(selectedTeam);
  }, [selectedTeam]);

  const teamOptions = ["A-team", "N-team", "Q-team", "E-team", "D-team"];
  return (
    <div className="font-roboto bg-bgCustom">
      {/*roboto tam musí zůstat*/}
      <Teampage
        defaultValue={selectedTeam}
        options={teamOptions}
        onSelect={handleTeamChange}
      ></Teampage>
      <Homepage
        defaultValue={selectedTeam}
        options={teamOptions}
        onSelect={handleTeamChange}
      ></Homepage>
    </div>
  );
}

export default App;
