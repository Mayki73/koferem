import React, { useState } from "react";
import { FaMoneyBill, FaUserShield, FaGift } from "react-icons/fa";
import LayoutWrapper from "../../../../components/LayoutWrapper";
import Image from "../../../../components/Image";
import Button from "../../../../components/Form/Button";
import clsx from "clsx";
import { AiFillPhone } from "react-icons/ai";
import ContactModal from "../../../../components/ContactModal";
import Link from "next/link";
import Brands from "../../../../data/brands.json";
import { notFound, usePathname } from "next/navigation";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import * as yup from "yup";
import { GetStaticPaths, GetStaticProps } from "next";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/constants/query-client";
import PromoContactForm from "@/components/PromoContactForm";
import "../../../../app/globals.css";
import "../../../../styles/list.css";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Form/Input";
import { useSendEmail } from "@/services/request.service";
import toast, { Toaster } from "react-hot-toast";
import { IContact } from "@/models/contact.model";
import { yupResolver } from "@hookform/resolvers/yup";

const priceList = [
  {
    title: "Диагностика кофемашины",
    price: "0 рублей",
    bold: true,
  },
  {
    title: "Забрать кофемашину",
    price: "0 рублей",
    bold: true,
  },
  {
    title: "Привезти кофемашину",
    price: "0 рублей",
    bold: true,
  },
  {
    title: "Кофемашина выдает ошибку",
    price: "от 30 рублей",
    bold: false,
  },
  {
    title: "Нет пара",
    price: "от 35 рублей",
    bold: false,
  },
  {
    title: "Не включается",
    price: "от 30 рублей",
    bold: false,
  },
  {
    title: "Не подает воду",
    price: "от 35 рублей",
    bold: false,
  },
  {
    title: "Не мелет кофе",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Не греет воду",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Не наливает кофе",
    price: "от 30 рублей",
    bold: false,
  },
  {
    title: "Не делает пену",
    price: "от 35 рублей",
    bold: false,
  },
  {
    title: "Плохо течет кофе",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Кофе течет в лоток отходов",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Странный звук в кофемашине",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Протекает (вода под кофемашиной)",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Кофе слишком холодный или горячий",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Не работают кнопки управления",
    price: "от 30 рублей",
    bold: false,
  },
  {
    title: "Горят индикаторы и не работает",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Медленно течет кофе",
    price: "от 40 рублей",
    bold: false,
  },
  {
    title: "Кофе слабый или невкусный",
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

const steps = [
  {
    id: 1,
    title: "Оформление заявки",
    description:
      "Вы можете оставить заявку на ремонт через наш сайт или по телефону.",
  },
  {
    id: 2,
    title: "Бесплатная диагностика",
    description:
      "Мастер проводит диагностику на дому или в нашем сервисном центре.",
  },
  {
    id: 3,
    title: "Расчёт стоимости",
    description:
      "После выявления причины поломки мы согласовываем стоимость и сроки ремонта.",
  },
  {
    id: 4,
    title: "Ремонт кофемашины",
    description:
      "Проводится ремонт с заменой необходимых деталей и проверка кофемашины на работоспособность.",
  },
  {
    id: 5,
    title: "Гарантия и выдача",
    description:
      "Вы получаете исправную кофемашину и гарантию до 1 года выполненные работы.",
  },
];

const advantages = [
  {
    id: 1,
    name: "Цена и качество",
    description:
      "Лучшие цены на ремонт кофемашин в Минске. Консультация специалиста при ремонте.",
    icon: FaMoneyBill,
  },
  {
    id: 2,
    name: "Профессионализм",
    description:
      "Более 14 лет опыт ремонта кофейных аппаратов Delonghi. Использование оригинальных запчастей и расходных материалов. Гарантия до 1 года.",
    icon: FaUserShield,
  },
  {
    id: 3,
    name: "Бонусы",
    description:
      "Бесплатный выезд мастера и диагностика проблем кофемашины. Предоставляем бесплатно подменную кофемашину на время ремонта. Скидка за размещение отзыва.",
    icon: FaGift,
  },
];

export const getStaticPaths = (async () => {
  const paths = Brands["page-templates"].map((brandItem: any) => {
    if (
      brandItem.title.includes("бытовых") ||
      brandItem.title.includes("DeLonghi")
    ) {
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
      currentBrand:
        Brands["page-templates"].find((brandItem: any) => {
          return brandItem.path === `household/${params?.brand}`;
        }) || null,
    },
  };
}) satisfies GetStaticProps;

const BuiltInBrandTemplate: React.FC = ({ currentBrand }: any) => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  const [open, setOpen] = React.useState(1);

  const {
    mutate: sendEmail,
    isSuccess,
    isPending,
  } = useSendEmail((data) => {
    setIsOpenContactModal(false);
    reset({
      name: "",
      phone: "",
    });
    toast.success("Ваше сообщение отправлено!");
  });

  const QuestionFormSchema = yup.object({
    name: yup.string().required("Поле обязательно для заполнения"),
    phone: yup.string().required("Поле обязательно для заполнения"),
  }) as yup.ObjectSchema<Partial<IContact>>;

  const useFormReturn = useForm<Partial<IContact>>({
    resolver: yupResolver(QuestionFormSchema),
  });

  const submitContactForm = (contact: any) => {
    sendEmail(contact);
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useFormReturn;

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const currentPath = usePathname();

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

  if (currentBrand === null) {
    notFound();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutWrapper
        title={currentBrand?.pageTitle}
        description={currentBrand?.pageDescription}
        url={`https://koferem.by/repair/${currentBrand?.path}/`}
      >
        <ContactModal
          isOpen={isOpenContactModal}
          setIsOpen={changeContactModalState}
        />
        <main>
          <Image
            wrapperClassName="absolute left-0 top-0 z-0 w-full"
            style={{
              filter: "brightness(0.5)",
              backgroundPosition: "100%",
              height: "32rem",
            }}
            alt={currentBrand?.title}
            imageName={currentBrand?.background}
          />
          <section
            className="relative max-w-6xl mx-5 md:mx-auto flex justify-start items-center"
            style={{ height: "24rem" }}
          >
            <div className="space-y-5">
              <h1 className="flex justify-center items-center w-full text-[30px] font-medium text-white text-center">
                {currentBrand?.title}
              </h1>

              {currentBrand.title.includes("DeLonghi") && (
                <div className="w-full flex justify-start">
                  <ul className="list-none space-y-2">
                    <li
                      key="diagnostic"
                      className="custom-list-item text-white"
                    >
                      <span className="decoration-solid">Диагностика</span>{" "}
                      кофемешины и{" "}
                      <span className="decoration-solid">оценка</span> ремонта{" "}
                      <span className="font-semibold">0 BYN</span>
                    </li>
                    <li key="delivery" className="custom-list-item text-white">
                      <span className="decoration-solid">Доставка</span>{" "}
                      кофемашины <span className="font-semibold">0 BYN</span>
                    </li>
                    <li key="masters" className="custom-list-item text-white">
                      <span className="decoration-solid">Выезд мастера</span> на
                      дом, офис, кафе или ресторан{" "}
                      <span className="font-semibold">0 BYN</span>
                    </li>
                    <li key="outgoing" className="custom-list-item text-white">
                      Выезд мастера в течении{" "}
                      <span className="font-semibold">60 минут</span>
                    </li>
                    <li key="repair" className="custom-list-item text-white">
                      Ремонт кофемашины {currentBrand?.brand_name}{" "}
                      <span className="font-semibold">день в день</span>
                    </li>
                    <li key="repair" className="custom-list-item text-white">
                      Гарантия{" "}
                      <span className="font-semibold">от 6 месяцев</span>
                    </li>
                    <li
                      key="diagnostic"
                      className="custom-list-item text-white"
                    >
                      Принимаем заявки{" "}
                      <span className="font-semibold">
                        круглосуточно и без выходных
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {currentBrand.title.includes("DeLonghi") && (
                <div className="flex justify-start">
                  <Button
                    onClick={changeContactModalState}
                    className="text-white"
                  >
                    Рассчитать стоимость
                  </Button>
                </div>
              )}
            </div>
          </section>

          <div
            className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-5 md:mx-auto text-[#4d4d4d] text-base md:text-lg my-10"
            style={{ gap: "2rem" }}
          >
            <section className="col-span-2 max-w-6xl md:mx-auto text-[#4d4d4d] my-10 text-base md:text-lg space-y-10">
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

              <p>
                * Окончательную цену ремонта определяет мастер, исходя из
                сложности поломки и квалификационного опыта.
              </p>
            </section>
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
                              className={`py-2 border-b border-gray-200 ${
                                currentPath === page.link
                                  ? "text-[#bc46c9]"
                                  : ""
                              }`}
                              href={page.link}
                            >
                              {page.title}
                            </Link>
                          </li>
                        ))
                      : builtInNavigation.map((page) => (
                          <li key={page.link}>
                            <Link
                              className={`py-2 border-b border-gray-200 ${
                                currentPath === page.link
                                  ? "text-[#bc46c9]"
                                  : ""
                              }`}
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

            <section className="col-span-2 text-[#4d4d4d] text-base md:text-lg space-y-10">
              <PromoContactForm />
            </section>

            <div style={{ gridColumn: "span 2 / span 2" }}>
              {currentBrand?.sections.map((section: any, index: number) => {
                return (
                  <>
                    {index === 0 && section.header.includes("Delonghi") && (
                      <div className="space-y-12 pb-12 md:pb-20">
                        <h3 className="text-[30px] md:text-[36px] text-black font-semibold text-center tracking-wide">
                          Этапы работы
                        </h3>

                        <div className="space-y-4">
                          {/* First Row: Steps 1 and 2 */}
                          <ul className="list-none flex flex-col md:flex-row items-stretch md:space-x-4 space-y-6 md:space-y-0">
                            {steps.slice(0, 2).map((item) => (
                              <li
                                key={item.id}
                                className="flex-1 bg-gradient-to-r from-[#a742ae] to-[#bc46c9] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                              >
                                <div className="flex items-center space-x-4">
                                  <p className="w-12 h-12 flex items-center justify-center rounded-full text-2xl text-white bg-[#bc46c9] font-bold shadow-md">
                                    {item.id}
                                  </p>
                                  <p className="text-white text-lg md:text-xl font-semibold">
                                    {item.title}
                                  </p>
                                </div>
                                <p className="mt-4 text-sm md:text-base text-white leading-relaxed">
                                  {item.description}
                                </p>
                              </li>
                            ))}
                          </ul>

                          {/* Second Row: Steps 3 and beyond */}
                          <ul className="list-none flex flex-col md:flex-row items-stretch md:space-x-4 space-y-6 md:space-y-0">
                            {steps.slice(2).map((item) => (
                              <li
                                key={item.id}
                                className="flex-1 bg-gradient-to-r from-[#a742ae] to-[#bc46c9] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                              >
                                <div className="flex items-center space-x-4">
                                  <p className="w-12 h-12 flex items-center justify-center rounded-full text-2xl text-white bg-[#bc46c9] font-bold shadow-md">
                                    {item.id}
                                  </p>
                                  <p className="text-white text-lg md:text-xl font-semibold">
                                    {item.title}
                                  </p>
                                </div>
                                <p className="mt-4 text-sm md:text-base text-white leading-relaxed">
                                  {item.description}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {index === 0 && (
                      <div className="relative w-full py-10 px-6">
                        <div className="relative space-y-7 z-10">
                          <h3 className="text-[36px] text-black leading-10">
                            Кофемашина на подмену
                          </h3>
                          <p className="pt-4">
                            Мы понимаем, что к комфорту привыкаешь быстро.
                            Поэтому предлагаем временную замену кофемашины на
                            период ремонта вашей.
                          </p>
                          <p className="font-medium">Стоимость — 0 рублей</p>
                          <Button
                            onClick={changeContactModalState}
                            className="text-white"
                          >
                            Вызвать мастера
                          </Button>
                          <p>
                            Обычно ремонт кофемашин занимает не более 2 дней, и
                            все это время вы сможете пользоваться
                            предоставленной кофемашиной абсолютно бесплатно!
                          </p>
                        </div>
                        <Image
                          wrapperClassName="absolute left-0 top-0 z-0 h-full w-full"
                          alt={currentBrand?.title}
                          imageName="replacement-bg.png"
                          imageClassName="h-full"
                        />
                      </div>
                    )}
                    {index === 2 && (
                      <div
                        style={{
                          background: `url(/bg-contact.jpeg)`,
                          backgroundSize: "cover",
                        }}
                        className="py-14 px-6 mb-10 space-y-6 w-full flex flex-col justify-center items-center text-center relative"
                      >
                        <div className="absolute w-full h-full top-0 bg-black/30 z-[0] backdrop-blur-sm" />
                        <p className="text-[24px] md:text-[28px] font-semibold text-white leading-10 z-1 relative">
                          Закажите беплатную диагностику
                        </p>

                        <p className="text-center text-white z-1 relative">
                          Наши специалисты всегда готовы проконсультировать Вас
                          по услугам, срокам и стоимости ремонта. Оставьте свой
                          телефон, мы сами перезвоним Вам через 1 минуту.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-full relative z-1">
                          <div className="col-span-2">
                            <Controller
                              name="name"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <Input
                                  onChange={onChange}
                                  value={value}
                                  placeholder="Ваше имя*"
                                  error={Boolean(errors.name?.message)}
                                  helperText={errors.name?.message}
                                />
                              )}
                            />
                          </div>
                          <div className="col-span-2">
                            <Controller
                              name="phone"
                              control={control}
                              render={({ field: { onChange, value } }) => (
                                <Input
                                  value={value}
                                  onChange={onChange}
                                  mask="+375 (99) 999-99-99"
                                  maskChar=" "
                                  placeholder="+375 (__) ___-__-__"
                                  error={Boolean(errors.phone?.message)}
                                  helperText={errors.phone?.message}
                                />
                              )}
                            />
                          </div>

                          <Button
                            className="text-white"
                            onClick={handleSubmit(submitContactForm)}
                          >
                            Отправить
                          </Button>
                        </div>
                      </div>
                    )}
                    {index === 2 &&
                      currentBrand?.sections[index - 1].header.includes(
                        "Delonghi"
                      ) && (
                        <div className="space-y-12 pb-12 md:pb-20">
                          <h2 className="text-[30px] md:text-[36px] font-semibold text-black leading-10">
                            Почему нам доверяют ремонт и обслуживание кофемашин
                            Delonghi
                          </h2>

                          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {advantages.map((item) => (
                              <li
                                key={item.id}
                                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                              >
                                <div className="flex flex-col items-center space-y-2">
                                  <item.icon className="w-14 h-14 text-[#bc46c9]" />
                                  <p className="text-xl font-semibold text-black text-center">
                                    {item.name}
                                  </p>
                                </div>

                                <div className="text-center space-y-4 w-full">
                                  <div className="bg-[#bc46c9] h-1 w-16 mx-auto rounded-full"></div>
                                  <p className="text-base text-gray-700">
                                    {item.description}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {section?.isFaq &&
                      section.header.includes(
                        "Вопросы специалисту по ремонту кофемашин"
                      ) && (
                        <section
                          key={index}
                          className="space-y-6"
                          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
                        >
                          <h2 className="text-[28px] text-black leading-10">
                            {section.header}
                          </h2>
                          <p>{section.description}</p>

                          <ul className="list-none space-y-4">
                            {section?.faqs?.map((item: any) => (
                              <Accordion
                                key={item.id}
                                open={open === item.id}
                                placeholder=""
                              >
                                <AccordionHeader
                                  placeholder=""
                                  onClick={() => handleOpen(item.id)}
                                >
                                  {item.question}
                                </AccordionHeader>
                                <AccordionBody>{item.answer}</AccordionBody>
                              </Accordion>
                            ))}
                          </ul>

                          <p>
                            Мы готовы помочь вам с любыми проблемами, связанными
                            с вашими кофемашинами Delonghi. Обратитесь в наш
                            сервисный центр в Минске для профессионального и
                            качественного ремонта кофейного оборудования!
                          </p>
                        </section>
                      )}
                    {!section?.isFaq && (
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
                            {section.list.map((item: any) => (
                              <li key={item} className="space-y-2">
                                <span className="font-medium text-lg">
                                  {item?.title || item}
                                </span>
                                <p className="not-italic">
                                  {item?.description || ""}
                                </p>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section?.isTable && (
                          <table className="border-collapse border border-slate-400 w-full">
                            <thead className="text-left w-full">
                              <tr className="text-black text-lg text-left">
                                <th className="p-4 border border-slate-300">
                                  Категория
                                </th>
                                <th className="p-4 border border-slate-300 text-center">
                                  Модель
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {section?.table?.map((item: any) => (
                                <tr key={item?.id}>
                                  <td
                                    className={clsx("border border-slate-300", {
                                      "font-bold": item?.bold,
                                    })}
                                    style={{ padding: "0.5rem" }}
                                  >
                                    {item?.name}
                                  </td>
                                  <td
                                    className={clsx(
                                      "border border-slate-300 text-center",
                                      {
                                        "font-bold": item?.bold,
                                      }
                                    )}
                                  >
                                    {item?.value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                        {section?.image && (
                          <Image
                            alt={currentBrand?.title}
                            imageName={section.image}
                            imageClassName={"h-full"}
                          />
                        )}
                        {section?.postscription && (
                          <p>{section.postscription}</p>
                        )}
                      </section>
                    )}
                  </>
                );
              })}
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
                Оставьте телефон, для того что бы получить подробную
                консультацию. Заявка вас ни к чему не обязывает.
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
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            className: "",
            style: {
              borderLeft: "5  px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
      </LayoutWrapper>
    </QueryClientProvider>
  );
};

export default BuiltInBrandTemplate;
