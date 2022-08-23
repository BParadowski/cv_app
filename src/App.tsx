import React, { useState } from "react";
import "./App.css";
import { Name } from "./components/Name";

export interface CuriculumVitae {
  name: string;
  surname: string;
}

export interface CvProps {
  cv: CuriculumVitae;
  changeCv: React.Dispatch<React.SetStateAction<CuriculumVitae>>;
}

function App() {
  const [cv, changeCv] = useState({
    name: "",
    surname: "Gazabu",
  });
  return (
    <div>
      <Name cv={cv} changeCv={changeCv} />
    </div>
  );
}

export default App;
