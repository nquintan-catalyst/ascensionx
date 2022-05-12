import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MediaShelf from "./components/MediaShelf";
import Socials from "./components/Socials";
import Tokenomics from "./components/Tokenomics";

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
        <h1>About Ascension</h1>
        <p>
          Ascension Ecoverse is a real-time strategy crypto game where players
          collect, craft, trade, and collaborate to further the evolution of the
          human race. Throughout the game, players will work to accumulate as
          many in-game resources as possible, which can be used to build the
          cities of the future via the game's utility token, $ASCN.
        </p>
        <p>
          In the Ecoverse, each player has a chance to impact the world in their
          own unique way, be it through research, harvesting, or creating. Each
          player's actions has distinct and long-lasting aftereffects, forcing
          players to make the tough decision between quick profit and long-term
          sustainability. Plus, with a fully autonomous economy, the Ecoverse
          provides multiple different ways for players to profit, assuming they
          don't bring the world down in the process…
        </p>
      </article>
      <article>
        <h1>About Polygon</h1>
        <h2>Start On Your Island!</h2>
        <p>
          Your Ascension Ecoverse journey starts on the Ascension Island NFT
          that you will call home. These <a href="#whitepaper">islands</a>{" "}
          contain all the resources and systems that you need to kickstart your
          journey, and if you're lucky, some might even come with special traits
          that give you an in-game boost!
        </p>
        <MediaShelf
          media={[
            {
              imageUrl: "ascensionx/images/island-forest.png",
              caption: "forest",
            },
            {
              imageUrl: "ascensionx/images/island-quarry.png",
              caption: "quarry",
            },
            {
              imageUrl: "ascensionx/images/island-wetland.png",
              caption: "wetlands",
            },
            {
              imageUrl: "ascensionx/images/island-lake.png",
              caption: "lakeside",
            },
            {
              imageUrl: "ascensionx/images/island-oil.png",
              caption: "oil fields",
            },
          ]}
        />
        <h2>Harvest, Craft, and Sell Your Way to Success!</h2>
        <p>
          Every resource on your island can be harvested, and either crafted
          into items, or sold! Harvest your resources and craft them into items
          for faster production, then sell off your produce to the Vendor for
          profits! Each resource takes time to harvest, and every crafted item
          has an associated cost, so it's up to you to determine the strategy
          that makes you the most profit!{" "}
          <a href="#whitepaper">Learn more about each function</a>
        </p>
        <h2>Watch and Mitigate the World Pollution Bar!</h2>
        <p>
          Just like in real life, every action you take has repercussions, and
          these repercussions are reflected on the{" "}
          <a href="#whitepaper">World Pollution Bar</a> (WPB). Climate-friendly
          actions will lower the WPB, while unsustainable actions will raise the
          WPB, keeping environmentalism at the top of players' minds at all
          times. Just remember, as the WPB rises, the entire Ecoverse will be
          completely reshaped! Storms, rising water levels, temperature changes,
          and other environmental disasters will make it harder and harder to
          harvest the resources you need to survive.
        </p>
        <h2>Earn Returns From the Bank!</h2>
        <p>
          Looking for a way to earn additional returns while you play? Lock up
          your tokens at the Ascension Ecoverse bank with our unique staking
          mechanism. Earn 50% of the in-game fees charged, liquidity pool
          profits, and gain access to extra profits from our designated staking
          wallet, all while you play!
        </p>
        <h2>Sell and Trade With Your Fellow Players!</h2>
        <p>
          Think you can earn better profits without the Vendor? Work out deals
          with your fellow players instead! Use an external marketplace to sell
          anything and everything, as each resource, crafted item, and island
          that you own is stored on the blockchain as an NFT! Plus, use the
          unique Ascension trading mechanism to swap resources with other
          players, and combine <a href="whitepaper">trading and sales</a> to
          create unique and profitable strategies!
        </p>
      </article>
      <article>
        <Tokenomics />
      </article>
      <article>
        <h1>Join Us On The Journey To Ascension!</h1>
        <h2>Ancestral Stage</h2>
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
        </ul>
        <p>
          As the Ascension team shoots for new heights, this roadmap will be
          updated regularly to reflect our new goals, achievements, aspirations,
          and visions for the future of the Ascension token, game, and
          ecosystem.
        </p>
      </article>
      <article>
        <h1>Team</h1>
        <h3>Dr. Muni Venkateswarlu Kumaramangalam, PhD</h3>
        <p>
          Muni has a PhD in Computer Science and has extensive experience in
          research and development, as well as a strong background in blockchain
          technologies and smart contract development. He has previously worked
          on multiple blockchain projects with the University of Calgary and the
          University of Quebec at Chicoutimi. Currently, Muni is working on
          passion projects that address the issue of making cryptocurrency
          environmentally friendly, such as working with carbon credits, and
          assisting in the development of the Ascension Ecoverse game.
        </p>
        <h3>Nidal Ghonaim</h3>
        <p>
          Nidal is a jack-of-all-trades designer with experience in game design,
          web design, UX/UI design, and 3D modelling. He graduated with a
          Bachelor of Business Administration from Cardiff Metropolitan
          University in 2021 but has always been passionate about the technical
          side of business. As a result, Nidal has been freelancing as a
          designer for the past 2+ years, leading him to the world of
          cryptocurrency and the Ascension Ecoverse game.
        </p>
        <h3>Patrick Dean</h3>
        <p>
          Patrick is a second-year university student currently working towards
          completing his Bachelor of Business Administration at Wilfrid Laurier
          University. He has a passion for all things cryptocurrency, UX/UI, and
          digital marketing, having assisted with previous cryptocurrency
          projects and most recently gaining in the world of educational
          technology at Pencil Learning Technologies. Currently, Patrick is
          taking on this founding role to dive deeper into the world of
          cryptocurrency and explore the opportunities that it can provide
          regarding environmental benefits.
        </p>
      </article>
      <article>
        <h1>Community</h1>
        <p>Community has always been a cornerstone of the Ascension Ecoverse project, and with the combined efforts of the Ascension team and the community members themselves, we grow stronger on a daily basis.</p>
        <p>If you want updates on or wish to get involved with the $ASCN token, the Ascension Land NFTs, or the Ascension Ecoverse game, follow our social platforms and join our Discord community!</p>
        <Socials />
      </article>
      <article>
        <h1>Get Ready For Launch!</h1>
        <p>Coming soon...</p>
      </article>
      <footer>
        © 2022 AscensionX.
      </footer>
    </main>
  );
}

export default App;
