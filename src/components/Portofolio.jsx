/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const PortofolioContent = [
  {
    title: "POS TICKETING MOVIE WITH LARAVEL LIVEWIRE",
    link: "https://github.com/maruf25/POS_Cinema_Media",
  },
  {
    title: "PROJECT DONATION REALTIME WITH GRAPHQL",
    link: "https://github.com/maruf25/project-donate",
  },
  {
    title: "PROJECT PERSONAL WEBSITE",
    link: "",
  },
  {
    title: "SHOW MORE",
    link: "https://github.com/maruf25?tab=repositories",
  },
];

const Portofolio = (props) => {
  const [hover, setHover] = useState({
    hover: false,
  });

  const handleCLickProject = (link) => {
    window.open(link, "_blank");
  };

  const handleMouseEnter = (path) => {
    setHover({ path, hover: true });
    props.onMouseEnter();
  };
  const handleMouseLeave = () => {
    setHover({ hover: false });
    props.onMouseLeave();
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <table className="table-fixed w-[700px]">
        <thead className="align-top h-[70px]">
          <tr>
            <th
              className="text-left text-4xl"
              colSpan={2}
              onMouseEnter={props.onMouseEnter}
              onMouseLeave={props.onMouseLeave}
            >
              MY PORTOFOLIO
            </th>
          </tr>
        </thead>
        <tbody className="align-top break-words text-2xl font-bold">
          {PortofolioContent.map((content, key) => {
            const isOddIndex = key % 2 !== 0;
            const lastIndex = PortofolioContent.length - 1;
            const lastItem = PortofolioContent[lastIndex];

            if (isOddIndex) {
              return null;
            }

            const nextContent = PortofolioContent[key + 1];

            return (
              <tr key={key}>
                <motion.td
                  onClick={handleCLickProject.bind(this, content.link)}
                  className={
                    lastItem.title === content.title
                      ? "bg-gray-300 p-4 h-[200px] align-middle text-center"
                      : "border border-gray-300 p-4 h-[200px]"
                  }
                  layout
                  whileHover={{
                    color: "#ffd800",
                    backgroundColor: "#FF4038",
                    borderTop: "1px solid #FF4038",
                    borderBottom: "1px solid #FF4038",
                  }}
                  onMouseEnter={handleMouseEnter.bind(this, content.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href={content.link} target="_blank" rel="noreferrer">
                    {content.title}
                  </a>
                  <AnimatePresence>
                    {hover.hover && hover.path === content.title && (
                      <motion.span className="text-[36px]">
                        <FaArrowRightLong />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.td>
                {nextContent && (
                  <motion.td
                    onClick={handleCLickProject.bind(this, nextContent.link)}
                    className={
                      lastItem.title === nextContent.title
                        ? "bg-gray-300 p-4 h-[200px] align-middle text-center"
                        : "border border-gray-300 p-4 h-[200px]"
                    }
                    layout
                    whileHover={{
                      color: "#ffd800",
                      backgroundColor: "#FF4038",
                      borderTop: "1px solid #FF4038",
                      borderBottom: "1px solid #FF4038",
                    }}
                    onMouseEnter={handleMouseEnter.bind(this, nextContent.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href={nextContent.link} target="_blank" rel="noreferrer">
                      {nextContent.title}
                    </a>
                    <AnimatePresence>
                      {hover.hover &&
                        hover.path === nextContent.title &&
                        lastItem.title !== nextContent.title && (
                          <motion.span className="text-[36px]">
                            <FaArrowRightLong />
                          </motion.span>
                        )}
                    </AnimatePresence>
                  </motion.td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Portofolio;
