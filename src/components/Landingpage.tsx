import Banner from "./Banner";
import Header from "./Header";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Landingpage: React.FC = () => {
    return(
        <>
        <Header />
        <Banner />
        <div className="stack stack--jic">
        <Socials />
            <motion.a
            initial= {{ rotate: 0 }}
            whileHover={{ 
                rotate: [0, 10,  -10, 0],
            }}
            href="#buy"
            className="button button--2nd">
                Buy $ASCN
            </motion.a>
        </div>
        </>
    );
};

export default Landingpage;