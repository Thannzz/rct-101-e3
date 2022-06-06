import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Products/Product/Product";
import { RequiredAuth } from "./hoc/RequiredAuth";

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
            <Route
              path="/products"
              element={
                <RequiredAuth>
                  <Product />
                </RequiredAuth>
              }
            />
          </Routes>
        </div>
      }
    </div>
  );
}

export default App;
