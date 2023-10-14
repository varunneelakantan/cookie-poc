import logo from "./logo.svg";
import "./App.css";
import Cookies from "universal-cookie";

function App() {
  const cookies = new Cookies();
  cookies.set("myCat", "Pacman", { path: "/" });
  console.log(cookies.get("myCat")); // Pacman
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
