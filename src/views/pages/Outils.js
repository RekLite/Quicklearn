import React from "react";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Background from "../IndexSections/Background.js";
import Translate from "../IndexSections/Translate.js";

class Outils extends React.Component {
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
          <Translate />
          </section>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Outils;
