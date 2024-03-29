import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import about from "./routes/about";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";


function App(){
  return(
   <HashRouter>
     <Navigation/>
     <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={about}/>
    <Route path="/movie/:id" component={Detail}/>

  </HashRouter>
  );
}

export default App;