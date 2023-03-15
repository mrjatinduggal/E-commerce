import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import Review from "./pages/review/Review";

function PagesRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PagesRoutes;
