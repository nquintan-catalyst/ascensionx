import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Socials from "./components/Socials";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import Community from "./components/Community";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Gameplay from "./components/Gameplay";
import Countdown from "./components/Countdown";

function App() {
  return (
    <main className="main">
      <Header />
      <Banner />
      <div className="stack stack--jic">
        <Socials />
        <a href="#buy" className="button button--2nd">
          Buy $ASCN
        </a>
      </div>

      <article>
        <About />
      </article>

      <article>
        <Gameplay />
      </article>

      <article>
        <Tokenomics />
      </article>

      <article>
        <Roadmap />
      </article>

      <article>
        <Team />
      </article>

      <article>
        <Community />
        <Socials />
      </article>

      <article>
        <Countdown />
      </article>

      <footer>
        © 2022 .
      </footer>
    </main>
  );
}

export default App;
