"use client";

import { useState } from "react";
// import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();

  // const [modalOpen, setModalOpen] = useState(false);
  // const [inputs, setInputs] = useState({});
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("api/guests", {
      name: name,
      message: message,
    });
    setName("");
    setMessage("");
    router.refresh();
  };

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setInputs((prevState) => ({ ...prevState, [name]: value }));
  // };
  return (
    <div>
      {/* <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-700 text-white p-3 cursor-pointer"
      >
        Add New Post
      </button> */}

      {/* <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}> */}
      <form className="w-full">
        <div className="mb-6">
          <label
            htmlFor="title"
            className="text-white block text-sm mb-2 font-medium"
          >
            Your name
          </label>
          <input
            type="text"
            placeholder="John Petter"
            name="title"
            className="bg-[#18191E] border border-[#33353F] hover:border-yellow-600 text-gray-100 text-sm rounded-lg block w-full p-2.5"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            type="text"
            placeholder="Hi, Yola..."
            name="description"
            className="bg-[#18191E] border border-[#33353F] hover:border-yellow-600 text-gray-100 text-sm rounded-lg block w-full p-2.5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {isLoading ? (
          <button
            type="submit"
            disabled
            className="bg-yellow-500  text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Sending Message
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        )}
      </form>
      {/* </Modal> */}
    </div>
  );
};

export default Form;
