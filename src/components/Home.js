import React from "react";
import Rive from "rive-react";
import book from "../riveImg.riv";

class Home extends React.Component {
  render() {
    return (
      <div className="homePage">
        <div className="col1">
          <h1>Writing Style Classification</h1>
          <h2> - within a document/between various documents.</h2>
        </div>

        <div className="col2">
          <Rive src={book} />
        </div>
      </div>
    );
  }
}

export default Home;
