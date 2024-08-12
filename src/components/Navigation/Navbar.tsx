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
  useDisclosure,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { logo } from "@/Content/assets";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import EnquireModal from "../Enquire";
import isAuth from "@/app/isAuth";
import { useMutation } from "@tanstack/react-query";
import { postData } from "@/core/apiHandler";

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
  const path: any = usePathname();
  const [visible, setVisible] = useState(true);
  // useEffect(() => {
  //   if (path === "/forgot-password" || path === "/forgot-password/retype" || path === "/otp" || path === "/siginin") {
  //     setVisible(false);
  //   }
  // }, [path]);
  useEffect(() => {
    if (path.includes(name)) {
      setName(window.location.href.split("/")[1]);
    }
  }, []);
  const { data, status, error } = isAuth();


  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className={`max-w-[95vw] ${visible ? "block" : "hidden"
        } bg-white 2xl:max-w-[1440px] mx-auto`}
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          onClick={() => router.push("/")}
          className="cursor-pointer"
        >
          <Image src={logo} alt="P2Care Logo" width={100} height={100} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={`hidden sm: flex ${data === undefined ? "hidden" : "flex"}`} justify="center">
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
            onClick={onOpen}
            variant="bordered"
            className="rounded-full px-6"
          >
            Enquire
          </Button>
          <EnquireModal onOpenChange={onOpenChange} isOpen={isOpen} />
        </NavbarItem>
        {data ? <>
          <Dropdown
            showArrow
            radius="sm"
            classNames={{
              base: "before:bg-default-200", // change arrow background
              content: "p-0 border-small border-divider bg-background",
            }}
          >
            <DropdownTrigger>
              <User
                name={data?.data?.name}
                className="cursor-pointer"
                description={data?.data?.email || data?.data?.phone}
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                avatarProps={{
                  size: "sm",
                }}
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Custom item styles"
              className="p-3"
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-white",
                  "data-[hover=true]:bg-primary",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-red-500",
                ],
              }}
            >
              <DropdownSection aria-label="Profile & Actions" showDivider>
                <DropdownItem key="myprofile" onClick={() => router.push("/profile")}>My Profile</DropdownItem>
                <DropdownItem key="logout" color="warning">Log Out</DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </> : (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/siginin"
              className="rounded-full px-6"
            >
              Log In
            </Button>
          </NavbarItem>
        )}
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
