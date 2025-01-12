import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={6}></Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={navIcon1} alt="icon 1" />
              </a>
              <a href="">
                <img src={navIcon2} alt="icon 1" />
              </a>
              <a href="">
                <img src={navIcon3} alt="icon 1" />
              </a>
            </div>
            <p>Copyright 2024. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
