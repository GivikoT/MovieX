import AppRoutes from "./AppRoutes";
import NavbarWrapper from "./components/Container/NavbarWrapper/NavbarWrapper";
import Footer from "./components/Presentational/Footer/Footer";
import React from "react";

function App() {
  return (
    <div>
      <NavbarWrapper />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
