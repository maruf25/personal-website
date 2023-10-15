/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

import spinner from "../assets/spinner.png";

const Contact = (props) => {
  const [inputData, setInputData] = useState({
    floating_project: "",
    floating_email: "",
    floating_company: "",
    floating_telp: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/maruffiardy/google_sheets/hyEGSbdHVuaUCNeW?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              inputData.floating_project,
              inputData.floating_email,
              inputData.floating_company,
              inputData.floating_telp,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      setInputData({
        ...inputData,
        floating_project: "",
        floating_email: "",
        floating_company: "",
        floating_telp: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div
        className="text-4xl font-bold text-red-500 mb-9 w-[700px]"
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <p>I OFFER TO MAKE</p>
        SOMETHING TOGHETER
      </div>
      <form className="w-[700px]" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            value={inputData.floating_project}
            onChange={handleChange}
            name="floating_project"
            id="floating_project"
            cols="5"
            rows="10"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer resize-none"
            placeholder=" "
            required
          ></textarea>
          <label
            htmlFor="floating_project"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tell us about your project
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            value={inputData.floating_email}
            onChange={handleChange}
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              value={inputData.floating_company}
              onChange={handleChange}
              name="floating_company"
              id="floating_company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              How can I appeal you ?
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              value={inputData.floating_telp}
              onChange={handleChange}
              pattern="[0-9]{12}"
              name="floating_telp"
              id="floating_telp"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-black dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_telp"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
        </div>
        <div
          className="grid grid-cols-1"
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          <motion.button
            className="justify-self-end p-3 rounded"
            type="submit"
            whileHover={{ backgroundColor: "black", color: "#ffd800", cursor: "none" }}
            whileTap={{ scale: 1.5 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            Send Request
          </motion.button>
        </div>
      </form>
      <div className="flex flex-row justify-between items-center w-[700px] p-2">
        <div className="w-[150px]">
          <img src={spinner} alt="smile" />
        </div>
        <div className="text-xl font-bold">@2023</div>
      </div>
    </div>
  );
};

export default Contact;
