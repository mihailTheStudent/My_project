import React from "react";
import { Container, Navbar, Form, FormControl } from "react-bootstrap";

const Search = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Collapse>
        <Form inLine>
          <FormControl type="text" placeholder="" className="mr-sm-2" />
          <button variant="outLine-info">Поиск</button>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Search;
