import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Image from "../components/Image";
import ContactModal from "../components/ContactModal";

const services = [
  {
    title: "Ремонт кофемашин и кофейных аппаратов",
    description:
      "Наша команда опытных специалистов готова помочь вам в любое время. Мы гарантируем быстрое и качественное обслуживание вашей кофемашины, чтобы вы могли наслаждаться чашечкой идеального кофе каждый день.",
  },
  {
    title: "Обслуживание кофемашин и кофейных аппаратов",
    description:
      "Надежное обслуживание вашего оборудования, которое поддерживает его в идеальном состоянии. Мы следим за всеми деталями, чтобы ваша кофемашина работала безупречно.",
  },
  {
    title: "Подменная кофемашина на время ремонта",
    description:
      "Мы предлагаем кофемашину на замену на время ремонта, чтобы вы могли продолжать наслаждаться кофе, не прерывая свой рабочий процесс.",
  },
  {
    title: "Качественная диагностика у вас на месте",
    description:
      "Наши профессиональные специалисты проведут качественную диагностику вашего оборудования прямо у вас на месте, чтобы быстро определить проблему и предложить наилучшее решение.",
  },
];

const advantages = [
  "Время ремонта от 30 минут до 2,5 часов ",
  "Бесплатный выезд мастера на дом",
  "Бесплатная диагностика кофемашины",
  "Оплата только за отремонтированную кофемашину",
  "Работаем круглосуточно и без выходных",
];

const About: React.FC = () => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

  return (
    <LayoutWrapper
      title="О сервисном центре KofeRem | koferem.by "
      description="KofeRem предлагает комплексные услуги по ремонту кофемашин. Компания, помимо ремонта и обслуживания, занимается продажей запчастей, чистящих средств, кофейной техники и кофе, а также предлагает услуги аренды кофемашин."
      url="https://koferem.by/about/"
    >
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={changeContactModalState}
      />
      <main>
        <Image
          imageName="kofe-bg.png"
          wrapperClassName="absolute left-0 top-0 w-full bg-black z-0"
          imageClassName="h-[25vh] md:h-[30vh] object-cover"
          alt="coffee background"
          style={{ filter: "brightness(0.5)" }}
        />

        <section className="relative max-w-6xl mx-5 md:mx-auto flex items-center justify-center z-0 h-[12vh] md:h-[15vh]">
          <p className="text-white text-[30px] md:text-[44px] text-center mt-5 md:mt-0 leading-5">
            О нас
          </p>
        </section>

        <section className="space-y-6 md:space-y-10 my-20 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
          <h1 className="text-black text-[28px] md:text-[32px] leading-5">
            О компании
          </h1>
          <p className="leading-7">
            Мы - ведущая сеть сервисных центров в Минске по ремонту и
            обслуживанию кофейного оборудования с 2010. Наша цель – обеспечить
            бесперебойную работу вашей кофемашины, чтобы каждый ваш кофейный
            опыт был неповторимо вкусным и комфортным.
            <br />
            <br /> Мы производим услуги по ремонту таких кофемашин как: Saeco,
            Philips, Delonghi, Siemens, Krups, Melitta, Jura, Bosch, Miele,
            Kaffit, Panasonic, Schaerer, WMF, Franke, Gastrorag, Grand Rich,
            Kambrook, Merol, Nivona, Neff, Gaggenau, Kuppersbusch, AEG,
            Electrolux, Gorenje, Hotpoint-Ariston, Kaiser, Asko, Fulgor, Graude,
            Smeg, Teka.
            <br />
            <br /> Наши специалисты проходят профессиональное обучение и
            постоянно повышают свой уровень мастерства. Это позволяет нам
            гарантировать вам профессиональный и качественный ремонт вашей
            кофемашины. Мы ценим доверие наших клиентов и стремимся к их полному
            удовлетворению.
          </p>

          <h2 className="text-black text-[28px] md:text-[32px] leading-10">
            Что мы предлагаем:
          </h2>
          <ul className="list-none list-inside space-y-4">
            {services.map((service, idx) => (
              <li key={idx} className="space-y-2">
                <p className="text-black font-semibold text-lg">
                  {service.title}
                </p>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>

          <div className="space-y-6">
            <h2 className="text-black text-[28px] md:text-[32px] leading-10">
              Наши преимущества:
            </h2>
            <ul className="list-disc list-inside space-y-4">
              {advantages.map((service, idx) => (
                <li key={idx} className="text-black">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <p>
            Мы с радостью занимаемся развитием кофейной культуры в Беларуси,
            учим по-настоящему ценить и наслаждаться этим великим напитком.
          </p>
        </section>
      </main>
    </LayoutWrapper>
  );
};

export default About;
