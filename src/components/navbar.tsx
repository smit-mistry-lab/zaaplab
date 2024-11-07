// "use client";

import { ReactNode, useState, useEffect } from "react";

import XLogo from "@/components/XLogo";
import { Rocket, Menu, X } from "lucide-react";
import Link from "next/link";

interface nav_items {
  title: string | ReactNode;
  url: string;
  forMobile: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(() => !isOpen);

  // This method is used when hamburger menu is open to disable scrolling the whole screen
  // useEffect(() => {
  //   // Add overflow-hidden to body when menu is open
  //   if (isOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  //   // Clean up on component unmount or when isOpen changes
  //   return () => document.body.classList.remove("overflow-hidden");
  // }, [isOpen]);

  const nav_items: nav_items[] = [
    {
      title: "How it works",
      url: "#how_it_works",
      forMobile: false,
    },
    {
      title: "Work",
      url: "#work",
      forMobile: true,
    },
    {
      title: "Pricing",
      url: "#pricing",
      forMobile: false,
    },
    {
      title: (
        <>
          Connect on <XLogo className="group-hover:fill-white" />
        </>
      ),
      url: "#",
      forMobile: false,
    },
  ];
  return (
    <header className="border-b relative border-zinc-800">
      <nav className="container mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-red-400" />
          <span className="text-xl font-bold">zaaplab</span>
        </div>

        {/* Hamburger menu for mobile */}
        {/* <div className="md:hidden" onClick={handleOpen}>
          {isOpen ? <X /> : <Menu />}
        </div> */}

        <div className="hidden md:flex items-center space-x-8">
          {nav_items.map((item, i) => (
            <Link
              key={i}
              className="flex items-center justify-center gap-2 group hover:fill-zinc-100 text-zinc-200/90 font-medium hover:text-zinc-100 transition-colors"
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden items-center space-x-8">
          <Link
            className="flex items-center justify-center gap-2 group hover:fill-zinc-100 text-zinc-200/90 font-medium hover:text-zinc-100 transition-colors"
            href={"#"}
          >
            Work
          </Link>
          <Link
            className="flex items-center justify-center gap-2 group hover:fill-zinc-100 text-zinc-200/90 font-medium hover:text-zinc-100 transition-colors"
            href={"#"}
          >
            Pricing
          </Link>
        </div>
      </nav>

      {/* Hamburger Menu items for mobile */}
      {/* {isOpen && (
        <div className="border-t px-6 pt-10 overflow-hidden min-h-screen absolute bg-background w-full md:hidden">
          <ul className="flex flex-col gap-2">
            {nav_items.map((item, i) => (
              <li
                className="flex items-center gap-2 p-4 bg-zinc-800 rounded-md bg-my-gradient"
                key={i}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </header>
  );
};

export default Navbar;
