"use client"
import React, { useState } from "react";
import Image from "next/image";

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};


const Hero = () => {
  return (
    <>

      <div className="hero-section relative h-screen">
        <div className="hero-image absolute inset-0 z-[-1]">
          <img className="w-full h-full object-cover" src="/Hero.jpg" alt="Imagen de fondo" />
        </div>
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-[570px] bg-white py-10 px-8 sm:p-12 md:p-[60px]">
                <span className="block mb-3 text-base font-medium text-mi-naranja">
                  Auditores Independientes
                </span>
                <h1 className="mb-3 text-3xl font-bold leading-[1.208] text-dark md:text-4xl">
                  PSH Auditores &amp; Asociados.
                </h1>
                <p className="mb-8 text-base font-medium text-body-color lg:mb-10">
                  Como contadores y auditores certificados, nuestra labor es garantizar el interés y beneficio de nuestros clientes en todas sus decisiones de carácter financiero y cumplimiento de las normas.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="javascript:void(0)" className="py-3 text-base font-medium text-white transition bg-mi-naranja px-7 hover:bg-blue-dark">
                    Saber más
                  </a>
                  <a href="javascript:void(0)" className="inline-flex items-center px-6 py-3 text-base font-medium bg-white shadow-1 dark:shadow-none text-dark hover:text-mi-naranja">
                    Explorar Servicios
                    <span className="ml-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                        <path d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z" fill=""></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



      {/*
      <div className="relative bg-white pb-[110px] pt-[200px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Kickstart Startup Website with TailGrids
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color">
                  With TailGrids, business and students thrive together.
                  Business can perfectly match their staffing to changing demand
                  throughout the dayed.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-black hover:bg-blue-dark lg:px-7"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary"
                    >
                      <span className="mr-2">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                          <rect
                            x="7.99893"
                            y="14.979"
                            width="8.18182"
                            height="1.63636"
                            fill="white"
                          />
                          <rect
                            x="11.2717"
                            y="7.61523"
                            width="1.63636"
                            height="4.09091"
                            fill="white"
                          />
                          <path
                            d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Download App
                    </a>
                  </li>
                </ul>
                <div className="clients pt-16">
                  <h6 className="mb-6 flex items-center text-xs font-normal text-body-color">
                    Some Of Our Clients
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h6>

                  <div className="flex items-center space-x-4">
                    
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                    />

                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  );
};

export default Hero;