import React, { useState } from "react";
import "./Main.css";
import Popup from "../popup/Popup";
import { useContext } from "react";
import { ArrayContext } from "../context/Array";

function Main({}) {
  const { dataSet } = useContext(ArrayContext);

  console.log("Main", dataSet);

  const [openPopup, setOpenPopup] = useState(false);
  const [data, setData] = useState(null);
  function popup(e) {
    setData(e);
    setOpenPopup(true);
  }

  return (
    <div className="Main">
      {dataSet.length != 0
        ? dataSet.map((abc, index) => {
            return (
              <div className="Card" key={index} onClick={() => popup(abc)}>
                <div className="Image">
                  <img
                    src={abc.image}
                    className="cardimg"
                    alt="image"
                    // style={{
                    //   borderRadius: "12px",
                    //   width: "20rem",
                    // }}
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
      {openPopup && <Popup data={data} closePopup={setOpenPopup} />}
    </div>
  );
}

export default Main;
