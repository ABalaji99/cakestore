import React from "react";
import { cakes } from "./Components/Constants";
import Routing from "./Components/Routes/Routing";


function App() {
  return (

    <Routing constantItems={cakes} />
   
  );
}

export default App;
