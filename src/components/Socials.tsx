import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaRedditAlien,
  FaMediumM,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Socials: React.FC = () => {
  return (
    <nav className="socials">
      <motion.a
      initial= {{ rotate: 0 }}
      whileHover={{ 
        rotate: [0, 10,  -10, 0],
      }} 
      href="https://discord.gg/M5AbE6VX"
      target="_blank"
      rel="noreferrer">
        <FaDiscord />
      </motion.a>

      <motion.a
      initial= {{ rotate: 0 }}
      whileHover={{ 
        rotate: [0, 10,  -10, 0],
      }} 
      href="#social"
      target="_blank"
      rel="noreferrer">
        <FaTwitter />
      </motion.a>

      <motion.a
      initial= {{ rotate: 0 }}
      whileHover={{ 
        rotate: [0, 10,  -10, 0],
      }} 
      href="#social"
      target="_blank"
      rel="noreferrer">
        <FaInstagram />
      </motion.a>

      <motion.a
      initial= {{ rotate: 0 }}
      whileHover={{ 
        rotate: [0, 10,  -10, 0],
      }} 
      href="#social"
      target="_blank"
      rel="noreferrer">
        <FaRedditAlien />
      </motion.a>

      <motion.a
      initial= {{ rotate: 0 }}
      whileHover={{ 
        rotate: [0, 10,  -10, 0],
      }} 
      href="#social"
      target="_blank"
      rel="noreferrer">
        <FaMediumM />
      </motion.a>
    </nav>
  );
};

export default Socials;
