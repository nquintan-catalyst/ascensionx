import TextShelf from "./TextShelf";

const Roadmap: React.FC = () => {
    return(
    <>
        <h1>Join Us On The Journey To Ascension!</h1>
        <p>
          As the Ascension team shoots for new heights, this roadmap will be
          updated regularly to reflect our new goals, achievements, aspirations,
          and visions for the future of the Ascension token, game, and
          ecosystem.
        </p>
        <TextShelf media={[
            {
              name: "Ancestral Stage",
              key: 1,
              desc: "Muni has a PhD in Computer Science and has extensive experience in research and development, as well as a strong background in blockchain technologies and smart contract development. He has previously worked on multiple blockchain projects with the University of Calgary and the University of Quebec at Chicoutimi. Currently, Muni is working on passion projects that address the issue of making cryptocurrency environmentally friendly, such as working with carbon credits, and assisting in the development of the Ascension Ecoverse game."
            },
            {
              name: "Evolved Stage",
              key: 2,
              desc: "Nidal is a jack-of-all-trades designer with experience in game design, web design, UX/UI design, and 3D modelling. He graduated with a Bachelor of Business Administration from Cardiff Metropolitan University in 2021 but has always been passionate about the technical side of business. As a result, Nidal has been freelancing as a designer for the past 2+ years, leading him to the world of cryptocurrency and the Ascension Ecoverse game."
            },
            {
              name: "Ascended Stage",
              key: 3,
              desc: "Patrick is a second-year university student currently working towards completing his Bachelor of Business Administration at Wilfrid Laurier University. He has a passion for all things cryptocurrency, UX/UI, and digital marketing, having assisted with previous cryptocurrency projects and most recently gaining in the world of educational technology at Pencil Learning Technologies. Currently, Patrick is taking on this founding role to dive deeper into the world of cryptocurrency and explore the opportunities that it can provide regarding environmental benefits."
            },
          ]}/>
        {/*<h2>Ancestral Stage</h2>
        <ul>
          <li>
            $ASCN Whitepaper V1 & Ascension Ecoverse Technical Blueprints
            Released
          </li>
          <li>$ASCN Initial Token Launch On QuickSwap</li>
          <li>Series 1 Major Element Land NFT Launch</li>
          <li>$ASCN Token Staking Launched</li>
          <li>Direct Fiat On-Ramp Integration</li>
          <li>Surprise Community NFT Pack Drops (New gear, pets, and more!)</li>
          <li>Initial Ascension Ecoverse Gameplay Mechanics Revealed</li>
          <li>Ascension Ecoverse Game Demo Launched</li>
        </ul>
        <h2>Evolved Stage</h2>
        <ul>
          <li>$ASCN Token Listing On KuCoin, CoinMarketCap, and CoinGecko</li>
          <li>In-House NFT Marketplace Released</li>
          <li>Vehicles, Gear & Peripherals NFT Pack Drops</li>
          <li>Ascension Ecoverse Game Demo Quests Released</li>
          <li>$ASCN Partnership Program Launched</li>
          <li>Series 2 Special Element Land NFT Launch</li>
          <li>First Round Equity Funding Completed</li>
          <li>Limited Partnership NFTs Released</li>
          <li>Ascension Ecoverse Game Beta Launched</li>
        </ul>
        <h2>Ascended Stage</h2>
        <ul>
          <li>Ascension Ecoverse Alpha (Public) Game Launch</li>
          <li>Ascension Ecoverse Holiday Events, Contests, & Tournaments</li>
          <li>$ASCN Cross-Chain Integration</li>
          <li>Decentralized $ASCN Player DAO</li>
          <li>$ASCN Token Holder Game Launchpad</li>
          <li>Carbon Credit Partnership & Integration</li>
          <li>Further Development Of The $ASCN Ecosystem</li>
        </ul>*/}
    </>
    );
};

export default Roadmap;