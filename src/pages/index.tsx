import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { AiFillPhone } from "react-icons/ai";
import { MdOutlineManageAccounts, MdPriceCheck } from "react-icons/md";
import { PiSealCheckLight } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import LayoutWrapper from "../components/LayoutWrapper";
import Button from "../components/Form/Button";
import Image from "../components/Image";
import LogoCarousel from "../components/LogoCarousel";
import StartModal from "../components/StartModal";
import ContactModal from "../components/ContactModal";
import Brands from "../data/brands.json";
import "../styles/list.css";
import "../app/globals.css";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";
import PromoContactForm from "@/components/PromoContactForm";
import { Controller, useForm } from "react-hook-form";
import Input from "@/components/Form/Input";
import { useSendEmail } from "@/services/request.service";
import toast from "react-hot-toast";
import { IContact } from "@/models/contact.model";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

const reviews = [
  {
    id: "1",
    name: "Ирина С.",
    star: "5",
    review:
      "Очень довольна работой сервисного центра. Моя кофемашина DeLonghi перестала нагревать воду. Мастер быстро приехал, провел диагностику и устранил неисправность. Теперь моя кофемашина работает как новая! Большое спасибо за оперативность и качественный ремонт.",
  },
  {
    id: "2",
    name: "Антон К.",
    star: "5",
    review:
      "Спасибо за отличную работу! Моя Saeco сломалась прямо перед важной встречей в офисе. Специалисты приехали очень быстро, все починили прямо на месте. Цена за ремонт оказалась вполне приемлемой. Теперь всегда буду обращаться только сюда.",
  },
  {
    id: "3",
    name: "Екатерина П.",
    star: "5",
    review:
      "Долго искала надежный сервисный центр для ремонта своей кофемашины Jura. По рекомендации друзей обратилась сюда и не пожалела. Мастер подробно объяснил, в чем проблема, и быстро все починил. Приятно удивила цена за ремонт. Спасибо!",
  },
  {
    id: "4",
    name: "Олег М.",
    star: "5",
    review:
      "Отличный сервис! Сломалась кофемашина Bosch, думал уже покупать новую. Но решил попробовать отремонтировать. Очень понравился подход к клиенту и качество работы. Мастера профессиональные и вежливые. Рекомендую всем!",
  },
  {
    id: "5",
    name: "Мария Т.",
    star: "5",
    review:
      "Хочу выразить благодарность всему коллективу сервисного центра. Ремонтировала здесь свою кофемашину. Все сделали быстро и качественно, предоставили гарантию на выполненные работы. Буду рекомендовать вас своим знакомым.",
  },
];

const advantages = [
  {
    id: "1",
    title: "Профессиональный ремонт кофемашин всех марок",
    description:
      "Мы осуществляем ремонт кофемашин различных марок, таких как DeLonghi, Saeco, Jura, Bosch и других. Наши специалисты имеют многолетний опыт работы и проходят регулярное обучение, чтобы быть в курсе всех новинок и особенностей различных моделей.",
    img: "/top-repair.svg",
  },
  {
    id: "2",
    title: "Выезд мастера на дом и офис",
    description:
      "Для вашего удобства мы предлагаем услугу выездного ремонта. Наш мастер по ремонту кофемашин приедет к вам домой или в офис, проведет диагностику и устранит неисправность на месте",
    img: "/transport.svg",
  },
  {
    id: "3",
    title: "Бесплатная диагностика при ремонте",
    description:
      "Мы проводим бесплатную диагностику при условии дальнейшего ремонта кофемашины у нас. В случае отказа от ремонта стоимость диагностики составит 20 BYN. Мы подробно объясним причину поломки и предложим оптимальное решение.",
    img: "/diagnostic.svg",
  },
  {
    id: "4",
    title: "Срочный ремонт в день обращения",
    description:
      "Наши мастера готовы выполнить срочный ремонт кофемашины в день обращения. В большинстве случаев ремонт занимает от 1 до 3 часов. Вы можете быть уверены, что ваша кофемашина быстро вернется в рабочее состояние.",
    img: "/fast-repair.svg",
  },
  {
    id: "5",
    title: "Гарантия на все виды работ",
    description:
      "Мы предоставляем гарантию на все виды выполненных работ и установленные запчасти. Гарантийный срок зависит от типа ремонта и составляет от 3 до 12 месяцев. Вы можете быть уверены в надежности и долговечности ремонта.",
    img: "/guarantee.svg",
  },
  {
    id: "6",
    title: "Использование оригинальных запчастей",
    description:
      "Мы используем только оригинальные запчасти для ремонта кофемашин. Это обеспечивает высокое качество и долговечность выполненных работ. ",
    img: "/details.svg",
  },
  {
    id: "7",
    title: "Доступные цены на ремонт и обслуживание",
    description:
      "Мы предлагаем конкурентоспособные цены на все виды услуг по ремонту и обслуживанию кофемашин. Мы гарантируем прозрачность и отсутствие скрытых платежей.",
    img: "/bestprice.svg",
  },
];

