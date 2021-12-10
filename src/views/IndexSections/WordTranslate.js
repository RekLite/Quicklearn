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
  FormGroup,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledAlert,
} from "reactstrap";

import { FaPencilAlt } from "../../assets/vendor/react-icons/fa";

function WordTranslate() {
  const words_atable = [
    { word: "verre", wordTranslation: "glass" },
    { word: "assiette", wordTranslation: "plate" },
    { word: "couteau", wordTranslation: "knife" },
    { word: "fourchette", wordTranslation: "fork" },
    { word: "plat", wordTranslation: "dish" },
    { word: "dessert", wordTranslation: "dessert" },
  ];

  const words_animaux = [
    { word: "lapin", wordTranslation: "rabbit" },
    { word: "oiseau", wordTranslation: "bird" },
    { word: "chat", wordTranslation: "cat" },
    { word: "chien", wordTranslation: "dog" },
    { word: "canard", wordTranslation: "duck" },
    { word: "poule", wordTranslation: "chicken" },
    { word: "cheval", wordTranslation: "horse" },
    { word: "vache", wordTranslation: "cow" },
    { word: "poisson", wordTranslation: "fish" },
    { word: "coq", wordTranslation: "cock" },
    { word: "souris", wordTranslation: "mouse" },
  ];

  const words_maison = [
    { word: "chambre à coucher", wordTranslation: "bedroom" },
    { word: "grenier", wordTranslation: "attic" },
    { word: "salle de jeux", wordTranslation: "playroom" },
    { word: "cuisine", wordTranslation: "kitchen" },
    { word: "salle de bain", wordTranslation: "bathroom" },
    { word: "séjour", wordTranslation: "living room" },
    { word: "salle à manger", wordTranslation: "dining room" },
    { word: "bureau", wordTranslation: "study" },
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomNumber(x) {
    return getRandomInt(x);
  }

  const [inputText, setInputText] = useState("");

  const [successOrFailFont, setSuccessOrFailFont] = useState("");
  const [successOrFailForm, setSuccessOrFailForm] = useState("");

  const [wordsToTranslate, setWordsToTranslate] = useState(words_atable);
  const [activeTheme, setActiveTheme] = useState("À Table");

  const [wordToTranslate, setWordToTranslate] = useState("");
  const [activeWordTranslation, setActiveWordTranslation] = useState("");

  const [compteurResultat, setCompteurResultat] = useState(0);
  const [compteurGlobal, setCompteurGlobal] = useState(0);

  const [showAlert, setShowAlert] = useState("");

  const [activeLanguage, setActiveLanguage] = useState("anglais");

  useEffect(() => {
    if (wordsToTranslate.length != 0) {
      changeWord();
    } 
  }, [wordsToTranslate]);

  useEffect(() => {
    reset();
  }, [activeLanguage]);

  function _handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      verifyTranslation();
      e.preventDefault();
    }
  }

  const changeWords = (x) => {
    if (x === "animaux") {
      setWordsToTranslate(words_animaux);
      setActiveTheme("Animaux");
    }
    if (x === "maison") {
      setWordsToTranslate(words_maison);
      setActiveTheme("Pièces de la maison");
    }
    if (x === "table") {
      setWordsToTranslate(words_atable);
      setActiveTheme("À Table");
    }
    setCompteurResultat(0);
    setCompteurGlobal(0);
    setShowAlert("");
  };

  const reset = () => {
    if (activeTheme === "À Table") {
      changeWords("table");
    }
    if (activeTheme === "Animaux") {
      changeWords("animaux");
    }
    if (activeTheme === "Pièces de la maison") {
      changeWords("maison");
    }
  };

  const changeLanguage = (x) => {
    if (x === "en") {
      setActiveLanguage("anglais");
    } else if (x === "fr") {
      setActiveLanguage("français");
    }
  };

  const removeWord = () => {
    if (wordsToTranslate.length != 0) {
      const updatedWords = wordsToTranslate.filter(
        (eachObj) => eachObj.word !== wordToTranslate
      );
      setWordsToTranslate(updatedWords);
    } 
    if (wordsToTranslate.length == 1) {
      setShowAlert(alert);
    }
  };

  function changeWord() {
    let length = wordsToTranslate.length;
    let id = getRandomNumber(length);
    if (activeLanguage === "anglais") {
      setWordToTranslate(wordsToTranslate[id].word);
      setActiveWordTranslation(wordsToTranslate[id].wordTranslation);
    } else if (activeLanguage === "français") {
      setWordToTranslate(wordsToTranslate[id].wordTranslation);
      setActiveWordTranslation(wordsToTranslate[id].word);
    }
  }

  function clearInput() {
    setInputText("");
  }

  const verifyTranslation = () => {
    setCompteurGlobal(compteurGlobal + 1);
    if (inputText.toLowerCase() === activeWordTranslation) {
      setSuccessOrFailForm("has-success");
      setSuccessOrFailFont("text-success");
      setCompteurResultat(compteurResultat + 1);
    } else {
      setSuccessOrFailForm("has-danger");
      setSuccessOrFailFont("text-warning");
    }
    setTimeout(() => {
      setSuccessOrFailForm("");
      setSuccessOrFailFont("");
      removeWord();
      clearInput();
    }, 1300);
  };

  const alert = (
    <UncontrolledAlert className="mt-3" color="warning" fade={true}>
      <span className="alert-inner--icon">
        <i className="ni ni-settings" />
      </span>{" "}
      <span className="alert-inner--text">
        <strong>Alerte !</strong> Vous avez épuisé tous les mots de ce thème ! Veuillez changer de thème.
      </span>
    </UncontrolledAlert>
  );

  return (
    <>
      <Container className="mb-5 mt-5 py-lg">
        <div className="mb-0 d-flex justify-content-center">
          <h3 className="display-3 text-white mb-0">
            {" "}
            <FaPencilAlt /> Traduction de mots par thème
          </h3>
        </div>
        <div className="mb-0 d-flex justify-content-center">
          <blockquote className="blockquote">
            <p className="mb-0 lead text-white">
              Mot à traduire : <b>{wordToTranslate}</b>
            </p>
          </blockquote>
        </div>
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <FormGroup className={successOrFailForm}>
              <Input
                className={successOrFailFont}
                id="inputWordTranslate"
                placeholder="Entrez la traduction.."
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => _handleKeyDown(e)}
                value={inputText}
              />
            </FormGroup>
            <Row className="justify-content-center align-items-center">
              <Col>
                <div className="mt-0 d-flex justify-content-start">
                  <p className="mb-0 h6 text-white">
                    Résultats : {compteurResultat}/{compteurGlobal}
                  </p>
                </div>
              </Col>
              <Col>
                <div className="mt-0 d-flex justify-content-end">
                  <p className="mb-0 mr-2 h6 text-white">Thème :</p>
                  <UncontrolledDropdown group>
                    <DropdownToggle size="sm" caret color="success">
                      {activeTheme}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        value="table"
                        onClick={(e) => changeWords(e.target.value)}
                      >
                        À Table
                      </DropdownItem>
                      <DropdownItem
                        value="maison"
                        onClick={(e) => changeWords(e.target.value)}
                      >
                        Pièces de la maison
                      </DropdownItem>
                      <DropdownItem
                        value="animaux"
                        onClick={(e) => changeWords(e.target.value)}
                      >
                        Animaux de la ferme
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <Col>
                <div className="mt-2 d-flex justify-content-end">
                  <p className="mb-0 mr-2 h6 text-white">Écrire en : </p>
                  <UncontrolledDropdown group>
                    <DropdownToggle size="sm" caret color="default">
                      {activeLanguage}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        value="en"
                        onClick={(e) => changeLanguage(e.target.value)}
                      >
                        Anglais
                      </DropdownItem>
                      <DropdownItem
                        value="fr"
                        onClick={(e) => changeLanguage(e.target.value)}
                      >
                        Français
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                {showAlert}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WordTranslate;
