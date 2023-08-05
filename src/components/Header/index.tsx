import React, { useState } from "react";
import {
  FaTelegramPlane,
  FaViber,
  FaBirthdayCake,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Navbar from "../Navbar";
import Button from "../Form/Button";
import { Link } from "gatsby";
import Image from "../Image";
import ContactModal from "../ContactModal";

const Header: React.FC = () => {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  const changeContactModalState = () => {
    setIsOpenContactModal((prev) => !prev);
  };

  return (
    <>
      <ContactModal
        isOpen={isOpenContactModal}
        setIsOpen={changeContactModalState}
      />
      <header className="relative w-full text-white z-10">
        <div className="bg-[#2c2c2c80] bg-opacity-50 py-3 hidden md:block">
          <div className="max-w-6xl mx-auto w-full flex justify-between">
            <div className="flex items-center space-x-3">
              <a href="">
                <FaViber className="text-[19px] text-white hover:text-[#c9a246]" />
              </a>
              <a href="">
                <FaTelegramPlane className="text-[20px] text-white hover:text-[#c9a246] hover:duration-200" />
              </a>
              <FaBirthdayCake className="text-[20px] text-[#c9a246]" />
              <p>Нам исполнилось 12 лет!</p>
            </div>

            <div className="flex items-center space-x-5">
              <a
                className="text-white flex items-center space-x-3 hover:text-[#c9a246] "
                href="mailto:serviscoffee@yandex.ru"
              >
                <FaEnvelope className="text-[20px] text-[#c9a246]" />
                <span>serviscoffee@yandex.ru</span>
              </a>
              <a
                className="text-white flex items-center space-x-3 hover:text-[#c9a246] "
                href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D1%96%D1%86%D0%B0+%D0%9A%D1%96%D1%80%D1%8B%D0%BB%D1%8B+%D0%A2%D1%83%D1%80%D0%B0%D1%9E%D1%81%D0%BA%D0%B0%D0%B3%D0%B0+26,+Minsk,+Belarus/data=!4m2!3m1!1s0x46dbcec265d5b133:0x2e7a401fb28a8230?sa=X&ved=2ahUKEwi8gZb_qqyAAxUzFBAIHb-ADyAQ8gF6BAgXEAA&ved=2ahUKEwi8gZb_qqyAAxUzFBAIHb-ADyAQ8gF6BAgZEAI"
              >
                <FaMapMarkerAlt className="text-[20px] text-[#c9a246]" />
                <span>г. Минск, ул. Кирилла Туровского, 26</span>
              </a>
              <a
                className="text-white flex items-center space-x-3 hover:text-[#c9a246] "
                href="tel:375296995069"
              >
                <FaPhone className="text-[20px] text-[#c9a246]" />
                <span>+375 (29) 699-50-69</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl px-5 md:mx-auto w-full flex items-center justify-between h-16 md:h-20 border-none md:border-b bg-[#2c2c2c] md:bg-transparent border-gray-200">
          <Link className="w-max" to="/">
            <Image
              imageClassName="relative z-10 w-14 h-2 md:w-44 md:h-12 object-contain object-center"
              imageName="logo.png"
              alt="koferem логотип"
            />
          </Link>
          <Navbar />
          <Button onClick={changeContactModalState} className="hidden md:block">
            Заказать звонок
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
