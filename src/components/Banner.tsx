const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner__copy">
        <h1 className="banner__display">Ascension Ecoverse</h1>
        <p className="banner__subheading">
          The Collaborative Digital World of the Future
        </p>
      </div>
      <div className="banner__image">
        <img src="ascensionx/island1.png" alt="island" />
        <a className="button button--cta" href="#play-now">
          Coming Soon!
        </a>
      </div>
    </div>
  );
};

export default Banner;
