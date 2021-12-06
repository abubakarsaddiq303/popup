import React, { useState } from "react";
import "./Header.css";
import search2 from "./pinterest-logo.png";
import Model from "../model/Model";

function Hearder({}) {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className="Header">
      <div className="logo">
        <img className="Logo" src={search2} alt="logo" />
      </div>
      <div className="button-create">
        <button
          className="btn-create"
          onClick={() => {
            setOpenModel(true);
          }}
        >
          Create
        </button>
      </div>
      {openModel && <Model closeModel={setOpenModel} />}
    </div>
  );
}

export default Hearder;
