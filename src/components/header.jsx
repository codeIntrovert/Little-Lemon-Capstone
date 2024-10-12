import React from 'react';
import background from '../assets/Images/background.jpg';

export default function Header() {

  return (
    <header>
      <section
        className="z-10 bg-center bg-cover m-6 rounded-3xl bg-no-repeat bg-gray-700 bg-blend-soft-light"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 shadow-sm text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Welcome to Little Lemon Restaurant!
          </h1>
          <p className="mb-8 shadow-sm text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
            BEST FOOD • BEST DRINKS • BEST MEMORIES
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button
             
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-800 rounded-lg bg-primary focus:ring-4 focus:ring-primary dark:focus:ring-primary"
            >
              Book A Table
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
