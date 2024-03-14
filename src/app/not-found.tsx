"use client";

import ContactModal from "@/components/ContactModal";
import LayoutWrapper from "@/components/LayoutWrapper";
import React, { useState } from "react";
import Image from "@/components/Image";
import Link from "next/link";
import { AiFillPhone } from "react-icons/ai";

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
          wrapperClassName="absolute left-0 top-0 w-full h-[93vh] md:h-[80vh] object-cover z-0 bg-black"
          imageClassName="h-[93vh] md:h-[80vh] object-cover object-center"
          alt="top banner"
          style={{ filter: "brightness(0.5)" }}
        />
        <section className="relative max-w-6xl mx-5 md:mx-auto flex items-center h-[75vh] md:h-[63vh]">
          <div className="space-y-3 md:space-y-5">
            <h1 className="text-[24px] md:text-[50px] text-white">
              Ремонт кофемашин за 24 часа
            </h1>
            <ul className="text-white list-none space-y-1.5 md:space-y-3">
              <li key="free delivery" className="custom-list-item">
                Бесплатная доставка в мастерскую и обратно по Минску
              </li>
              <li key="payment after repair" className="custom-list-item">
                Оплата только за отремонтированную кофемашину
              </li>
              <li key="high skills master" className="custom-list-item">
                Квалифицированные и опытные инженеры
              </li>
              <li key="all officially" className="custom-list-item">
                Работаем с юридическими и физическими лицами
              </li>
              <li key="24/7" className="custom-list-item">
                Круглосуточно и без выходных
              </li>
            </ul>

            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 pt-10">
              <Link
                href="/repair/"
                className="text-white w-max bg-[#bc46c9] rounded-md px-6 py-3 hover:bg-[#872d91]"
              >
                Наши услуги
              </Link>
              <button
                onClick={changeContactModalState}
                className="flex w-max items-center px-6 py-3 border-2 border-[#bc46c9] hover:bg-[#bc46c9] rounded-md space-x-2"
              >
                <AiFillPhone className="text-[20px] text-white" />
                <p className="text-white">Заказать звонок</p>
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-5 md:mx-auto py-10 md:py-32 flex flex-col items-center">
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
      </main>
    </LayoutWrapper>
  );
};

export default NotFound;
