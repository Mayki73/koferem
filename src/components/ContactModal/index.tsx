import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ContactForm from "../ContactForm";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../constants/query-client";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ContactModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
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
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative flex flex-col lg:flex-row w-full text-white md:w-1/3 h-[30rem] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                  <div className="absolute top-0 w-full bg-[#bc46c9] flex justify-center items-center h-20">
                    <h1 className="px-5">
                      Закажите бесплатную диагностику поломки вашей кофемашины
                    </h1>
                  </div>
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
                  <div className="flex justify-center items-center w-full px-5 md:px-20 pt-24 md:pt-0">
                    <ContactForm />
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

export default ContactModal;
