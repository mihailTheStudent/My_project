import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import UserTable from "./Table/Table";
import Modal from "./Modal/Modal";

function App() {
  return (
    <div className="app">
      <Header />
      <UserTable />
      <Modal />
    </div>
  );
}

export default App;
