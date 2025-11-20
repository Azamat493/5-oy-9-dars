import React from "react";
import Rectangle444 from "../assets/images/Rectangle444.png";

const AboutSection = () => {
  return (
    <section className="flex max-w-[1555px] w-[90%] m-auto items-center justify-between gap-12 py-16 px-3 sm:px-8 flex-col lg:flex-row">
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <h2 className="font-normal text-[32px] sm:text-start text-center text-black font-family">
          Немного о нас
              </h2>
               <img
          src={Rectangle444}
          alt="Компания"
          className="w-full sm:hidden block h-auto rounded-lg shadow-lg"
        />
        <div className="bg-[var(--color-oragne)] sm:block hidden w-full max-w-[650px] h-0.5"></div>

        <p className="font-light sm:text-start text-center block sm:m-0 m-auto  text-base w-full max-w-[88%] leading-[158%] mt-5 text-black font-family">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
          integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing nec
          senectus duis nibh. In faucibus adipiscing tellus enim, consequat
          integer accumsan. Ultrices ipsum nulla consequat malesuada enim mollis
          est.
        </p>
     

        <div className="flex relative sm:shadow-none shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] items-start sm:bg-transparent p-[40px_20px] bg-[var(--color-3-white)] gap-4">
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute sm:block hidden"
          >
            <path
              d="M40 12.5H32.775L35.275 0H25.2262L22.525 13.5L22.5 30H40V12.5Z"
              fill="#FF7A1B"
            />
            <path
              d="M17.5 30V12.5H10.275L12.775 0H2.72625L0.0250015 13.5L0 30H17.5Z"
              fill="#FF7A1B"
            />
          </svg>
          <svg
            width="58"
            height="44"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-5%] left-5 sm:hidden block"
          >
            <path
              d="M40 12.5H32.775L35.275 0H25.2262L22.525 13.5L22.5 30H40V12.5Z"
              fill="#FF7A1B"
            />
            <path
              d="M17.5 30V12.5H10.275L12.775 0H2.72625L0.0250015 13.5L0 30H17.5Z"
              fill="#FF7A1B"
            />
          </svg>
          <div>
            <p className="font-normal  sm:text-start text-center ml-0 sm:ml-15 text-lg leading-[158%] text-black font-family mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est. Venenatis, sagittis, amet ornare donec
              purus suscipit nam sodales. Varius sit amet nullam dictumst massa
              consequat odio faucibus.
            </p>
            <p className="font-light sm:text-start text-center text-base leading-[158%] text-black opacity-50 font-family">
              Никита Данилов, Руководитель компании
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:block hidden lg:w-1/2">
        <img
          src={Rectangle444}
          alt="Компания"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;