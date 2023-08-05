import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Image from "../components/Image";

const services = [
  "Поставка оригинальных запчастей",
  "Ремонт и обслуживание кофемашин",
  "Продажа кофемашин",
  "Аренда кофемашин",
  "Обжарка кофе",
  "Школа Баристы",
  "Кофейни",
];

const About: React.FC = () => {
  return (
    <LayoutWrapper>
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
            О компании
          </h2>
          <p className="leading-7">
            Кофепрофсерис – сеть сервисных центров с 2010 года занимает
            лидирующие позиции в сфере ремонта и обслуживания кофемашин в
            Минске. Компания также осуществляет обжарку высококачественного и
            эксклюзивного кофе, привезенного со всех уголков мира, который
            обязательно стоит попробовать.В основе нашего успеха стоит команда
            высококвалифицированных специалистов ,которые со всей душой подходят
            к нашему общему делу. Мы любим нашу работу!
          </p>

          <h2 className="text-black text-[28px] md:text-[32px] leading-10">
            Перечень услуг:
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>

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
