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

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Background from "../IndexSections/Background.js";
import WordTranslate from "../IndexSections/WordTranslate.js";


class Ateliers extends React.Component {
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
          <div style={{height: 580}}>
          <Background />
          <WordTranslate />
          </div>
          </section>
          </div>
        </main>
        <div className="fixed-bottom">
        <SimpleFooter />
        </div>
      </>
    );
  }
}

export default Ateliers;
