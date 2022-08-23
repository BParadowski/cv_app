import React, { useState } from "react";
import "./App.css";
import { Field } from "./components/Name";

export interface CuriculumVitae {
  [key: string]: string;
  name: string;
  surname: string;
}

export interface CvProps {
  cv: CuriculumVitae;
  changeCv: React.Dispatch<React.SetStateAction<CuriculumVitae>>;
  field: string;
  className?: string;
}

function App() {
  const [cv, changeCv]: [
    CuriculumVitae,
    React.Dispatch<React.SetStateAction<CuriculumVitae>>
  ] = useState({
    name: "",
    surname: "",
  });

  return (
    <div>
      <Field field="name" cv={cv} changeCv={changeCv} className="name" />
      <Field field="surname" cv={cv} changeCv={changeCv} />
    </div>
  );
}

export default App;
