import React from "react";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer footer-dark">
          <Container>
            <Row className=" row-grid align-items-center mb--4">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light">
                  QuickLearn™
                </h3>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                    Raphaël Montulet.
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="https://github.com/RekLite/quicklearn"
                      target="_blank"
                    >
                      Github
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
