import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      const el = document.querySelector(".App");
      const p = document.createElement("p");
      p.className = "dynamic";
      p.innerText = "i am a dynamic element";
      el.append(p);
    }, 5000);
  }, []);

  return <div className="App"></div>;
}

export default App;
