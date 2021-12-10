/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import classnames from "classnames";

// reactstrap components
import {
  FormGroup,
  Input,
  Container,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Background from "../IndexSections/Background.js";
import Globe from "../IndexSections/Globe.js";


class Magazines extends React.Component {

  constructor() {
    super();
    this.state = { center: [0, 0] };
  }
  changeCenter = (center) => () => {
    this.setState({ center });
  };


  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-hero section-shaped">
              <Background />
              <Globe
                center={this.state.center}
              />
            </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Magazines;
