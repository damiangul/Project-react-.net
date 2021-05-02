import React from "react";

export default function AboutUs() {
  return (
    <div class="h-imageTheWeeknd bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-7xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-12 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                <p>
                  We are <strong>number one</strong> CD shop in Europe! Our goal
                  is to provide everyone with a dream album.
                </p>
                <ul class="list-disc space-y-2">
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
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
                    <p class="ml-2">
                      Over <strong>72444</strong> thousands of CDs sold!
                    </p>
                  </li>
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
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
                    <p class="ml-2">
                      We are providing music from over <strong>1000</strong>{" "}
                      artists!
                    </p>
                  </li>
                  <li class="flex items-start">
                    <span class="h-6 flex items-center sm:h-7">
                      <svg
                        class="flex-shrink-0 h-5 w-5 text-cyan-500"
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
                    <p class="ml-2">
                      <strong>10</strong> years on the market!
                    </p>
                  </li>
                </ul>
                <p className="text-center p-4">
                  Find us on facebook, instagram and github!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
