/* css */
import "./css/Navbar.css";
import "./css/App.css";
import "./css/Home.css";
import "./css/Page2.css";

/*components*/
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Page2 from "./components/Page2";

function App() {
  return (
    <div className="App">
      <Home />
      <Page2 />
    </div>
  );
}

export default App;
