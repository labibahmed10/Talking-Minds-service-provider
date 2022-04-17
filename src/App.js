import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./Components/CheckOut/CheckOut";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import LogIn from "./Components/UserRegister/LogIn/LogIn";
import RequireAuth from "./Components/UserRegister/RequireAuth/RequireAuth";
import SignUp from "./Components/UserRegister/Register/Register";
import NotFound from "./Components/NotFound/NotFound";

export const ServiceContext = createContext([]);

function App() {
  const [services, setServices] = useState([]);

  return (
    <div>
      <Navbar></Navbar>
      <ServiceContext.Provider value={[services, setServices]}>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route
            path="/service/:sID"
            element={
              <RequireAuth>
                <CheckOut></CheckOut>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </ServiceContext.Provider>
    </div>
  );
}

export default App;
