import React from "react";
import { useSpring, animated, config } from "react-spring";

export default function AboutUs() {
  const pStyle = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 400,
    config: config.molasses,
  });

  const firstLiStyle = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 800,
    config: config.molasses,
  });

  const secondLiStyle = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1200,
    config: config.molasses,
  });

  const thirdLiStyle = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1600,
    config: config.molasses,
  });

  const secondPStyle = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 2000,
    config: config.molasses,
  });

  return (
    <div className="h-imageTheWeeknd bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-7xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg transform -skew-y-12 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                <animated.p style={pStyle}>
                  We are <strong>number one</strong> CD shop in Europe! Our goal
                  is to provide everyone with a dream album.
                </animated.p>
                <ul className="list-disc space-y-2">
                  <animated.li
                    style={firstLiStyle}
                    className="flex items-start"
                  >
                    <span className="h-6 flex items-center sm:h-7">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      Over <strong>72444</strong> thousands of CDs sold!
                    </p>
                  </animated.li>
                  <animated.li
                    style={secondLiStyle}
                    className="flex items-start"
                  >
                    <span className="h-6 flex items-center sm:h-7">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      We are providing music from over <strong>1000</strong>{" "}
                      artists!
                    </p>
                  </animated.li>
                  <animated.li
                    style={thirdLiStyle}
                    className="flex items-start"
                  >
                    <span className="h-6 flex items-center sm:h-7">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="ml-2">
                      <strong>10</strong> years on the market!
                    </p>
                  </animated.li>
                </ul>
                <animated.p style={secondPStyle} className="text-center p-4">
                  Find us on facebook, instagram and github!
                </animated.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
