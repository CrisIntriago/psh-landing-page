import React from "react";
import Image from "next/image";
import { FaAppStoreIos } from "react-icons/fa6";


const Services = () => {
    return (
        <section id="servicios" className="pb-12 pt-20 lg:pb-[90px] lg:pt-[60px] bg-[#f7f8fa]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-mi-naranja">
                                Nuestros Servicios
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                                Ofrecemos
                            </h2>
                            <p className="text-base text-body-color">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Odio aliquam quia sed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <ServiceCard
                        title="Auditoría
                        Externa"
                        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        icon={
                            <FaAppStoreIos size={50}/>
                        }
                    />
                    <ServiceCard
                        title="Diagnóstico
                        Contable"
                        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        icon={
                            <FaAppStoreIos size={50}/>
                        }
                    />
                    <ServiceCard
                        title="Outsourcing
                        Contable Y Tributario"
                        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        icon={
                            <FaAppStoreIos size={50}/>
                        }
                    />


                    <ServiceCard
                        title="Asesoría Contable"
                        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        icon={
                            <FaAppStoreIos size={50}/>
                        }
                    />
                    <ServiceCard
                        title="Asesoría Financiera"
                        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        icon={
                            <FaAppStoreIos size={50}/>
                        }
                    />
                    <ServiceCard
                        title="Procesos Convenidos"
                        details="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                        icon={
                            <FaAppStoreIos size={50}/>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;

const ServiceCard = ({ icon, title, details }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                    <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                        {icon}
                    </div>
                    <h4 className="mb-[14px] text-2xl font-semibold text-dark">
                        {title}
                    </h4>
                    <p className="text-body-color">{details}</p>
                </div>
            </div>
        </>
    );
};