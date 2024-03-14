import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Image from "../components/Image";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import ContactForm from "../components/ContactForm";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../constants/query-client";
import ContactModal from "../components/ContactModal";
import "../app/globals.css";

const Contacts: React.FC = () => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

  const defaultState = {
    center: [53.9302, 27.65406],
    zoom: 15,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={changeContactModalState}
      />
      <LayoutWrapper
        title={
          "Контакты сервисного центра по ремонту кофемашин KofeRem | koferem.by "
        }
        description={
          "Контактная информация о сервисном центре по ремонту и обслуживанию кофемашин в Минске. Сервисный центр КофеПрофСервис предоставляет услуги гарантийного и платного ремонта кофейных машин для физических и юридических лиц."
        }
        url="https://koferem.by/contacts/"
      >
        <main>
          <Image
            imageName="kofe-bg.png"
            wrapperClassName="absolute left-0 top-0 w-full z-0 bg-black"
            imageClassName="h-[25vh] md:h-[30vh] object-cover"
            alt="coffee background"
            style={{ filter: "brightness(0.5)" }}
          />

          <section className="relative max-w-6xl mx-5 md:mx-auto flex items-center justify-center z-0 h-[12vh] md:h-[15vh]">
            <h1 className="text-white text-[30px] md:text-[44px] text-center mt-5 md:mt-0 leading-5">
              Контакты
            </h1>
          </section>

          <section className="space-y-6 md:space-y-10 my-20 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
            <h2 className="text-black text-[28px] md:text-[32px] leading-10">
              Юридическая информация сервиса
            </h2>
            <table className="h-80">
              <tbody className="table-row-group w-full align-middle">
                <tr>
                  <td className="pr-10 md:pr-32">Наименованиe:</td>
                  <td>ООО «КОФЕРЕМ»</td>
                </tr>
                <tr>
                  <td>УНП:</td>
                  <td>192834683</td>
                </tr>
                <tr>
                  <td>Юридический адрес:</td>
                  <td>г. Минск ул. Калиновского 64,41</td>
                </tr>
                <tr>
                  <td>Текущий (расчетный счет):</td>
                  <td>IBAN BY63 ALFA 3013 2735 8800 1027 0000</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    ЗАО «Альфа-Банк» ул. Сурганова, 43-47, 220013 Минск,
                    Республика Беларусь
                  </td>
                </tr>
                <tr>
                  <td>СВИФТ:</td>
                  <td>ALFABY2X</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="max-w-6xl mx-5 md:mx-auto">
            <YMaps>
              <Map className="h-96" defaultState={defaultState}>
                <Placemark geometry={[53.9302, 27.65406]} />
                <Placemark
                  geometry={[53.9288, 27.653024]}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/images/icon-top-arrow.png",
                    iconImageSize: [30, 30],
                    iconImageOffset: [-15, -15],
                  }}
                />
              </Map>
            </YMaps>
          </section>

          <section className="max-w-6xl mx-5 md:mx-auto space-y-10 py-20">
            <h3 className="text-black text-[28px] md:text-[32px] leading-5">
              Заказать звонок
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
              <div className="col-span-1 md:col-span-3">
                <ContactForm />
              </div>
              <div className="flex flex-col items-center justify-center w-full col-span-1">
                <div className="space-y-4">
                  <div className="flex space-x-2 text-[#8a8a8a]">
                    <AiOutlineMail className="text-[30px]" />
                    <div>
                      <p className="text-black">Телефон и почта:</p>
                      <p className="mt-2">
                        <a href="tel:375296995069">+375 (29) 699-50-69</a>
                      </p>
                      <a href="mailto:serviscoffee@yandex.ru">
                        serviscoffee@yandex.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex space-x-2 text-[#8a8a8a]">
                    <BiMap className="text-[30px]" />
                    <div>
                      <p className="text-black">Адрес мастерской:</p>
                      <p className="mt-2">
                        <a href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D1%96%D1%86%D0%B0+%D0%9A%D1%96%D1%80%D1%8B%D0%BB%D1%8B+%D0%A2%D1%83%D1%80%D0%B0%D1%9E%D1%81%D0%BA%D0%B0%D0%B3%D0%B0+26,+Minsk,+Belarus/data=!4m2!3m1!1s0x46dbcec265d5b133:0x2e7a401fb28a8230?sa=X&ved=2ahUKEwi8gZb_qqyAAxUzFBAIHb-ADyAQ8gF6BAgXEAA&ved=2ahUKEwi8gZb_qqyAAxUzFBAIHb-ADyAQ8gF6BAgZEAI">
                          г. Минск, ул. Петра Мстиславца, 5
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2 text-[#8a8a8a]">
                    <AiOutlineClockCircle className="text-[30px]" />
                    <div>
                      <p className="text-black">Режим работы:</p>
                      <p className="mt-2">Пн–Пт: 9:00—18:00</p>
                      <p>Сб: 11:00-16:00</p>
                      <p>Вс: Выходной</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </LayoutWrapper>
    </QueryClientProvider>
  );
};

export default Contacts;
