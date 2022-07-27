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
import React from "react";
import { GiBookmarklet } from "../../assets/vendor/react-icons/gi";
import { GiTeacher } from "../../assets/vendor/react-icons/gi";
import { GiPencilRuler } from "../../assets/vendor/react-icons/gi";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";

function HeaderView(onglet) {
  const location = useLocation();
  const color1 = "primary";
  const color2 = "github";
  if (location.pathname === onglet) {
    return color1;
  } else {
    return color2;
  }
}

function Hero(props) {
  return (
    <>
      <div className="position-relative">
        <section className="section section-hero section-shaped">
          {/* Background circles */}
          <div className="shape shape-style-1 shape-primary">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <Container className="shape-container mb-4 d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/quicklearn-white.png")}
                    style={{ width: "280px" }}
                  />
                  <p className="lead text-white">
                    Apprenez une nouvelle langue rapidement avec nos supports
                    intéractifs sur QuickLearn.
                  </p>
                  <Row className="align-items-center">
                    <Col className="text-right" lg="4" sm="7">
                      <p className="lead text-white">Supports :</p>
                    </Col>
                    <Col lg="5">
                      <div className="btn-wrapper mt-2">
                        <Row className="align-items-center justify-content-center">
                          <Button
                            className="btn-white btn-icon mb-3 mb-sm-0 w-75"
                            color={HeaderView("/magazines")}
                            href="https://reklite.github.io/quicklearn/#/magazines"
                          >
                            <span className="btn-inner--text">
                              <GiBookmarklet size={20} /> <span>Magazines</span>
                            </span>
                          </Button>{" "}
                        </Row>
                        <Row className="align-items-center justify-content-center mt-2">
                          <Button
                            className="btn-icon mb-3 mb-sm-0 w-75"
                            color={HeaderView("/Ateliers")}
                            href="https://reklite.github.io/quicklearn/#/Ateliers"
                          >
                            <span className="btn-inner--text">
                              <GiTeacher size={20} />
                              <span className="text-white mr-1 ml-1">
                                Ateliers
                              </span>
                            </span>
                          </Button>
                        </Row>
                        <Row className="align-items-center justify-content-center mt-2">
                          <Button
                            className="btn-icon mb-3 mb-sm-0 w-75"
                            color={HeaderView("/outils")}
                            href="https://reklite.github.io/quicklearn/#/Outils"
                          >
                            <span className="btn-inner--text">
                              <GiPencilRuler size={20} />
                              <span className="text-white mr-1">Outils</span>
                            </span>
                          </Button>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-5">
                    <small className="text-white font-weight-bold mb-0 mr-2">
                      *site réalisé dans le cadre du projet d'IHM
                    </small>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.univ-pau.fr/fr/index.html"
                    >
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/uppa-logo-white.png")}
                        target="_blank"
                      />
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
