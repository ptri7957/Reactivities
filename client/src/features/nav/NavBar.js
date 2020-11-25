import React from "react";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";
import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = (props) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: "10px"}}/>
            Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
            <Button positive content="Create Activity"/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

NavBar.propTypes = {};

export default NavBar;
