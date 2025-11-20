import React from "react";
import WhatApp from "../assets/images/WhatApp.png";
import YouTube from "../assets/images/YouTube.png";
import Instagram from "../assets/images/Instagram.png";
import Screenshot13 from "../assets/images/Screenshot13.png";
import WhatsApp1 from "../assets/images/WhatsApp1.png";
import YouTube1 from "../assets/images/YouTube1.png";
import Instagram1 from "../assets/images/Instagram1.png";

const Footer = () => {
  return (
    <div className="bg-[#1f1f1f]">
      <footer className="max-w-[1555px] md:block hidden w-[90%] m-auto pt-12 pb-8 px-6">
        <div className="flex flex-col 22l:flex-row items-center justify-between gap-5">
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20 w-auto">
            <div className="flex flex-col items-center text-center lg:text-left">
              <svg
                width="124"
                height="32"
                viewBox="0 0 124 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="34" height="32" rx="9" fill="#FF7A1B" />
                <rect x="45" width="34" height="32" rx="9" fill="white" />
                <rect x="90" width="34" height="32" rx="9" fill="#FFD634" />
              </svg>
              <h2 className="font-normal mt-2 text-sm text-[color:var(--white-ffffff)] font-family">
                Логотип вашего магазина
              </h2>
            </div>
            <div className="text-center ml-5 lg:text-left">
              <h1 className="font-normal text-lg text-[color:var(--white-ffffff)] font-family">
                Наш адрес:
              </h1>
              <h1 className="font-normal text-lg text-[color:var(--white-ffffff)] font-family">
                Москва, ул. Новокосимская д.7
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 w-auto mt-8 lg:mt-0">
            <div className="text-center md:text-left">
              <h1 className="font-normal text-lg text-[color:var(--white-ffffff)] font-family">
                График работы:
              </h1>
              <h1 className="font-normal text-lg text-[color:var(--white-ffffff)] font-family">
                Ежедневно с{" "}
                <span className="font-semibold text-[color:var(--color-oragne)]">
                  9:00
                </span>{" "}
                до{" "}
                <span className="font-semibold text-[color:var(--color-oragne)]">
                  21:00
                </span>
              </h1>
            </div>
            <div>
              <button className="w-full mr-0 22l:mr-19 md:w-[275px] bg-[var(--color-oragne)] cursor-pointer hover:bg-[#ff3838] h-[50px] font-normal text-lg text-center text-[color:var(--white-ffffff)] rounded-md font-family">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-px opacity-50 mt-5 bg-[var(--gray-color-)]"></div>
        <div className="flex flex-col 22l:flex-row items-center 22l:items-start justify-between gap-8 mt-8">
          <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-15">
            <div className="">
              <h2 className="font-semibold text-base text-[color:var(--white-ffffff)] font-family">
                Для покупателей:
              </h2>
              <ul className="mt-2 flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Гарантия
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Наши работы
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="font-semibold text-base text-[color:var(--white-ffffff)] font-family">
                О компании:
              </h2>
              <ul className="mt-2 flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    О Нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Наши работы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="font-semibold text-base text-[color:var(--white-ffffff)] font-family">
                Категории:
              </h2>
              <ul className="mt-2 flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Беседки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Бани
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Площадки
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Дома
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Перголы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal opacity-75 text-sm text-[color:var(--white-ffffff)] font-family hover:opacity-100 hover:scale-105 transition-all duration-300"
                  >
                    Бренды
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-auto">
            <div className="flex mr-0 22l:mr-34 flex-col md:flex-row items-center gap-8 md:gap-20">
              <div className="text-center md:text-left">
                <h1 className="font-normal text-sm text-[color:var(--color-3-white)] font-family">
                  Для регионов <br /> (звонок бесплатный)
                </h1>
                <p className="font-light mt-1 text-2xl text-[color:var(--white-ffffff)] font-family">
                  8 (800){" "}
                  <span className="font-semibold text-[color:var(--color-oragne)]">
                    800-00-00
                  </span>
                </p>
                <h1 className="font-normal text-sm mt-2 text-[color:var(--white-ffffff)] font-family">
                  Email:{" "}
                  <a href="#" className="">
                    youremail@mailbox.ru{" "}
                  </a>
                </h1>
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-normal text-sm text-[color:var(--color-3-white)] font-family">
                  Для Москвы и <br /> Московской области
                </h1>
                <p className="font-light mt-1 text-2xl text-[color:var(--white-ffffff)] font-family">
                  8 (495){" "}
                  <span className="font-semibold text-[color:var(--color-oragne)]">
                    700-00-00
                  </span>
                </p>
                <h1 className="font-normal text-sm mt-2 text-[color:var(--white-ffffff)] font-family">
                  Сообщить об ошибке на сайте
                </h1>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 mt-8">
              <div className="text-center md:text-left">
                <h1 className="font-normal text-sm text-[color:var(--color-3-white)] font-family">
                  Мы в соц.сетях:
                </h1>
                <div className="mt-3 flex items-center justify-center md:justify-start gap-3">
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <img src={WhatApp} alt="WhatsApp" />
                  </a>
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <img src={YouTube} alt="WhatsApp" />
                  </a>
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <img src={Instagram} alt="WhatsApp" />
                  </a>
                </div>
              </div>
              <div className="text-center ml-18 md:text-left">
                <p className="font-semibold text-sm leading-[151%] text-[color:var(--white-ffffff)] font-family">
                  ООО{" "}
                  <span className="font-normal leading-[0%]">"Фаза Групп"</span>
                </p>
                <p className="font-semibold text-sm leading-[151%] text-[color:var(--white-ffffff)] font-family">
                  ИНН:{" "}
                  <span className="font-normal leading-[0%]">7751140879</span>
                </p>
                <p className="font-semibold text-sm leading-[151%] text-[color:var(--white-ffffff)] font-family">
                  ОГРН:{" "}
                  <span className="font-normal leading-[0%]">
                    1187746273461
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px opacity-50 mt-8 bg-[var(--gray-color-)]"></div>

        <div className="flex flex-col md:flex-row gap-15 mt-7 items-center justify-between">
          <div className="text-center md:text-left">
            <p className="font-normal text-sm opacity-75 [text-decoration-skip-ink:none] text-[color:var(--white-ffffff)] font-family">
              <span className="underline">Публичная оферта </span>
              <br />
              2013-2021 - Товары для дач, <br /> деревянные конструкции под
              любые нужды
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-20 items-center">
            <h1 className="font-normal text-sm opacity-75 text-[color:var(--white-ffffff)] font-family text-center md:text-left">
              Принимаем к оплате:
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <a
                href="https://cis.visa.com/visa-in-uzbekistan.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="62"
                  height="20"
                  viewBox="0 0 62 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.3829 0C35.9806 0 32.0466 2.27172 32.0466 6.46889C32.0466 11.2822 39.0238 11.6147 39.0238 14.0328C39.0238 15.051 37.8518 15.9624 35.8501 15.9624C33.0093 15.9624 30.8861 14.6889 30.8861 14.6889L29.9776 18.9243C29.9776 18.9243 32.4235 20 35.6708 20C40.4839 20 44.2712 17.6167 44.2712 13.3478C44.2712 8.26162 37.2649 7.93904 37.2649 5.69465C37.2649 4.89706 38.227 4.02316 40.223 4.02316C42.475 4.02316 44.3124 4.94935 44.3124 4.94935L45.2015 0.858659C45.2015 0.858659 43.2023 0 40.3829 0ZM0.106596 0.308732L0 0.926194C0 0.926194 1.85203 1.26365 3.52008 1.93681C5.66784 2.70871 5.82084 3.15808 6.18256 4.55379L10.1242 19.6816H15.4079L23.548 0.308732H18.2763L13.0459 13.4805L10.9115 2.31549C10.7158 1.03766 9.72432 0.308732 8.51071 0.308732H0.106596ZM25.6678 0.308732L21.5324 19.6816H26.5593L30.6802 0.308732H25.6678ZM53.7049 0.308732C52.4927 0.308732 51.8505 0.954854 51.3792 2.08394L44.0144 19.6816H49.286L50.306 16.7487H56.7284L57.3485 19.6816H62L57.9421 0.308732H53.7049ZM54.3905 5.54269L55.9531 12.8124H51.7668L54.3905 5.54269Z"
                    fill="#606060"
                  />
                </svg>
              </a>
              <a
                href="https://www.jcb.com/ru-RU/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="44"
                  height="28"
                  viewBox="0 0 44 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.6538 0H2.3462C1.05098 0 0 1.06472 0 2.37818V25.6218C0 26.9355 1.05042 28 2.3462 28H41.6538C42.9491 28 44 26.9353 44 25.6218V2.37818C44 1.0645 42.9496 0 41.6538 0V0ZM17.5522 19.9755C17.5084 21.4168 16.2683 22.6786 14.8429 22.7146C13.4 22.7188 11.9568 22.7152 10.5137 22.7164V16.6311C11.5853 16.8301 12.6625 17.0444 13.7588 16.9796C14.8102 16.9242 16.0784 16.7611 16.6805 15.7643C17.1262 15.028 16.9264 14.1496 16.9634 13.3353L16.9497 11.2528L14.5118 11.2667C14.5001 12.4781 14.5359 13.6922 14.4926 14.9019C14.3989 15.7064 13.5493 16.1196 12.8197 16.0453C11.9759 16.0374 11.2248 15.7182 10.5121 15.5054H10.512C10.512 15.5054 10.4961 10.1847 10.5138 7.7345C10.7517 6.30241 12.1983 5.23056 13.6152 5.36139H17.564C17.5595 10.2327 17.56 15.1043 17.5522 19.9749V19.9755ZM25.5211 20.0356C25.4289 21.5562 23.9813 22.8328 22.4809 22.6883H18.4711V16.0279C19.5166 16.8648 20.9289 16.9904 22.2174 16.9736C23.0646 16.9511 23.9058 16.8243 24.7226 16.5958L24.705 15.3884C23.5527 15.9504 22.1246 16.3475 20.9227 15.7079C19.9678 15.1542 19.8556 13.7599 20.3661 12.8626C20.9965 11.9319 22.27 11.9042 23.2614 12.101C23.7479 12.145 24.4014 12.586 24.7226 12.5761V11.4706C23.0597 11.0446 21.2779 10.9067 19.6119 11.3891C19.1978 11.5326 18.7922 11.7357 18.4711 12.0419L18.4711 12.0418C18.4801 10.6721 18.4525 9.301 18.4859 7.93209C18.5847 6.6276 19.6665 5.52967 20.9384 5.37036C22.2173 5.32768 23.5004 5.36362 24.781 5.35175H25.5262C25.5229 10.2464 25.5328 15.1414 25.5211 20.036V20.0356ZM30.8082 22.5929C29.318 22.6055 27.8267 22.5947 26.3359 22.5983V16.7158H30.7763C31.6027 16.7479 32.6089 16.212 32.5889 15.2684C32.604 14.3933 31.7141 13.8944 30.9514 13.8327C31.5618 13.7607 32.1828 13.3266 32.2419 12.6651C32.3829 11.8005 31.5536 11.1835 30.7762 11.1641C29.2969 11.1402 27.8159 11.1606 26.3359 11.1538V8.25444C26.2356 6.74779 27.4925 5.34869 28.9709 5.25825C30.4411 5.23891 31.9122 5.25535 33.3827 5.24989V19.6901C33.4561 21.1528 32.2253 22.4645 30.8082 22.5934V22.5929ZM29.3771 14.3278C29.3772 14.3278 30.1806 14.2806 30.1806 15.0874C30.1806 15.8941 29.3818 15.847 29.3771 15.847H27.7473V14.3278H29.3771ZM27.7473 13.4973V12.0833H29.2711C29.2711 12.0833 29.9851 12.0833 29.9851 12.7893C29.9851 13.4952 29.2711 13.4973 29.2711 13.4973H27.7473Z"
                    fill="#606060"
                  />
                </svg>
              </a>
              <a
                href="https://bank.uz/card/karta-maestro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="29"
                  viewBox="0 0 48 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.829 24.8349C26.7067 22.2368 28.5221 18.4657 28.5221 14.2749C28.5221 10.0848 26.707 6.31335 23.829 3.68753C21.3148 1.39663 17.9625 0 14.2752 0C6.39722 0 0 6.39722 0 14.2749C0 22.1527 6.39722 28.5218 14.2752 28.5218C17.9625 28.5218 21.3151 27.1255 23.829 24.8349Z"
                    fill="#606060"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.8291 24.8349C26.7068 22.2369 28.5223 18.4658 28.5223 14.275C28.5223 10.0848 26.7071 6.31337 23.8291 3.68756V24.8349Z"
                    fill="#606060"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.411 0C29.7235 0 26.3709 1.39663 23.8289 3.68754C23.3257 4.16279 22.8501 4.66636 22.4043 5.1958H25.2814C25.673 5.6707 26.036 6.20142 26.3709 6.70437H21.3148C21.0141 7.19498 20.7344 7.69819 20.4766 8.21264H27.1813C27.4045 8.71559 27.6284 9.21825 27.7956 9.7212H19.8898C19.7207 10.2248 19.5808 10.7378 19.4707 11.2575H28.2146C28.4177 12.2504 28.5205 13.2612 28.5215 14.2747C28.5215 15.839 28.2699 17.3757 27.7953 18.8003H19.8898C20.0611 19.3122 20.2568 19.8155 20.4763 20.3086H27.181C26.9294 20.8116 26.678 21.3423 26.3706 21.8169H21.3145C21.6456 22.342 22.0095 22.8458 22.404 23.3252H25.2811C24.8334 23.862 24.348 24.3662 23.8286 24.834C26.3706 27.1246 29.7232 28.521 33.4107 28.521C41.2885 28.521 47.6576 22.1518 47.6576 14.2741C47.6579 6.39722 41.2885 0 33.411 0Z"
                    fill="#535353"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.741 17.3476C42.741 17.0966 42.9649 16.9011 43.2162 16.9011C43.4673 16.9011 43.6634 17.0966 43.6634 17.3476C43.6634 17.5992 43.4673 17.8228 43.2162 17.8228C42.9649 17.8231 42.741 17.5992 42.741 17.3476ZM43.2165 17.7112C43.412 17.7112 43.5517 17.5434 43.5517 17.3479C43.5517 17.1524 43.412 17.0127 43.2165 17.0127C43.021 17.0127 42.8533 17.1524 42.8533 17.3479C42.8533 17.5434 43.021 17.7112 43.2165 17.7112ZM43.1604 17.5431H43.0485V17.1521H43.2162C43.2717 17.1521 43.2998 17.1521 43.3276 17.1805C43.3559 17.2082 43.3834 17.2363 43.3834 17.264C43.3834 17.3198 43.3556 17.376 43.2998 17.376L43.3834 17.5431H43.2715L43.2159 17.4034H43.1601V17.5431H43.1604ZM43.1604 17.3198H43.2717V17.2363H43.1604V17.3198ZM12.4871 17.8231H10.6991L11.7605 12.2637L9.33024 17.8231H7.71004L7.43065 12.2915L6.36922 17.8231H4.74902L6.1176 10.5874H8.91116L9.05115 15.057L11.0066 10.5874H13.8837L12.4871 17.8231ZM32.3214 17.7386C31.8184 17.8789 31.4554 17.9341 31.0361 17.9341C30.1421 17.9341 29.6394 17.4876 29.6394 16.6494C29.6394 16.4817 29.6672 16.3142 29.695 16.1187L29.8069 15.5316L29.8911 15.0851L30.7009 10.5871H32.4608L32.2091 11.9282H33.1309L32.8798 13.3529H31.9575L31.5104 15.8116C31.4826 15.9229 31.4549 16.0071 31.4549 16.0632C31.4549 16.3701 31.6504 16.5097 32.0692 16.5097C32.2647 16.5097 32.4324 16.482 32.5438 16.4542L32.3214 17.7386Z"
                    fill="#1F1F1F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.4901 11.9843C37.3504 11.9285 37.3229 11.9285 37.2946 11.9285C37.211 11.9005 37.1549 11.9005 37.1549 11.8727H36.9594C36.3728 11.8727 35.954 12.124 35.4233 12.8225L35.5905 11.9285H33.9703L32.8811 17.8231H34.6687C35.3114 14.2191 35.5627 13.5768 36.4286 13.5768C36.4845 13.5768 36.5683 13.6048 36.6525 13.6048L36.848 13.6607L37.4901 11.9843ZM25.2822 13.8001C25.2822 14.5263 25.7015 15.057 26.6516 15.4206C27.3778 15.7274 27.4892 15.8116 27.4892 16.091C27.4892 16.4542 27.154 16.6217 26.4561 16.6217C25.9248 16.6217 25.4224 16.5381 24.8359 16.37L24.6121 17.7389H24.6962L25.0031 17.8231C25.115 17.8231 25.2822 17.8509 25.4783 17.8509C25.897 17.9067 26.2322 17.9067 26.4836 17.9067C28.3554 17.9067 29.2494 17.2924 29.2494 15.9513C29.2494 15.1415 28.8861 14.666 27.9641 14.303C27.2095 14.0236 27.1259 13.94 27.1259 13.6607C27.1259 13.3532 27.4334 13.1858 28.0199 13.1858C28.3551 13.1858 28.8581 13.2138 29.3046 13.2696L29.5562 11.9288C29.0816 11.8449 28.3829 11.8172 27.9918 11.8172C25.9806 11.8166 25.2822 12.7106 25.2822 13.8001ZM18.2429 17.8231H16.7901L16.8182 17.2082C16.3711 17.6828 15.7565 17.9067 14.9464 17.9067C13.9966 17.9067 13.3262 17.264 13.3262 16.3145C13.3262 14.8898 14.4715 14.0514 16.4552 14.0514C16.6507 14.0514 16.9021 14.0514 17.1815 14.0791C17.2373 13.8836 17.2373 13.7998 17.2373 13.7162C17.2373 13.3252 16.9298 13.1855 16.092 13.1855C15.589 13.1855 15.0305 13.2413 14.6395 13.3252L14.3879 13.409L14.2204 13.4371L14.4718 12.124C15.3657 11.9005 15.9242 11.8166 16.5949 11.8166C18.1313 11.8166 18.9136 12.4031 18.9136 13.5207C18.9136 13.8281 18.8858 14.0517 18.7739 14.6937L18.4109 16.7894L18.3551 17.1524L18.2993 17.4598L18.2715 17.6553L18.2429 17.8231ZM16.9576 15.1967C16.7621 15.1689 16.6782 15.1689 16.5666 15.1689C15.561 15.1689 15.058 15.4764 15.058 16.0629C15.058 16.4259 15.2816 16.6772 15.6726 16.6772C16.3991 16.6775 16.9295 16.0632 16.9576 15.1967ZM24.0813 17.6828C23.4667 17.8506 22.8802 17.9344 22.2656 17.9344C20.2822 17.9344 19.2485 17.0127 19.2485 15.2812C19.2485 13.2693 20.5613 11.7888 22.3492 11.7888C23.8019 11.7888 24.724 12.627 24.724 13.912C24.724 14.3588 24.6682 14.7782 24.5285 15.3647H20.9803V15.5602C20.9803 16.2307 21.4833 16.5939 22.517 16.5939C23.1496 16.5977 23.7765 16.4741 24.3604 16.2307L24.0813 17.6828ZM23.1312 14.1911V13.8836C23.1312 13.4087 22.8238 13.1294 22.2934 13.1294C21.7346 13.1294 21.3436 13.5204 21.1758 14.1908H23.1312V14.1911ZM43.022 15.1412C42.7423 17.0966 41.3734 17.9625 39.5577 17.9625C37.5745 17.9625 36.7641 16.7611 36.7641 15.2525C36.7641 13.1852 38.133 11.7605 40.2562 11.7605C42.0996 11.7605 43.0775 12.9338 43.0775 14.4143C43.0772 14.7779 43.0772 14.8057 43.022 15.1412ZM41.1776 14.3869C41.1776 13.772 40.926 13.2135 40.1998 13.2135C39.3058 13.2135 38.7473 14.275 38.7473 15.225C38.7473 16.0071 39.1383 16.5378 39.7526 16.5378C40.1436 16.5378 40.9818 16.0071 41.1215 15.1131C41.1776 14.8898 41.1776 14.6382 41.1776 14.3869Z"
                    fill="#1F1F1F"
                  />
                </svg>
              </a>
              <a
                href="https://www.mastercard.uz/ru-uz.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="48"
                  height="28"
                  viewBox="0 0 48 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8967 27.7871C21.5663 27.7871 27.7872 21.56 27.7872 13.8904C27.7872 6.22081 21.5664 0 13.8967 0C6.22081 0 0 6.22081 0 13.8904C0 21.56 6.22081 27.7871 13.8967 27.7871Z"
                    fill="#535353"
                  />
                  <path
                    d="M34.1096 27.7871C41.7792 27.7871 48 21.56 48 13.8904C48 6.22081 41.7793 0 34.1096 0C26.4336 0 20.2192 6.22081 20.2192 13.8904C20.2192 21.56 26.4336 27.7871 34.1096 27.7871Z"
                    fill="#535353"
                  />
                  <path
                    d="M23.9937 23.4217C21.6553 20.9309 20.2192 17.5758 20.2192 13.8904C20.2192 10.243 21.6299 6.91975 23.9238 4.4416L24.2161 4.5941C26.4337 7.05955 27.7872 10.3193 27.7872 13.8904C27.7872 17.4805 26.4211 20.7466 24.1907 23.2184L23.9937 23.4217Z"
                    fill="#606060"
                  />
                  <path
                    d="M2.72607 10.4083H3.93974L5.49653 14.2907L6.88811 10.4083H8.17166V15.5806H7.17405V11.7427L5.83966 15.5806H5.0835L3.74911 11.7935V15.5806H2.72607V10.4083Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M13.2802 15.5806V11.6219H12.4287V15.5806H13.2802Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M18.9736 15.5806V10.4782H18.0776V15.5806H18.9736Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M17.563 11.6219V12.5687H19.5582V11.6219H17.563Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M37.7884 15.5806V11.6219H36.937V15.5806H37.7884Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M45.4774 15.5806V10.6307H44.626V15.5806H45.4774Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M26.1923 11.6219H25.3091V15.5806H26.2049V12.9626C26.4146 12.5368 27.0437 12.4479 27.1454 12.4479V11.5964C26.9357 11.5964 26.2176 11.7553 26.1922 12.1429V11.6219H26.1923Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M39.7329 11.6219H38.8433V15.5806H39.7457V12.9626C39.949 12.5368 40.5844 12.4479 40.6797 12.4479V11.5964C40.4763 11.5964 39.7584 11.7553 39.7329 12.1429V11.6219Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M15.9491 12.753H16.8196C16.8196 12.0604 16.3748 11.6346 15.6441 11.6346C14.9133 11.6346 14.3351 12.0159 14.3351 12.8674C14.3351 13.7187 15.231 13.8396 15.3772 13.8777C15.5551 13.9284 16.0444 13.9857 16.0444 14.5258C16.0444 14.7292 15.8029 14.78 15.5932 14.78C15.3899 14.78 15.1802 14.6211 15.1802 14.386H14.208C14.208 15.2756 14.9006 15.6315 15.5932 15.6315C16.2858 15.6315 16.9467 15.0722 16.9467 14.3986C16.9467 13.7379 16.2986 13.3502 15.7902 13.2739C15.0214 13.1659 15.0976 12.4987 15.5424 12.4987C15.9618 12.4988 15.9364 12.6831 15.9491 12.753Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M31.9046 14.1635C31.5869 14.5639 31.0976 14.818 30.5511 14.818C29.598 14.818 28.8291 14.0492 28.8291 13.1087C28.8291 12.1556 29.598 11.3867 30.5511 11.3867C31.0913 11.3867 31.5805 11.6346 31.8919 12.0285H33.0102C32.5972 11.05 31.6377 10.4082 30.5511 10.4082C29.0579 10.4082 27.8506 11.6155 27.8506 13.1087C27.8506 14.5893 29.0579 15.8029 30.5511 15.8029C31.6568 15.8029 32.6099 15.1168 33.0293 14.1635H31.9046Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M43.4313 15.6759C44.5687 15.6759 45.4965 14.7481 45.4965 13.6171C45.4965 12.4733 44.5687 11.5519 43.4313 11.5519V12.4288C44.0858 12.4288 44.6196 12.9626 44.6196 13.6171C44.6196 14.2652 44.0858 14.799 43.4313 14.799V15.6759ZM43.4313 15.6759V14.799C42.7769 14.799 42.2431 14.2652 42.2431 13.6171C42.2431 12.9626 42.7769 12.4288 43.4313 12.4288V11.5519C42.2939 11.5519 41.3662 12.4733 41.3662 13.6171C41.3662 14.7481 42.2939 15.6759 43.4313 15.6759Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M35.7424 15.6759C36.8861 15.6759 37.8075 14.7481 37.8075 13.6171C37.8075 12.4733 36.8861 11.5519 35.7424 11.5519V12.4288C36.3969 12.4288 36.9306 12.9626 36.9306 13.6171C36.9306 14.2652 36.3969 14.799 35.7424 14.799V15.6759ZM35.7424 11.552C34.605 11.552 33.6772 12.4734 33.6772 13.6172C33.6772 14.7482 34.6051 15.676 35.7424 15.676V14.799C35.0879 14.799 34.5541 14.2653 34.5541 13.6172C34.5541 12.9627 35.0879 12.4289 35.7424 12.4289V11.552Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M22.297 14.0237H24.3113C24.3177 13.9666 24.3241 13.903 24.3241 13.8458V13.6742C24.2923 12.7529 23.7141 11.6218 22.2971 11.6091V12.5686C22.78 12.5686 23.2566 12.791 23.2566 13.2294H22.2971V14.0237H22.297ZM22.297 15.6886C23.0976 15.6759 24.2223 15.1549 24.2223 14.4877H23.1485C23.1485 14.6466 22.7355 14.7927 22.297 14.7864V15.6886ZM21.3121 14.0237H22.297V13.2294H21.3375C21.3375 12.791 21.8141 12.5686 22.297 12.5686V11.6092C22.2907 11.6092 22.2779 11.6092 22.2716 11.6092C20.988 11.6092 20.2891 12.6767 20.2827 13.7188V13.7569C20.3018 14.7419 20.9308 15.6887 22.2589 15.6887C22.2716 15.6887 22.2843 15.6887 22.297 15.6887V14.7863C21.8141 14.78 21.3121 14.5829 21.3121 14.0237Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M11.2409 15.6759C12.3783 15.6759 13.306 14.7481 13.306 13.6171C13.306 12.4733 12.3783 11.5519 11.2409 11.5519V12.4288C11.8954 12.4288 12.4292 12.9626 12.4292 13.6171C12.4292 14.2652 11.8954 14.799 11.2409 14.799V15.6759ZM11.2409 15.6759V14.799C10.5864 14.799 10.0527 14.2652 10.0527 13.6171C10.0527 12.9626 10.5864 12.4288 11.2409 12.4288V11.5519C10.0971 11.5519 9.17578 12.4733 9.17578 13.6171C9.17578 14.7481 10.0971 15.6759 11.2409 15.6759Z"
                    fill="#1F1F1F"
                  />
                </svg>
              </a>
              <a
                href="https://www.mastercard.uz/ru-uz.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Screenshot13}
                  alt=""
                  className="w-full h-[48px] mb-2"
                />
              </a>
              <a
                href="https://www.mastercard.uz/ru-uz.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="68"
                  height="18"
                  viewBox="0 0 68 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.28818 0.00307161C6.89568 -0.000455199 8.70115 -0.158255 9.46591 2.34646C9.98106 4.03367 10.8017 6.7974 11.9277 10.6376H12.3863C13.5939 6.58899 14.4235 3.82526 14.875 2.34646C15.6477 -0.184346 17.5795 0.00312121 18.3523 0.00312121L24.314 0.00312842V18H18.2376V7.39413H17.8302L14.4429 18H9.87116L6.48387 7.38627H6.0764V18H0V0.00312842L6.28818 0.00307161ZM33.0396 0.00312842V10.6169H33.5244L37.6447 1.88926C38.4445 0.152447 40.1492 0.00312842 40.1492 0.00312842H46.0294V18H39.8261V7.38627H39.3413L35.3018 16.1139C34.502 17.8428 32.7165 18 32.7165 18H26.8363V0.00312842H33.0396ZM67.4708 8.55536C66.6055 10.9349 63.8881 12.639 60.8796 12.639H54.3742V18H48.4752V8.55536H67.4708Z"
                    fill="#606060"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M61.1641 0.00312842H48.1659C48.4752 4.00984 52.0309 7.43985 55.7117 7.43985H67.8807C68.5829 4.1098 66.1654 0.00312842 61.1641 0.00312842Z"
                    fill="#606060"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#1f1f1f] md:hidden block pt-12 pb-8 px-6">
        <div className="flex flex-col items-center text-center lg:text-left">
          <svg
            width="182"
            height="47"
            viewBox="0 0 124 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="32" rx="9" fill="#FF7A1B" />
            <rect x="45" width="34" height="32" rx="9" fill="white" />
            <rect x="90" width="34" height="32" rx="9" fill="#FFD634" />
          </svg>
          <h2 className="font-normal mt-2 text-[20px] text-[color:var(--white-ffffff)] font-family">
            Логотип вашего магазина
          </h2>
          <div className="w-[559px] h-[3px] opacity-20 mt-10 bg-[var(--white-ffffff)]"></div>
          <div className="flex sm3:flex-row flex-col mt-10 gap-10 justify-between">
            <div className="flex flex-col items-start ">
              <h1 className="font-semibold ml-4 text-xl text-[color:var(--white-ffffff)] font-family">
                Для покупателей:
              </h1>
              <svg
                width="205"
                height="3"
                viewBox="0 0 205 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-4"
              >
                <path opacity="0.2" d="M0 0H205V3H0V0Z" fill="white" />
              </svg>
              <ul className="mt-3 flex text-start ml-3 flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Гарантия
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Наши работы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start ">
              <h1 className="font-semibold ml-4 text-xl text-[color:var(--white-ffffff)] font-family">
                О компании:
              </h1>
              <svg
                width="205"
                height="3"
                viewBox="0 0 205 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-4"
              >
                <path opacity="0.2" d="M0 0H205V3H0V0Z" fill="white" />
              </svg>
              <ul className="mt-3 flex text-start ml-3 flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    О Нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Наши работы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex  mt-10 gap-10 justify-between">
            <div className="flex mt-5 flex-col items-start ">
              <h1 className="font-semibold ml-6 text-xl text-[color:var(--white-ffffff)] font-family">
                Категории:
              </h1>
              <div className="sm3:w-[493px] w-[90%] m-auto h-[3px] opacity-20 mt-10 bg-[var(--white-ffffff)]"></div>
              <div className="flex sm3:gap-55 gap-25">
                <div className="flex flex-col gap-3 ml-6 items-start mt-5">
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Беседки
                  </a>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Бани
                  </a>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Площадки
                  </a>
                </div>
                <div className="flex flex-col gap-3 items-start mt-5">
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Дома
                  </a>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Перголы
                  </a>
                  <a
                    href="#"
                    className="font-normal  text-lg opacity-75 text-[color:var(--white-ffffff)] font-family"
                  >
                    Бренды
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[559px] h-[3px] opacity-20 mt-10 bg-[var(--white-ffffff)]"></div>
          <div>
            <h1 className="font-normal my-10 text-[32px] text-center text-[color:var(--white-ffffff)] font-family">
              Контакты
            </h1>
            <div className="sm2:w-[493px] w-full h-[3px] m-auto opacity-20 mt-10 bg-[var(--white-ffffff)]"></div>
            <div className="text-start ml-5 flex flex-col lg:text-left mt-5">
              <h1 className="font-normal text-lg text-[color:var(--white-ffffff)] font-family">
                Наш адрес:
              </h1>
              <h1 className="font-normal text-[25px] text-[color:var(--white-ffffff)] font-family">
                Москва, ул. Новокосимская д.7
              </h1>
              <div className="text-start mt-5 md:text-left">
                <h1 className="font-normal text-lg text-[color:var(--white-ffffff)] font-family">
                  График работы:
                </h1>
                <h1 className="font-normal text-[24px] text-[color:var(--white-ffffff)] font-family">
                  Ежедневно с{" "}
                  <span className="font-semibold text-[color:var(--color-oragne)]">
                    9:00
                  </span>{" "}
                  до{" "}
                  <span className="font-semibold text-[color:var(--color-oragne)]">
                    21:00
                  </span>
                </h1>
              </div>
            </div>
            <div className="sm2:w-[493px] w-full h-[3px] m-auto opacity-20 mt-10 bg-[var(--white-ffffff)]"></div>
            <div className="flex sm3:flex-row flex-col mt-5 gap-5 justify-between">
              <div className="text-start  md:text-left">
                <h1 className="font-normal text-[18px] text-[color:var(--color-3-white)] font-family">
                  Для регионов <br /> (звонок бесплатный)
                </h1>
                <p className="font-light mt-1 text-2xl text-[color:var(--white-ffffff)] font-family">
                  8 (800){" "}
                  <span className="font-semibold text-[color:var(--color-oragne)]">
                    800-00-00
                  </span>
                </p>
              </div>
              <div className="text-start md:text-left">
                <h1 className="font-normal text-[18px] text-[color:var(--color-3-white)] font-family">
                  Для Москвы и <br /> Московской области
                </h1>
                <p className="font-light mt-1 text-2xl text-[color:var(--white-ffffff)] font-family">
                  8 (495){" "}
                  <span className="font-semibold text-[color:var(--color-oragne)]">
                    700-00-00
                  </span>
                </p>
              </div>
            </div>
            <button className="w-full mt-3 mr-0 22l:mr-19 md:w-[275px] bg-[var(--color-oragne)] cursor-pointer hover:bg-[#ff3838] h-[50px] font-normal text-lg text-center text-[color:var(--white-ffffff)] rounded-md font-family">
              Заказать звонок
            </button>
            <div className="sm2:w-[493px] w-full h-[3px] m-auto opacity-20 mt-10 bg-[var(--white-ffffff)]"></div>
            <div className="mt-5">
              <p className="font-normal text-lg text-center text-[color:var(--white-ffffff)] font-family">
                Email:
              </p>
              <a
                href="#"
                className="font-normal text-2xl text-center text-[color:var(--white-ffffff)] font-family"
              >
                youremail@mailbox.ru
              </a>
              <div className="text-center mt-5 md:text-left">
                <h1 className="font-normal text-[18px] text-[color:var(--color-3-white)] font-family">
                  Мы в соц.сетях:
                </h1>
                <div className="mt-3 flex items-center justify-center md:justify-start gap-6">
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <img src={WhatsApp1} alt="WhatsApp" />
                  </a>
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <img src={YouTube1} alt="WhatsApp" />
                  </a>
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <img src={Instagram1} alt="WhatsApp" />
                  </a>
                </div>
                <p className="mt-4 font-normal text-base underline text-center [text-decoration-skip-ink:none] text-[color:var(--gray-color-)] font-family">
                  Сообщить об ошибке на сайте
                </p>
              </div>
              <div className="sm2:w-[559px] w-full h-[3px] m-auto opacity-20 mt-10 bg-[var(--white-ffffff)]"></div>
              <div className="mt-5">
                <h1 className="font-normal text-lg leading-[159%] text-center text-[color:var(--white-ffffff)] font-family">
                  Принимаем к оплате:
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start mt-4 items-center gap-7">
                  <a
                    href="https://cis.visa.com/visa-in-uzbekistan.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="97"
                      height="32"
                      viewBox="0 0 62 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.3829 0C35.9806 0 32.0466 2.27172 32.0466 6.46889C32.0466 11.2822 39.0238 11.6147 39.0238 14.0328C39.0238 15.051 37.8518 15.9624 35.8501 15.9624C33.0093 15.9624 30.8861 14.6889 30.8861 14.6889L29.9776 18.9243C29.9776 18.9243 32.4235 20 35.6708 20C40.4839 20 44.2712 17.6167 44.2712 13.3478C44.2712 8.26162 37.2649 7.93904 37.2649 5.69465C37.2649 4.89706 38.227 4.02316 40.223 4.02316C42.475 4.02316 44.3124 4.94935 44.3124 4.94935L45.2015 0.858659C45.2015 0.858659 43.2023 0 40.3829 0ZM0.106596 0.308732L0 0.926194C0 0.926194 1.85203 1.26365 3.52008 1.93681C5.66784 2.70871 5.82084 3.15808 6.18256 4.55379L10.1242 19.6816H15.4079L23.548 0.308732H18.2763L13.0459 13.4805L10.9115 2.31549C10.7158 1.03766 9.72432 0.308732 8.51071 0.308732H0.106596ZM25.6678 0.308732L21.5324 19.6816H26.5593L30.6802 0.308732H25.6678ZM53.7049 0.308732C52.4927 0.308732 51.8505 0.954854 51.3792 2.08394L44.0144 19.6816H49.286L50.306 16.7487H56.7284L57.3485 19.6816H62L57.9421 0.308732H53.7049ZM54.3905 5.54269L55.9531 12.8124H51.7668L54.3905 5.54269Z"
                        fill="#606060"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.jcb.com/ru-RU/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="69"
                      height="44"
                      viewBox="0 0 44 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M41.6538 0H2.3462C1.05098 0 0 1.06472 0 2.37818V25.6218C0 26.9355 1.05042 28 2.3462 28H41.6538C42.9491 28 44 26.9353 44 25.6218V2.37818C44 1.0645 42.9496 0 41.6538 0V0ZM17.5522 19.9755C17.5084 21.4168 16.2683 22.6786 14.8429 22.7146C13.4 22.7188 11.9568 22.7152 10.5137 22.7164V16.6311C11.5853 16.8301 12.6625 17.0444 13.7588 16.9796C14.8102 16.9242 16.0784 16.7611 16.6805 15.7643C17.1262 15.028 16.9264 14.1496 16.9634 13.3353L16.9497 11.2528L14.5118 11.2667C14.5001 12.4781 14.5359 13.6922 14.4926 14.9019C14.3989 15.7064 13.5493 16.1196 12.8197 16.0453C11.9759 16.0374 11.2248 15.7182 10.5121 15.5054H10.512C10.512 15.5054 10.4961 10.1847 10.5138 7.7345C10.7517 6.30241 12.1983 5.23056 13.6152 5.36139H17.564C17.5595 10.2327 17.56 15.1043 17.5522 19.9749V19.9755ZM25.5211 20.0356C25.4289 21.5562 23.9813 22.8328 22.4809 22.6883H18.4711V16.0279C19.5166 16.8648 20.9289 16.9904 22.2174 16.9736C23.0646 16.9511 23.9058 16.8243 24.7226 16.5958L24.705 15.3884C23.5527 15.9504 22.1246 16.3475 20.9227 15.7079C19.9678 15.1542 19.8556 13.7599 20.3661 12.8626C20.9965 11.9319 22.27 11.9042 23.2614 12.101C23.7479 12.145 24.4014 12.586 24.7226 12.5761V11.4706C23.0597 11.0446 21.2779 10.9067 19.6119 11.3891C19.1978 11.5326 18.7922 11.7357 18.4711 12.0419L18.4711 12.0418C18.4801 10.6721 18.4525 9.301 18.4859 7.93209C18.5847 6.6276 19.6665 5.52967 20.9384 5.37036C22.2173 5.32768 23.5004 5.36362 24.781 5.35175H25.5262C25.5229 10.2464 25.5328 15.1414 25.5211 20.036V20.0356ZM30.8082 22.5929C29.318 22.6055 27.8267 22.5947 26.3359 22.5983V16.7158H30.7763C31.6027 16.7479 32.6089 16.212 32.5889 15.2684C32.604 14.3933 31.7141 13.8944 30.9514 13.8327C31.5618 13.7607 32.1828 13.3266 32.2419 12.6651C32.3829 11.8005 31.5536 11.1835 30.7762 11.1641C29.2969 11.1402 27.8159 11.1606 26.3359 11.1538V8.25444C26.2356 6.74779 27.4925 5.34869 28.9709 5.25825C30.4411 5.23891 31.9122 5.25535 33.3827 5.24989V19.6901C33.4561 21.1528 32.2253 22.4645 30.8082 22.5934V22.5929ZM29.3771 14.3278C29.3772 14.3278 30.1806 14.2806 30.1806 15.0874C30.1806 15.8941 29.3818 15.847 29.3771 15.847H27.7473V14.3278H29.3771ZM27.7473 13.4973V12.0833H29.2711C29.2711 12.0833 29.9851 12.0833 29.9851 12.7893C29.9851 13.4952 29.2711 13.4973 29.2711 13.4973H27.7473Z"
                        fill="#606060"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://bank.uz/card/karta-maestro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="75"
                      height="45"
                      viewBox="0 0 48 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.829 24.8349C26.7067 22.2368 28.5221 18.4657 28.5221 14.2749C28.5221 10.0848 26.707 6.31335 23.829 3.68753C21.3148 1.39663 17.9625 0 14.2752 0C6.39722 0 0 6.39722 0 14.2749C0 22.1527 6.39722 28.5218 14.2752 28.5218C17.9625 28.5218 21.3151 27.1255 23.829 24.8349Z"
                        fill="#606060"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.8291 24.8349C26.7068 22.2369 28.5223 18.4658 28.5223 14.275C28.5223 10.0848 26.7071 6.31337 23.8291 3.68756V24.8349Z"
                        fill="#606060"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33.411 0C29.7235 0 26.3709 1.39663 23.8289 3.68754C23.3257 4.16279 22.8501 4.66636 22.4043 5.1958H25.2814C25.673 5.6707 26.036 6.20142 26.3709 6.70437H21.3148C21.0141 7.19498 20.7344 7.69819 20.4766 8.21264H27.1813C27.4045 8.71559 27.6284 9.21825 27.7956 9.7212H19.8898C19.7207 10.2248 19.5808 10.7378 19.4707 11.2575H28.2146C28.4177 12.2504 28.5205 13.2612 28.5215 14.2747C28.5215 15.839 28.2699 17.3757 27.7953 18.8003H19.8898C20.0611 19.3122 20.2568 19.8155 20.4763 20.3086H27.181C26.9294 20.8116 26.678 21.3423 26.3706 21.8169H21.3145C21.6456 22.342 22.0095 22.8458 22.404 23.3252H25.2811C24.8334 23.862 24.348 24.3662 23.8286 24.834C26.3706 27.1246 29.7232 28.521 33.4107 28.521C41.2885 28.521 47.6576 22.1518 47.6576 14.2741C47.6579 6.39722 41.2885 0 33.411 0Z"
                        fill="#535353"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M42.741 17.3476C42.741 17.0966 42.9649 16.9011 43.2162 16.9011C43.4673 16.9011 43.6634 17.0966 43.6634 17.3476C43.6634 17.5992 43.4673 17.8228 43.2162 17.8228C42.9649 17.8231 42.741 17.5992 42.741 17.3476ZM43.2165 17.7112C43.412 17.7112 43.5517 17.5434 43.5517 17.3479C43.5517 17.1524 43.412 17.0127 43.2165 17.0127C43.021 17.0127 42.8533 17.1524 42.8533 17.3479C42.8533 17.5434 43.021 17.7112 43.2165 17.7112ZM43.1604 17.5431H43.0485V17.1521H43.2162C43.2717 17.1521 43.2998 17.1521 43.3276 17.1805C43.3559 17.2082 43.3834 17.2363 43.3834 17.264C43.3834 17.3198 43.3556 17.376 43.2998 17.376L43.3834 17.5431H43.2715L43.2159 17.4034H43.1601V17.5431H43.1604ZM43.1604 17.3198H43.2717V17.2363H43.1604V17.3198ZM12.4871 17.8231H10.6991L11.7605 12.2637L9.33024 17.8231H7.71004L7.43065 12.2915L6.36922 17.8231H4.74902L6.1176 10.5874H8.91116L9.05115 15.057L11.0066 10.5874H13.8837L12.4871 17.8231ZM32.3214 17.7386C31.8184 17.8789 31.4554 17.9341 31.0361 17.9341C30.1421 17.9341 29.6394 17.4876 29.6394 16.6494C29.6394 16.4817 29.6672 16.3142 29.695 16.1187L29.8069 15.5316L29.8911 15.0851L30.7009 10.5871H32.4608L32.2091 11.9282H33.1309L32.8798 13.3529H31.9575L31.5104 15.8116C31.4826 15.9229 31.4549 16.0071 31.4549 16.0632C31.4549 16.3701 31.6504 16.5097 32.0692 16.5097C32.2647 16.5097 32.4324 16.482 32.5438 16.4542L32.3214 17.7386Z"
                        fill="#1F1F1F"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M37.4901 11.9843C37.3504 11.9285 37.3229 11.9285 37.2946 11.9285C37.211 11.9005 37.1549 11.9005 37.1549 11.8727H36.9594C36.3728 11.8727 35.954 12.124 35.4233 12.8225L35.5905 11.9285H33.9703L32.8811 17.8231H34.6687C35.3114 14.2191 35.5627 13.5768 36.4286 13.5768C36.4845 13.5768 36.5683 13.6048 36.6525 13.6048L36.848 13.6607L37.4901 11.9843ZM25.2822 13.8001C25.2822 14.5263 25.7015 15.057 26.6516 15.4206C27.3778 15.7274 27.4892 15.8116 27.4892 16.091C27.4892 16.4542 27.154 16.6217 26.4561 16.6217C25.9248 16.6217 25.4224 16.5381 24.8359 16.37L24.6121 17.7389H24.6962L25.0031 17.8231C25.115 17.8231 25.2822 17.8509 25.4783 17.8509C25.897 17.9067 26.2322 17.9067 26.4836 17.9067C28.3554 17.9067 29.2494 17.2924 29.2494 15.9513C29.2494 15.1415 28.8861 14.666 27.9641 14.303C27.2095 14.0236 27.1259 13.94 27.1259 13.6607C27.1259 13.3532 27.4334 13.1858 28.0199 13.1858C28.3551 13.1858 28.8581 13.2138 29.3046 13.2696L29.5562 11.9288C29.0816 11.8449 28.3829 11.8172 27.9918 11.8172C25.9806 11.8166 25.2822 12.7106 25.2822 13.8001ZM18.2429 17.8231H16.7901L16.8182 17.2082C16.3711 17.6828 15.7565 17.9067 14.9464 17.9067C13.9966 17.9067 13.3262 17.264 13.3262 16.3145C13.3262 14.8898 14.4715 14.0514 16.4552 14.0514C16.6507 14.0514 16.9021 14.0514 17.1815 14.0791C17.2373 13.8836 17.2373 13.7998 17.2373 13.7162C17.2373 13.3252 16.9298 13.1855 16.092 13.1855C15.589 13.1855 15.0305 13.2413 14.6395 13.3252L14.3879 13.409L14.2204 13.4371L14.4718 12.124C15.3657 11.9005 15.9242 11.8166 16.5949 11.8166C18.1313 11.8166 18.9136 12.4031 18.9136 13.5207C18.9136 13.8281 18.8858 14.0517 18.7739 14.6937L18.4109 16.7894L18.3551 17.1524L18.2993 17.4598L18.2715 17.6553L18.2429 17.8231ZM16.9576 15.1967C16.7621 15.1689 16.6782 15.1689 16.5666 15.1689C15.561 15.1689 15.058 15.4764 15.058 16.0629C15.058 16.4259 15.2816 16.6772 15.6726 16.6772C16.3991 16.6775 16.9295 16.0632 16.9576 15.1967ZM24.0813 17.6828C23.4667 17.8506 22.8802 17.9344 22.2656 17.9344C20.2822 17.9344 19.2485 17.0127 19.2485 15.2812C19.2485 13.2693 20.5613 11.7888 22.3492 11.7888C23.8019 11.7888 24.724 12.627 24.724 13.912C24.724 14.3588 24.6682 14.7782 24.5285 15.3647H20.9803V15.5602C20.9803 16.2307 21.4833 16.5939 22.517 16.5939C23.1496 16.5977 23.7765 16.4741 24.3604 16.2307L24.0813 17.6828ZM23.1312 14.1911V13.8836C23.1312 13.4087 22.8238 13.1294 22.2934 13.1294C21.7346 13.1294 21.3436 13.5204 21.1758 14.1908H23.1312V14.1911ZM43.022 15.1412C42.7423 17.0966 41.3734 17.9625 39.5577 17.9625C37.5745 17.9625 36.7641 16.7611 36.7641 15.2525C36.7641 13.1852 38.133 11.7605 40.2562 11.7605C42.0996 11.7605 43.0775 12.9338 43.0775 14.4143C43.0772 14.7779 43.0772 14.8057 43.022 15.1412ZM41.1776 14.3869C41.1776 13.772 40.926 13.2135 40.1998 13.2135C39.3058 13.2135 38.7473 14.275 38.7473 15.225C38.7473 16.0071 39.1383 16.5378 39.7526 16.5378C40.1436 16.5378 40.9818 16.0071 41.1215 15.1131C41.1776 14.8898 41.1776 14.6382 41.1776 14.3869Z"
                        fill="#1F1F1F"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex gap-7 items-center justify-center mt-5">
                  <a
                    href="https://www.mastercard.uz/ru-uz.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="75"
                      height="44"
                      viewBox="0 0 48 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8967 27.7871C21.5663 27.7871 27.7872 21.56 27.7872 13.8904C27.7872 6.22081 21.5664 0 13.8967 0C6.22081 0 0 6.22081 0 13.8904C0 21.56 6.22081 27.7871 13.8967 27.7871Z"
                        fill="#535353"
                      />
                      <path
                        d="M34.1096 27.7871C41.7792 27.7871 48 21.56 48 13.8904C48 6.22081 41.7793 0 34.1096 0C26.4336 0 20.2192 6.22081 20.2192 13.8904C20.2192 21.56 26.4336 27.7871 34.1096 27.7871Z"
                        fill="#535353"
                      />
                      <path
                        d="M23.9937 23.4217C21.6553 20.9309 20.2192 17.5758 20.2192 13.8904C20.2192 10.243 21.6299 6.91975 23.9238 4.4416L24.2161 4.5941C26.4337 7.05955 27.7872 10.3193 27.7872 13.8904C27.7872 17.4805 26.4211 20.7466 24.1907 23.2184L23.9937 23.4217Z"
                        fill="#606060"
                      />
                      <path
                        d="M2.72607 10.4083H3.93974L5.49653 14.2907L6.88811 10.4083H8.17166V15.5806H7.17405V11.7427L5.83966 15.5806H5.0835L3.74911 11.7935V15.5806H2.72607V10.4083Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M13.2802 15.5806V11.6219H12.4287V15.5806H13.2802Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M18.9736 15.5806V10.4782H18.0776V15.5806H18.9736Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M17.563 11.6219V12.5687H19.5582V11.6219H17.563Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M37.7884 15.5806V11.6219H36.937V15.5806H37.7884Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M45.4774 15.5806V10.6307H44.626V15.5806H45.4774Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M26.1923 11.6219H25.3091V15.5806H26.2049V12.9626C26.4146 12.5368 27.0437 12.4479 27.1454 12.4479V11.5964C26.9357 11.5964 26.2176 11.7553 26.1922 12.1429V11.6219H26.1923Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M39.7329 11.6219H38.8433V15.5806H39.7457V12.9626C39.949 12.5368 40.5844 12.4479 40.6797 12.4479V11.5964C40.4763 11.5964 39.7584 11.7553 39.7329 12.1429V11.6219Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M15.9491 12.753H16.8196C16.8196 12.0604 16.3748 11.6346 15.6441 11.6346C14.9133 11.6346 14.3351 12.0159 14.3351 12.8674C14.3351 13.7187 15.231 13.8396 15.3772 13.8777C15.5551 13.9284 16.0444 13.9857 16.0444 14.5258C16.0444 14.7292 15.8029 14.78 15.5932 14.78C15.3899 14.78 15.1802 14.6211 15.1802 14.386H14.208C14.208 15.2756 14.9006 15.6315 15.5932 15.6315C16.2858 15.6315 16.9467 15.0722 16.9467 14.3986C16.9467 13.7379 16.2986 13.3502 15.7902 13.2739C15.0214 13.1659 15.0976 12.4987 15.5424 12.4987C15.9618 12.4988 15.9364 12.6831 15.9491 12.753Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M31.9046 14.1635C31.5869 14.5639 31.0976 14.818 30.5511 14.818C29.598 14.818 28.8291 14.0492 28.8291 13.1087C28.8291 12.1556 29.598 11.3867 30.5511 11.3867C31.0913 11.3867 31.5805 11.6346 31.8919 12.0285H33.0102C32.5972 11.05 31.6377 10.4082 30.5511 10.4082C29.0579 10.4082 27.8506 11.6155 27.8506 13.1087C27.8506 14.5893 29.0579 15.8029 30.5511 15.8029C31.6568 15.8029 32.6099 15.1168 33.0293 14.1635H31.9046Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M43.4313 15.6759C44.5687 15.6759 45.4965 14.7481 45.4965 13.6171C45.4965 12.4733 44.5687 11.5519 43.4313 11.5519V12.4288C44.0858 12.4288 44.6196 12.9626 44.6196 13.6171C44.6196 14.2652 44.0858 14.799 43.4313 14.799V15.6759ZM43.4313 15.6759V14.799C42.7769 14.799 42.2431 14.2652 42.2431 13.6171C42.2431 12.9626 42.7769 12.4288 43.4313 12.4288V11.5519C42.2939 11.5519 41.3662 12.4733 41.3662 13.6171C41.3662 14.7481 42.2939 15.6759 43.4313 15.6759Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M35.7424 15.6759C36.8861 15.6759 37.8075 14.7481 37.8075 13.6171C37.8075 12.4733 36.8861 11.5519 35.7424 11.5519V12.4288C36.3969 12.4288 36.9306 12.9626 36.9306 13.6171C36.9306 14.2652 36.3969 14.799 35.7424 14.799V15.6759ZM35.7424 11.552C34.605 11.552 33.6772 12.4734 33.6772 13.6172C33.6772 14.7482 34.6051 15.676 35.7424 15.676V14.799C35.0879 14.799 34.5541 14.2653 34.5541 13.6172C34.5541 12.9627 35.0879 12.4289 35.7424 12.4289V11.552Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M22.297 14.0237H24.3113C24.3177 13.9666 24.3241 13.903 24.3241 13.8458V13.6742C24.2923 12.7529 23.7141 11.6218 22.2971 11.6091V12.5686C22.78 12.5686 23.2566 12.791 23.2566 13.2294H22.2971V14.0237H22.297ZM22.297 15.6886C23.0976 15.6759 24.2223 15.1549 24.2223 14.4877H23.1485C23.1485 14.6466 22.7355 14.7927 22.297 14.7864V15.6886ZM21.3121 14.0237H22.297V13.2294H21.3375C21.3375 12.791 21.8141 12.5686 22.297 12.5686V11.6092C22.2907 11.6092 22.2779 11.6092 22.2716 11.6092C20.988 11.6092 20.2891 12.6767 20.2827 13.7188V13.7569C20.3018 14.7419 20.9308 15.6887 22.2589 15.6887C22.2716 15.6887 22.2843 15.6887 22.297 15.6887V14.7863C21.8141 14.78 21.3121 14.5829 21.3121 14.0237Z"
                        fill="#1F1F1F"
                      />
                      <path
                        d="M11.2409 15.6759C12.3783 15.6759 13.306 14.7481 13.306 13.6171C13.306 12.4733 12.3783 11.5519 11.2409 11.5519V12.4288C11.8954 12.4288 12.4292 12.9626 12.4292 13.6171C12.4292 14.2652 11.8954 14.799 11.2409 14.799V15.6759ZM11.2409 15.6759V14.799C10.5864 14.799 10.0527 14.2652 10.0527 13.6171C10.0527 12.9626 10.5864 12.4288 11.2409 12.4288V11.5519C10.0971 11.5519 9.17578 12.4733 9.17578 13.6171C9.17578 14.7481 10.0971 15.6759 11.2409 15.6759Z"
                        fill="#1F1F1F"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.mastercard.uz/ru-uz.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Screenshot13}
                      alt=""
                      className="w-full h-[63px] mb-2"
                    />
                  </a>
                  <a
                    href="https://www.mastercard.uz/ru-uz.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="107"
                      height="29"
                      viewBox="0 0 68 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.28818 0.00307161C6.89568 -0.000455199 8.70115 -0.158255 9.46591 2.34646C9.98106 4.03367 10.8017 6.7974 11.9277 10.6376H12.3863C13.5939 6.58899 14.4235 3.82526 14.875 2.34646C15.6477 -0.184346 17.5795 0.00312121 18.3523 0.00312121L24.314 0.00312842V18H18.2376V7.39413H17.8302L14.4429 18H9.87116L6.48387 7.38627H6.0764V18H0V0.00312842L6.28818 0.00307161ZM33.0396 0.00312842V10.6169H33.5244L37.6447 1.88926C38.4445 0.152447 40.1492 0.00312842 40.1492 0.00312842H46.0294V18H39.8261V7.38627H39.3413L35.3018 16.1139C34.502 17.8428 32.7165 18 32.7165 18H26.8363V0.00312842H33.0396ZM67.4708 8.55536C66.6055 10.9349 63.8881 12.639 60.8796 12.639H54.3742V18H48.4752V8.55536H67.4708Z"
                        fill="#606060"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M61.1641 0.00312842H48.1659C48.4752 4.00984 52.0309 7.43985 55.7117 7.43985H67.8807C68.5829 4.1098 66.1654 0.00312842 61.1641 0.00312842Z"
                        fill="#606060"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="text-center mt-5 md:text-left">
                <p className="font-semibold opacity-75 text-[18px] leading-[151%] text-[color:var(--white-ffffff)] font-family">
                  ООО{" "}
                  <span className="font-normal leading-[0%]">"Фаза Групп"</span>
                </p>
                <p className="font-semibold opacity-75 text-[18px]  leading-[151%] text-[color:var(--white-ffffff)] font-family">
                  ИНН:{" "}
                  <span className="font-normal leading-[0%]">7751140879</span>
                </p>
                <p className="font-semibold opacity-75 text-[18px]  leading-[151%] text-[color:var(--white-ffffff)] font-family">
                  ОГРН:{" "}
                  <span className="font-normal leading-[0%]">
                    1187746273461
                  </span>
                </p>
              </div>
              <div className="text-center mb-5 mt-8 md:text-left">
                <p className="font-normal text-[18px] opacity-75 [text-decoration-skip-ink:none] text-[color:var(--white-ffffff)] font-family">
                  <span className="underline">Публичная оферта </span>
                  <br />
                  2013-2021 - Товары для дач, <br /> деревянные конструкции под
                  любые нужды
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
