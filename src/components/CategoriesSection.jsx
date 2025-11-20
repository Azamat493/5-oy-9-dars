import React from "react";
import Besedka from "../assets/images/Besedka.png";
import Grass from "../assets/images/Grass.png";
import Group475 from "../assets/images/Group475.png";
import Pergola from "../assets/images/Pergola.png";
import Grass1 from "../assets/images/Grass1.png";
import Star from "../assets/images/Star.png";
import Gorka from "../assets/images/Gorka.png";
import House from "../assets/images/House.png";
import Group535 from "../assets/images/Group535.png";
import Group536 from "../assets/images/Group536.png";
import Group537 from "../assets/images/Group537.png";
import Group4751 from "../assets/images/Group4751.png";
import Star1 from "../assets/images/Star1.png";

const CategoriesSection = () => {
  return (
    <div className="py-10 px-6 max-w-[1555px] w-full sm:w-[90%] m-auto">
      <h2 className=" font-normal 22l:text-start text-center text-[32px] text-black font-family mb-8">
        Категории
      </h2>

      <div className="sm:flex hidden 22l:flex-nowrap flex-wrap justify-center gap-6">
        <div className="w-[500px] bg-[#fff7d9] rounded-[6px] p-6 flex  flex-col">
          <h3 className="font-semibold text-2xl text-black font-family mb-4">
            Беседки
          </h3>
          <div className="grid grid-cols-2 gap-x-0 gap-y-2 mb-6">
            <span className="font-normal text-sm text-black font-family">
              Подкатегория 1
            </span>
            <span className="font-normal text-sm text-black font-family">
              Подкатегория 4
            </span>
            <span className="font-normal text-sm text-black font-family">
              Подкатегория 2
            </span>
            <span className="font-normal text-sm text-black font-family">
              Подкатегория 5
            </span>
            <span className="font-normal text-sm text-black font-family">
              Подкатегория 3
            </span>
            <span className="font-normal text-sm text-black font-family">
              Подкатегория 6
            </span>
          </div>
          <div className="mt-20 relative">
            <img
              src={Besedka}
              alt="Беседка"
              className="w-full h-auto rounded-md z-10 relative"
            />
            <img src={Grass} alt="" className="absolute bottom-[-8%] z-0" />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[500px]">
          <div className="bg-[#fff7d9] rounded-md p-6 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-2xl text-black font-family mb-2">
                Бани
              </h3>
              <div className="space-y-1">
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 1
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 2
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  ...
                </span>
              </div>
            </div>
            <img src={Group475} alt="Баня" className="" />
          </div>
          <div className="bg-[#fff7d9] rounded-[6px] p-6 flex justify-between items-center gap-4">
            <div>
              <h3 className="font-semibold text-2xl text-black font-family mb-2">
                Перголы
              </h3>
              <div className="space-y-1">
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 1
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 2
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  ...
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={Pergola}
                alt="Пергола"
                className="w-[170px] h-[109px] relative z-10"
              />
              <img src={Grass1} alt="" className="absolute bottom-[-2%] z-0" />
            </div>
          </div>
          <div className="bg-[#fff7d9] rounded-lg p-6 flex justify-between items-center gap-4">
            <div>
              <h3 className="font-semibold text-2xl text-black font-family mb-2">
                Бренды
              </h3>
              <div className="space-y-1">
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 1
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 2
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  ...
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={Star}
                alt="Пергола"
                className="w-[170px] h-[109px] relative z-10"
              />
              <img src={Grass1} alt="" className="absolute bottom-[-2%] z-0" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[500px]">
          <div className="bg-[#fff7d9] h-[250px] rounded-lg p-6 flex justify-between items-center gap-4">
            <div>
              <h3 className="font-semibold text-2xl text-black font-family mb-2">
                Детские площадки
              </h3>
              <div className="space-y-1">
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 1
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 2
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 3
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 4
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 5
                </span>
              </div>
            </div>
            <div className="relative">
              <img src={Gorka} alt="Пергола" className=" relative z-10" />
              <img src={Grass} alt="" className="absolute bottom-[-2%] z-0" />
            </div>
          </div>
          <div className="bg-[#fff7d9] h-[250px] rounded-lg p-6 flex justify-between items-center gap-4">
            <div>
              <h3 className="font-semibold text-2xl text-black font-family mb-2">
                Дома
              </h3>
              <div className="space-y-1">
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 1
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 2
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 3
                </span>
                <span className="block font-normal text-sm text-black font-family">
                  Подкатегория 4
                </span>
              </div>
            </div>
            <div className="relative">
              <img src={House} alt="Пергола" className=" relative z-10" />
              <img src={Grass} alt="" className="absolute bottom-[-2%] z-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden grid sm2:grid-cols-2 grid-cols-1  gap-4 ">
        <div className="sm2:w-[271px] w-full h-[73px] p-2 bg-[#F9F8F3] flex items-center justify-between">
          <h1 className="font-normal text-[26px] text-black font-family">
            Беседки
          </h1>
          <img src={Group535} alt="" />
        </div>
        <div className="sm2:w-[271px] w-full h-[73px] p-2 bg-[#F9F8F3] flex items-center justify-between">
          <h1 className="font-normal text-[26px] text-black font-family">
            Дома
          </h1>
          <div className="relative">
            <img src={Star1} alt="" className="z-10 relative" />
            <img src={Grass1} alt="" className="absolute z-0 bottom-1" />
          </div>
        </div>
        <div className="sm2:w-[271px] w-full h-[73px] p-2 bg-[#F9F8F3] flex items-center justify-between">
          <h1 className="font-normal text-[26px] text-black font-family">
            Площадки
          </h1>
          <img src={Group536} alt="" />
        </div>
        <div className="sm2:w-[271px] w-full h-[73px] p-2 bg-[#F9F8F3] flex items-center justify-between">
          <h1 className="font-normal text-[26px] text-black font-family">
            Перголы
          </h1>
          <img src={Group537} alt="" />
        </div>
        <div className="sm2:w-[271px] w-full h-[73px] p-2 bg-[#F9F8F3] flex items-center justify-between">
          <h1 className="font-normal text-[26px] text-black font-family">
            Бани
          </h1>
          <img src={Group4751} alt="" />
        </div>
        <div className="sm2:w-[271px] w-full h-[73px] p-2 bg-[#F9F8F3] flex items-center justify-between">
          <h1 className="font-normal text-[26px] text-black font-family">
            Бренды
          </h1>
          <div className="relative">
            <img src={Star1} alt="" className="z-10 relative" />
            <img src={Grass1} alt="" className="absolute z-0 bottom-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