const typesOfMachine = [
  {
    id: "1",
    title: "Автоматические кофемашины",
    img: "/automatic.svg",
  },
  {
    id: "2",
    title: "Полуавтоматические кофемашины",
    img: "/semi-automatic.svg",
  },
  {
    id: "3",
    title: "Капсульные кофемашины",
    img: "/capsule.svg",
  },
  {
    id: "4",
    title: "Рожковые кофеварки",
    img: "/horn.svg",
  },
  {
    id: "5",
    title: "Профессиональные кофемашины",
    img: "/professional.svg",
  },
  {
    id: "6",
    title: "Кофемолки",
    img: "/grinder.svg",
  },
];

const howToApply = [
  {
    id: "1",
    title: "Прием заявки",
    description:
      "Оставьте заявку на нашем сайте или позвоните по указанному телефону. Мы уточним детали неисправности и согласуем удобное время для проведения диагностики.",
  },
  {
    id: "2",
    title: "Диагностика",
    description:
      "Наши мастера проводят тщательную диагностику кофемашины с использованием современного оборудования. Мы определяем причину поломки и составляем план ремонта.",
  },
  {
    id: "3",
    title: "Согласование стоимости",
    description:
      "После диагностики мы сообщаем точную стоимость ремонта. Если вас устраивает цена, мы приступаем к ремонту. В случае отказа от ремонта оплачивается только диагностика.",
  },
  {
    id: "4",
    title: "Ремонт",
    description:
      "Наши мастера проводят ремонт кофемашины, используя оригинальные запчасти и профессиональное оборудование. Мы устраняем любые неисправности, обеспечивая высокое качество работы.",
  },
  {
    id: "5",
    title: "Тестирование",
    description:
      "После завершения ремонта мы проводим тестирование кофемашины, чтобы убедиться в ее исправности и правильной работе. Вы получаете готовое к использованию устройство.",
  },
  {
    id: "6",
    title: "Гарантия",
    description:
      "Мы предоставляем гарантию на все виды выполненных работ и замененные запчасти. Вы можете быть уверены в надежности и долговечности нашего ремонта.",
  },
];

