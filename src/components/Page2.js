import React, { useEffect, useState } from "react";
import Rive from "rive-react";
import book from "../riveImg.riv";

import axios from "axios";

function Page2() {
  const [isloading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState("");

  const handleFile = async (e) => {
    setIsLoading(true);
    let file = e.target.files;
    console.log("uploaded item : ", file);

    const formData = new FormData();
    const arr = Array.from(file);
    arr.forEach((val, i) => {
      formData.append(`file-${i}`, val, val.name);
    });

    console.log("sending data from react :", formData);
    await axios({
      method: "post",
      url: "http://localhost:5000/",
      data: file,
    }).then((res) => {
      console.log("received data :", res.data);
      setIsLoading(false);
      setShowResult(true);
      setResultData(res.data);
    });
  };

  return (
    <div className="Page2Page">
      <div className="arrowBtn">
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

      <div className="container">
        <div className="uploadArea">
          <input
            type="file"
            id="uploadBox"
            className="uploadInput"
            onChange={(e) => handleFile(e)}
            multiple
            name="uploadBox"
          />
          <label className="uploadLabel" for="uploadBox">
            <img className="txtImg" src="/uploadImg.jpg"></img>
          </label>
          {/* <button type="button" onClick={(e) => handleUpload(e)}>
              Upload
            </button> */}
        </div>

        <div className="resultBox">
          <h1>Result</h1>
          {isloading && (
            <div class="loader">
              <div class="loader-container">
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
                <div class="loader-block"></div>
              </div>
            </div>
          )}
          {showResult && (
            <div>
              <h1>Received files :</h1>
              {Object.values(resultData).map((val) => (
                <h2>{val}</h2>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="teamContainer">
        <h1>Made By</h1>
        <img src="team.png"></img>
      </div>
    </div>
  );
}

export default Page2;
