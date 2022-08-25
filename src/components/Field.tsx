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

  function editionOn() {
    toggleEdition(true);
  }

  function editionOff() {
    toggleEdition(false);
  }

  if (edition === false) {
    return (
      <p onClick={editionOn} className={className || undefined}>
        {(cv[field] as string) || field}
      </p>
    );
  } else {
    return (
      <input
        className={className || undefined}
        type="text"
        value={cv[field] as string}
        placeholder={field}
        onChange={updateCv}
        onBlur={editionOff}
        autoFocus
      ></input>
    );
  }
}
