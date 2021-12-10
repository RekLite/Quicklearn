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
import React, { useState, useEffect } from "react";
import axios from "axios";
// nodejs library that concatenates classes

// reactstrap components
import {
  Input,
  Container,
  InputGroupAddon,
  InputGroup,
  Card,
  CardBody,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Button from "reactstrap/lib/Button";
import CardHeader from "reactstrap/lib/CardHeader";
import CardFooter from "reactstrap/lib/CardFooter";
import CardText from "reactstrap/lib/CardText";

import { BsTranslate } from "../../assets/vendor/react-icons/bs";
function Translate() {
  const [inputText, setInputText] = useState("");
  const [selectedLanguageKeySource, setLanguageKeySource] = useState("fr");
  const [selectedLanguageKeyResult, setLanguageKeyResult] = useState("en");

  const [selectedLanguageNameSource, setLanguageNameSource] =
    useState("French");
  const [selectedLanguageNameResult, setLanguageNameResult] =
    useState("English");

  const [resultText, setResultText] = useState(
    "Le texte traduit apparaît ici."
  );
  const [languagesList, setLanguagesList] = useState([]);

  useEffect(() => {
    axios.get("https://libretranslate.de/languages").then((response) => {
      setLanguagesList(response.data);
    });
  }, []);

  const languageKeySource = (selectedLanguage) => {
    setLanguageKeySource(selectedLanguage.target.value);
    setLanguageNameSource(selectedLanguage.target.id);
  };

  const languageKeyResult = (selectedLanguage) => {
    setLanguageKeyResult(selectedLanguage.target.value);
    setLanguageNameResult(selectedLanguage.target.id);
  };

  const translateText = () => {
    let data = {
      q: inputText,
      source: selectedLanguageKeySource,
      target: selectedLanguageKeyResult,
      format: "text",
    };
    axios
      .post("https://libretranslate.de/translate", data)
      .then((response) => {
        setResultText(response.data.translatedText);
      })
      .catch((error) => {
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          console.log("Error response:", error.response);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error message:", error.message);
        }
        console.log(error.config);
      });
  };

  function _handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      translateText();
    }
  }

  const LanguagesDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    var functionToCall, languageChosen;

    if (props === 1) {
      functionToCall = languageKeySource;
      languageChosen = selectedLanguageNameSource;
    } else {
      functionToCall = languageKeyResult;
      languageChosen = selectedLanguageNameResult;
    }

    return (
      <UncontrolledDropdown
        direction="down"
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle caret color="primary">
          {languageChosen}
        </DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: "auto",
                    maxHeight: "250px",
                  },
                };
              },
            },
          }}
        >
          {languagesList.map((language) => {
            return (
              <li key={language.code}>
                <DropdownItem
                  id={language.name}
                  value={language.code}
                  onClick={functionToCall}
                >
                  {language.name}
                </DropdownItem>
              </li>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  return (
    <>
      <Container className="mb--5 py-lg">
        <div className="mb-0 d-flex justify-content-center">
          <h3 className="display-3 text-white mb-0">
            {" "}
            <BsTranslate /> Traducteur
          </h3>
        </div>
        <div className="mb-4 d-flex justify-content-center">
          <blockquote className="blockquote">
            <p className="mb-0 lead text-white">
              Traduisez instantanément n'importe quel texte dans plus de 17
              langues.
            </p>
          </blockquote>
        </div>
        <Row className="justify-content-center align-items-center">
          <Col lg="10">
            <Card className="shadow">
              <Row>
                <Col className="mr--3">
                  <Card>
                    <CardHeader className="text-center">
                      {LanguagesDropdown(1)}
                    </CardHeader>
                    <CardBody>
                      <div>
                        <InputGroup>
                          <Input
                            id="textToTranslate"
                            placeholder="Écrivez ou collez votre texte ici."
                            rows="9"
                            type="textarea"
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={(e) => _handleKeyDown(e)}
                          />
                          <InputGroupAddon addonType="append">
                            <Button
                              size="sm"
                              color="primary"
                              onClick={translateText}
                              placeholder="Your Result Translation.."
                            >
                              Traduire
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml--3">
                  <Card className="h-100" /*  style={{ height: 238 }} */>
                    <CardHeader className="text-center">
                      {LanguagesDropdown(2)}
                    </CardHeader>
                    <CardBody className="h-100">
                      <Card className="h-100">
                        <CardBody className="h-100">
                          <CardText>{resultText}</CardText>
                        </CardBody>
                        <CardFooter>
                          <InputGroupAddon addonType="append">
                            <Button
                              block
                              color="success"
                              onClick={() => {
                                navigator.clipboard.writeText(resultText);
                              }}
                            >
                              Copier
                            </Button>
                          </InputGroupAddon>
                        </CardFooter>
                      </Card>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <blockquote className="blockquote">
            <p className="lead text-white">
              – basé sur{" "}
              <i>
                <a className="text-white" href="https://libretranslate.com">
                  LibreTranslate
                </a>
              </i>
            </p>
          </blockquote>
        </Row>
      </Container>
    </>
  );
}

export default Translate;
