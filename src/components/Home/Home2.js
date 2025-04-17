import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
  AiOutlineFundProjectionScreen,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SİZLERE <span className="purple"> KENDİMİ </span> TANITAYIM
            </h1>
            <p className="home-about-body">
             Progralama konusunda kendini geliştirmeye çalışan bir gencim
              <br />
              <br />Şu dillerde yetkinliğim var
              <i>
                <b className="purple"> C#, Javascript ve Python. </b>
              </i>
              <br />
              <br />
              İlgi alanlarım arasında &nbsp;
              <i>
                <b className="purple">Web geliştirme </b> ve
                ayrıca {" "}
                <b className="purple">
                  Programlama
                </b>
                <b className="purple"></b> yer alıyor {" "}
                <b className="purple"></b>
              </i>
              <br />
              <br />
Günümüm büyük bir kısmı <em><strong className="purple">Yazılım</strong></em> ve
<i>
                <b className="purple">
                  {" "}
                  farklı Spor aktiviteleri 
                </b>
              </i>
              &nbsp; ile geçiyor
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>İletişime geç</h1>
            <p>
              Bu <span className="purple">bağlantıları </span>kullanabilirsin
            </p>
            
            <ul className="home-about-social-links">
              

              <li className="social-icons">            
                <a
                  href="https://wa.me/905393422454"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp/>
                </a>
              </li>



              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in//esatdlkc/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://www.instagram.com/esat.dalkilicc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>


            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
