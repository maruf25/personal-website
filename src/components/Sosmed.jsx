import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const sosialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/maruffiardy/",
  },
  {
    name: "Linkedln",
    link: "https://www.linkedin.com/in/ma-ruf-fiardy-a6336a272/",
  },
  {
    name: "Github",
    link: "https://github.com/maruf25",
  },
];

const Sosmed = () => {
  const [hover, setHover] = useState({
    hover: false,
  });

  return (
    <div className="flex justify-center items-center h-96 w-full bg-[#1A1A1A]">
      <ul className="list-none flex flex-col -rotate-90 text-white text-end text-4xl ">
        {sosialMedia.map((item, key) => (
          <a key={key} href={item.link} target="_blank" rel="noreferrer">
            <motion.li
              initial={{
                borderTop: "1px solid rgb(82,82,91)",
                borderBottom: "1px solid rgb(82,82,91)",
              }}
              whileHover={{
                color: "#ffd800",
                backgroundColor: "#FF4038",
                borderTop: "1px solid #FF4038",
                borderBottom: "1px solid #FF4038",
              }}
              onMouseEnter={() => setHover({ path: item.name, hover: true })}
              onMouseLeave={() => setHover({ hover: false })}
              className="bg-[#1A1A1A] border-y-[1.5px] w-96 h-[150px] inline-block "
            >
              <span className="mr-4 flex items-center justify-end">
                <AnimatePresence>
                  {hover.hover && hover.path === item.name && (
                    <motion.span
                      initial={{ opacity: 0, marginRight: "4px" }}
                      animate={{ opacity: 1, marginRight: "8px" }}
                      exit={{ opacity: 0, marginRight: "4px" }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowLeftLong />
                    </motion.span>
                  )}
                </AnimatePresence>
                {item.name}
              </span>
            </motion.li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Sosmed;
