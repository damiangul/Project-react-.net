import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
//Components
import Footer from "./Footer";

export default function Home() {
  const h2StyleSpring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 600,
    config: config.molasses,
  });

  const h4Style = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1200,
    config: config.molasses,
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-100">
        <div className="h-imageTheWeeknd relative">
          <animated.h2
            style={h2StyleSpring}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white font-mono text-5xl text-center"
          >
            Order now
          </animated.h2>
          <animated.h4
            style={h4Style}
            className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white font-mono text-center"
          >
            The weeknd newest album!
          </animated.h4>
          <img
            className="object-cover h-full w-full"
            src="images/theweeknd.jpg"
            alt="baner"
          />
        </div>
        <Link
          to={"/shop"}
          className="m-12 py-6 px-10 bg-yellow-500 rounded-full text-3xl hover: bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce"
        >
          Buy now!
          <svg
            className="w-6 h-6 m-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
      </div>
      <Footer />
    </>
  );
}
