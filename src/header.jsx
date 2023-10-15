/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import spinner from "./assets/spinner.png";

const Header = ({ onMouseEnter, onMouseLeave }) => {
  const variant = {
    hover: {
      scale: 1.5,
    },
  };

  return (
    <header className="header">
      <motion.img
        className="smile"
        src={spinner}
        alt="maruf"
        animate={{
          rotate: 360,
          borderRadius: [20, 100, 20],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeatDelay: 0,
          repeat: Infinity,
        }}
      />
      {/* <nav>
        <ul onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <motion.li variants={variant} whileHover="hover">
            <a href="/">Beranda</a>
          </motion.li>
          <motion.li variants={variant} whileHover="hover">
            <a href="/tentang">Tentang</a>
          </motion.li>
          <motion.li variants={variant} whileHover="hover">
            <a href="/kontak">Kontak</a>
          </motion.li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
