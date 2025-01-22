import "./App.css";
import React, { useState, useEffect } from "react";
import Teampage from "./pages/Team";
import Homepage from "./pages/Homepage";
import NavBar from "./components/agregate/NavBar";
import Play from "./pages/Play";
import Management from "./pages/Management";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selectedTeam, setSelectedTeam] = useState("A-team");
  const teamOptions = ["A-team", "N-team", "Q-team", "E-team", "D-team"];

  const handleTeamChange = (value: string) => {
    setSelectedTeam(value);
  };

  useEffect(() => {
    console.log(selectedTeam);
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
