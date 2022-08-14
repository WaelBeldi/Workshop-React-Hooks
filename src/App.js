import { useState } from "react";
import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import HeroList from "./Components/HeroList";
import { heroData } from "./Data";
import AddHero from "./Components/AddHero";

function App() {
  const [heroes, setHeroes] = useState(heroData);
  const [filterName, setFilterName] = useState("");

  return (
    <div className="App">
      <div className="header">
        <SearchAppBar setFilterName={setFilterName} />
      </div>
      <div className="hero-add">
        <AddHero heroes={heroes} setHeroes={setHeroes} />
      </div>
      <HeroList heroes={heroes} setHeroes={setHeroes} filterName={filterName} />
    </div>
  );
}

export default App;
