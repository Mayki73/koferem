import React, { useState } from "react";
import LayoutWrapper from "../../../../components/LayoutWrapper";
import Image from "../../../../components/Image";
import Button from "../../../../components/Form/Button";
import clsx from "clsx";
import { AiFillPhone } from "react-icons/ai";
import ContactModal from "../../../../components/ContactModal";
import Link from "next/link";
import Brands from "../../../../data/brands.json";
import { notFound, useParams } from "next/navigation";
import "../../../../app/globals.css";
import { GetStaticPaths, GetStaticProps } from "next";

const priceList = [
  {
    title: "Диагностика кофемашины:",
    price: "0 рублей",
    bold: true,
  },
  {
    title: "Забрать кофемашину:",
    price: "0 рублей",
    bold: true,
  },
  {
    title: "Привезти кофемашину:",
    price: "0 рублей",
    bold: true,
  },
  {
    title: "Кофемашина выдает ошибку:",
    price: "от 30 рублей",
    bold: false,
  },
  {
    title: "Нет пара:",
    price: "от 35 рублей",
    bold: false,
  },
  {
    title: "Не включается:",
    price: "от 30 рублей",
    bold: false,
  },
  {
    title: "Не подает воду:",
    price: "от 35 рублей",
    bold: false,
  },
  {
    title: "Не мелет кофе:",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Не греет воду:",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Не наливает кофе:",
    price: "от 30 рублей",
    bold: false,
  },
  {
    title: "Не делает пену:",
    price: "от 35 рублей",
    bold: false,
  },
  {
    title: "Плохо течет кофе:",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Кофе течет в лоток отходов:",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Странный звук в кофемашине:",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Протекает (вода под кофемашиной):",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Кофе слишком холодный или горячий:",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Не работают кнопки управления:",
    price: "от 30 рублей",
    bold: false,
  },
  {
    title: "Горят индикаторы и не работает:",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Медленно течет кофе:",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Кофе слабый или невкусный:",
    price: "от 40 рублей",
    bold: false,
  },
];

const builtInNavigation = [
  {
    title: "Ремонт Neff",
    link: "/repair/built-in/neff/",
  },
  {
    title: "Ремонт Miele",
    link: "/repair/built-in/miele/",
  },
  {
    title: "Ремонт Gaggenau",
    link: "/repair/built-in/gaggenau/",
  },
  {
    title: "Ремонт Kuppersbusch",
    link: "/repair/built-in/kupperbusch/",
  },
  {
    title: "Ремонт AEG",
    link: "/repair/built-in/aeg/",
  },
  {
    title: "Ремонт Bosch",
    link: "/repair/built-in/bosch/",
  },
  {
    title: "Ремонт Electrolux",
    link: "/repair/built-in/electrolux/",
  },
  {
    title: "Ремонт Gorenje",
    link: "/repair/built-in/gorenje/",
  },
  {
    title: "Ремонт Hotpoint-Ariston",
    link: "/repair/built-in/hotpoint-ariston/",
  },
  {
    title: "Ремонт Siemens",
    link: "/repair/built-in/siemens/",
  },
  {
    title: "Ремонт Kaiser",
    link: "/repair/built-in/kaiser/",
  },
  {
    title: "Ремонт Asko",
    link: "/repair/built-in/asko/",
  },
  {
    title: "Ремонт Fulgor",
    link: "/repair/built-in/fulgor/",
  },
  {
    title: "Ремонт Graude",
    link: "/repair/built-in/graude/",
  },
  {
    title: "Ремонт Smeg",
    link: "/repair/built-in/smeg/",
  },
  {
    title: "Ремонт Teka",
    link: "/repair/built-in/teka/",
  },
];

