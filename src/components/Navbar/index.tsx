import Link from "next/link";
import React, { useState } from "react";
import {
  LiaBarsSolid,
  LiaWindowCloseSolid,
  LiaPlusSolid,
  LiaMinusSolid,
} from "react-icons/lia";

const pages = [
  {
    title: "ремонт кофемашин",
    link: "/repair/",
    subpages: [
      {
        type: "Бытовые кофемашины",
        brands: [
          {
            title: "Ремонт Saeco",
            link: "/repair/household/saeco/",
          },
          {
            title: "Ремонт Philips",
            link: "/repair/household/philips/",
          },
          {
            title: "Ремонт Delonghi",
            link: "/repair/household/delonghi/",
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
            title: "Ремонт Melitta",
            link: "/repair/household/melitta/",
          },
          {
            title: "Ремонт Jura",
            link: "/repair/household/jura/",
          },
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
        ],
      },
      {
        type: "Встраиваемые кофемашины",
        brands: [
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
        ],
      },
    ],
  },
  {
    title: "оплата и доставка",
    link: "/delivery/",
  },
  {
    title: "о нас",
    link: "/about/",
  },
  {
    title: "контакты",
    link: "/contacts/",
  },
];

const Navbar: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSubpageOpen, setIsSubpageOpen] = useState(false);
  const [isHouseholdOpen, setIsHouseholdOpen] = useState(false);
  const [isBuiltInOpen, setIsBuiltInOpen] = useState(false);

  return (
    <>
      <div className="block md:hidden">
        {!isNavbarOpen ? (
          <button onClick={() => setIsNavbarOpen(true)}>
            <LiaBarsSolid className="text-[30px]" />
          </button>
        ) : (
          <button onClick={() => setIsNavbarOpen(false)}>
            <LiaWindowCloseSolid className="text-[30px]" />
          </button>
        )}
        {isNavbarOpen ? (
          <div className="absolute top-[6rem] left-0 w-full bg-[#2c2c2c] py-3 border-b-2 border-gray-200">
            <ul className="list-none list-inside w-full space-y-4">
              {pages.map((page) => {
                if (page.subpages) {
                  return (
                    <li key={page.title} className="">
                      <div className="flex justify-between items-center px-5 w-full uppercase">
                        <Link
                          className="flex justify-between items-center w-full uppercase"
                          href={page.link}
                        >
                          <p>{page.title}</p>
                        </Link>
                        {!isSubpageOpen ? (
                          <button onClick={() => setIsSubpageOpen(true)}>
                            <LiaPlusSolid className="text-[20px]" />
                          </button>
                        ) : (
                          <button onClick={() => setIsSubpageOpen(false)}>
                            <LiaMinusSolid className="text-[20px]" />
                          </button>
                        )}
                      </div>

                      {isSubpageOpen ? (
                        <div className="space-y-4 mt-3">
                          <div className="flex justify-between items-center px-5 pl-10 w-full uppercase">
                            <p>{page.subpages[0].type}</p>
                            {!isHouseholdOpen ? (
                              <button onClick={() => setIsHouseholdOpen(true)}>
                                <LiaPlusSolid className="text-[20px]" />
                              </button>
                            ) : (
                              <button onClick={() => setIsHouseholdOpen(false)}>
                                <LiaMinusSolid className="text-[20px]" />
                              </button>
                            )}
                          </div>
                          {isHouseholdOpen ? (
                            <ul className="list-none list-inside space-y-3 pl-12">
                              {page.subpages[0].brands.map((brand) => (
                                <li key={brand.title}>
                                  <Link
                                    className="px-5 w-full uppercase"
                                    href={brand.link}
                                  >
                                    {brand.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}

                          <div className="flex justify-between items-center px-5 pl-10 w-full uppercase">
                            <p>{page.subpages[1].type}</p>
                            {!isBuiltInOpen ? (
                              <button onClick={() => setIsBuiltInOpen(true)}>
                                <LiaPlusSolid className="text-[20px]" />
                              </button>
                            ) : (
                              <button onClick={() => setIsBuiltInOpen(false)}>
                                <LiaMinusSolid className="text-[20px]" />
                              </button>
                            )}
                          </div>
                          {isBuiltInOpen ? (
                            <ul className="list-none list-inside space-y-3 pl-12">
                              {page.subpages[1].brands.map((brand) => (
                                <li key={brand.title}>
                                  <Link
                                    className="px-5 w-full uppercase"
                                    href={brand.link}
                                  >
                                    {brand.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ) : null}
                    </li>
                  );
                }

                return (
                  <li className="w-full" key={page.title}>
                    <Link className="p-5 w-full uppercase" href={page.link}>
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
      <nav className="hidden md:block">
        <ul className="text-white flex list-none space-x-10 uppercase text-sm">
          {pages.map((page) => {
            if (page.subpages) {
              return (
                <>
                  <li key={page.title} className="group relative py-5">
                    <Link className="hover:text-[#bc46c9]" href={page.link}>
                      {page.title}
                    </Link>
                    <div className="grid grid-cols-2 gap-x-6 absolute z-20 left-0 w-[50rem] text-[12px] bg-[#2c2c2c] mt-5 hidden group-hover:grid hover:grid p-4">
                      <div className="space-y-4">
                        <p className="text-[14px]">{page.subpages[0].type}</p>
                        <ul className="grid grid-cols-2 gap-x-10 gap-y-2 list-none list-inside">
                          {page.subpages[0].brands.map((brand) => (
                            <li
                              key={brand.title}
                              className="hover:text-[#bc46c9]"
                            >
                              <Link className="" href={brand.link}>
                                {brand.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[14px]">{page.subpages[1].type}</p>
                        <ul className="grid grid-cols-2 gap-x-10 gap-y-2 list-none list-inside">
                          {page.subpages[1].brands.map((brand) => (
                            <li
                              className="hover:text-[#bc46c9]"
                              key={brand.title}
                            >
                              <Link className="" href={brand.link}>
                                {brand.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </>
              );
            }
            return (
              <li className="py-5" key={page.title}>
                <Link className="hover:text-[#bc46c9]" href={page.link}>
                  {page.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
