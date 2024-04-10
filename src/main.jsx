import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Layout from "./routes/Layout.jsx";
import Create from "./routes/Create.jsx";
import Gallery from "./routes/Gallery.jsx";
import DetailView from "./routes/DetailView.jsx";
import Update from "./routes/Update.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} path="/" element={<App />} />
          <Route index={false} path="/create" element={<Create />} />
          <Route index={false} path="/gallery" element={<Gallery />} />
          <Route index={false} path="/details/:id" element={<DetailView />} />
          <Route index={false} path="edit/:id" element={<Update />} />
          <Route index={false} path="*" element={<h1 className="text-6xl">Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
