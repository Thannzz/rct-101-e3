import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      {
        // Code here
        <div>
          <Navbar />

          <Login />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      }
    </div>
  );
}

export default App;
