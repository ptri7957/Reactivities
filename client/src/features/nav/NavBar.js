import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={Link} to="/">
            <img src="/assets/logo.png" alt="logo" style={{marginRight: "10px"}}/>
            Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" as={Link} to="/activities"/>
        <Menu.Item>
            <Button positive content="Create Activity" as={Link} to="/create" />
        </Menu.Item>
      </Container>
    </Menu>
  );
};


export default NavBar;
