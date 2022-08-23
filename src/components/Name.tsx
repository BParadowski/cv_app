import React, { useState } from "react";
import type { CvProps } from "../App";

export function Name({ cv, changeCv }: CvProps) {
  const [edition, toggleEdition] = useState(false);

  function updateCv(e: React.ChangeEvent<HTMLInputElement>) {
    changeCv({
      ...cv,
      name: e.target.value,
    });
  }

  function editionOn(e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) {
    toggleEdition(true);
  }

  function editionOff(e: React.FocusEvent<HTMLInputElement, Element>) {
    toggleEdition(false);
  }

  if (edition === false) {
    return (
      <div>
        <h1 onClick={editionOn}>{cv.name || "Name"}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <input
          value={cv.name}
          placeholder="Name"
          onChange={updateCv}
          onBlur={editionOff}
          autoFocus
        ></input>
      </div>
    );
  }
}