const householdNavigation = [
  { title: "Ремонт Bosch", link: "/repair/household/bosch/" },
  { title: "Ремонт Miele", link: "/repair/household/miele/" },
  {
    title: "Ремонт Panasonic",
    link: "/repair/household/panasonic/",
  },
  {
    title: "Ремонт Schaerer",
    link: "/repair/household/schaerer/",
  },
  {
    title: "Ремонт WMF",
    link: "/repair/household/wmf/",
  },
  {
    title: "Ремонт Franke",
    link: "/repair/household/franke/",
  },
  {
    title: "Ремонт Gastrorag",
    link: "/repair/household/gastrorag/",
  },
  {
    title: "Ремонт Grand Rich",
    link: "/repair/household/grand-rich/",
  },
  {
    title: "Ремонт Kambrook",
    link: "/repair/household/kambrook/",
  },
  {
    title: "Ремонт Merol",
    link: "/repair/household/merol/",
  },
  {
    title: "Ремонт Nivona",
    link: "/repair/household/nivona/",
  },
  { title: "Ремонт Delonghi", link: "/repair/household/delonghi/" },
  {
    title: "Ремонт Saeco",
    link: "/repair/household/saeco/",
  },
  {
    title: "Ремонт Siemens",
    link: "/repair/household/siemens/",
  },
  {
    title: "Ремонт Krups",
    link: "/repair/household/krups/",
  },
  {
    title: "Ремонт Jura",
    link: "/repair/household/jura/",
  },
  {
    title: "Ремонт Philips",
    link: "/repair/household/philips/",
  },
  {
    title: "Ремонт Melitta",
    link: "/repair/household/melitta/",
  },
];

