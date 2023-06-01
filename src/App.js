import React, { useState } from "react";
import Home from "containers/Home";
import Users from "containers/Users";
import Login from "containers/Login";
import NotFoundPage from "containers/404Page";
import { AntLayout, PrimaryLayout } from "components/Layout";
import { Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    // <AntLayout>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/users" element={<Users />} />
    //     {/* <Route path="/login" element={<Login />} />
    //     <Route path="*" element={<NotFoundPage />} /> */}
    //   </Routes>
    // </AntLayout >
  );
}
export default App;
