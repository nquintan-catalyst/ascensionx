import MarsVideo from "../images/lush-green-mars-changing-into-a-desert-world-2022-03-14-12-11-39-utc.mp4";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__copy">
        <h1 className="banner__display">Ascension Ecoverse</h1>
        <p className="banner__subheading">
          The Collaborative Digital World of the Future
        </p>
      </div>
      <video className="videoTag" autoPlay loop muted>
        <source src={MarsVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Banner;
