/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Header from "./header";
import Sosmed from "./components/Sosmed";
import Portofolio from "./components/Portofolio";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import { createPortal } from "react-dom";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variant = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    mouseEnter: {
      backgroundColor: "#FFD800",
      width: "200px",
      height: "200px",
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      mixBlendMode: "difference",
    },
    linkEnter: {
      backgroundColor: "#FFD800",
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      mixBlendMode: "difference",
    },
    hover: {
      scale: 1.5,
    },
  };

  const textEnter = () => {
    setCursorVariant("mouseEnter");
  };

  const textLeave = () => {
    setCursorVariant("default");
  };

  const linkEnter = () => {
    setCursorVariant("linkEnter");
  };

  return (
    <>
      {createPortal(
        <div className="flex items-center justify-center h-screen font-bold bg-white mobile tablet">
          <h1>DOESN'T SUPPORT MOBILE AND TABLET</h1>
        </div>,
        document.getElementById("mobile")
      )}
      <div className="desktop">
        <motion.div
          variants={variant}
          animate={cursorVariant}
          transition={{ type: "tween", ease: "backOut" }}
          className="cursor"
        ></motion.div>
        <Header onMouseEnter={linkEnter} onMouseLeave={textLeave} />
        <main className="h-screen">
          <div className="perkenalan">
            <p className="text" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              My name is
            </p>
            <p className="text" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              Ma'ruf Fiardy
            </p>
          </div>
          <div className="tagline">
            <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
              I DO
            </p>
            <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
              WEB <span className="strip">━</span> DEVELOPMENT
            </p>
          </div>
        </main>
        <TechStack />
        <Portofolio onMouseEnter={linkEnter} onMouseLeave={textLeave} />
        <Sosmed />
        <Contact onMouseEnter={linkEnter} onMouseLeave={textLeave} />
      </div>
    </>
  );
}

export default App;
