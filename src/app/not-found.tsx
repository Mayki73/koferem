"use client";

import ContactModal from "@/components/ContactModal";
import LayoutWrapper from "@/components/LayoutWrapper";
import React, { useState } from "react";
import Image from "@/components/Image";
import Link from "next/link";
import { AiFillPhone } from "react-icons/ai";
import Button from "@/components/Form/Button";

const NotFound: React.FC = () => {
  const [isOpenStartModal, setIsOpenStartModal] = useState(false);
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  const changeModalState = () => {
    setIsOpenStartModal((prev) => !prev);
  };

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

  return (
    <LayoutWrapper
      title="Страница не найдена | Koferem"
      description="Срочный ремонт кофемашин и кофеварок у вас дома или в сервисном центре в Минске. Обслуживание и ремонт автоматических, рожковых, профессиональных кофемашин Delonghi, Saeco, Gaggia, Jura, Krups, Bosch, AEG, Bork и др. Гарантия, доступные цены."
      url="https://koferem.by/404"
    >
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={changeContactModalState}
      />
      <main>
        <Image
          imageName="main_banner.png"
          wrapperClassName="absolute left-0 top-0 w-full h-[11vh] md:h-[16vh] object-cover z-0 bg-black"
          imageClassName="h-[11vh] md:h-[16vh] object-cover object-center"
          alt="top banner"
          style={{ filter: "brightness(0.5)" }}
        />

        <section className="max-w-6xl mx-5 md:mx-auto py-20 md:py-44 flex flex-col items-center">
          <h2 className="text-[24px] md:text-[40px] font-bold text-[#bc46c9]">
            Страница не найдена
          </h2>
          <p className="text-[#333] mt-5 text-center max-w-full lg:max-w-[50rem]">
            К сожалению, страница, которую вы ищете, не существует. Возможно,
            она была удалена или перемещена. Попробуйте вернуться на{" "}
            <Link href="/">
              <p className="text-[#bc46c9] hover:underline">главную страницу</p>
            </Link>
            .
          </p>
        </section>
        <section className="flex flex-col md:flex-row">
          <div className="flex-1 bg-[#bc46c9] p-5 md:p-20 space-y-10 md:space-y-20 text-right py-10 md:py-32">
            <div className="space-y-6 md:space-y-10">
              <p className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
                Оставьте заявку прямо сейчас
              </p>
              <p className="text-white text-base md:text-xl">
                И оператор перезвонит Вам в течении 5 минут
              </p>
            </div>
            <Button
              className="bg-white hover:bg-white hover:shadow-md hover:scale-105"
              onClick={changeContactModalState}
            >
              Оставить заявку
            </Button>
          </div>
          <div className="flex-1 p-5 md:p-20 space-y-10 md:space-y-20 py-10 md:py-32">
            <div className="space-y-6 md:space-y-10">
              <p className="text-xl md:text-2xl lg:text-4xl text-[#bc46c9] font-bold">
                Или свяжитесь с нами по телефону
              </p>
              <p className="text-[#bc46c9] text-base md:text-xl">
                По телефону Вы можете получить консультацию
              </p>
            </div>
            <a
              className="bg-[#bc46c9] rounded-md px-6 py-3 hover:bg-[#872d91] w-max bg-[#bc46c9] hover:bg-[#bc46c9] hover:shadow-md hover:scale-105 flex space-x-3 items-center hover:cursor-pointer"
              href="tel:+375296995069"
            >
              <AiFillPhone className="text-white text-2xl" />
              <span className="text-white text-xl ml-3">
                +375 (29) 699-50-69
              </span>
            </a>
          </div>
        </section>
      </main>
    </LayoutWrapper>
  );
};

export default NotFound;
