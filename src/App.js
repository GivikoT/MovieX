import AppRoutes from "./AppRoutes";
import NavbarWrapper from "./components/Container/NavbarWrapper/NavbarWrapper";
import Footer from "./components/Presentational/Footer/Footer";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavbarWrapper />
      <div className="content-container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
