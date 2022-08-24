import React, { useState } from "react";
import type { CvProps } from "../App";

export function Field({ cv, changeCv, field, className }: CvProps) {
  const [edition, toggleEdition] = useState(false);

  function updateCv(e: React.ChangeEvent<HTMLTextAreaElement>) {
    changeCv({
      ...cv,
      [field]: e.target.value,
    });
  }

  function editionOn(e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) {
    toggleEdition(true);
  }

  function editionOff(e: React.FocusEvent<HTMLTextAreaElement, Element>) {
    toggleEdition(false);
  }

  if (edition === false) {
    return (
      <p onClick={editionOn} className={className || undefined}>
        {cv[field] || field}
      </p>
    );
  } else {
    return (
      <textarea
        className={className || undefined}
        value={cv[field]}
        placeholder={field}
        onChange={updateCv}
        onBlur={editionOff}
        autoFocus
      ></textarea>
    );
  }
}
