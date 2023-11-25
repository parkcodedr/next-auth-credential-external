import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import Searchbar from "@/components/store/Searchbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserIcon from "../vectors/userIcon";
import { ShoppingBag } from "../vectors";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <main className="navbar__wrapper">
      <div className="max-h-20  py-5 flex gap-16 items-center container mx-auto">
        <Image src="/assets/images/logo.png" width={100} height={50} />
        <ul className="flex items-center gap-4">
          {menuLeft.map((menu, index) => (
            <li className="flex items-center gap-11 text-xs md:text-sm">
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          ))}
        </ul>
        <div className="w-3/5 flex-1">
          <Searchbar />
        </div>
        <ul className="flex items-center gap-4 mr-4">
          <DropdownMenu className="outline-none blur:outline-none">
            <DropdownMenuTrigger>
              <li className="flex items-center gap-2 text-xs md:text-sm">
                {/* <span>
                <FaRegCircleUser color="#300265" size={20} />
              </span> */}
                <UserIcon />
                <Link href="#">Account</Link>
                <MdKeyboardArrowDown size={20} />
              </li>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="cursor-pointer">
                <Button className="bg-[#9A47CB]">Sign in</Button>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ShoppingBag /> <span className="ml-2">My Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserIcon />
                <span className="ml-2">My Orders</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {menuRight.map((menu, index) => (
            <li className="flex items-center gap-2 text-xs md:text-sm">
              {menu?.icon}
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Navbar;

const menuLeft = [
  {
    title: "Deals",
    link: "deals",
  },
  {
    title: "What's New",
    link: "new-deals",
  },
  {
    title: "Delivery",
    link: "delivery",
  },
];

const menuRight = [
  {
    title: "Help",
    link: "help",
  },
  {
    title: "Cart",
    link: "cart",
    icon: <ShoppingCart />,
  },
];
