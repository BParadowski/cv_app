import React, { useState } from "react";
import type { CvProps } from "../App";

export function Field({ cv, changeCv, field, className }: CvProps) {
  const [edition, toggleEdition] = useState(false);

  function updateCv(e: React.ChangeEvent<HTMLInputElement>) {
    changeCv({
      ...cv,
      [field]: e.target.value,
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
      <div className={className || ""}>
        <h1 onClick={editionOn}>{cv[field] || field}</h1>
      </div>
    );
  } else {
    return (
      <div className={className || ""}>
        <input
          value={cv[field]}
          placeholder={field}
          onChange={updateCv}
          onBlur={editionOff}
          autoFocus
        ></input>
      </div>
    );
  }
}
