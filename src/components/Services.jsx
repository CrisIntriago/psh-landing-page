import React from "react";
import Image from "next/image";
import { FaAppStoreIos } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";


const Services = () => {
    return (
        <Slide direction="up" triggerOnce cascade>
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
                            Nuestros asesores financieros dan un servicio de consultoría personalizada para ayudar a
mitigar la incertidumbre asociada a la gestión contable y fiscal.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                <ServiceCard
    title="Consolidación de estados financieros"
    details="Ofrecemos servicios especializados en la consolidación de estados financieros para garantizar la precisión y la transparencia en tus informes contables."
    icon={<FaAppStoreIos size={50}/>}
/>

<ServiceCard
    title="Lavado de activos"
    details="Ayudamos a proteger tu empresa contra el lavado de activos mediante la implementación de medidas efectivas y el cumplimiento de regulaciones anti-lavado."
    icon={<FaAppStoreIos size={50}/>}
/>

<ServiceCard
    title="Procedimientos convenidos"
    details="Realizamos procedimientos convenidos para evaluar y validar información financiera específica, proporcionando resultados confiables y precisos para tus necesidades."
    icon={<FaAppStoreIos size={50}/>}
/>

<ServiceCard
    title="Implementación de NIIF"
    details="Te asesoramos y apoyamos en la implementación de las Normas Internacionales de Información Financiera (NIIF), asegurando que tu empresa cumpla con los estándares internacionales de contabilidad."
    icon={<FaAppStoreIos size={50}/>}
/>

<ServiceCard
    title="Auditoría interna y externa"
    details="Realizamos auditorías internas y externas exhaustivas para garantizar el cumplimiento normativo, identificar riesgos y mejorar la eficiencia operativa de tu organización."
    icon={<FaAppStoreIos size={50}/>}
/>
                </div>
            </div>
        </section>
        </Slide>
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