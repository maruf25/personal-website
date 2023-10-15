import { motion } from "framer-motion";

import logoReact from "../assets/logo-react.png";
import logoNext from "../assets/logo-next.png";
import logoJS from "../assets/logo-js.png";
import logoHTML from "../assets/logo-html.png";
import logoCSS from "../assets/logo-css.png";
import logoNode from "../assets/logo-nodejs.png";
import logoPHP from "../assets/logo-php.png";
import logoLaravel from "../assets/logo-laravel.png";

const TECHSTACK = [logoHTML, logoCSS, logoJS, logoReact, logoNext, logoNode, logoPHP, logoLaravel];

const TechStack = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[34rem] bg-[#1A1A1A] text-white">
      <motion.span
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl mb-5 font-bold"
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
            <img src={item} alt="ReactJS" className="w-full h-full object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </div>
    // <div className="bg-[#1A1A1A] h-96 flex flex-col justify-center items-center text-white">
    //   <table className="table-fixed w-[700px]">
    //     <thead className="align-top h-[70px]">
    //       <tr>
    //         <th className="text-left text-4xl" colSpan={2}>
    //           TECH STACK
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody className="align-middle">
    //       <tr>
    //         <td className="border border-white p-4 flex justify-center items-center">
    //           <img src={logoReact} alt="ReactJS" className="w-[100px] " />
    //         </td>
    //         <td className="border border-white p-4 flex justify-center items-center">
    //           <img src={logoReact} alt="ReactJS" className="w-[100px] " />
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default TechStack;
