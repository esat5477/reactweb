import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Yaptığım <strong className="purple">Projeler</strong>
        </h1>
        <p style={{ color: "white" }}>
         Son zamanlarda üzerinde çalıştığım birkaç proje.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mağaza stok takibi"
              description="Mağaza stok takibi sistemimiz sayesinde ürünlerinizin güncel durumunu anlık olarak takip edin. Bu sayede gereksiz stok maliyetlerinden kurtulun ve hiçbir zaman ürününüzün tükenmesiyle karşılaşmayın. Müşteri memnuniyetini artırırken iş verimliliğinizi de en üst düzeye çıkarın."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kod Parçaları"
              description="Next.js ve  Css ile oluşturulmuş kişisel blog sayfam, içeriği markdown dosyalarından alır ve Next.js kullanarak işler. Karanlık modu destekler ve markdown kullanarak blog yazmak kolaydırNext.js ve  Css ile oluşturulmuş kişisel blog sayfam, içeriği markdown dosyalarından alır ve Next.js kullanarak işler."
              ghLink="https://www.linkedin.com/in/esatdlkc/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor"
              description="React.js ile oluşturulmuş çevrimiçi kod ve markdown editörü. Web sitesinin anında görüntülenmesiyle html, css ve js kodunu destekleyen çevrimiçi editör. Araç çubuğu ve anında önizleme ile Özel Html etiketlerini destekleyen README dosyası oluşturmak için çevrimiçi markdown editörü."
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

         

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
