import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./Components/CheckOut/CheckOut";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

export const ServiceContext = createContext([]);

function App() {
  const [services, setServices] = useState([]);

  return (
    <div>
      <Navbar></Navbar>
      <ServiceContext.Provider value={[services, setServices]}>
        <Routes>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/service/:sID" element={<CheckOut></CheckOut>}></Route>
        </Routes>
      </ServiceContext.Provider>
    </div>
  );
}

export default App;
