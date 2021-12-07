import React from "react";
import "./Main.css";

import { useContext } from "react";
import { ArrayContext } from "../context/Array";

function Main() {
  const { dataSet } = useContext(ArrayContext);

  console.log("Main", dataSet);

  return (
    <div className="Main">
      {dataSet.length != 0
        ? dataSet.map((abc) => {
            return (
              <div className="Card">
                <div className="Image">
                  <img
                    src={abc.image}
                    alt="image"
                    style={{
                      borderRadius: "12px",
                      width: "20rem",
                    }}
                  />
                </div>
                <div className="CardItems">
                  <div className="Name">
                    <label>
                      <strong> {abc.firstName}</strong>
                    </label>

                    <label>
                      <strong> {abc.lastName}</strong>
                    </label>
                  </div>

                  <div className="Email">
                    <label>
                      <strong> {abc.email}</strong>
                    </label>
                  </div>

                  <div className="Subject">
                    <label>
                      <strong> {abc.subject}</strong>
                    </label>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Main;
