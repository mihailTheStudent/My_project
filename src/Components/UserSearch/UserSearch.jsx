import React, { useState } from "react";
//import { Container, Navbar, Form, FormControl } from "react-bootstrap";
import "./UserSearch.css";

const UserSearch = ({ setSearchValue }) => {
  //const [searchTerm, setSearchTerm] = useState("");
  //const [usersArray, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    //setSearchTerm(e.target.value);
    setSearchValue(e.target.value);
    
  //   console.log( usersArray )
  //   console.log (users)
  //   const results = users.filter(
  //     (user) =>
  //       user.fullName.toLowerCase().includes(e.target.value.toLowerCase()) 
  //       // user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       // user.middleName.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       // user.birthDate.includes(e.target.value) ||
  //       // user.gender.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   console.log( results )
  //   setSearchResults(results);
 };

  return (
    <div>
      <input
        autoFocus
        type="text"
        className="searchStyle"
        autoComplete="off"
       
        onChange={handleSearch}
      />
      <button className="outLine-info">Поиск</button>
      
    </div>
  );
};

export default UserSearch;
