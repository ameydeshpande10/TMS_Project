import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((Response = Response.json()))
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div>
      <h1> Hello, Login page</h1>
    </div>
  );
}

export default App;
