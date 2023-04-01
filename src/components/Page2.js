import React, { useEffect, useState } from "react";
import Rive from "rive-react";
import book from "../riveImg.riv";

import axios from "axios";

function Page2() {
  const [uploadItem, setUploadItem] = useState();
  const handleFile = (e) => {
    let file = e.target.files[0];
    console.log("uploaded item : ", file);
    setUploadItem(file);
  };
  const handleUpload = async (e) => {
    console.log("file :", uploadItem);
    let file = uploadItem;
    let formData = new FormData();
    formData.append("file", file);
    await axios({
      method: "post",
      url: "http://localhost:5000/",
      data: {
        item: formData,
      },
    }).then((res) => {
      console.log("received data :", res.data);
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
