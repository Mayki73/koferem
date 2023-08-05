import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Image from "../components/Image";
import { Link } from "gatsby";
import Button from "../components/Form/Button";
import clsx from "clsx";
import { AiFillPhone } from "react-icons/ai";

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

const navigation = [
  { title: "Ремонт Delonghi", link: "/repair/delonghi" },
  {
    title: "Ремонт Saeco",
    link: "/repair/saeco",
  },
  {
    title: "Ремонт Siemens",
    link: "/repair/siemens",
  },
  {
    title: "Ремонт Krups",
    link: "/repair/krups",
  },
  {
    title: "Ремонт Jura",
    link: "/repair/jura",
  },
  {
    title: "Ремонт Philips",
    link: "/repair/philips",
  },
  {
    title: "Ремонт Melitta",
    link: "/repair/melitta",
  },
  {
    title: "Ремонт Gaggia",
    link: "/repair/gaggia",
  },
  {
    title: "Ремонт Vitek",
    link: "/repair/vitek",
  },
];

const BrandTemplate: React.FC = ({ pageContext }: any) => {
  return (
    <LayoutWrapper>
      <main>
        <Image
          wrapperClassName="absolute left-0 top-0 z-0 h-80 w-full"
          style={{
            filter: "brightness(0.5)",
            backgroundPosition: "50% 20%",
          }}
          alt={pageContext.brand.title}
          imageName={pageContext.brand.background}
        />
        <section
          className="relative max-w-6xl mx-5 md:mx-auto flex justify-center items-center"
          style={{ height: "14rem" }}
        >
          <div className="space-y-5">
            <h1 className="flex justify-center items-center w-full text-[30px] font-medium text-white text-center">
              {pageContext.brand.title}
            </h1>
            <div className="flex justify-center">
              <Button className="text-white">Рассчитать стоимость</Button>
            </div>
          </div>
        </section>
        <div
          className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-5 md:mx-auto text-[#4d4d4d] text-base md:text-lg my-10"
          style={{ gap: "2rem" }}
        >
          <div style={{ gridColumn: "span 2 / span 2" }}>
            {pageContext.brand.sections.map((section: any, index: number) => {
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
                      alt={pageContext.brand.title}
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
                <Button className="text-white">Вызвать мастера</Button>
                <p>
                  Обычно ремонт кофейных машин проходит не более 2 дней. Все
                  время вы пользуетесь кофемашиной бесплатно!
                </p>
              </div>
              <Image
                wrapperClassName="absolute left-0 top-0 z-0 h-full w-full"
                alt={pageContext.brand.title}
                imageName="replacement-bg.png"
                imageClassName="h-full"
              />
            </div>

            <section className="max-w-6xl md:mx-auto text-[#4d4d4d] my-10 text-base md:text-lg space-y-10">
              <h4
                className="text-[30px] text-black leading-10"
                style={{ lineHeight: "1.rem" }}
              >
                Цены на ремонт кофемашин «{pageContext.brand.brand_name}»
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
                  {navigation.map((page) => (
                    <li key={page.link}>
                      <Link
                        className="py-2 border-b border-gray-200"
                        activeClassName="text-[#c9a246]"
                        to={page.link}
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
        <section className="w-full flex justify-center items-center py-20 bg-[#c9a246] text-white">
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
              <button className="flex items-center text-white px-6 py-3 border-2 border-white hover:bg-white hover:text-[#c9a246] rounded-md space-x-2">
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

export default BrandTemplate;
