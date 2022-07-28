import React from "react";

class Background extends React.Component {

  render() {
    return (
    <>
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
    </>
  );
}
}

export default Background;
