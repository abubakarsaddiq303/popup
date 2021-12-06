import React, { useState } from "react";
import "./Model.css";

function Model({ closeModel }) {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  // const [Image, setImage] = useState(null);

  const [dataSet, setDataSet] = useState([]);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  console.log(dataSet);
  return (
    <div className="Modelbody">
      <div className="Modelcontainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModel(false)}> X </button>
        </div>
        <div className="title">
          <h1>Add Crease</h1>
        </div>
        <form
          className="submitForm"
          onSubmit={(e) => {
            e.preventDefault();

            var object = {
              firstName: Firstname,
              lastName: Lastname,
              emailEmail: Email,
              subject: Subject,
            };
            setDataSet((result) => [...result, object]);
          }}
        >
          <input
            className="fname"
            placeholder="First Name"
            onChange={handleFirstname}
          ></input>{" "}
          <br />
          <input
            className="lname"
            placeholder="Last Name"
            onChange={handleLastname}
          ></input>{" "}
          <br />
          <input
            className="email"
            placeholder="Email"
            onChange={handleEmail}
          ></input>
          <br />
          <input
            className="subject"
            placeholder="Subject"
            onChange={handleSubject}
          ></input>
          <br />
          <input type="file" id="myfile" name="myfile" multiple></input>
          <br />
          <div className="submit-btn">
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Model;
