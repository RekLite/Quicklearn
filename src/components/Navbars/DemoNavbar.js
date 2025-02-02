import React from "react";
import { Link } from "react-router-dom";

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { FaReact } from "../../assets/vendor/react-icons/fa";
import { BsThreeDotsVertical } from "../../assets/vendor/react-icons/bs";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import NavbarText from "reactstrap/lib/NavbarText";
import styles from "../../assets/css/mon_css.module.css";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
    activeTab: "",
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/quicklearn-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/quicklearn-purple.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink>
                      <a className={styles.underline} href="https://reklite.github.io/quicklearn/#/magazines">
                        Magazines
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <a className={styles.underline} href="https://reklite.github.io/quicklearn/#/ateliers">
                        Ateliers
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mr-3">
                    <NavLink>
                      <a className={styles.underline} href="https://reklite.github.io/quicklearn/#/outils">
                        Outils
                      </a>
                    </NavLink>
                  </NavItem>
                  <NavbarText>
                    <BsThreeDotsVertical size={20} color="white" />
                  </NavbarText>
                </Nav>
              </UncontrolledCollapse>
              <Nav className="align-items-lg-center" navbar>
                <NavItem className="ml-3">
                  <NavLink
                    className="nav-link-icon"
                    href="https://reactjs.org/"
                    target="_blank"
                  >
                    <span className="nav-link-inner--text">
                      <FaReact size={35} color="#61dafb" />
                      <span className="mr-1" style={{ color: "#61dafb" }}>
                        <a
                          value="bwr"
                          href="https://reactjs.org/"
                          className={styles.underline}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Built with React.js
                        </a>
                      </span>
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
