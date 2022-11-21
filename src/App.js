import React from "react";
import { cakes } from "./Components/Constants";
import Routing from "./Components/Routes/Routing";

import '../src/App.css'


function App() {
  return (
  <div className="app">
    <Routing constantItems={cakes} />
  </div>

  );
}

export default App;
