import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="">
      <div className="bg-[var(--color-2-black)]">
        <div className="hidden max-w-[1920px] custom-scroll overflow-x-auto gap-6 overflow-y-hidden w-[90%] m-auto items-center justify-between h-[45px] px-6 py-2 md:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0C2.69158 0 0 2.59944 0 5.79457C0 9.75982 5.36941 15.581 5.59802 15.8269C5.81275 16.0579 6.18764 16.0575 6.40198 15.8269C6.63059 15.581 12 9.75982 12 5.79457C11.9999 2.59944 9.30839 0 6 0ZM6 8.70998C4.33545 8.70998 2.98128 7.40213 2.98128 5.79457C2.98128 4.187 4.33549 2.87919 6 2.87919C7.66452 2.87919 9.01869 4.18704 9.01869 5.7946C9.01869 7.40216 7.66452 8.70998 6 8.70998Z"
                  fill="#FFD634"
                />
              </svg>
              <span className="font-semibold text-[13px] text-[color:var(--white-ffffff)] font-family">
                Ваш город: <span className="font-normal">Константинополь</span>
              </span>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5"
              >
                <path
                  d="M1 1L5.5 5L10 1"
                  stroke="#FF7A1B"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0C2.69158 0 0 2.59944 0 5.79457C0 9.75982 5.36941 15.581 5.59802 15.8269C5.81275 16.0579 6.18764 16.0575 6.40198 15.8269C6.63059 15.581 12 9.75982 12 5.79457C11.9999 2.59944 9.30839 0 6 0ZM6 8.70998C4.33545 8.70998 2.98128 7.40213 2.98128 5.79457C2.98128 4.187 4.33549 2.87919 6 2.87919C7.66452 2.87919 9.01869 4.18704 9.01869 5.7946C9.01869 7.40216 7.66452 8.70998 6 8.70998Z"
                  fill="#FFD634"
                />
              </svg>
              <span className="font-semibold text-[13px] text-[color:var(--white-ffffff)] font-family">
                Наш офис:{" "}
                <span className="font-normal">
                  Москва, ул. Новокосимская д.7{" "}
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex gap-5 2xl:gap-20">
              <a
                href="#"
                className="font-normal text-[13px] text-[color:var(--white-ffffff)] font-family hover:underline"
              >
                Статьи
              </a>
              <a
                href="#"
                className="font-normal text-[13px] text-[color:var(--white-ffffff)] font-family hover:underline"
              >
                Оплата
              </a>
              <a
                href="#"
                className="font-normal text-[13px] text-[color:var(--white-ffffff)] font-family hover:underline"
              >
                Гарантия
              </a>
              <a
                href="#"
                className="font-normal text-[13px] text-[color:var(--white-ffffff)] font-family hover:underline"
              >
                Дилерам
              </a>
              <a
                href="#"
                className="font-normal text-[13px] text-[color:var(--white-ffffff)] font-family hover:underline"
              >
                Вакансии
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-3-white)]">
        <div className="md:flex hidden max-w-[1920px] w-[90%] m-auto items-center gap-2  justify-center 3xl:justify-between flex-col px-6 py-4 flex-wrap md:flex-row ">
          <div className="hidden md:flex flex-col items-center gap-4 ">
            <div className="flex  gap-2">
              <div className="w-[34px] h-8 rounded-[9px] bg-[var(--color-oragne)]"></div>
              <div className="w-[34px] h-8 rounded-[9px] bg-[var(--color-2-black)]"></div>
              <div className="w-[34px] h-8 rounded-[9px] bg-[var(--color-1-orange)]"></div>
            </div>
            <div>
              <div className="font-normal text-sm text-black font-family">
                Логотип вашего магазина
              </div>
            </div>
          </div>
          <div className="md:flex flex-col items-center hidden">
            <div className="flex gap-12 ">
              <div className="flex items-center gap-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5266 8.38751C4.07322 8.8409 3.33756 8.8409 2.8844 8.38751L0.340036 5.84309C-0.113345 5.38992 -0.113345 4.65425 0.340036 4.20108C0.793199 3.74768 1.52885 3.74768 1.98223 4.20108L3.49817 5.71683C3.61261 5.83105 3.79839 5.83105 3.91304 5.71683L8.01777 1.61202C8.47093 1.15862 9.20658 1.15862 9.65996 1.61202C9.87768 1.82974 10 2.12515 10 2.43302C10 2.7409 9.87768 3.0363 9.65996 3.25403L4.5266 8.38751Z"
                    fill="#FFD634"
                  />
                </svg>
                <h1 className="font-normal text-[13px] text-[color:var(--color-2-black)] font-family">
                  Лучшие цены
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5266 8.38751C4.07322 8.8409 3.33756 8.8409 2.8844 8.38751L0.340036 5.84309C-0.113345 5.38992 -0.113345 4.65425 0.340036 4.20108C0.793199 3.74768 1.52885 3.74768 1.98223 4.20108L3.49817 5.71683C3.61261 5.83105 3.79839 5.83105 3.91304 5.71683L8.01777 1.61202C8.47093 1.15862 9.20658 1.15862 9.65996 1.61202C9.87768 1.82974 10 2.12515 10 2.43302C10 2.7409 9.87768 3.0363 9.65996 3.25403L4.5266 8.38751Z"
                    fill="#FFD634"
                  />
                </svg>
                <h1 className="font-normal text-[13px] text-[color:var(--color-2-black)] font-family">
                  Бесплатная доставка
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5266 8.38751C4.07322 8.8409 3.33756 8.8409 2.8844 8.38751L0.340036 5.84309C-0.113345 5.38992 -0.113345 4.65425 0.340036 4.20108C0.793199 3.74768 1.52885 3.74768 1.98223 4.20108L3.49817 5.71683C3.61261 5.83105 3.79839 5.83105 3.91304 5.71683L8.01777 1.61202C8.47093 1.15862 9.20658 1.15862 9.65996 1.61202C9.87768 1.82974 10 2.12515 10 2.43302C10 2.7409 9.87768 3.0363 9.65996 3.25403L4.5266 8.38751Z"
                    fill="#FFD634"
                  />
                </svg>
                <h1 className="font-normal text-[13px] text-[color:var(--color-2-black)] font-family">
                  Гарантия от 3х лет
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5266 8.38751C4.07322 8.8409 3.33756 8.8409 2.8844 8.38751L0.340036 5.84309C-0.113345 5.38992 -0.113345 4.65425 0.340036 4.20108C0.793199 3.74768 1.52885 3.74768 1.98223 4.20108L3.49817 5.71683C3.61261 5.83105 3.79839 5.83105 3.91304 5.71683L8.01777 1.61202C8.47093 1.15862 9.20658 1.15862 9.65996 1.61202C9.87768 1.82974 10 2.12515 10 2.43302C10 2.7409 9.87768 3.0363 9.65996 3.25403L4.5266 8.38751Z"
                    fill="#FFD634"
                  />
                </svg>
                <h1 className="font-normal text-[13px] text-[color:var(--color-2-black)] font-family">
                  Более 1 000 товаров
                </h1>
              </div>
            </div>
            <div className="flex mt-2 relative items-center gap-2 flex-1  mx-6">
              <input
                type="text"
                placeholder="Поиск по каталогу..."
                className="flex-auto min-w-[758px] font-light  text-sm h-[45px] text-[#818181] font-family px-3 py-2 border border-[color:var(--subcolor-1-gray)] rounded-md border-solid focus:outline-none focus:ring-2 focus:ring-[#ff7a1b]"
              />
              <button className="absolute right-0">
                <svg
                  width="156"
                  height="45"
                  viewBox="0 0 156 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0H150C153.314 0 156 2.68629 156 6V39C156 42.3137 153.314 45 150 45H0L20 0Z"
                    fill="#FFD634"
                  />
                  <svg
                    width="156"
                    height="45"
                    viewBox="0 0 156 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0H150C153.314 0 156 2.68629 156 6V39C156 42.3137 153.314 45 150 45H0L20 0Z"
                      fill="#FFD634"
                    />

                    <text
                      class="svg-text"
                      x="50%"
                      y="50%"
                      dominant-baseline="middle"
                      text-anchor="middle"
                    >
                      Найти
                    </text>
                  </svg>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6282_7984)">
                  <path
                    d="M10.1723 8.82418L8.08086 7.25562V4.06045C8.08086 3.73918 7.82117 3.47949 7.4999 3.47949C7.17863 3.47949 6.91895 3.73918 6.91895 4.06045V7.54613C6.91895 7.72912 7.00493 7.90168 7.15133 8.0109L9.47509 9.75374C9.57965 9.83217 9.70168 9.86993 9.82308 9.86993C10.0003 9.86993 10.1746 9.79033 10.2884 9.63696C10.4814 9.38073 10.4291 9.01648 10.1723 8.82418Z"
                    fill="#FFD634"
                  />
                  <path
                    d="M7.5 0C3.36425 0 0 3.36425 0 7.5C0 11.6358 3.36425 15 7.5 15C11.6358 15 15 11.6358 15 7.5C15 3.36425 11.6358 0 7.5 0ZM7.5 13.8381C4.00562 13.8381 1.16188 10.9944 1.16188 7.5C1.16188 4.00562 4.00562 1.16188 7.5 1.16188C10.995 1.16188 13.8381 4.00562 13.8381 7.5C13.8381 10.9944 10.9944 13.8381 7.5 13.8381Z"
                    fill="#FFD634"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6282_7984">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-normal text-[13px] text-black font-family">
                Ежедневно с 9:00 до 21:00
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-light text-lg text-black font-family">
                8 (800){" "}
                <span className="font-semibold text-[color:var(--color-2-black)]">
                  800-00-00
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-light text-lg text-black font-family">
                8 (495){" "}
                <span className="font-semibold text-[color:var(--color-2-black)]">
                  700-00-00
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex  items-center gap-2">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6282_7997)">
                  <path
                    d="M12.9901 3.00781L9.48389 6.5003L12.9885 9.99028C13.0076 9.74828 12.9993 3.12189 12.9901 3.00781Z"
                    fill="#FFD634"
                  />
                  <path
                    d="M11.7272 1.83789H1.27314C0.933083 1.83787 0.620168 1.97183 0.391602 2.19085C2.77401 4.56391 4.02018 5.80516 6.20023 7.97667C6.36562 8.14206 6.6341 8.14221 6.79952 7.97735C8.9934 5.79205 10.4313 4.35982 12.6067 2.19288C12.3767 1.97073 12.0654 1.83789 11.7272 1.83789Z"
                    fill="#FFD634"
                  />
                  <path
                    d="M0.0102839 3.00781C0.000787772 3.12481 -0.0077435 9.74982 0.0118073 9.99177L3.52288 6.50662L0.0102839 3.00781Z"
                    fill="#FFD634"
                  />
                  <path
                    d="M8.88312 7.09766L7.39802 8.57689C6.90323 9.07168 6.09872 9.07381 5.60122 8.57633L4.12325 7.10416L0.394531 10.8054C0.623098 11.0248 0.931747 11.1614 1.2729 11.1614H11.7269C12.0683 11.1614 12.3773 11.0246 12.6059 10.8049L8.88312 7.09766Z"
                    fill="#FFD634"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6282_7997">
                    <rect width="13" height="13" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-normal text-[13px] text-black font-family">
                youremail@mailbox.ru
              </span>
            </div>
            <button className="w-[223px] h-11 bg-[#ff7a1b] hover:bg-[#ff3838] font-normal text-base text-center cursor-pointer text-[color:var(--white-ffffff)] font-family rounded-[6px] transition-colors">
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[var(--white-ffffff)]">
        <div className="md:flex hidden items-center overflow-x-auto whitespace-nowrap gap-5 p-[0px_80px_0px_24px] justify-between max-w-[1920px] w-[90%] m-auto">
          <div className="flex items-center p-4 gap-5 bg-[var(--color-1-orange)] w-[268px] h-[50px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="21.3335"
                width="24"
                height="2.66667"
                rx="1.33333"
                fill="white"
              />
              <rect
                y="10.6665"
                width="24"
                height="2.66667"
                rx="1.33333"
                fill="white"
              />
              <rect width="24" height="2.66667" rx="1.33333" fill="white" />
            </svg>
            <span className="font-normal text-base text-black font-family">
              Каталог товаров
            </span>
          </div>
          <a
            href="#"
            className="font-normal text-sm text-black font-family hover:underline"
          >
            О компании
          </a>
          <a
            href="#"
            className="font-normal text-sm text-black font-family hover:underline"
          >
            Отзывы
          </a>
          <a
            href="#"
            className="font-normal text-sm text-black font-family hover:underline"
          >
            Наши работы
          </a>
          <a
            href="#"
            className="font-normal text-sm text-black font-family hover:underline"
          >
            Доставка
          </a>
          <a
            href="#"
            className="font-normal  text-sm text-black font-family hover:underline"
          >
            Контакты
          </a>
        </div>
      </div>
        <div className="bg-[var(--color-2-black)]">
        <div className="flex w-full max-w-[768px] gap-5 h-28 p-4 items-center justify-between md:hidden">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleMenu}
            className="cursor-pointer"
          >
            <rect
              y="37.3335"
              width="42"
              height="4.66667"
              rx="2.33333"
              fill="white"
            />
            <rect
              y="18.6665"
              width="42"
              height="4.66667"
              rx="2.33333"
              fill="white"
            />
            <rect width="42" height="4.66667" rx="2.33333" fill="white" />
          </svg>
          <input
            type="text"
            placeholder="Поиск по каталогу..."
            className="flex-auto sm:min-w-[395px] min-w-[100px] h-[60px] bg-[var(--white-ffffff)] font-light text-lg text-[#818181] font-family px-3 py-2 border border-[color:var(--subcolor-1-gray)] rounded-md border-solid focus:outline-none focus:ring-2 focus:ring-[#ff7a1b]"
          />
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5557 1.5C16.1538 1.50009 18.2648 3.61164 18.2646 6.20996C18.2647 8.35894 18.5805 10.4659 19.2012 12.4814L19.3301 12.8838L19.333 12.8945L19.3369 12.9043C19.857 14.5608 19.4446 16.3393 18.2637 17.5889L15.5957 21.1377C17.9454 25.2922 20.672 28.0185 24.8623 30.3994L28.5283 27.6328C29.1032 27.0935 29.8478 26.7495 30.582 26.585C31.3756 26.4072 32.2833 26.4061 33.1426 26.6992H33.1416C35.2614 27.3982 37.5024 27.7558 39.79 27.7559C42.3881 27.7559 44.4998 29.8668 44.5 32.4648V39.79C44.5 42.3883 42.3883 44.5 39.79 44.5C18.6754 44.4998 1.50015 27.3246 1.5 6.20996C1.5 3.61175 3.61174 1.5 6.20996 1.5H13.5557Z"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--color-2-black)] w-full max-w-[768px] mx-auto">
            <nav className="flex flex-col p-4 gap-4">
              <a
                href="#"
                className="font-normal text-sm text-white font-family hover:underline py-2 border-b border-gray-200"
              >
                Каталог товаров
              </a>
              <a
                href="#"
                className="font-normal text-sm text-white font-family hover:underline py-2 border-b border-gray-200"
              >
                О компании
              </a>
              <a
                href="#"
                className="font-normal text-sm text-white font-family hover:underline py-2 border-b border-gray-200"
              >
                Отзывы
              </a>
              <a
                href="#"
                className="font-normal text-sm text-white font-family hover:underline py-2 border-b border-gray-200"
              >
                Наши работы
              </a>
              <a
                href="#"
                className="font-normal text-sm text-white font-family hover:underline py-2 border-b border-gray-200"
              >
                Доставка
              </a>
              <a
                href="#"
                className="font-normal text-sm text-white font-family hover:underline py-2 border-b border-gray-200"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
