import React from "react";

const NewsletterSection = () => {
  return (
    <section className="py-8 px-6 bg-[var(--color-3-white)]">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1555px] m-auto w-[90%] gap-6 lg:gap-4">
        <p className="font-normal text-[26px] sm:w-full w-[70%] sm:text-2xl text-black font-family text-center lg:text-left">
          Хотите быть в курсе выгодных предложений, акций и новинок?
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Имя"
            className="w-full sm:w-40 px-4 py-2 font-normal text-sm bg-[var(--white-ffffff)] text-black font-family border border-[color:var(--subcolor-1-gray)] border-solid rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[var(--color-oragne)]"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-40 px-4 py-2 border border-[color:var(--subcolor-1-gray)] border-solid font-normal text-sm bg-[var(--white-ffffff)] text-black font-family rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[var(--color-oragne)]"
          />

          <button className="bg-[var(--color-oragne)] cursor-pointer hover:bg-[#ff3838] font-normal text-base text-center text-[color:var(--white-ffffff)] font-family px-6 py-2 rounded-md transition-colors w-full sm:w-auto">
            Подписаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;