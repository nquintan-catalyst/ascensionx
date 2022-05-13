import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaRedditAlien,
  FaMediumM,
} from "react-icons/fa";

const Socials: React.FC = () => {
  return (
    <nav className="socials">
      <a href="https://discord.gg/M5AbE6VX" target="_blank" rel="noreferrer">
        <FaDiscord />
      </a>
      <a href="#social" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="#social" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
      <a href="#social" target="_blank" rel="noreferrer">
        <FaRedditAlien />
      </a>
      <a href="#social" target="_blank" rel="noreferrer">
        <FaMediumM />
      </a>
    </nav>
  );
};

export default Socials;
