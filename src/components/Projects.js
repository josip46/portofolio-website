import { Container, Row, Col, Carousel } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pigGamePic from "../assets/img/pig-game-ss.png";
import blackjackPic from "../assets/img/Blackjack-ss.png";
import MaptyAppPic from "../assets/img/mapty-app-ss.png";
import WeatherAppPic from "../assets/img/weather-app-ss.png";
import forkifyPic from "../assets/img/forkify-app-ss.png";
import eatNsplitPic from "../assets/img/eat-n-split-ss.png";
import farAwayPic from "../assets/img/far-away-ss.png";
import wildOasisPic from "../assets/img/wild-oasis-ss.png";
import ShoppingListPic from "../assets/img/shopping-list-ss.png";
import usePopcornPic from "../assets/img/use-popcorn-ss.png";
import fastReactPizza from "../assets/img/fastreactpizza-ss.png";
import QuizPic from "../assets/img/quiz-ss.png";
import ProjectCard from "./ProjectCard";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      name: "PIG-GAME",
      netlifyLink: "https://piggame-jb.netlify.app/",
      gitHubLink: "https://github.com/josip46/PigGame",
      pictureLink: pigGamePic,
      description:
        "After learning the basics of Python, I decided that I want to specialize in web development. I started with freecodecamp.org to learn HTML and CSS. After learning them, I enrolled into Johannes Schmedtman's JavaScript course. This was the first project of his course. It's a simple game, where you throw dice and collect points. The first player to 100 points wins.",
    },
    {
      name: "BLACKJACK",
      netlifyLink: "https://blackjack-josip.netlify.app/",
      gitHubLink: "https://github.com/josip46/BLACKJACK",
      pictureLink: blackjackPic,
      description:
        "After learning some basics of the JavaScript I decided to put my knowledge to the test and build something I would like. Since I like card games I decided to build a simple game of Blackjack. The goal of the game is to have more points than a CPU, but not more than 21, since then you lose the game. While I felt pretty comfortable building the game. And it plays well on my computer. The version on the netlify is not as optimized as I would like. But if you download the code from GitHub it should be working as intended! 😄",
    },
    {
      name: "MAPTY-APP",
      netlifyLink: "https://app.netlify.com/sites/maptyapp-josip",
      gitHubLink: "https://github.com/josip46/Mapty",
      pictureLink: MaptyAppPic,
      description:
        "The second project in the JavaScript course was creating this beatifull app, where you can track your exercises. You can track the location of your workouts, type, duration, distance etc. During the creating of the application I was learning how to use API calls in JS. With the knowledge of it I was ready to create my second JavaScript project.",
    },
    {
      name: "WEATHER-APP",
      netlifyLink: "https://weatherapp-josip.netlify.app/",
      gitHubLink: "https://github.com/josip46/WeatherApp",
      pictureLink: WeatherAppPic,
      description:
        "This is the second app that I created on my own, to test my newly acquired knowledge. While I was searching for ideas a lot of the time I stumbled into weather-app suggestion through various sources. That's why I decided to tackle this project. It's a weather app, which detects your location and displays the current weather and the weather for the new few days. You can search for other places weather information, check weather humidity and windspeed, and check more detailed information about weather in the next few days, like seeing the highest and lowest temperature.",
    },
    {
      name: "FORKIFY-APP",
      netlifyLink: "https://forkify-josip.netlify.app/",
      gitHubLink: "https://github.com/josip46/Forkify",
      pictureLink: forkifyPic,
      description:
        "The last project of the JavaScript course was building this application. Looking back building this up was quite a challange. It's an app, where you can search for recipies. After you have found the recipie that you want you can adjust your ingridients by choosing the amount of people you want to serve. You can also choose to save the recipie or make one of you own.",
    },
    {
      name: "EAT-N-SPLIT",
      netlifyLink: "https://eat-n-split-josip.netlify.app/",
      gitHubLink: "https://github.com/josip46/eat-n-split/tree/master",
      pictureLink: eatNsplitPic,
      description:
        "After finishing Johannes Schmedtman's JavaScript course I decided to learn React next so I enrolled into his React course. This was the first mini project. I honestly really enjoyed building this app and learning React. It's a simple app where you can track how much money your friends owe you, based on the bills you split and who pays them.",
    },
    {
      name: "FAR-AWAY",
      netlifyLink: "https://far-away-josip.netlify.app/",
      gitHubLink: "https://github.com/josip46/far-away/tree/master",
      pictureLink: farAwayPic,
      description:
        "This is the second application I build in the React following the course. I have to say that project was quite interesting and I could already see benefits of using React over vanilla JavaScript. The application is used to make a list of items you are going to pack on your trip. You can also order them in a difrrent ways. And when you pack them, you can cross them off your list.",
    },
    {
      name: "SHOPPING LIST",
      netlifyLink: "https://shopping-list-by-josip.netlify.app/",
      gitHubLink: "https://github.com/josip46/shopping-list/tree/master",
      pictureLink: ShoppingListPic,
      description:
        "After going through some React basics I felt comfortable enough to tackle making my first app in React, so I decided to make this little app, which let's you create your shopping list. You can select price and quantity of things and also select the amount of your budget. Building this application was a lot of fun so I hope you enjoy it. 😄",
    },
    {
      name: "USE-POPCORN",
      netlifyLink: "https://use-popcorn-josip.netlify.app/",
      gitHubLink: "https://github.com/josip46/use-popcorn/tree/master",
      pictureLink: usePopcornPic,
      description:
        "The next project I was building during the course is this movie app. I found building this app realy interesting, since I also enjoying watching movies. During the building of the app I get to know some of the new things to me, like building reusable components in React, using API and more. The app allows you to search for movie, give them a rating and save them on your watched list.",
    },
    {
      name: "QUIZZ APP",
      netlifyLink: "https://the-ultimate-quiz-by-josip.netlify.app/",
      gitHubLink: "https://github.com/josip46/the-ultimate-quiz/tree/master",
      pictureLink: QuizPic,
      description:
        "My second React project is probablly my bigest one yet. After learning about useReducer in React I decided to use my knowledge about it and test my skills by creating this app, that I would also enjoy using, since I like playing trivia quizzes myself. Making of the game was a lot of fun. In the game you can choose multiple difficulties, topics and number of questions. I hope you try to play at least one game yourself to test your knowledge. 😄",
    },
    {
      name: "Fast-React-Pizza",
      netlifyLink: "https://fast-react-pizza-jb.netlify.app/",
      gitHubLink: "https://github.com/josip46/fast-react-pizza",
      pictureLink: fastReactPizza,
      description:
        "In this project it was the first time I started using state managment library- to be more precise React Redux and I used Tailwind to style the components. The project is an app that simulates pizzeria site, where you can order pizzas.",
    },
    {
      name: "The Wild Oasis Website",
      netlifyLink: "https://the-wild-oasis-website-demo-sigma.vercel.app/",
      gitHubLink: "https://github.com/josip46/the-wild-oasis-website",
      pictureLink: wildOasisPic,
      description:
        "This is my first big project in Next.js. It's an app similar to Booking, where you can book a Cabin in the tourist resort. You can choose between diffrent cabins of diffrent sizes and pick diffrent dates to reserve your trip. I have also implemented authenthication with google and many other things.",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here you can see some of my projects that I created on my
                    journey learning web development. It's a mix of tutorial
                    projects and my own ideas that I created to practice certain
                    type of technologies/skills. To see more information about
                    the project hover over it or click on it to test it!
                  </p>
                  <Carousel>
                    {projects.map((project, index) => (
                      <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center">
                          <ProjectCard {...project} />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}

export default Projects;
