import React from "react";
import { BrowserRouter as Router, 
  Routes as Switch , 
  Route 
} from 'react-router-dom';
import Home from "./container/Home"
import NavBar from "./components/NavBar";
import Course1 from "./container/Course1";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch >
        <Route path="/" exact element={<Home/>} />
        <Route path="/course/props" exact element={<Course1/>} />
      </Switch>
    </Router>
  );
}

export default App;
