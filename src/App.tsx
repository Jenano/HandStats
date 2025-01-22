import "./App.css";
import React, { useState, useEffect } from "react";
import Teampage from "./pages/Team";
import Homepage from "./pages/Homepage";
import NavBar from "./components/agregate/NavBar";
import Play from "./pages/Play";
import Management from "./pages/Management";
import { Route, Routes } from "react-router-dom";
import { tymyData } from "./db/dbData";

function App() {
  const loggedUser: string = "jan.novak@email.com";

  const populateTeamOptions = () => {
    const filteredTeams = tymyData.filter((team) => team.email === loggedUser);
    const teamNames = filteredTeams.map((team) => team.tymJmeno);
    setTeamOptions(teamNames);

    if (teamNames.length > 0) {
      setSelectedTeam(teamNames[0]);
      console.log(teamNames[0]);
    }
  };
  const [selectedTeam, setSelectedTeam] = useState("Select Team");
  const [teamOptions, setTeamOptions] = useState<string[]>([]);
  useEffect(() => {
    populateTeamOptions();
    console.log(loggedUser);
  }, [loggedUser]);

  const handleTeamChange = (value: string) => {
    setSelectedTeam(value);
  };

  useEffect(() => {
    console.log("Selected Team:", selectedTeam);
  }, [selectedTeam]);

  return (
    <div className="font-roboto bg-bgCustom max-w-3xl mx-auto ">
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              defaultValue={selectedTeam}
              options={teamOptions}
              onSelect={handleTeamChange}
              signedUser={loggedUser}
            />
          }
        />

        <Route
          path="/team"
          element={
            <Teampage
              defaultValue={selectedTeam}
              options={teamOptions}
              onSelect={handleTeamChange}
              signedUser={loggedUser}
            />
          }
        />

        <Route path="/play" element={<Play />} />

        <Route path="/management" element={<Management />} />
      </Routes>
      <NavBar></NavBar>
    </div>
  );
}

export default App;