const issues = [
  {
    id: "1",
    title: "Не нагревает воду",
    description:
      "Если кофемашина не нагревает воду, это может быть связано с неисправностью нагревательного элемента или термостата. Мы проведем диагностику и замену необходимых деталей.",
    price: "от 40 рублей",
    icon: "/temperature.svg",
  },
  {
    id: "2",
    title: "Протекает",
    description:
      "Если ваша кофемашина протекает, возможно, повреждены уплотнительные кольца или шланги. Мы устраним утечку, заменив изношенные компоненты.",
    price: "от 40 рублей",
    icon: "/water-lose.svg",
  },
  {
    id: "3",
    title: "Не мелет кофе",
    description:
      "Если кофемашина не перемалывает кофе или делает это неправильно, проблема может быть в кофемолке или механизме подачи зерен. Мы проведем чистку и настройку кофемолки.",
    price: "от 40 рублей",
    icon: "/grinder-issue.svg",
  },
  {
    id: "4",
    title: "Не наливает кофе",
    description:
      "Если кофемашина не подает воду или подает ее недостаточно, возможно, засорены шланги или насос. Мы проведем чистку и замену необходимых деталей.",
    price: "от 35 рублей",
    icon: "/glass-issue.svg",
  },
  {
    id: "5",
    title: "Выдает ошибки",
    description:
      "Если кофемашина выдает ошибки или не выполняет запрограммированные функции, проблема может быть в электронной плате или программном обеспечении. Мы проведем диагностику и ремонт электронной системы.",
    price: "от 30 рублей",
    icon: "/errors.svg",
  },
];

const additionalIssues = [
  {
    id: "1",
    title: "Декальцинация и чистка",
    description:
      "Удаляем накипь и остатки кофейных масел (декофенация). Проводим чистку заварочного блока, гидросистемы, удаляем пробки кальция, делаем дезинфекцю. Это позволяет улучшить работу кофейного аппарата и продлит его срок службы.",
    price: "от 40 рублей",
    icon: "/cleaning.svg",
  },
  {
    id: "2",
    title: "Замена фильтров и уплотнительных колец",
    description:
      "Регулярная замена фильтров и уплотнительных колец обеспечивает надежную работу кофемашины и предотвращает утечки. Мы используем только оригинальные запчасти, что гарантирует высокое качество обслуживания.",
    price: "от 60 рублей",
    icon: "/filters.svg",
  },
  {
    id: "3",
    title: "Настройка и калибровка",
    description:
      "Проводим регулировку настроек для оптимизации работы кофемашины. Тестируем работу кофейного оборудования и проводим консультации.",
    price: "от 35 рублей",
    icon: "/settings.svg",
  },
];

const servicePrices = [
  {
    id: "1",
    title: "Замена прокладок, хомутов, скобок и колец",
    price: "35",
  },
  {
    id: "2",
    title: "Замена трубок",
    price: "40",
  },
  {
    id: "3",
    title: "Декальцинация",
    price: "30",
  },
  {
    id: "4",
    title: "Замена щёток электродвигателя",
    price: "50",
  },
  {
    id: "5",
    title: "Замена пароблока",
    price: "70",
  },
  {
    id: "6",
    title: "Ремонт помпы",
    price: "60",
  },
  {
    id: "7",
    title: "Замена жерновов",
    price: "80",
  },
  {
    id: "8",
    title: "Чистка от кофейных масел",
    price: "40",
  },
  {
    id: "9",
    title: "Замена термостата",
    price: "50",
  },
  {
    id: "10",
    title: "Ремонт двигателя кофемолки",
    price: "70",
  },
  {
    id: "11",
    title: "Замена датчиков",
    price: "60",
  },
  {
    id: "12",
    title: "Замена сальника заварного блока",
    price: "45",
  },
  {
    id: "13",
    title: "Очистка от накипи",
    price: "35",
  },
  {
    id: "14",
    title: "Ремонт кофемолки",
    price: "60",
  },
  {
    id: "15",
    title: "Ремонт насоса",
    price: "70",
  },
  {
    id: "16",
    title: "Ремонт блока управления",
    price: "100",
  },
  {
    id: "17",
    title: "Замена бойлера",
    price: "120",
  },
  {
    id: "18",
    title: "Комплексная профилактика",
    price: "80",
  },
  {
    id: "19",
    title: "Ремонт микровыключателя",
    price: "40",
  },
  {
    id: "20",
    title: "Ремонт заварного блока",
    price: "90",
  },
];

