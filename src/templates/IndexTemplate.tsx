import React, { useEffect, useState } from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { AiFillPhone } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { PiSealCheckLight } from "react-icons/pi";
import { LuClock10 } from "react-icons/lu";
import LayoutWrapper from "../components/LayoutWrapper";
import ReplacementBackground from "../images/replacement-bg.png";
import MaintenanceBackground from "../images/maintenance-bg.png";
import GiftBackground from "../images/gift-bg.png";
import KofeBackground from "../images/kofe-bg.png";
import "../styles/list.css";
import Button from "../components/Form/Button";
import Image from "../components/Image";
import LogoCarousel from "../components/LogoCarousel";
import StartModal from "../components/StartModal";
import ContactModal from "../components/ContactModal";

const IndexPage: React.FC<PageProps> = ({ pageContext }: any) => {
  const [isOpenStartModal, setIsOpenStartModal] = useState(false);
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpenStartModal(true), 30000);
  }, []);

  const changeModalState = () => {
    setIsOpenStartModal((prev) => !prev);
  };

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

  return (
    <LayoutWrapper
      title="Ремонт кофемашин и кофеварок в Минске | Обслуживание кофемашин"
      description="Сервисный центр KofeRem оказывает услуги по ремонту кофемашин и кофеварок в Минске. Обслуживание и ремонт автоматических, рожковых, профессиональных кофемашин Delonghi, Saeco, Gaggia, Jura, Krups, Bosch, AEG, Bork и др. Гарантия."
    >
      <StartModal isOpen={isOpenStartModal} setIsOpen={changeModalState} />
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={changeContactModalState}
      />
      <main>
        <Image
          imageName="main_banner.png"
          wrapperClassName="absolute left-0 top-0 w-full md:h-[90vh] object-cover z-0 bg-black"
          imageClassName="h-[90vh] object-cover object-center"
          alt="top banner"
          style={{ filter: "brightness(0.5)" }}
        />
        <section className="relative max-w-6xl mx-5 md:mx-auto flex items-center h-[77vh]">
          <div className="space-y-3 md:space-y-5">
            <h1 className="text-[26px] md:text-[50px] text-white">
              Ремонт кофемашин за 48 часов
            </h1>
            <ul className="text-white list-none space-y-1.5 md:space-y-3 text-[16px] md:text-base">
              <li key="free delivery" className="custom-list-item">
                Бесплатная доставка в мастерскую и обратно по Минску
              </li>
              <li key="payment after repair" className="custom-list-item">
                Оплата только за отремонтированную кофемашину
              </li>
              <li key="high skills master" className="custom-list-item">
                Квалифицированные и опытные инженеры
              </li>
              <li key="all officially" className="custom-list-item">
                Работаем с юридическими и физическими лицами
              </li>
              <li key="24/7" className="custom-list-item">
                Круглосуточно и без выходных
              </li>
            </ul>

            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 pt-10">
              <Link
                to="/repair"
                className="text-white w-max bg-[#c9a246] rounded-md px-6 py-3 hover:bg-[#a3802c]"
              >
                Наши услуги
              </Link>
              <button
                onClick={changeContactModalState}
                className="flex w-max items-center px-6 py-3 border-2 border-[#c9a246] hover:bg-[#c9a246] rounded-md space-x-2"
              >
                <AiFillPhone className="text-[20px] text-white" />
                <p className="text-white">Заказать звонок</p>
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-10 py-32 max-w-6xl mx-5 md:mx-auto border-b-2 border-gray-200">
          <h2 className="text-[30px] text-center">
            Ремонт кофемашин любой сложности
          </h2>

          <ul className="list-none list-inside h-20 w-full">
            <LogoCarousel speed={17} direction="right">
              {pageContext.brands.map((brand: any) => (
                <a
                  key={brand.brand_name}
                  href={`/repair/${brand.path.toLowerCase()}`}
                >
                  <Image
                    imageName={brand.logo}
                    alt={brand.title}
                    imageClassName="mx-20 w-96 h-[8rem] object-contain object-center"
                    wrapperClassName="w-96"
                  />
                </a>
              ))}
            </LogoCarousel>
          </ul>
        </section>

        <section className="space-y-10 py-14 md:py-20 max-w-6xl mx-5 md:mx-auto border-b border-gray-200 text-[#4d4d4d] text-base md:text-lg">
          <h3 className="text-[30px] text-center text-black">
            Как работает сервисный центр
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 leading-7">
            <div className="p-5 border-b md:border-b-0 md:border-r border-gray-200 space-y-5">
              <p className="text-xl text-black">Оставьте заявку</p>
              <p>
                Свяжитесь с нами по форме на сайте или по указанному номеру
                телефона
              </p>
              <p className="text-xl text-[#c9a246]">
                <a href="tel:375296995069">+375 (29) 699-50-69</a>
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-gray-200 space-y-5">
              <p className="text-xl text-black">Диагностика</p>
              <p>
                Согласуем время приезда курьера, заберем кофемашину, проведем
                диагностику бесплатно. Вышлем фотоотчёт.
              </p>
            </div>

            <div className="p-5 border-b md:border-b-0 md:border-r border-gray-200 space-y-5">
              <p className="text-xl text-black">Ремонт</p>
              <p>
                Отремонтируем за 48 часов. Дадим гарантию на оригинальные
                запчасти и работу 1 год.
              </p>
            </div>

            <div className="p-5 border-gray-200 space-y-5">
              <p className="text-xl text-black">Доставка</p>
              <p>
                Мы бесплатно приедем к вам за кофемашиной, выполним ремонт
                кофеварки за 2 дня и привезем обратно.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button onClick={changeContactModalState} className="text-white">
              Заказать звонок
            </Button>
          </div>
        </section>

        <section className="space-y-10 py-14 md:py-20 max-w-5xl mx-5 md:mx-auto">
          <h4 className="text-[30px] text-center">
            Цены на ремонт кофемашин и кофеварок
          </h4>

          <div className="flex justify-between">
            <div className="space-y-6 md:space-y-24 my-0 md:my-auto pb-16 font-bold text-[8px] md:text-base">
              <p className="text-center max-w-[5rem] md:max-w-[10rem]">
                Кофемашина не включается (от 30 рублей)
              </p>
              <p className="text-center max-w-[5rem] md:max-w-[10rem]">
                Кофемашина не нагревает воду (от 40 рублей)
              </p>
              <p className="text-center max-w-[5rem] md:max-w-[10rem]">
                Кофемашина протекает (от 40 рублей)
              </p>
            </div>
            <Image
              imageName="coffee1.png"
              wrapperClassName="w-full h-full"
              imageClassName="w-1/2 h-full md:w-full"
              alt="Кофемашина DeLonghi"
            />
            <div className="space-y-8 md:space-y-32 pb-12 my-0 md:my-auto font-bold text-[8px] md:text-base">
              <p className="text-center max-w-[5rem] md:max-w-[10rem]">
                Горят индикаторы, выдает ошибку (от 40 рублей)
              </p>
              <p className="text-center max-w-[5rem] md:max-w-[10rem]">
                Нет пара (от 35 рублей)
              </p>
              <p className="text-center max-w-[5rem] md:max-w-[10rem]">
                Кофемашина не наливает кофе (от 35 рублей)
              </p>
            </div>
          </div>

          <p className="text-center font-bold text-xl">
            Устраним другие неисправности любой сложности, не указанные выше.
          </p>
          <div className="flex justify-center">
            <Button onClick={changeContactModalState} className="text-white">
              Вызвать мастера
            </Button>
          </div>
        </section>

        <section
          className="w-full py-20"
          style={{
            backgroundImage: `url(${ReplacementBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="space-y-10 max-w-6xl mx-5 md:mx-auto text-[#727272] leading-7">
            <h5 className="text-[30px] text-black">Кофемашина на подмену</h5>
            <p className="max-w-[40rem]">
              Мы знаем, что к хорошему привыкаешь быстро. Предлагаем подменить
              кофемашину, пока ваша в ремонте
            </p>
            <p className="font-bold max-w-[40rem] text-black">
              Стоимость — 0 рублей
            </p>
            <Button onClick={changeContactModalState} className="text-white">
              Вызвать мастера
            </Button>
            <p className="max-w-[40rem]">
              Обычно ремонт кофейных машин проходит не более 2 дней. Все время
              вы пользуетесь кофемашиной бесплатно!
            </p>
          </div>
        </section>

        <section
          className="w-full py-20"
          style={{
            backgroundImage: `url(${MaintenanceBackground})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right -350px center",
          }}
        >
          <div className="space-y-7 max-w-6xl mx-5 md:mx-auto text-[#727272] leading-7">
            <h6 className="text-[30px] text-black">
              Зачем вам сервисное обслуживание кофемашин
            </h6>
            <p className="max-w-[40rem]">
              Профессиональное сервисное обслуживание кофемашины - это переборка
              всех действующих агрегатов до заводского состояния с заменой всех
              уплотнителей, чисткой от накипи и кофейных масел. Таким образом вы
              исключаете дорогостоящие поломки в кофемашине.
            </p>

            <p className="text-xl font-medium text-black">
              Серьёзные неисправности кофемашин:
            </p>
            <ul className="list-none space-y-3">
              <li key="noize" className="second-custom-list-item">
                Нехарактерные шумы
              </li>
              <li key="cold coffee" className="second-custom-list-item">
                Холодный кофе
              </li>
              <li key="strong" className="second-custom-list-item">
                Грубый помол зёрен
              </li>
              <li key="a leak" className="second-custom-list-item">
                Протекает
              </li>
            </ul>

            <p className="text-xl font-bold pt-5 text-black">
              Не пытайтесь починить самостоятельно
            </p>
            <p className="max-w-[40rem]">
              Кофейный аппарат — сложное электронное устройство, потому ремонт и
              обслуживание кофемашин должны производиться только
              профессионалами.
            </p>
            <p className="max-w-[40rem]">
              Вы можете повредить технику, после чего гарантийный ремонт
              кофемашин будет для вас уже недоступен.
            </p>
            <Button onClick={changeContactModalState} className="text-white">
              Узнать стоимость сервисного обслуживания
            </Button>
          </div>
        </section>

        <section
          className="w-full py-14 md:py-20"
          style={{
            backgroundImage: `url(${GiftBackground})`,
            backgroundSize: "cover",
            padding: "80px 0",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        >
          <div className="space-y-7 max-w-6xl mx-5 md:mx-auto text-[#727272]">
            <h6 className="text-[36px] text-black">
              Зерновой кофе — в подарок!
            </h6>
            <p className="max-w-[36rem]">
              Оформите заявку на ремонт кофемашины и получите свежеобжаренный
              зерновой кофе в подарок!
            </p>
            <Button onClick={changeContactModalState} className="text-white">
              Оставить заявку
            </Button>
          </div>
        </section>

        <section
          className="w-full py-14 md:py-20"
          style={{
            backgroundImage: `url(${KofeBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            padding: "145px 0 115px",
            zIndex: 1,
          }}
        >
          <div className="space-y-7 max-w-6xl mx-5 md:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-10 py-10 md:py-20 flex flex-col justify-center items-center border border-gray-200 space-y-5 hover:bg-[#c9a246] hover:border-[#c9a246]">
                <MdOutlineManageAccounts className="text-[7rem] text-white" />
                <p className="text-xl text-white font-medium text-center">
                  Персонал
                </p>
                <p className="text-center text-white">
                  У нас работают квалифицированные специалисты со стажем работы
                  в кофейной индустрии не менее 5 лет
                </p>
              </div>

              <div className="p-10 py-10 md:py-20 flex flex-col justify-center items-center border border-gray-200 space-y-5 hover:bg-[#c9a246] hover:border-[#c9a246]">
                <PiSealCheckLight className="text-[7rem] text-white" />
                <p className="text-xl text-white font-medium text-center">
                  Гарантия
                </p>
                <p className="text-center text-white">
                  Вы получаете рабочую кофемашину и продолжаете наслаждаться
                  кофейными напитками. Гарантия на работу и запчасти 1 год.
                </p>
              </div>

              <div className="p-10 py-10 md:py-20 flex flex-col justify-center items-center border border-gray-200 space-y-5 hover:bg-[#c9a246] hover:border-[#c9a246]">
                <LuClock10 className="text-[7rem] text-white" />
                <p className="text-xl text-white font-medium text-center">
                  Цена
                </p>
                <p className="text-center text-white">
                  Наш выбор - политика разумных цен. Мы имеем гибкую систему
                  дисконтных карт и сезонных скидок для наших клиентов
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-[#c9a246]">
          <div className="flex flex-col justify-center items-center space-y-7 max-w-6xl mx-5 md:mx-auto text-white">
            <p className="text-[28px] md:text-[36px] max-w-[50rem] text-center">
              Гарантия лучшего предложения по ремонту кофемашин в Минске!
            </p>
            <p>
              Мы проанализировали цены и условия всех мастерских в Минске и
              сделали для вас самое лучшее предложение!
            </p>
            <p className="pt-4">
              Оставьте телефон, для того что бы получить подробную консультацию.
              Заявка вас ни к чему не обязывает.
            </p>

            <div className="flex justify-center items-center">
              <button
                onClick={changeContactModalState}
                className="flex items-center text-white px-6 py-3 border-2 border-white hover:bg-white hover:text-[#c9a246] rounded-md space-x-2"
              >
                <AiFillPhone className="text-[20px]" />
                <p>Заказать звонок</p>
              </button>
            </div>
          </div>
        </section>
      </main>
    </LayoutWrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
