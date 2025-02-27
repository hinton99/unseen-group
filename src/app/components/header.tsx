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
    <nav className="sticky top-0 z-20 px-4 bg-white shadow-md">
      <div className="flex items-center justify-between py-4">
        <Image
          src={Logo}
          alt="logo"
        />
        <button
          className="text-blue-900 lg:hidden"
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
              className="font-semibold text-center group">
              <Link
                className="inline-block p-2 text-blue-900 transition-all delay-100 group-hover:text-red-800"
                href={"#"}>
                <item.icon
                  aria-hidden="true"
                  className="block pb-2 mx-auto size-8"
                />
                {item.name}
              </Link>
              <ul className="text-blue-900 absolute transition-all overflow-hidden max-h-0 opacity-0 delay-200 bg-white shadow-md group-hover:visible group-hover:opacity-100 group-hover:max-h-[9999px]">
                {item.submenu?.map((subItem) => (
                  <li
                    className="px-2 py-4 transition-all delay-200 hover:text-red-800"
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
        <ul className="flex flex-col pb-4 lg:hidden">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="font-semibold">
              <div className="flex items-center">
                <Link
                  className="block p-2 text-blue-900 transition-all delay-100 group-hover:text-red-800"
                  href={"#"}
                  onClick={() => setIsOpen(false)}>
                  <item.icon
                    aria-hidden="true"
                    className="inline-block mr-2 size-6"
                  />
                  {item.name}
                </Link>
                <button
                  className="flex items-center justify-between p-2 text-left text-blue-900 hover:text-red-800"
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
                      className="p-2 text-blue-900 transition-all delay-100 hover:text-red-800"
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
