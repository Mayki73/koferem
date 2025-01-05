import React from "react";
import { SiMetrodeparis } from "react-icons/si";

const Footer: React.FC = () => {
  // Define the JSON-LD script object
  const jsonLdData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Коферем",
    image: ["https://koferem.by/_next/image/?url=%2Flogo.png&w=1080&q=75"],
    description: "Ремонт кофемашин",
    aggregateRating: {
      "@type": "AggregateRating",
      bestRating: "4,9",
      ratingCount: "20",
      ratingValue: "5.0",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BYN",
      price: "30",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStoreOnly",
      seller: {
        "@type": "Organization",
        name: "Коферем",
      },
    },
  };

  return (
    <footer>
      <div className="py-20 bg-[#2c2c2c]">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-2 text-gray-400 text-center">
            <p>Юридический адрес: г. Минск</p>
            <p>ул. Калиновского 64,41</p>
            <p>УНП 192834683</p>
            <p>Рейтинг ⭐️⭐️⭐️⭐️⭐️ на основе отзывов клиентов</p>
          </div>

          <div className="space-y-2 text-gray-400 text-center">
            <p className="text-lg">Время работы:</p>
            <p>Пн–Пт: 9:00—19:00</p>
            <p>Сб: 11:00-16:00</p>
            <p>Вс: Выходной</p>
          </div>

          <div className="space-y-2 text-gray-400 text-center">
            <p className="text-lg">Адрес сервиса:</p>
            <a
              className="hover:text-[#bc46c9]"
              href="https://yandex.by/maps/157/minsk/?ll=27.555691%2C53.902735&mode=routes&no-distribution=1&profile-mode=1&rtext=~53.928796%2C27.653288&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D206388354015&source=wizbiz_new_map_single&z=12"
              target="_tablet"
            >
              г. Минск, ул. Петра Мстиславца, 5{" "}
              <div className="flex space-x-3 items-center justify-center">
                <SiMetrodeparis className="text-[20px]" />
                <p>Восток</p>
              </div>
            </a>
          </div>

          <div className="space-y-2 text-gray-400 text-center">
            <p className="text-lg">Приём звонков: ежедневно</p>
            <p>24/7 без выходных</p>
            <p>
              <a className="hover:text-[#bc46c9]" href="tel:375296995069">
                +375 (29) 699-50-69
              </a>
            </p>
            <p>
              <a
                className="hover:text-[#bc46c9]"
                href="mailto:serviscoffee@yandex.ru"
              >
                serviscoffee@yandex.ru
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 bg-[#1f1f1f] text-center text-gray-400">
        <p>Все права защищены © 2012 - {new Date().getFullYear()}</p>
      </div>

      {/* Inject JSON-LD script using dangerouslySetInnerHTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </footer>
  );
};

export default Footer;
