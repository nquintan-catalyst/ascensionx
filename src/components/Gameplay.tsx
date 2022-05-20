import MediaShelf from "./MediaShelf";
import tornado from "../images/tornado.gif";
import { motion } from "framer-motion";

const Gameplay: React.FC = () => {
    return(
    <>
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
              imageUrl: "/images/island-forest.png",
              caption: "forest",
            },
            {
              imageUrl: "/images/island-quarry.png",
              caption: "quarry",
            },
            {
              imageUrl: "/images/island-wetland.png",
              caption: "wetlands",
            },
            {
              imageUrl: "/images/island-lake.png",
              caption: "lakeside",
            },
            {
              imageUrl: "/images/island-oil.png",
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

        <div className="gameImage">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2 }}
            viewport={{ once: true }}
            src={tornado}
            alt="thing"
          />
        </div>

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
    </>
    );
};

export default Gameplay;