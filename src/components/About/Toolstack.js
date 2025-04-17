import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGit // Git ikonunu import ettik
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit /> {/* Visual Studio Code yerine Git ikonunu kullandık */}
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> 
      </Col>


    </Row>
  );
}

export default Toolstack;