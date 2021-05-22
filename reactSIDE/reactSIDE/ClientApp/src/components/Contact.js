import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_as2iqbs",
        "template_drgi5v6",
        e.target,
        "user_XIKINaQzJMKwuiBKlo1Q9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="flex flex-col justify-between items-center h-imageTheWeeknd bg-background-ballons font-bold">
      <div className="mt-20">
        <h2 className="font-mono text-lg text-center lg:text-4xl text-white">
          Have questions? Ask us via email.
        </h2>
        <img
          className="h-24 mx-auto transform rotate-12"
          src="images/email.png"
          alt="email icon"
        />
      </div>

      <form
        className="flex flex-col w-2/3 mx-auto mb-16 h-2/4 justify-between lg:w-1/2 2xl:w-1/4"
        onSubmit={sendEmail}
      >
        <input
          placeholder="What you want to ask us?"
          className="border-2 p-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
          type="text"
          name="subject"
        />
        <input
          placeholder="What's your name?"
          className="border-2 p-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
          type="text"
          name="name"
        />
        <input
          placeholder="Type your email address"
          className="border-2 p-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
          type="email"
          name="email"
        />
        <textarea
          placeholder="Tell us more about your subject"
          className="border-2 p-3 outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
          name="message"
        />
        <input
          className="w-full md:w-32 mx-auto p-1 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition text-black"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
