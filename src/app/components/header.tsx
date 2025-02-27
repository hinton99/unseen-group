"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/logo.png";
import {
  Bars3Icon,
  BookmarkIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  ComputerDesktopIcon,
  DocumentPlusIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Header() {
  const menuItems = [
    { name: "Add", icon: PlusCircleIcon },
    { name: "Scheduler", icon: CalendarIcon },
    {
      name: "Documents",
      icon: DocumentPlusIcon,
      submenu: [{ name: "Dropdown 1" }, { name: "Dropdown 2" }],
    },
    {
      name: "Dashboard",
      icon: ComputerDesktopIcon,
      submenu: [{ name: "Dropdown 1" }, { name: "Dropdown 2" }],
    },
    { name: "Resources", icon: BookmarkIcon },
    { name: "Accessibility", icon: QuestionMarkCircleIcon },
    { name: "Chat", icon: ChatBubbleLeftEllipsisIcon },
    { name: "Tom Hinton", icon: UserIcon, submenu: [{ name: "Sign Out" }] },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>();

  return (
    <nav className="bg-white px-4 shadow-md sticky top-0 z-20">
      <div className="flex justify-between items-center py-4">
        <Image
          src={Logo}
          alt="logo"
        />
        <button
          className="lg:hidden text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu">
          {isOpen ? (
            <XMarkIcon className="size-8" />
          ) : (
            <Bars3Icon className="size-8" />
          )}
        </button>
        <ul className="hidden lg:flex">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="text-center font-semibold group">
              <Link
                className="text-blue-900 group-hover:text-red-800 transition-all delay-100 inline-block p-2"
                href={"#"}>
                <item.icon
                  aria-hidden="true"
                  className="size-8 mx-auto block pb-2"
                />
                {item.name}
              </Link>
              <ul className="text-blue-900 absolute transition-all overflow-hidden max-h-0 opacity-0 delay-200 bg-white shadow-md group-hover:visible group-hover:opacity-100 group-hover:max-h-[9999px]">
                {item.submenu?.map((subItem) => (
                  <li
                    className="px-2 py-4 hover:text-red-800 transition-all delay-200"
                    key={subItem.name}>
                    <Link href={"#"}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <ul className="lg:hidden flex flex-col pb-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="font-semibold">
              <div className="flex items-center">
                <Link
                  className="text-blue-900 group-hover:text-red-800 transition-all delay-100 p-2 block"
                  href={"#"}
                  onClick={() => setIsOpen(false)}>
                  <item.icon
                    aria-hidden="true"
                    className="size-6 inline-block mr-2"
                  />
                  {item.name}
                </Link>
                <button
                  className="text-left p-2 flex items-center justify-between text-blue-900 hover:text-red-800"
                  onClick={() =>
                    setOpenSubMenu(
                      openSubMenu === item.name
                        ? null
                        : item.submenu
                        ? item.name
                        : null
                    )
                  }>
                  {item.submenu && (
                    <ChevronDownIcon
                      className={`size-6 transition-transform duration-300 ${
                        openSubMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}{" "}
                </button>
              </div>
              {item.submenu && openSubMenu === item.name && (
                <ul className="pl-8">
                  {item.submenu?.map((subItem) => (
                    <li
                      className="p-2 text-blue-900 hover:text-red-800 transition-all delay-100"
                      key={subItem.name}>
                      <Link href={"#"}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
