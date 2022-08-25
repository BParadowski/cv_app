import React, { useState } from "react";
import "./App.scss";
import { Field } from "./components/Field";

export interface CuriculumVitae {
  [key: string]: string | object;
  name: string;
  title: string;
}

export interface CvProps {
  cv: CuriculumVitae;
  changeCv: React.Dispatch<React.SetStateAction<CuriculumVitae>>;
  field: string;
  className?: string;
}

function App() {
  const [cv, changeCv] = useState<CuriculumVitae>({
    name: "",
    title: "",
  });

  return (
    <div className="cv">
      <div className="header">
        <Field field="name" cv={cv} changeCv={changeCv} className="name big" />
        <Field
          field="title"
          cv={cv}
          changeCv={changeCv}
          className="title medium"
        />
      </div>
      <div className="sidebar"></div>
    </div>
  );
}

export default App;
