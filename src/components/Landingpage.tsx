import Banner from "./Banner";
import Header from "./Header";
import Socials from "./Socials";

const Landingpage: React.FC = () => {
    return(
        <>
        <Header />
        <Banner />
        <div className="stack stack--jic">
        <Socials />
            <a href="#buy" className="button button--2nd">
            Buy $ASCN
            </a>
        </div>
        </>
    );
};

export default Landingpage;