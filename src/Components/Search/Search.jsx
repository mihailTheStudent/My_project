import React from "react";
import { Container, Navbar, Form, FormControl } from "react-bootstrap";
import "./Search.css"

const Search = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Collapse>
        <Form>
          <FormControl type="text" placeholder="" className="searchStyle" />
          <button className ="outLine-info">Поиск</button>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Search;
