import React, { useState } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Image from "../components/Image";
import BrandCard from "../components/BrandCard";
import ContactModal from "../components/ContactModal";

const RepairTemplate: React.FC = ({ pageContext }: any) => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  const householdBrands = pageContext.brands.filter((brand: any) =>
    brand.title.includes("бытовых")
  );
  const builtInBrands = pageContext.brands.filter((brand: any) =>
    brand.title.includes("встраиваемых")
  );

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

  return (
    <LayoutWrapper
      title="Ремонт и обслуживание кофемашин в Минске | koferem.by "
      description="Ремонт и обслуживание кофемашин всех производителей: Delonghi, Jura, Krups, Philips, Saeco, Siemens и др. в Минске. Срочно и недорого. Большой опыт работы."
    >
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={changeContactModalState}
      />
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
            Ремонт кофемашин
          </h1>
        </section>

        <section className="space-y-6 md:space-y-10 my-20 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
          <h2 className="text-black text-[28px] md:text-[32px] leading-10">
            Где и как заказать ремонт
          </h2>
          <p>
            Для оказания услуг, вам нужно заполнить онлайн заявку на сайте или
            позвонить по указанным телефонам. Наши вежливые сотрудники уточнят у
            вас модель кофемашины и причину поломки, а также предложат услуги
            курьера, который возьмет на себя транспортировку агрегата совершенно
            бесплатно. Это позволяет избежать многих неудобств с доставкой
            дорогостоящего устройства.
          </p>

          <p>
            После проведения восстановительных работ, мастер выдает полностью
            функционирующую кофемашину, которая прошла тестовый запуск. Ремонт
            кофемашин в нашем сервисном центре – это высокое качество проводимых
            работ, оперативность, а также внимательное отношение к каждому
            заказчику и его проблеме. Ключевым принципом нашей работы является
            высокая культура обслуживания.
          </p>
        </section>

        <section className="space-y-6 md:space-y-10 my-20 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
          <h3 className="text-black text-[28px] md:text-[32px] leading-10 text-center">
            Ремонт бытовых кофемашин любой сложности
          </h3>

          <ul className="list-none list-inside grid grid-cols-1 md:grid-cols-3 gap-10">
            {householdBrands.map((brand: any) => (
              <li key={brand.title}>
                <BrandCard
                  title={brand.title}
                  description={brand.subtitle}
                  image={brand.logo}
                  to={`/repair/${brand.brand_name.toLowerCase()}`}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 md:space-y-10 my-20 text-[#727272] max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
          <h3 className="text-black text-[28px] md:text-[32px] leading-10 text-center">
            Ремонт встраиваемых кофемашин любой сложности
          </h3>

          <ul className="list-none list-inside grid grid-cols-1 md:grid-cols-3 gap-10">
            {builtInBrands.map((brand: any) => (
              <li key={brand.title}>
                <BrandCard
                  title={brand.title}
                  description={brand.subtitle}
                  image={brand.logo}
                  to={`/repair/${brand.brand_name.toLowerCase()}`}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#c9a246] py-32 text-center">
          <div className="space-y-6 md:space-y-10 text-white max-w-6xl mx-5 md:mx-auto text-base md:text-lg">
            <h4 className="text-[36px]">У вас остались какие-то вопросы?</h4>
            <p>
              Оставьте свой номер, в течении 5 минут, наш специалист обязательно
              перезвонит вам для оказания помощи.
            </p>

            <div className="flex justify-center">
              <button
                onClick={changeContactModalState}
                className="flex w-max items-center px-6 py-3 border-2 border-white text-white hover:text-gray-200 hover:border-gray-200 rounded-md space-x-2"
              >
                <p>Оставить заявку</p>
              </button>
            </div>
          </div>
        </section>
      </main>
    </LayoutWrapper>
  );
};

export default RepairTemplate;
