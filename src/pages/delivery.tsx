import React from "react";
import { FaShippingFast, FaHandsWash, FaPhone, FaEye } from "react-icons/fa";

import LayoutWrapper from "../components/LayoutWrapper";
import Image from "../components/Image";

const Delivery: React.FC = () => {
  return (
    <LayoutWrapper
      title="Условия доставки и способы оплаты KofeRem | koferem.by "
      description="Условия доставки и способы оплаты, услуги ремонта сервисного центра KofeRem."
      url="https://koferem.by/delivery/"
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
            Доставка и оплата
          </h1>
        </section>

        <section className="space-y-6 md:space-y-10 my-20 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg pb-10 border-b border-gray-200">
          <h2 className="text-black text-[28px] md:text-[32px] leading-5">
            Доставка
          </h2>

          <ul className="list-disc space-y-6 list-inside">
            <li key="minsk" className="space-y-2">
              <span className="font-semibold text-black">по Минску</span>
              <p>
                Сервисный центр KOFEREM предлагает в удобное для вас время с
                8.30 до 20.00, забрать вашу кофемашину и доставить к нам на
                сервис, произвести диагностику и после согласования и ремонта
                доставить обратно.
                <br />
                <span className="font-semibold">Дни доставки:</span> Пн – Вс.
                <br />{" "}
                <span className="font-semibold">Стоимость доставки:</span> 0
                рублей.
              </p>
            </li>

            <li key="state" className="space-y-2">
              <span className="font-semibold text-black">
                по Минской области
              </span>
              <p>
                Доставка осуществляется транспортной компанией после
                согласования
                <br />
                <span className="font-semibold">Дни доставки:</span> Пн – Вс.
                <br />
                <span className="font-semibold">Стоимость доставки:</span> от 10
                рублей для стандартной бытовой кофемашины.
              </p>
            </li>

            <li key="belarus" className="space-y-2">
              <span className="font-semibold text-black">по Беларуси</span>
              <p>
                Доставка осуществляется транспортной компанией после
                согласования
                <br />
                <span className="font-semibold">Дни доставки:</span> Пн – Вс.
                <br />
                <span className="font-semibold">Стоимость доставки:</span> от 20
                рублей для стандартной бытовой кофемашины.
              </p>
            </li>
          </ul>

          <div className="space-y-10">
            <h3 className="text-black text-[28px] md:text-[32px] leading-10">
              Преимущества курьерской доставки:
            </h3>
            <div className="flex flex-col md:flex-row justify-between space-x-10">
              <div className="space-y-4 flex flex-col items-center w-full text-center">
                <FaShippingFast className="w-10 h-10" />
                <div className="space-y-2">
                  <p className="text-lg font-medium text-black">
                    Удобная курьерская доставка
                  </p>
                  <p className="text-base">
                    Мы берем на себя все хлопоты по транспортировке вашей
                    кофемашины к нам в мастерскую, обеспечивая максимальный
                    комфорт для вас.
                  </p>
                </div>
              </div>

              <div className="space-y-4 flex flex-col items-center w-full text-center">
                <FaHandsWash className="w-10 h-10" />
                <div className="space-y-2">
                  <p className="text-lg font-medium text-black">
                    Бережное обращение
                  </p>
                  <p className="text-base">
                    Наш курьер осуществляет доставку с максимальной
                    осторожностью и бережностью, чтобы ваше устройство осталось
                    в непревзойденном состоянии.
                  </p>
                </div>
              </div>

              <div className="space-y-4 flex flex-col items-center w-full text-center">
                <FaPhone className="w-10 h-10" />
                <div className="space-y-2">
                  <p className="text-lg font-medium text-black">
                    Простой заказ
                  </p>
                  <p className="text-base">
                    Заказать курьерскую доставку легко – просто оставьте заявку
                    на нашем сайте или позвоните по телефону{" "}
                    <a href="tel:375296995069">+375 (29) 699-50-69</a>.
                  </p>
                </div>
              </div>

              <div className="space-y-4 flex flex-col items-center w-full text-center">
                <FaEye className="w-10 h-10" />
                <div className="space-y-2">
                  <p className="text-lg font-medium text-black">
                    Прозрачный процесс{" "}
                  </p>
                  <p className="text-base">
                    Перед приемом в мастерскую оформляется специальная
                    квитанция, где подробно указываются все имеющиеся
                    повреждения вашей кофемашины, что гарантирует прозрачность и
                    надежность обслуживания.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 md:space-y-10 my-10 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
          <h2 className="text-black text-[28px] md:text-[32px] leading-10">
            Оплата
          </h2>
          <div className="space-y-2">
            <h3 className="text-black font-medium">
              Оплата наличными или картой
            </h3>
            <p>
              Оплата наличным или картой производиться при доставке курьером,
              или при самовывозе в сервисном центре . Наш менеджер в процессе
              согласования ремонта , уточнит удобный для вас способ оплаты и
              подготовит соответствующие документы.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-black font-medium">Безналичный расчет</h3>
            <p>
              Оплата товара безналичным расчетом осуществляется только
              юридическими лицами. Для этого необходимо при оформлении заказа
              указать название организации-плательщика и выслать карточку
              клиента на адрес – serviscoffee@yandex.ru. После поступления
              заказа, вам высылается счет, по эл.почте или факсу. Представляются
              все необходимые финансовые документы.
            </p>
          </div>
        </section>
      </main>
    </LayoutWrapper>
  );
};

export default Delivery;
