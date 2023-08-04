import { Link } from "gatsby";
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
    link: "/repair",
    subpages: [
      { title: "Ремонт Delonghi", link: "/repair/delonghi" },
      {
        title: "Ремонт Saeco",
        link: "/repair/saeco",
      },
      {
        title: "Ремонт Siemens",
        link: "/repair/siemens",
      },
      {
        title: "Ремонт Krups",
        link: "/repair/krups",
      },
      {
        title: "Ремонт Jura",
        link: "/repair/jura",
      },
      {
        title: "Ремонт Philips",
        link: "/repair/philips",
      },
      {
        title: "Ремонт Melitta",
        link: "/repair/melitta",
      },
      {
        title: "Ремонт Gaggia",
        link: "/repair/gaggia",
      },
      {
        title: "Ремонт Vitek",
        link: "/repair/vitek",
      },
    ],
  },
  {
    title: "оплата и доставка",
    link: "/delivery/",
  },
  {
    title: "о нас",
    link: "/about",
  },
  {
    title: "контакты",
    link: "/contacts",
  },
];

const Navbar: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isSubpageOpen, setIsSubpageOpen] = useState(false);

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
          <div className="absolute top-[4rem] left-0 w-full bg-[#2c2c2c] py-3 border-b-2 border-gray-200">
            <ul className="list-none list-inside w-full space-y-4">
              {pages.map((page) => {
                if (page.subpages)
                  return (
                    <li key={page.title} className="">
                      <Link
                        className="flex justify-between items-center px-5 w-full uppercase"
                        to={page.link}
                      >
                        <p>{page.title}</p>
                        {!isSubpageOpen ? (
                          <button onClick={() => setIsSubpageOpen(true)}>
                            <LiaPlusSolid className="text-[20px]" />
                          </button>
                        ) : (
                          <button onClick={() => setIsSubpageOpen(false)}>
                            <LiaMinusSolid className="text-[20px]" />
                          </button>
                        )}
                      </Link>
                      {isSubpageOpen ? (
                        <ul className="list-none list-inside space-y-4 ml-10 mt-3">
                          {page.subpages.map((subpage) => (
                            <li key={subpage.title}>
                              <Link className="" to={subpage.link}>
                                {subpage.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );

                return (
                  <li className="w-full" key={page.title}>
                    <Link className="p-5 w-full uppercase" to={page.link}>
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
                  <li className="group relative py-3" key={page.title}>
                    <Link className="hover:text-[#c9a246]" to={page.link}>
                      {page.title}
                    </Link>
                    <ul className="absolute z-20 left-0 w-full list-none list-inside space-y-4 p-4 text-[12px] bg-[#2c2c2c] mt-3 hidden group-hover:block hover:block">
                      {page.subpages.map((subpage) => (
                        <li
                          className="hover:text-[#c9a246]"
                          key={subpage.title}
                        >
                          <Link className="" to={subpage.link}>
                            {subpage.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </>
              );
            }
            return (
              <li className="py-3" key={page.title}>
                <Link className="hover:text-[#c9a246]" to={page.link}>
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
