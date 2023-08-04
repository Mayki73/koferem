import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IonIcon } from "@ionic/react";
import { addOutline, giftOutline } from "ionicons/icons";
import PhoneNumberForm from "../PhoneNumberForm";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../constants/query-client";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const StartModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative flex flex-col lg:flex-row w-full text-white md:w-1/2 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                  <div className="absolute right-0 top-0 pr-4 pt-4 block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setIsOpen()}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="bg-[#c9a246] p-10">
                    <div className="p-5 border-b border-gray-600">
                      <h2 className="font-bold text-2xl text-center">
                        ВНИМАНИЕ, СПЕЦИАЛЬНО ДЛЯ ВАС:
                      </h2>
                    </div>

                    <div className="flex border-b border-gray-600 justify-between items-center py-5 text-xl">
                      <div className="text-center space-y-3">
                        <IonIcon
                          icon={giftOutline}
                          className="text-white w-24 h-24"
                        />
                        <p>
                          ПОЛУЧИТЕ ПАЧКУ <b>КОФЕ</b>
                        </p>
                      </div>

                      <IonIcon
                        icon={addOutline}
                        className="w-14 h-14 font-bold"
                      />

                      <div className="space-y-5 text-center">
                        <p>
                          ЭКСКЛЮЗИВНУЮ <b>10% СКИДКУ</b> НА ВСЕ РАБОТЫ
                        </p>
                      </div>
                    </div>

                    <div className="p-5">
                      <h2 className="font-bold text-xl text-center">
                        ОСТАВЬТЕ ВАШ НОМЕР ТЕЛЕФОНА
                      </h2>
                    </div>
                  </div>

                  <div className="py-14 px-5 text-center mx-auto space-y-3 text-black">
                    <h2 className="text-lg">У Вас остались вопросы?</h2>
                    <p>Хотите, перезвоним вам за 27 секунд?</p>
                    <PhoneNumberForm />
                    <p className="text-gray-600 text-xs">Звонок бесплатный</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </QueryClientProvider>
  );
};

export default StartModal;
