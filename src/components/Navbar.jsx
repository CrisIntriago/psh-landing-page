"use client"

import React, { useState } from "react";
import Image from "next/image";
import SocialMedia from "./Contacto/SocialMedia";

const Navbar = () => {

    const [open, setOpen] = useState(false);


    return (
        <header className={`bg-[#F9F6F0] left-0 top-0 z-20 flex w-full items-center`}>
            <div className=" container mx-auto">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <a href="/#" className="block w-full py-5">
                            <Image
                                src="/Logo.webp"
                                alt="logo"
                                width={500}
                                height={500}
                            />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden text-black`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`z-10 absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-[#F9F6F0] px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                                    } `}
                            >
                                <ul className="block lg:flex">
                                    <ListItem NavLink="/#inicio">Inicio</ListItem>
                                    <ListItem NavLink="/#nosotros">Nosotros</ListItem>
                                    <ListItem NavLink="/#servicios">Servicios</ListItem>
                                    <ListItem NavLink="/blog">Blog</ListItem>
                                </ul>
                            </nav>
                        </div>

                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">

                                <SocialMedia />



                            

                            <a
                                href="/#contactanos"
                                className="rounded-md bg-mi-naranja px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
                            >
                                Contáctenos
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium text-body-color hover:text-mi-naranja lg:ml-12 lg:inline-flex"
                >
                    {children}
                </a>
            </li>
        </>
    );
};
