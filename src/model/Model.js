import React, { useState } from "react";
import "./Model.css";

import { useContext } from "react";
import { ArrayContext } from "../context/Array";

function Model({ closeModel }) {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Image, setImage] = useState(null);

  const { dataSet, setDataSet } = useContext(ArrayContext);

  // const [dataSet, setDataSet] = useState([]);

  // const handleFirstname = (e) => {
  //   setFirstname(e.target.value);
  // };

  // const handleLastname = (e) => {
  //   setLastname(e.target.value);
  // };

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleSubject = (e) => {
  //   setSubject(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    var object = {
      firstName: Firstname,
      lastName: Lastname,
      email: Email,
      subject: Subject,
      image: Image,
    };
    // window.location.reload();

    setDataSet((result) => [...result, object]);
    closeModel(false);
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
        <form className="submitForm" onSubmit={onSubmit}>
          <input
            className="fname"
            placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)}
          ></input>{" "}
          <br />
          <input
            className="lname"
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          ></input>{" "}
          <br />
          <input
            className="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            className="subject"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          ></input>
          <br />
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            multiple
          ></input>
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
