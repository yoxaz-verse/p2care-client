"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { logo } from "@/Content/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Our Service", link: "/service" },
    { name: "Doctors", link: "/doctor" },
    { name: "Hospitals", link: "/hospital" },
    { name: "Departments", link: "/department" },
  ];
  const [name, setName] = useState<any>("Home");
  const router = useRouter();
  useEffect(() => {
    if (window.location.href.includes(name)) {
      setName(window.location.href.split('/')[1]);
    }
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="max-w-[95vw] bg-white 2xl:max-w-[1440px] mx-auto"
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand onClick={() => router.push("/")} className="cursor-pointer">
          <Image src={logo} alt="P2Care Logo" width={100} height={100} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            isActive={name === item.name}
            onClick={() => setName(item.name)}
          >
            <Link color="foreground" href={item.link}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            color="primary"
            href="#"
            variant="bordered"
            className="rounded-full px-6"
          >
            Enquire
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            className="rounded-full px-6"
          >
            Log In
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="w-1/2">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={`${item.name === name ? "primary" : "secondary"}`}
              className="w-full"
              href={item.link}
              onClick={() => setName(item.name)}
              size="md"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
