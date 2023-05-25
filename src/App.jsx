import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import UserTable from "./Table/Table";
import Modal from "./Modal/Modal";

function App() {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <div className="app">
      <Header setSearchValue={setSearchValue}/>
      <UserTable searchValue={searchValue}/>
    </div>
  );
};

export default App;
