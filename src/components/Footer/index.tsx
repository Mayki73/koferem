import React from "react";
import { SiMetrodeparis } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="py-20 bg-[#2c2c2c]">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-2 text-gray-400 text-center">
            <p>Юридический адрес: г. Минск</p>
            <p>ул. Калиновского 64,41</p>
            <p>УНП 192834683</p>
          </div>

          <div className="space-y-2 text-gray-400 text-center">
            <p className="text-lg">Время работы:</p>
            <p>Пн–Пт: 9:00—18:00</p>
            <p>Сб: 11:00-16:00</p>
            <p>Вс: Выходной</p>
          </div>

          <div className="space-y-2 text-gray-400 text-center">
            <p className="text-lg">Адрес сервиса:</p>
            <a
              className="hover:text-[#bc46c9]"
              href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D1%96%D1%86%D0%B0+%D0%9A%D1%96%D1%80%D1%8B%D0%BB%D1%8B+%D0%A2%D1%83%D1%80%D0%B0%D1%9E%D1%81%D0%BA%D0%B0%D0%B3%D0%B0+26,+Minsk,+Belarus/data=!4m2!3m1!1s0x46dbcec265d5b133:0x2e7a401fb28a8230?sa=X&ved=2ahUKEwi8gZb_qqyAAxUzFBAIHb-ADyAQ8gF6BAgXEAA&ved=2ahUKEwi8gZb_qqyAAxUzFBAIHb-ADyAQ8gF6BAgZEAI"
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
        <p>Все права защищены © 2012 - 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
