import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Image from "../components/Image";
import ContactModal from "../components/ContactModal";
import "../app/globals.css";

const services = [
  {
    title: "Ремонт кофемашин и кофейных аппаратов:",
    description:
      "Наша команда опытных специалистов готова помочь вам в любое время. Мы гарантируем быстрое и качественное обслуживание вашей кофемашины, чтобы вы могли наслаждаться чашечкой идеального кофе каждый день.",
  },
  {
    title: " Обслуживание кофемашин и кофейных аппаратов:",
    description:
      "Надежное обслуживание вашего оборудования, которое поддерживает его в идеальном состоянии. Мы следим за всеми деталями, чтобы ваша кофемашина работала безупречно.",
  },
  {
    title: "Замена оборудования на время ремонта:",
    description:
      "Мы предлагаем замену вашего оборудования на время ремонта, чтобы вы могли продолжать наслаждаться кофе, не прерывая свой рабочий процесс.",
  },
  {
    title: "Качественная диагностика у вас на месте:",
    description:
      "Наши профессиональные специалисты проведут качественную диагностику вашего оборудования прямо у вас на месте, чтобы быстро определить проблему и предложить наилучшее решение.",
  },
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
          <h1 className="text-white text-[30px] md:text-[44px] text-center mt-5 md:mt-0 leading-5">
            О нас
          </h1>
        </section>

        <section className="space-y-6 md:space-y-10 my-20 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
          <h2 className="text-black text-[28px] md:text-[32px] leading-5">
            Приветствуем вас в Koferem!
          </h2>
          <p className="leading-7">
            Мы - ведущая сеть сервисных центров в Минске, где с 2010 года
            заботимся о вашем кофейном опыте. Вдохновляемся идеей не только
            обеспечивать вас высококачественными кофемашинами и кофе, но и
            создавать пространство, где вы можете наслаждаться ароматом
            свежесваренного кофе и делиться впечатлениями с друзьями.
          </p>
          <h2 className="text-black text-[28px] md:text-[32px] leading-10">
            Что мы предлагаем:
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {services.map((service, idx) => (
              <li key={idx}>
                <span className="font-bold">{service.title} </span>
                <span>{service.description}</span>
              </li>
            ))}
          </ul>
          <p>
            Мы гордимся тем, что являемся частью развития кофейной культуры в
            Беларуси. Доверьтесь нам, и мы сделаем ваш кофейный опыт
            незабываемым!
          </p>
        </section>
      </main>
    </LayoutWrapper>
  );
};

export default About;
