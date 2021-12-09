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

    if (
      errFirstname === false &&
      errLastname === false &&
      errEmail === false &&
      errSubject === false &&
      errImage === false
    ) {
      var object = {
        firstName: Firstname,
        lastName: Lastname,
        email: Email,
        subject: Subject,
        image: Image,
      };

      setDataSet((result) => [...result, object]);
      closeModel(false);
    } else {
      alert("InValid");
    }
  };

  console.log(dataSet);

  // <===================form vilidation ===============>

  const [errFirstname, setErrFirstname] = useState(false);
  const [errLastname, setErrLastname] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errSubject, setErrSubject] = useState(false);
  const [errImage, setErrImage] = useState(false);

  function userHandler1(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setErrFirstname(true);
    } else {
      setErrFirstname(false);
      setFirstname(item);
    }
  }
  function userHandler2(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setErrLastname(true);
    } else {
      setErrLastname(false);
      setLastname(item);
    }
  }
  function userHandler3(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setErrEmail(true);
    } else {
      setErrEmail(false);
      setEmail(item);
    }
  }
  function userHandler4(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setErrSubject(true);
    } else {
      setErrSubject(false);
      setSubject(item);
    }
  }

  function userHandler5(e) {
    let item = e.target.files[0];
    if (item.length < 1) {
      setErrImage(true);
    } else {
      setErrImage(false);
      setImage(URL.createObjectURL(item));
    }
  }

  console.log("FirstName", Firstname);
  console.log("LastName", Lastname);

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
            onChange={userHandler1}
          ></input>
          {errFirstname ? (
            <span style={{ color: "#db3e3e" }}>Firt Name Not Valid</span>
          ) : (
            ""
          )}
          <br />
          <input
            className="lname"
            placeholder="Last Name"
            onChange={userHandler2}
          ></input>
          {errLastname ? (
            <span style={{ color: "#db3e3e" }}>Last Name Not Valid</span>
          ) : (
            ""
          )}
          <br />
          <input
            className="email"
            placeholder="Email"
            onChange={userHandler3}
          ></input>
          {errEmail ? (
            <span style={{ color: "#db3e3e" }}>Email Not Valid</span>
          ) : (
            ""
          )}
          <br />
          <input
            className="subject"
            placeholder="Subject"
            onChange={userHandler4}
          ></input>
          {errSubject ? (
            <span style={{ color: "#db3e3e" }}>Subject Not Valid</span>
          ) : (
            ""
          )}
          <br />
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={userHandler5}
            multiple
          ></input>
          {errImage ? (
            <span style={{ color: "#db3e3e" }}>No file chosen</span>
          ) : (
            ""
          )}
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
