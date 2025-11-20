import React from "react";
import image35 from "../assets/images/image35.png";
const Sell = () => {
  return (
    <div className="py-10 px-6 max-w-[1555px] w-full sm:w-[90%] m-auto">
      <h2 className=" font-normal 22l:text-start text-center text-[32px] text-black font-family mb-8">
        Хиты продаж
      </h2>
      <div className="bg-[var(--color-3-white)] gap-5 sm:px-0 px-4 overflow-x-auto flex h-[60px]">
        <div className="font-light hover:font-normal  transition-all cursor-pointer hover:border-b-4 hover:border-[var(--color-oragne)] hover:text-black text-lg w-40 h-[60px] flex items-center justify-center text-center text-[#898989] font-family">
          Беседки
        </div>
        <div className="font-light hover:font-normal  transition-all cursor-pointer hover:border-b-4 hover:border-[var(--color-oragne)] hover:text-black text-lg w-40 h-[60px] flex items-center justify-center text-center text-[#898989] font-family">
          Бани
        </div>
        <div className="font-light hover:font-normal  transition-all cursor-pointer hover:border-b-4 hover:border-[var(--color-oragne)] hover:text-black text-lg w-40 h-[60px] flex items-center justify-center text-center text-[#898989] font-family">
          Площадки
        </div>
        <div className="font-light hover:font-normal  transition-all cursor-pointer hover:border-b-4 hover:border-[var(--color-oragne)] hover:text-black text-lg w-40 h-[60px] flex items-center justify-center text-center text-[#898989] font-family">
          Дома
        </div>
        <div className="font-light hover:font-normal  transition-all cursor-pointer hover:border-b-4 hover:border-[var(--color-oragne)] hover:text-black text-lg w-40 h-[60px] flex items-center justify-center text-center text-[#898989] font-family">
          Перголы
        </div>
        <div className="font-light hover:font-normal  transition-all cursor-pointer hover:border-b-4 hover:border-[var(--color-oragne)] hover:text-black text-lg w-40 h-[60px] flex items-center justify-center text-center text-[#898989] font-family">
          Бренды
        </div>
      </div>
      <div className="grid mt-4 grid-cols-2 mdd:grid-cols-3 lgg:grid-cols-4 22l:grid-cols-5">
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
        <div className="border p-4 border-[color:var(--subcolor-1-gray)] border-solid">
          <img src={image35} alt="" />
          <div className="flex items-center justify-between gap-5 mt-2">
            <h1 className="font-light text-xs text-black opacity-[0.68] font-family">
              Артикул:
            </h1>
            <h1 className="font-light text-xs text-right text-black opacity-[0.68] font-family">
              0000001
            </h1>
          </div>
          <h2 className="font-normal w-[95%] md:w-[90%] mt-1 text-[16px] md:text-lg text-black font-family">
            Название товара длинное в две строки наверное
          </h2>
          <div className="mt-3 overflow-x-auto whitespace-nowrap">
            <div className="flex relative items-center min-w-max">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.73161 0H4.5627C4.41444 0 4.2943 0.120169 4.2943 0.268395V0.984115C4.2943 1.13234 4.41444 1.25251 4.5627 1.25251H6.86179L1.25251 6.86182V4.56275C1.25251 4.41453 1.13234 4.29436 0.984111 4.29436H0.268394C0.120133 4.29436 0 4.41453 0 4.56275V8.7316C0 8.87983 0.120133 9 0.268394 9H4.4373C4.58556 9 4.7057 8.87983 4.7057 8.7316V8.01588C4.7057 7.86766 4.58556 7.74749 4.4373 7.74749H2.13821L7.7475 2.13818V4.43728C7.7475 4.58551 7.86763 4.70568 8.01589 4.70568H8.73161C8.87987 4.70568 9 4.58551 9 4.43728V0.268395C9 0.120169 8.87987 0 8.73161 0Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Размеры: <span className="text-[#d1d1d1]">...............</span>
              </h1>

              <p className="font-light text-[13px] text-right text-black font-family">
                12.3 x 14.6 x 4.3 м.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <div className=" border border-[color:var(--color-oragne)] w-[9px] h-[9px] rounded-[1px] border-solid"></div>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Площадь:{" "}
                <span className="text-[#d1d1d1]">
                  .....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                33 м2
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99999 5.86879C6.46177 5.86879 7.64689 4.55503 7.64689 2.93441C7.64689 1.31376 7.2578 0 4.99999 0C2.74219 0 2.35302 1.31376 2.35302 2.93441C2.35302 4.55503 3.53814 5.86879 4.99999 5.86879Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M0.000520507 10.3492C-0.000381037 10.3214 6.97346e-05 10.2504 0.000520507 10.3492V10.3492Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99924 10.4264C9.99973 10.2387 10.0007 10.3994 9.99924 10.4264V10.4264Z"
                  fill="#FF7A1B"
                />
                <path
                  d="M9.99361 10.2308C9.94459 7.4076 9.54062 6.60315 6.44934 6.09394C6.44934 6.09394 6.01419 6.60003 4.99996 6.60003C3.98572 6.60003 3.5505 6.09394 3.5505 6.09394C0.492951 6.5976 0.0644174 7.39011 0.00807089 10.139C0.00345048 10.3635 0.00130932 10.3753 0.000482909 10.3492C0.000670731 10.3981 0.000896033 10.4884 0.000896033 10.6459C0.000896033 10.6459 0.736856 12 4.99996 12C9.26298 12 9.99902 10.6459 9.99902 10.6459C9.99902 10.5447 9.99909 10.4743 9.99921 10.4265C9.99838 10.4426 9.99673 10.4113 9.99361 10.2308Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Вместимость:{" "}
                <span className="text-[#d1d1d1]">
                  ............................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                15 чел.
              </p>
            </div>
            <div className="flex items-center min-w-max">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0C2.24302 0 0 2.24295 0 4.99997C0 7.75699 2.24302 10 5 10C7.75698 10 10 7.75699 10 4.99997C10 2.24295 7.75704 0 5 0ZM7.87109 4.15544L4.72984 7.29667C4.59628 7.43023 4.41873 7.50374 4.22986 7.50374C4.04099 7.50374 3.86344 7.43023 3.72987 7.29667L2.12891 5.69571C1.99535 5.56215 1.92178 5.3846 1.92178 5.19573C1.92178 5.00681 1.99535 4.82926 2.12891 4.6957C2.26243 4.56213 2.43997 4.48857 2.6289 4.48857C2.81777 4.48857 2.99537 4.56213 3.12888 4.69575L4.22981 5.79662L6.87102 3.15542C7.00458 3.02186 7.18213 2.94834 7.371 2.94834C7.55987 2.94834 7.73742 3.02186 7.87098 3.15542C8.14678 3.43121 8.14678 3.87975 7.87109 4.15544Z"
                  fill="#FF7A1B"
                />
              </svg>
              <h1 className="font-light ml-1 text-[13px] text-black font-family">
                Гарантия:{" "}
                <span className="text-[#d1d1d1]">
                  ....................................
                </span>
              </h1>
              <p className="font-light text-[13px] text-right text-black font-family">
                10 лет
              </p>
            </div>
          </div>
          <div className="flex smm:flex-row flex-col items-center gap-0 smm:gap-3 justify-between">
            <div className="mt-4">
              <div className="flex  items-center gap-2">
                <h1 className="font-normal text-xs md:text-sm line-through text-[color:var(--gray-color-)] font-family">
                  6 127 500 ₽
                </h1>
                <div className="w-[37px] h-4 px-[5px] py-px bg-[var(--color-1-orange)] flex items-center justify-center font-normal text-[11px] text-[color:var(--color-2-black)] font-family">
                  -25%
                </div>
              </div>
              <span className="font-semibold text-[19px] md:text-[22px] text-[color:var(--skidka)] font-family">
                5 023 900 ₽
              </span>
            </div>
            <div className="border mt-3 cursor-pointer transition-all duration-300 hover:scale-[1.03] border-[color:var(--color-1-orange)] p-4 flex items-center justify-center bg-[var(--color-1-orange)] h-[51px] rounded-[5px] border-solid">
              Купить
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