const faqs = [
  {
    id: "1",
    question: "Какие бренды кофемашин вы ремонтируете?",
    answer:
      "Мы ремонтируем кофемашины популярных брендов, таких как DeLonghi, Saeco, Jura, Bosch, Philips, Krups, Gaggia, Siemens, Melitta, Bork, Nivona, Nespresso и многие другие. Наши мастреа обладают опытом и знаниями для работы с устройствами любых марок.",
  },
  {
    id: "2",
    question: "Как долго длится ремонт кофемашины?",
    answer:
      "Время ремонта зависит от сложности проблемы и наличия необходимых запчастей. В большинстве случаев ремонт занимает от 1 до 3 дней. Срочные ремонты могут быть выполнены в течение нескольких часов.",
  },
  {
    id: "3",
    question: "Сколько стоит ремонт кофемашины?",
    answer:
      "Стоимость ремонта зависит от типа неисправности и модели кофемашины. Мы предоставляем предварительную диагностику и сообщаем точную стоимость ремонта перед началом работ. Примерные цены можно посмотреть в нашем прайс-листе.",
  },
  {
    id: "4",
    question: "Предоставляете ли вы гарантию на выполненные работы?",
    answer:
      "Да, мы предоставляем гарантию на все выполненные работы и установленные запчасти. Срок гарантии зависит от типа ремонта и составляет от 3 до 12 месяцев.",
  },
  {
    id: "5",
    question: "Можно ли вызвать мастера на дом или в офис?",
    answer:
      "Да, мы предлагаем услугу выездного сервиса. Наши мастера приедут к вам домой, в офис, кафе или ресторан для проведения диагностики и ремонта на месте. ",
  },
  {
    id: "6",
    question: "Как можно оплатить услуги?",
    answer:
      "Мы принимаем оплату наличными, банковскими картами и безналичными переводами. Оплата производится после завершения ремонта и проверки работы устройства.",
  },
  {
    id: "7",
    question: "Как часто нужно проводить техническое обслуживание кофемашины?",
    answer:
      "Рекомендуется проводить техническое обслуживание кофемашины не реже одного раза в полгода. Это включает чистку, декальцинацию и замену фильтров. Регулярное обслуживание помогает избежать серьезных поломок и продлить срок службы устройства.",
  },
  {
    id: "8",
    question: "Можно ли заказать запчасти для кофемашины отдельно?",
    answer:
      "Да, у нас можно приобрести оригинальные запчасти для различных моделей кофемашин. Для заказа запчастей свяжитесь с нашим менеджером или оставьте заявку на сайте.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const Main: React.FC = () => {
  const [isOpenStartModal, setIsOpenStartModal] = useState(false);
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    setTimeout(() => setIsOpenStartModal(true), 30000);
  }, []);

  const changeModalState = () => {
    setIsOpenStartModal((prev) => !prev);
  };

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

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
    toast.success(`Спасибо! Ваш заказ принят!
      
В ближайшее время с Вами свяжется оператор для подтверждения заказа.      
`);
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

  useEffect(() => {
    const { pathname } = router;

    // Check if the pathname has multiple slashes
    if (pathname.includes("//")) {
      // Remove extra slashes and redirect
      const newPathname = pathname.replace(/\/{2,}/g, "/");
      router.push(newPathname, undefined, { shallow: true });
    }
  }, [router]);

  return (
    <LayoutWrapper
      title="Ремонт кофемашин и кофеварок в Минске: на дому и в сервисном центре"
      description="⚡ Срочный ремонт кофемашин и кофеварок на дому дома или в сервисном центре в КофеРем. ⭐ Бесплатная доставка и диагностика. ⭐ Гарантия. ⭐ Работаем ежедневно"
      url="https://koferem.by/"
    >
      <StartModal isOpen={isOpenStartModal} setIsOpen={changeModalState} />
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={changeContactModalState}
      />
      <main>
        <Image
          imageName="main_banner.png"
          wrapperClassName="absolute left-0 top-0 w-full h-[93vh] md:h-[80vh] object-cover z-0 bg-black"
          imageClassName="h-[93vh] md:h-[80vh] object-cover object-center"
          alt="top banner"
          style={{ filter: "brightness(0.5)" }}
        />
        <section className="relative max-w-6xl mx-5 md:mx-auto flex items-center h-[75vh] md:h-[63vh]">
          <div className="space-y-3 md:space-y-5">
            <h1 className="text-[24px] md:text-[50px] text-white">
              Ремонт кофемашин в Минске за 24 часа
            </h1>
            <ul className="text-white list-none space-y-1.5 md:space-y-3">
              <li key="free delivery" className="custom-list-item">
                Выезд мастера на дом, офис, ресторан или кафе в течении 60 минут
              </li>
              <li key="payment after repair" className="custom-list-item">
                Бесплатная доставка в мастерскую и обратно по Минску
              </li>
              <li key="high skills master" className="custom-list-item">
                Работаем с юридическими и физическими лицами
              </li>
              <li key="all officially" className="custom-list-item">
                Круглосуточно и без выходных
              </li>
              <li key="24/7" className="custom-list-item">
                Диагностика в день обращения
              </li>
              <li key="original details" className="custom-list-item">
                Оригинальные запчасти
              </li>
            </ul>

            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 pt-10">
              <Link
                href="/repair"
                className="text-white w-max bg-[#bc46c9] rounded-md px-6 py-3 hover:bg-[#872d91]"
              >
                Наши услуги
              </Link>
              <button
                onClick={changeContactModalState}
                className="flex w-max items-center px-6 py-3 border-2 border-[#bc46c9] hover:bg-[#bc46c9] rounded-md space-x-2"
              >
                <AiFillPhone className="text-[20px] text-white" />
                <p className="text-white">Заказать звонок</p>
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-10 py-32 pb-0 max-w-6xl mx-5 md:mx-auto">
          <h2 className="text-[30px] text-center">
            Преимущества сервисного центра
          </h2>

          <p>
            Выполняем быстрый и качественный ремонт кофемашин любого бренда и
            любой модели
          </p>

          <ul className="list-none list-inside grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((item) => (
              <li key={item.id} className="flex">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col flex-1">
                  <div className="relative h-48 flex items-center justify-center p-6 bg-gray-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 flex-1">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-10 py-32 pb-0 max-w-6xl mx-5 md:mx-auto">
          <PromoContactForm />
        </section>

        <section className="space-y-10 py-32 max-w-6xl mx-5 md:mx-auto border-b-2 border-gray-200">
          <h2 className="text-[30px] text-center">
            Мы ремонтируем все типы кофемашин
          </h2>

          <p>
            Наш сервисный центр специализируется на ремонте и обслуживании всех
            типов кофемашин и кофеварок на дому и сервисном центре
          </p>

          <div className="overflow-x-auto pb-4">
            <ul className="flex space-x-6 w-max min-w-full px-4">
              {typesOfMachine.map((item) => (
                <li
                  key={item.id}
                  className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-48 flex items-center justify-center p-6 bg-gray-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-black mb-4 text-center">
                      {item.title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-10 py-14 md:py-20 max-w-6xl mx-5 md:mx-auto border-b border-gray-200 text-[#4d4d4d] text-base md:text-lg">
          <h3 className="text-[30px] text-center text-black">
            Как работает сервисный центр в Минске
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 leading-7">
            {howToApply.map((step, index) => (
              <div
                key={step.id}
                className={`p-5 border-b md:border-b-0 ${
                  index === 0 || index === 1 || index === 3 || index === 4
                    ? "border-r border-gray-200"
                    : ""
                } space-y-5`}
              >
                <p className="text-xl text-black">
                  {index + 1}. {step.title}
                </p>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={changeContactModalState} className="text-white">
              Оставить заявку
            </Button>
          </div>
        </section>

        <section className="space-y-10 py-32 max-w-6xl mx-5 md:mx-auto border-b-2 border-gray-200">
          <h2 className="text-[30px] text-center">
            Популярные марки кофемашин, которые мы ремонтируем
          </h2>

          <ul className="list-none list-inside h-20 w-full">
            <LogoCarousel speed={17} direction="right">
              {Brands["page-templates"].slice(0, 6)?.map((brand: any) => (
                <a
                  key={brand.brand_name}
                  href={`/repair/${brand.path.toLowerCase()}/`}
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

        <section className="space-y-10 py-32 pb-0 max-w-6xl mx-5 md:mx-auto">
          <h2 className="text-[30px] text-center">
            Какие поломки кофемашин мы исправляем
          </h2>

          <ul className="list-none list-inside grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {issues.map((issue) => (
              <li key={issue.id} className="flex">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col flex-1">
                  <div className="relative h-48 flex items-center justify-center p-6 bg-gray-100">
                    <img
                      src={issue.icon}
                      alt={issue.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {issue.title}
                    </h3>
                    <p className="text-gray-600 flex-1">{issue.description}</p>
                    <p className="text-[#bc46c9] font-bold mt-4">
                      {issue.price}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-10 py-32 pb-0 max-w-6xl mx-5 md:mx-auto">
          <div
            style={{
              background: `url(/bg-contact.jpeg)`,
              backgroundSize: "cover",
            }}
            className="py-14 px-6 mb-10 space-y-6 w-full flex flex-col justify-center items-center text-center relative"
          >
            <div className="absolute w-full h-full top-0 bg-black/30 z-[0] backdrop-blur-sm" />
            <p className="text-[24px] md:text-[28px] font-semibold text-white leading-10 z-1 relative">
              Закажите бесплатную диагностику
            </p>

            <p className="text-center text-white z-1 relative">
              Наши специалисты всегда готовы проконсультировать Вас по услугам,
              срокам и стоимости ремонта. Оставьте свой телефон, мы сами
              перезвоним Вам через 1 минуту.
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
        </section>

        <section className="space-y-10 py-14 md:py-20 max-w-5xl mx-5 md:mx-auto">
          <h2 className="text-[30px] text-center">
            Цены на услуги по ремонту кофемашин
          </h2>

          <p>
            Прайс-лист на замену комплектующих (в таблице указаны только самые
            популярные, по любой проблеме в работе кофемашины вы можете
            обратиться к нам)
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <table className="border-collapse border border-slate-400 w-full">
              <thead className="text-left w-full">
                <tr className="text-black text-lg text-left">
                  <th className="p-4 border border-slate-300">Услуга</th>
                  <th className="p-4 border border-slate-300 text-center">
                    Цена
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicePrices.slice(0, 10).map((item) => (
                  <tr key={item.title}>
                    <td
                      className={clsx("border border-slate-300 font-bold")}
                      style={{ padding: "0.5rem" }}
                    >
                      {item.title}
                    </td>
                    <td
                      className={clsx(
                        "border border-slate-300 text-center font-bold"
                      )}
                    >
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="border-collapse border border-slate-400 w-full">
              <thead className="text-left w-full">
                <tr className="text-black text-lg text-left">
                  <th className="p-4 border border-slate-300">Услуга</th>
                  <th className="p-4 border border-slate-300 text-center">
                    Цена
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicePrices.slice(10, 20).map((item) => (
                  <tr key={item.title}>
                    <td
                      className={clsx("border border-slate-300 font-bold")}
                      style={{ padding: "0.5rem" }}
                    >
                      {item.title}
                    </td>
                    <td
                      className={clsx(
                        "border border-slate-300 text-center font-bold"
                      )}
                    >
                      от {item.price} руб
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* <section className="space-y-10 py-14 md:py-20 max-w-5xl mx-5 md:mx-auto">
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
        </section> */}

        <section
          className="w-full py-20"
          style={{
            backgroundImage: `url(/replacement-bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="space-y-10 max-w-6xl mx-5 md:mx-auto text-[#727272] leading-7">
            <h5 className="text-[30px] text-black">Кофемашина на подмену</h5>
            <p className="max-w-[40rem]">
              Мы понимаем, что к комфорту привыкаешь быстро. Поэтому предлагаем
              временную замену кофемашины на период ремонта вашей.
            </p>
            <p className="font-bold max-w-[40rem] text-black">
              Стоимость — 0 BYN
            </p>
            <Button onClick={changeContactModalState} className="text-white">
              Вызвать мастера
            </Button>
            <p className="max-w-[40rem]">
              Обычно ремонт кофемашин занимает не более 2 дней, и все это время
              вы сможете пользоваться предоставленной кофемашиной абсолютно
              бесплатно!
            </p>
          </div>
        </section>

        <section
          className="w-full py-20"
          style={{
            backgroundImage: `url(/maintenance-bg.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right -350px center",
          }}
        >
          <div className="space-y-7 max-w-6xl mx-5 md:mx-auto text-[#727272] leading-7">
            <h6 className="text-[30px] text-black">
              Зачем вам сервисное обслуживание кофемашин
            </h6>

            <ul className="list-none space-y-6 py-10">
              <li key="noize" className="second-custom-list-item">
                <span className="font-bold">Продление срока службы</span>
                <br />
                <br />
                <p className="max-w-[600px]">
                  Регулярное техническое обслуживание кофемашины позволяет
                  значительно продлить её срок службы. Чистка, декальцинация и
                  замена фильтров помогают избежать большинства поломок и
                  обеспечивают бесперебойную работу устройства.
                </p>
              </li>
              <li key="cold coffee" className="second-custom-list-item">
                <span className="font-bold">Стабильное качество кофе</span>
                <br />
                <br />
                <p className="max-w-[600px]">
                  Чистка и настройка кофемашины позволяют сохранять стабильное
                  качество напитков. Регулярное обслуживание гарантирует, что
                  ваша кофемашина будет всегда готовить вкусный и ароматный
                  кофе.
                </p>
              </li>
              <li key="strong" className="second-custom-list-item">
                <span className="font-bold">Экономия на ремонте</span>
                <br />
                <br />
                <p className="max-w-[600px]">
                  Своевременное техническое обслуживание помогает выявлять и
                  устранять мелкие неисправности до того, как они перерастут в
                  серьезные проблемы. Это позволяет экономить на дорогостоящих
                  ремонтах и избегать неожиданных поломок.
                </p>
              </li>
            </ul>

            <Button onClick={changeContactModalState} className="text-white">
              Узнать стоимость сервисного обслуживания
            </Button>
          </div>
        </section>

        <section className="space-y-10 py-32 max-w-6xl mx-5 md:mx-auto border-b-2 border-gray-200">
          <h2 className="text-[30px] text-center">Дополнительные услуги</h2>

          <ul className="list-none list-inside grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalIssues.map((issue) => (
              <li key={issue.id} className="flex">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col flex-1">
                  <div className="relative h-48 flex items-center justify-center p-6 bg-gray-100">
                    <img
                      src={issue.icon}
                      alt={issue.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {issue.title}
                    </h3>
                    <p className="text-gray-600 flex-1">{issue.description}</p>
                    <p className="text-[#bc46c9] font-bold mt-4">
                      {issue.price}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="w-full py-14 md:py-20"
          style={{
            backgroundImage: `url(/gift-bg.png)`,
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
            backgroundImage: `url(/kofe-bg.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            padding: "145px 0 115px",
            zIndex: 1,
          }}
        >
          <div className="space-y-7 max-w-6xl mx-5 md:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-10 py-10 md:py-20 flex flex-col justify-center items-center border border-gray-200 space-y-5 hover:bg-[#bc46c9] hover:border-[#bc46c9]">
                <MdOutlineManageAccounts className="text-[7rem] text-white" />
                <p className="text-xl text-white font-medium text-center">
                  Персонал
                </p>
                <p className="text-center text-white">
                  Наши специалисты проходят регулярное обучение и сертификацию.
                  Мы работаем с техникой таких известных брендов, как DeLonghi,
                  Saeco, Jura, Bosch и других, что позволяет нам предлагать
                  услуги высочайшего качества.
                </p>
              </div>

              <div className="p-10 py-10 md:py-20 flex flex-col justify-center items-center border border-gray-200 space-y-5 hover:bg-[#bc46c9] hover:border-[#bc46c9]">
                <MdPriceCheck className="text-[7rem] text-white" />
                <p className="text-xl text-white font-medium text-center">
                  Цена и сервис
                </p>
                <p className="text-center text-white">
                  Мы предлагаем конкурентоспособные цены на все виды услуг по
                  ремонту кофемашин. Наши мастера приедут к вам домой или в
                  офис, проведут диагностику и необходимый ремонт на месте.
                </p>
              </div>

              <div className="p-10 py-10 md:py-20 flex flex-col justify-center items-center border border-gray-200 space-y-5 hover:bg-[#bc46c9] hover:border-[#bc46c9]">
                <PiSealCheckLight className="text-[7rem] text-white" />
                <p className="text-xl text-white font-medium text-center">
                  Гарантия на все работы
                </p>
                <p className="text-center text-white">
                  Предоставляем гарантию на все виды работ и запчасти 1 год. Это
                  позволяет вам быть уверенными в надежности и долговечности
                  ремонта, а также обращаться к нам в случае повторных поломок
                  без дополнительных затрат.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10 py-32 max-w-6xl mx-5 md:mx-auto border-b-2 border-gray-200">
          <h2 className="text-[30px] text-center">Отзывы наших клиентов</h2>
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col flex-1 p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-[#bc46c9]">
                        {review.star}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-black">
                      {review.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 flex-1">{review.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section className="space-y-10 py-32 max-w-6xl mx-5 md:mx-auto border-b-2 border-gray-200">
          <h2 className="text-[30px] text-center">
            Самые частые вопросы по ремонту кофемашин в Минске
          </h2>

          <ul className="list-none space-y-4">
            {faqs?.map((item: any) => (
              <Accordion key={item.id} open={open === item.id} placeholder="">
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
        </section>

        <section className="space-y-10 py-32 max-w-6xl mx-5 md:mx-auto border-b-2 border-gray-200">
          <h2 className="text-[30px] text-center">
            Контактные данные сервисного центра по ремонту кофемашин в Минске
          </h2>

          <iframe
            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=206388354015"
            width="100%"
            height="400"
          ></iframe>
        </section>

        <section className="w-full py-20 md:py-32 bg-[#bc46c9]">
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
                className="flex items-center text-white px-6 py-3 border-2 border-white hover:bg-white hover:text-[#bc46c9] rounded-md space-x-2"
              >
                <AiFillPhone className="text-[20px]" />
                <p>Заказать звонок</p>
              </button>
            </div>
          </div>
        </section>
        <CookieConsent
          location="bottom"
          buttonText="Я согласен"
          cookieName="policy"
          style={{
            background: "white",
            color: "black",
            maxWidth: "400px",
            marginBottom: "20px",
            marginLeft: "20px",
            borderRadius: "20px",
            boxShadow:
              " 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          }}
          buttonStyle={{
            color: "white",
            fontSize: "14px",
            background: "#bc46c9",
            borderRadius: "10px",
            padding: "10px",
          }}
          expires={150}
          debug={true}
        >
          <p className="font-bold text-[20px] mb-2">Файлы сookie</p>
          <p className="text-[14px] text-gray-900">
            Для обеспечения удобства пользователей сайта koferem.by используются
            файлы cookie. Подробнее об этом вы можете узнать в{" "}
            <a href="" className="text-blue-500 hover:cursor-pointer">
              Политике в отношении обработки файлов cookie.
            </a>
          </p>
        </CookieConsent>
      </main>
    </LayoutWrapper>
  );
};

export default Main;
