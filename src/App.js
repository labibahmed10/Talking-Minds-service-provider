import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./Components/CheckOut/CheckOut";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import LogIn from "./Components/UserRegister/LogIn/LogIn";
import RequireAuth from "./Components/UserRegister/RequireAuth/RequireAuth";
import Register from "./Components/UserRegister/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import MyBlogs from "./Components/MyBlogs/MyBlogs";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export const ServiceContext = createContext([]);

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

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
          <Route path="/blogs" element={<MyBlogs></MyBlogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/signup" element={<Register></Register>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>

        <Footer></Footer>
      </ServiceContext.Provider>
    </div>
  );
}

export default App;
