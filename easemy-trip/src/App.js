import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";

import Navbar from "./Components/Navbar/Navbar";
import { Login } from "./componentsB/authentication/Login";
import { Register } from "./componentsB/authentication/Register";

import { Payments } from "./componentsB/Payments";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<Payments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
