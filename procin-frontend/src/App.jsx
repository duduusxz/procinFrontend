import { Routes, Route, useNavigation } from "react-router-dom";
import React from "react";
import Carrinho from "./pages/carrinho.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Carrinho />} />
      </Routes>
    </div>
  );
}

export default App;
