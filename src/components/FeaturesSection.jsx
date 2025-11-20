import React from "react";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";

const FeaturesSection = () => {
  return (
    <div>
      <div className="w-[95%] px-5 relative m-auto mt-5 h-[62px] md:hidden  flex items-center bg-[var(--color-1-orange)]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="24.8887"
            width="28"
            height="3.11111"
            rx="1.55555"
            fill="white"
          />
          <rect
            y="12.4443"
            width="28"
            height="3.11111"
            rx="1.55556"
            fill="white"
          />
          <rect width="28" height="3.11111" rx="1.55556" fill="white" />
        </svg>
        <h1 className="font-normal m-auto text-[26px] text-center text-black font-family">
          Каталог товаров
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lgg:grid-cols-5 justify-between items-center max-w-[1555px] w-full sm:w-[90%] m-auto py-8 px-6 sm:flex-row flex-col gap-6">
        <div className="flex items-center sm:gap-4 sm:flex-row flex-col  gap-3">
          <img
            src={photo1}
            alt=""
            className="w-[60px] h-[60px] md:w-[79px] md:h-[79px]"
          />
          <span className="font-normal sm:text-start text-center max-w-[200px] sm:max-w-full md:max-w-[260px] text-xs leading-[130%] tracking-[-0.01em] text-[#2d170c] font-family  md:text-sm md:leading-[126%]">
            Изготавливаем конструкции по вашему дизайн-проекту
          </span>
        </div>
        <div className="flex items-center sm:gap-4 sm:flex-row flex-col  gap-3">
          <img
            src={photo2}
            alt=""
            className="w-[60px] h-[60px] md:w-[79px] md:h-[79px]"
          />
          <span className="font-normal sm:text-start text-center max-w-[200px] sm:max-w-full text-xs leading-[130%] tracking-[-0.01em] text-[#2d170c] font-family md:max-w-[240px] md:text-sm md:leading-[126%]">
            Изготовили более 2 400 деревянных конструкций
          </span>
        </div>
        <div className="flex items-center sm:gap-4 sm:flex-row flex-col  gap-3">
          <img
            src={photo3}
            alt=""
            className="w-[60px] h-[60px] md:w-[79px] md:h-[79px]"
          />
          <span className="font-normal sm:text-start text-center max-w-[200px] sm:max-w-full text-xs leading-[130%] tracking-[-0.01em] text-[#2d170c] font-family md:max-w-[250px] md:text-sm md:leading-[126%]">
            Собственное производство площадью 6 000 м²
          </span>
        </div>
        <div className="md:flex hidden items-center sm:gap-4 sm:flex-row flex-col  gap-3">
          <img
            src={photo4}
            alt=""
            className="w-[60px] h-[60px] md:w-[79px] md:h-[79px]"
          />
          <span className="font-normal sm:text-start text-center max-w-[200px] sm:max-w-full text-xs leading-[130%] tracking-[-0.01em] text-[#2d170c] font-family md:max-w-[200px] md:text-sm md:leading-[126%]">
            Производим изделия из дерева с 1998 года
          </span>
        </div>
        <div className="flex items-center sm:gap-4 sm:flex-row flex-col gap-3">
          <img
            src={photo5}
            alt=""
            className="w-[60px] h-[60px] md:w-[79px] md:h-[79px]"
          />
          <span className="font-normal sm:text-start text-center max-w-[200px] sm:max-w-full text-xs leading-[130%] tracking-[-0.01em] text-[#2d170c] font-family md:max-w-[200px] md:text-sm md:leading-[126%]">
            Гарантия от 3х лет на все конструкции
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
