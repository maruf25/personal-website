import { motion } from "framer-motion";

import logoReact from "../assets/logo-react.png";
import logoNext from "../assets/logo-next.png";
import logoJS from "../assets/logo-js.png";
import logoHTML from "../assets/logo-html.png";
import logoCSS from "../assets/logo-css.png";
import logoNode from "../assets/logo-nodejs.png";
import logoPHP from "../assets/logo-php.png";
import logoLaravel from "../assets/logo-laravel.png";
import logoGolang from "../assets/logo-golang.png";

const TECHSTACK = [
  logoHTML,
  logoCSS,
  logoJS,
  logoReact,
  logoNext,
  logoNode,
  logoPHP,
  logoLaravel,
  logoGolang,
];

const TechStack = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[34rem] bg-[#1A1A1A] text-white">
      <motion.span
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-5 text-4xl font-bold"
      >
        TECH STACK
      </motion.span>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3"
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {TECHSTACK.map((item, index) => (
          <motion.div key={index} className="border border-gray-800 w-[200px] h-[150px] p-2">
            <img
              src={item}
              alt="techstack"
              className="object-contain w-full h-full"
              style={{
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