export const getStaticPaths = (async () => {
  const paths = Brands["page-templates"].map((brandItem: any) => {
    if (brandItem.title.includes("бытовых")) {
      return {
        params: {
          brand: brandItem.path.split("/")[1],
        },
      };
    }
  });

  return {
    paths: paths.filter((item) => item !== undefined) as any,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  return {
    props: {
      currentBrand: Brands["page-templates"].find(
        (brandItem: any) => brandItem.path === `household/${params?.brand}`
      ),
    },
  };
}) satisfies GetStaticProps;

const HouseholdBrandTemplate: React.FC = ({ currentBrand }: any) => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

  if (currentBrand === null) notFound();

  return (
    <LayoutWrapper
      title={currentBrand?.pageTitle!}
      description={currentBrand?.pageDescription!}
      url={`https://koferem.by/repair/${currentBrand?.path!}/`}
    >
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={changeContactModalState}
      />
      <main>
        <Image
          wrapperClassName="absolute left-0 top-0 z-0 h-80 w-full"
          style={{
            filter: "brightness(0.5)",
            backgroundPosition: "50% 20%",
          }}
          alt={currentBrand?.title!}
          imageName={currentBrand?.background!}
        />
        <section
          className="relative max-w-6xl mx-5 md:mx-auto flex justify-center items-center"
          style={{ height: "14rem" }}
        >
          <div className="space-y-5">
            <h1 className="flex justify-center items-center w-full text-[30px] font-medium text-white text-center">
              {currentBrand?.title}
            </h1>
            <div className="flex justify-center">
              <Button onClick={changeContactModalState} className="text-white">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </section>
        <div
          className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-5 md:mx-auto text-[#4d4d4d] text-base md:text-lg my-10"
          style={{ gap: "2rem" }}
        >
          <div style={{ gridColumn: "span 2 / span 2" }}>
            {currentBrand?.sections.map((section: any, index: number) => {
              return (
                <section
                  key={index}
                  className="space-y-6"
                  style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
                >
                  <h2 className="text-[28px] text-black leading-10">
                    {section.header}
                  </h2>
                  <p>{section.description}</p>
                  {section.list && (
                    <ul
                      className="list-inside space-y-3 italic"
                      style={{
                        listStyleType: "decimal",
                      }}
                    >
                      {section.list.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section?.image && (
                    <Image
                      alt={currentBrand?.title}
                      imageName={section.image}
                      imageClassName={"h-full"}
                    />
                  )}
                </section>
              );
            })}
            <div className="relative w-full py-10 px-6">
              <div className="relative space-y-7 z-10">
                <h3 className="text-[36px] text-black leading-10">
                  Кофемашина на подмену
                </h3>
                <p className="pt-4">
                  Мы знаем, что к хорошему привыкаешь быстро. Предлагаем
                  подменить кофемашину, пока ваша в ремонте
                </p>
                <p className="font-medium">Стоимость — 0 рублей</p>
                <Button
                  onClick={changeContactModalState}
                  className="text-white"
                >
                  Вызвать мастера
                </Button>
                <p>
                  Обычно ремонт кофейных машин проходит не более 2 дней. Все
                  время вы пользуетесь кофемашиной бесплатно!
                </p>
              </div>
              <Image
                wrapperClassName="absolute left-0 top-0 z-0 h-full w-full"
                alt={currentBrand?.title!}
                imageName="replacement-bg.png"
                imageClassName="h-full"
              />
            </div>

            <section className="max-w-6xl md:mx-auto text-[#4d4d4d] my-10 text-base md:text-lg space-y-10">
              <h4
                className="text-[30px] text-black leading-10"
                style={{ lineHeight: "1.rem" }}
              >
                Цены на ремонт кофемашин «{currentBrand?.brand_name}»
              </h4>
              <table className="border-collapse border border-slate-400 w-full">
                <thead className="text-left w-full">
                  <tr className="text-black text-lg text-left">
                    <th className="p-4 border border-slate-300">
                      Услуга/Неисправность
                    </th>
                    <th className="p-4 border border-slate-300 text-center">
                      Цена
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((item) => (
                    <tr key={item.title}>
                      <td
                        className={clsx("border border-slate-300", {
                          "font-bold": item.bold,
                        })}
                        style={{ padding: "0.5rem" }}
                      >
                        {item.title}
                      </td>
                      <td
                        className={clsx("border border-slate-300 text-center", {
                          "font-bold": item.bold,
                        })}
                      >
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
          <div className="col-span-1">
            <div
              className="bg-gray-50 w-full space-y-5"
              style={{ padding: "2rem 1rem" }}
            >
              <h2 className="text-black text-2xl">Ремонт кофемашин</h2>

              <nav>
                <ul className="list-none list-inside space-y-5">
                  {currentBrand?.title.includes("бытовых")
                    ? householdNavigation.map((page) => (
                        <li key={page.link}>
                          <Link
                            className="py-2 border-b border-gray-200"
                            href={page.link}
                          >
                            {page.title}
                          </Link>
                        </li>
                      ))
                    : builtInNavigation.map((page) => (
                        <li key={page.link}>
                          <Link
                            className="py-2 border-b border-gray-200"
                            href={page.link}
                          >
                            {page.title}
                          </Link>
                        </li>
                      ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <section className="w-full flex justify-center items-center py-20 bg-[#bc46c9] text-white">
          <div className="space-y-5 text-center mx-5 md:mx-0">
            <h5 className="text-[28px] md:text-[36px] max-w-[50rem] text-center">
              Гарантия лучшего предложения по ремонту кофемашин в Минске!
            </h5>
            <p>
              Мы проанализировали цены и условия всех мастерских в Минске и
              сделали для вас самое лучшее предложение!
            </p>
            <p>
              Оставьте телефон, для того что бы получить подробную консультацию.
              Заявка вас ни к чему не обязывает.
            </p>
            <div className="flex justify-center items-center">
              <button
                onClick={changeContactModalState}
                className="flex items-center text-white px-6 py-3 border-2 border-white hover:bg-white hover:text-[#bc46c9] rounded-md space-x-2"
              >
                <AiFillPhone className="text-[20px]" />
                <p>Оставить заявку</p>
              </button>
            </div>
          </div>
        </section>
      </main>
    </LayoutWrapper>
  );
};

export default HouseholdBrandTemplate;
