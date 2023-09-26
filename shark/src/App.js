import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import Games from "./game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
        <Games />
      </header>
    </div>
  );
}

export default App;
