import React from "react";
import Events from "./events";

function App() {
  return (
    <div>
      <header className="header">
        <h1> Events</h1>
        <p>Explore our upcoming and past events</p>
      </header>

      <Events />
    </div>
  );
}

export default App;
