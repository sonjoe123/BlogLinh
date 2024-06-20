import "./App.css";
import React from "react";
import Navigation from "./components/navigation";
import { Home } from "./components/Home";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
