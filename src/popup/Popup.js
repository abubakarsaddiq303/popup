import React from "react";
import "./Popup.css";

function Popup({ closePopup, data }) {
  console.log("popup", data);
  return (
    <div className="PopupBody">
      <div className="PopupContainer">
        <div className="CloseBtn">
          <button onClick={() => closePopup(false)}>X</button>
        </div>

        <div className="row">
          <div className="column1">
            <img className="popupimg" src={data.image}></img>
          </div>

          <div className="column2">
            <div className="columnCol">
              <br />

              <div className="popupName">
                <button className="btn">{data.firstName}</button>

                <button className="btn">{data.lastName}</button>
              </div>
              <br />
              <div>
                <button className="btn">{data.email}</button>
              </div>
              <br />
              <div>
                <button className="btn">{data.subject}</button>
              </div>

              <div className="recordbtn">
                <button className="btnrecord">Record Care</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
