import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Herkese merhaba, ben <span className="purple">Esat </span>
            <br />
            Şuanda yalova üniversitesinde öğrenciyim.
            <br />
            Kodlamanın dışında yapmayı sevdiğim başka aktiviteler de var!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spor yapmak
            </li>
            <li className="about-activity">
              <ImPointRight /> Müzik dinlemek
            </li>
            <li className="about-activity">
              <ImPointRight /> Doğa yürüyüşleri 
            </li>
          </ul>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Kod, bilgiye giden yoldur ve bizler bu yolların mimarlarıyız.!"{" "} 
          </p>
          
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
