import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import react from "../assets/img/react.svg";
import next from "../assets/img/next.svg";
import tailwindIcon from "../assets/img/tailwind-icon.svg";
import gitIcon from "../assets/img/git-svgrepo-com.svg";
import queryIcon from "../assets/img/reactquery-icon.svg";
import bootstrapIcon from "../assets/img/bootstrap-svgrepo-com.svg";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const listOfSkills = [
    { source: react, title: "React" },
    { source: next, title: "Next.js" },
    { source: tailwindIcon, title: "Tailwind" },
    { source: gitIcon, title: "Git" },
    { source: bootstrapIcon, title: "Bootstrap" },
    { source: queryIcon, title: "ReactQuery" },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Below is a list of technologies I feel the most comfortable
                using:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {listOfSkills.map((skill, index) => {
                  return (
                    <div className="item" key={index}>
                      <img src={skill.source} alt="skill" />
                      <h5>{skill.title}</h5>
                    </div>
                  );
                })}
                {}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bg" />
    </section>
  );
}

export default Skills;
