import React, { useEffect, useState } from "react";

import "./App.css";
import Watch from "./watch";

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    // fetch from the data from github repository raw link
    fetch(
      "https://raw.githubusercontent.com/sharifuzzaman-apu/es6-modules-overview/refs/heads/main/public/watches.json"
    )
      .then((res) => res.json())
      .then((data) => setWatches(data));
    // .catch((err) => console.error('Failed to load watches.json', err));
  }, []);
  // fetch from local public folder 
  //   fetch('/watches.json')
  //     .then((res) => res.json())
  //     .then((data) => setWatches(data))
  //     // .catch((err) => console.error('Failed to load watches.json', err));
  // }, []);
  // const watches = [
  //   { id: "w001", name: "Aurelius Mariner Pro 300", price: 1295.0 },
  //   { id: "w002", name: "Orion Classic Field 38", price: 395.0 },
  //   { id: "w003", name: "PulseTech Pulse X2", price: 349.99 },
  //   { id: "w004", name: "Cobalt Heritage Chrono", price: 2699.0 },
  //   { id: "w005", name: "Summit Aero GMT", price: 899.0 },
  //   { id: "w006", name: "Minerva Elegance 34", price: 245.0 },
  //   { id: "w007", name: "RetroTek Digital Classic", price: 59.99 },
  //   { id: "w008", name: "Vanguard Solar One", price: 179.5 },
  // ];

  return (
    <>
      <div>
        {watches.map((watch) => (
          <Watch key={watch.id} watch={watch}></Watch>
        ))}
      </div>
    </>
  );
}

export default App;
