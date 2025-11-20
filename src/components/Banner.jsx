import React, { useState, useEffect } from "react";
import Banner1 from "../assets/images/Banner.png";
import Banner2 from "../assets/images/Banner.png";
import Banner3 from "../assets/images/Banner.png";
import kisspng1 from "../assets/images/kisspng1.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bg: Banner1,
      title: "Беседки под ключ за 7 дней",
      benefit: "Выгода до 24%",
      assembly: "Сборка за 1 день",
    },
    {
      bg: Banner2,
      title: "Садовые беседки со скидкой",
      benefit: "Скидка до 30%",
      assembly: "Доставка за 2 дня",
    },
    {
      bg: Banner3,
      title: "Премиум беседки под ключ",
      benefit: "Бесплатный проект",
      assembly: "Монтаж за 3 дня",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative mt-0 md:mt-5 max-w-[1555px] w-full md:w-[87%] m-auto bg-[var(--color-3-white)] rounded-[5px]">
      <div
        className="md:h-[379px] md:block hidden bg-cover bg-center transition-all duration-500 ease-in-out h-[368px]"
        style={{ backgroundImage: `url(${slides[currentSlide].bg})` }}
      >
        <div className="absolute sm:left-[8%] sm:top-[37%] transform -translate-y-1/2 sm:w-[50%] left-4 top-1/2 w-[60%]">
          <h2 className="mb-4 font-semibold 2xl:text-[70px] leading-[124%] text-[color:var(--white-ffffff)] font-family text-[52px] lgg:text-[60px]">
            {slides[currentSlide].title}
          </h2>
        </div>
        <div className="absolute md:block hidden z-5 2xl:right-15 top-1/2 transform -translate-y-1/2 right-[-35%] mdd:right-[-20%] lgg:right-0">
          <img
            src={kisspng1}
            alt="Беседка"
            className="2xl:w-full lgg:w-[80%] mdd:w-[60%] w-[50%] h-full object-contain"
          />
        </div>
        <div className="absolute  bottom-[15%] z-0 sm:h-[66px] left-0 right-0 lgg:gap-15 gap-10 bg-[var(--color-oragne)] sm:py-2 lgg:pl-[110px] md:flex hidden sm:items-center pl-4 sm:flex-row flex-col items-start  h-[auto] py-3">
          <span className="font-normal 2xl:text-2xl leading-[97%] text-[color:var(--white-ffffff)] font-family text-[20px]">
            {slides[currentSlide].benefit}
          </span>
          <span className="font-normal 2xl:text-2xl leading-[97%] text-[color:var(--white-ffffff)] font-family text-[20px]">
            {slides[currentSlide].assembly}
          </span>
        </div>
        <button
          className="absolute sm:left-[-1.5%] top-1/2 transform -translate-y-1/2 sm:w-[45px] sm:h-[45px] bg-[var(--color-2-black)] shadow-[0_2px_4px_0_rgba(175,175,175,0.25)] rounded-[30px] opacity-10 hover:opacity-100 transition-opacity duration-200 cursor-pointer hidden md:flex items-center justify-center w-[30px] h-[30px] left-2"
          aria-label="Предыдущий слайд"
          onClick={prevSlide}
        >
          <svg
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M9.12109 1.5L2.1211 8.5L9.12109 15.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="absolute z-10 sm:right-[-1.5%] top-1/2 transform -translate-y-1/2 sm:w-[45px] sm:h-[45px] bg-[var(--color-2-black)] shadow-[0_2px_4px_0_rgba(175,175,175,0.25)] rounded-[30px] opacity-10 hover:opacity-100 transition-opacity duration-200 cursor-pointer flex items-center justify-center w-[30px] h-[30px] right-2"
          aria-label="Следующий слайд"
          onClick={nextSlide}
        >
          <svg
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 15.5L8.5 8.5L1.5 1.5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === currentSlide
                  ? "bg-[var(--color-oragne)]"
                  : "bg-[var(--gray-color-)]"
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="bg-[#6e9425] relative md:hidden block w-full h-[368px]">
        <div className="absolute smm:left-[8%] left-[10%] md:top-[37%] transform -translate-y-1/2 smm:w-[50%] w-[80%] top-1/2">
          <h2 className="mb-4 font-semibold 2xl:text-[70px] leading-[124%] text-[color:var(--white-ffffff)] font-family text-[45px] smm:text-[52px] lgg:text-[60px]">
            {slides[currentSlide].title}
          </h2>
        </div>
        <svg
          width="15"
          height="40"
          viewBox="0 0 15 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="top-1/2 absolute left-3"
          onClick={prevSlide}
        >
          <path
            opacity="0.5"
            d="M12.2881 2.00049L2.28809 20.0005L12.2881 38.0005"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
        <svg
          width="15"
          height="40"
          viewBox="0 0 15 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="top-1/2 right-3 absolute"
          onClick={nextSlide}
        >
          <path
            opacity="0.5"
            d="M2.00049 38.0005L12.0005 20.0005L2.00049 2.00049"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === currentSlide
                  ? "bg-[var(--color-oragne)]"
                  : "bg-[var(--gray-color-)]"
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
