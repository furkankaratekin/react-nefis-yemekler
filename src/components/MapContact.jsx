import React, { useState } from "react";

const MapContact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2654f979-11e1-4b66-a055-08d58945471d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-16 mx-auto flex justify-center">
        <div className="lg:w-1/2 md:w-2/3 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font text-center">
              
          </h2>
          <form onSubmit={onSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600 font-bold ml-2 "
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                placeholder="enter your name..."
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 font-bold ml-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                placeholder="enter your email..."
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 font-bold ml-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
                placeholder="Write something..."
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit Form
            </button>
            
            <span>{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MapContact;
