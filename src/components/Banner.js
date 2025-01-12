import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Josip", "Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {"Hi I'm "}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Hey there! 👋 I'm Josip, a lifelong computer enthusiast who
                    turned that childhood fascination into a passion for web
                    development. From early days of playing video games to
                    diving into the intricate world of coding, I've found my
                    calling in crafting digital experiences on the web. Driven
                    by an insatiable curiosity and a deep-seated love for all
                    things tech, I've embarked on a journey to become a web
                    developer. My enthusiasm is not just about writing lines of
                    code; it's about the magic that happens when creativity
                    meets functionality. In a world where everyone is racing to
                    the future, I'm carving my own path with a unique blend of
                    passion and determination. Web development, to me, is more
                    than just a skill; it's a canvas where ideas come to life,
                    and user experiences are transformed. Join me on this
                    exciting adventure as I navigate the ever-evolving landscape
                    of web development, fueled by a genuine love for the craft.
                    Together, let's build a digital world that's not just
                    functional, but a delight to explore. Ready to turn pixels
                    into purpose and code into captivating experiences. Let's
                    create something extraordinary!
                  </p>
                  <button onClick={() => console.log("connect")}>
                    <a
                      href="#connect"
                      className="text-reset text-decoration-none"
                    >
                      Let's connect <FaArrowCircleRight size={30} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
