import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleBlog from "./pages/SingleBlog/SingleBlog.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />'
        <Route path="/posts/post/:id" element={<SingleBlog />} />'
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
