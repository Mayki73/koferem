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
import Image from "../Image";
import ContactModal from "../ContactModal";
import Link from "next/link";

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
        <div className="bg-[#2c2c2c80] bg-opacity-50 py-3 ">
          <div className="max-w-6xl mx-5 md:mx-auto flex justify-between">
            <div className="flex items-center space-x-3">
              <a href="viber://chat?number=%2B375296995069">
                <FaViber className="text-[19px] text-white hover:text-[#bc46c9]" />
              </a>
              <a href="https://t.me/KofeRem">
                <FaTelegramPlane className="text-[20px] text-white hover:text-[#bc46c9] hover:duration-200" />
              </a>
              <FaBirthdayCake className="text-[20px] text-[#bc46c9] hidden md:block" />
              <p className="hidden md:block">Нам исполнилось 12 лет!</p>
            </div>

            <div className="flex items-center space-x-5">
              <a
                className="text-white items-center space-x-3 hover:text-[#bc46c9] hidden md:flex"
                href="mailto:serviscoffee@yandex.ru"
              >
                <FaEnvelope className="text-[20px] text-[#bc46c9]" />
                <span>serviscoffee@yandex.ru</span>
              </a>
              <a
                className="text-white flex items-center space-x-3 hover:text-[#bc46c9] hidden md:flex"
                target="_tablet"
                href="https://yandex.by/maps/157/minsk/?ll=27.555691%2C53.902735&mode=routes&no-distribution=1&profile-mode=1&rtext=~53.928796%2C27.653288&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D206388354015&source=wizbiz_new_map_single&z=12"
              >
                <FaMapMarkerAlt className="text-[20px] text-[#bc46c9]" />
                <span>г. Минск, ул. Петра Мстиславца, 5</span>
              </a>
              <a
                className="text-white flex items-center space-x-3 hover:text-[#bc46c9] "
                href="tel:375296995069"
              >
                <FaPhone className="text-[20px] text-[#bc46c9]" />
                <span>+375 (29) 699-50-69</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl px-5 md:mx-auto w-full flex items-center justify-between h-16 md:h-20 border-none md:border-b bg-[#2c2c2c] md:bg-transparent border-gray-200">
          <Link className="w-max flex items-center h-14" href="/">
            <Image
              imageClassName="relative z-10 w-[10rem] h-[3rem] md:w-44 md:h-full object-contain object-center"
              wrapperClassName="w-[10rem] h-[3rem] md:w-44"
              imageName="logo.png"
              alt="koferem логотип"
            />
          </Link>
          <Navbar />
          <Button
            onClick={changeContactModalState}
            className="hidden md:block text-white"
          >
            Заказать звонок
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
