import React, { useState } from "react";
import "./App.scss";
import { Field } from "./components/Field";

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
  const [cv, changeCv] = useState<CuriculumVitae>({
    name: "",
    surname: "",
  });

  return (
    <div className="cv">
      <div className="header">
        <Field
          field="name"
          cv={cv}
          changeCv={changeCv}
          className="cv__name cv__big"
        />
        <Field
          field="surname"
          cv={cv}
          changeCv={changeCv}
          className="cv__big"
        />
      </div>
    </div>
  );
}

export default App;
