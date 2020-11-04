import React from "react";

export default function Section({ title, subtitle, dark, id, component }) {

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        {component}
      </div>
    </div>
  );
}
