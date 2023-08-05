import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Image from "../components/Image";

const Delivery: React.FC = () => {
  return (
    <LayoutWrapper>
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
            Оплата и доставка
          </h1>
        </section>

        <section className="space-y-6 md:space-y-10 my-20 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg pb-10 border-b border-gray-200">
          <h2 className="text-black text-[28px] md:text-[32px] leading-5">
            Доставка
          </h2>
          <p className="leading-7">
            Сервисный центр KOFEREM предлагает в удобное для вас время с 8.30 до
            19.00, забрать вашу кофемашину и доставить к нам на сервис,
            произвести диагностику и после согласования и ремонта доставить
            обратно. Стоимость курьерской услуги 0 рублей!
          </p>

          <h2 className="text-black text-[28px] md:text-[32px] leading-10">
            Плюсы от заказа курьерской доставки
          </h2>
          <div className="space-y-3 leading-7">
            <p>
              Какой бы кофемашиной вы не пользовались профессиональной или
              бытовой, компактной и легкой назвать ее трудно и поэтому перед
              каждым пользователем встает вопрос, как доставить неисправное
              устройство в мастерскую.
            </p>
            <p>
              Мы постоянно работаем над удобством и комфортом обращения в наш
              сервисный центр и поэтому мы берём на себя все хлопоты и заботы о
              транспортировке вашей кофемашины к нашим мастерам.
            </p>
            <p>
              Вы экономите не только время, но и нервы, так как наш курьер берет
              на себя обязательства, поэтому доставка проводится максимально
              аккуратно и бережно. Все что вам нужно, это сделать заказ на
              ремонт через онлайн заявку на нашем сайте или позвонив по
              указанным телефонам и заказать услугу курьерскую доставку.
            </p>
            <p>
              Перед приемом, оформляется специальная квитанция на сдачу-прием
              кофемашины, где указываются имеющие повреждения, описывается
              модель и год выпуска устройства.
            </p>
          </div>
        </section>

        <section className="space-y-6 md:space-y-10 my-10 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
          <h3 className="text-black text-[28px] md:text-[32px] leading-10">
            Оплата наличными или картой
          </h3>
          <p className="leading-7">
            Оплата наличным или картой производиться при доставке курьером, или
            при самовывозе в сервисном центре . Наш менеджер в процессе
            согласования ремонта , уточнит удобный для вас способ оплаты и
            подготовит соответсвующие документы.
          </p>

          <h3 className="text-black text-[28px] md:text-[32px] leading-10">
            Безналичный расчет
          </h3>

          <p className="leading-7">
            Оплата товара безналичным расчетом осуществляется только
            юридическими лицами. Для этого необходимо при оформлении заказа
            указать название организации-плательщика и выслать карточку клиента
            на адрес –{" "}
            <a href="mailto:serviscoffee@yandex.ru" className="text-[#c9a246]">
              serviscoffee@yandex.ru
            </a>
            . После поступления заказа, вам высылается счет, по эл.почте или
            факсу. Представляются все необходимые финансовые документы.
          </p>
        </section>
      </main>
    </LayoutWrapper>
  );
};

export default Delivery;
