import React from "react";

// reactstrap components
import {
  Container,
  Row,
} from "reactstrap";

import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import { Motion, spring } from "react-motion";
import { IoMdGlobe } from "../../assets/vendor/react-icons/io";

import ReactTooltip from "react-tooltip";

const mapStyles = {
  width: "90%",
  height: "auto",
};

const markers = [
  { name: "New York", coordinates: [-73.9352, 40.7306] },
  { name: "London", coordinates: [-0.1276, 51.5073] },
  { name: "Johannesburg", coordinates: [28.0497, -26.205] },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  { name: "San Francisco", coordinates: [-122.4199, 37.779] },
  { name: "Singapore", coordinates: [103.8194, 1.3571] },
  { name: "Toronto", coordinates: [-79.3839, 43.6534] },
  { name: "Miami", coordinates: [-80.1936, 25.7741] },
  { name: "Atlanta", coordinates: [-84.3902, 33.7489] },
  { name: "Sydney", coordinates: [151.2164, -33.8548] },
  { name: "Melbourne", coordinates: [144.9631, -37.8142] },
  { name: "Seattle", coordinates: [-122.33, 47.6038] },
  { name: "Cape Town", coordinates: [18.4173, -33.9289] },
  { name: "Denver", coordinates: [-104.9848, 39.7392] },
  { name: "Durban", coordinates: [31.0099, -29.8618] },
  { name: "Birmingham", coordinates: [-1.9026, 52.4796] },
  { name: "Brisbane", coordinates: [153.0234, -27.4689] },
  { name: "Hong Kong", coordinates: [114.1772, 22.3027] },
];

function Globe({ center }) {
  let count = 0;

  function cityName() {
    let resCityName = markers[count].name;
    count++;
    return resCityName;
  }

  function setOffMarker() {
    let res = 15;
    let name = markers[count].name;
    if (
      name === "Birmingham" ||
      name === "Boston" ||
      name === "Johannesburg" ||
      name === "Brisbane" ||
      name === "Toronto" ||
      name === "Sydney" ||
      name === "Seattle" ||
      name === "San Francisco"
    ) {
      res = -30;
    }
    return res;
  }

  function setLink() {
    let resCityLink = "https://en.wikipedia.org/wiki/" + markers[count].name;
    return resCityLink;
  }

  return (
    <>
      <Container className="py-lg">
        <div className="mb-0 d-flex justify-content-center">
          <h3 className="display-3 text-white mb-0">
            <IoMdGlobe size={45} /> Globe des villes anglophones
          </h3>
        </div>
        <div className="mb-0 d-flex justify-content-center">
          <blockquote className="blockquote">
            <p className="mb-0 lead text-white">
              Visualisez en 3D les principales villes anglophones dans le monde.<br />
              <center>
              Cliquez sur une ville pour ouvrir le wikipédia correspondant.
              </center>
            </p>
          </blockquote>
        </div>
        <Row className="row d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <Motion
              defaultStyle={{
                x: center[0],
                y: center[1],
              }}
              style={{
                x: spring(center[0]),
                y: spring(center[1]),
              }}
            >
              {({ x, y }) => (
                <ComposableMap
                  width={650}
                  height={650}
                  projection="orthographic"
                  projectionConfig={{ scale: 300 }}
                  style={mapStyles}
                >
                  <ZoomableGlobe center={[x, y]}>
                    <circle
                      cx={325}
                      cy={325}
                      r={300}
                      fill="transparent"
                      stroke="#CFD8DC"
                    />
                    <Geographies
                      disableOptimization
                      geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
                    >
                      {(geos, proj) =>
                        geos.map((geo, i) => (
                          <Geography
                            data-tip="oui"
                            key={geo.id + i}
                            geography={geo}
                            projection={proj}
                            style={{
                              default: { fill: "#CFD8DC" },
                            }}
                          />
                        ))
                      }
                    </Geographies>
                    <Markers>
                      {markers.map((coordinates) => (
                        <Marker
                          marker={coordinates}
                          style={{
                            hidden: { display: "none" },
                          }}
                        >
                          <g
                            fill="none"
                            stroke="#FF5533"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-12, -24)"
                          >
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                          </g>
                          {/* <circle
                            cx={0}
                            cy={0}
                            r={6}
                            fill="#FF5722"
                            stroke="#FFF"
                          /> */}
                          <text
                            textAnchor="middle"
                            y={setOffMarker()}
                            style={{ fontFamily: "system-ui", fill: "white" }}
                            className="h5"
                          >
                            <a href={setLink()}>{cityName()}</a>
                          </text>
                        </Marker>
                      ))}
                    </Markers>
                  </ZoomableGlobe>
                </ComposableMap>
              )}
            </Motion>
            <ReactTooltip />
          </div>
          <div className="mb-0 d-flex justify-content-center">
        </div>
        </Row>
      </Container>
    </>
  );
}

export default Globe;
