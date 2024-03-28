"use client"
import React from "react";

const Blog = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-mi-naranja">
                  Blog
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Nuestras Noticias Recientes
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio libero accusamus aut quam inventore debitis?
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="Marzo 22, 2024"
              CardTitle="NIIF 9: Una Guía Completa y su Importancia"
              CardDescription="La NIIF 9, con su enfoque en los instrumentos financieros, ha marcado un antes y un después en cómo las empresas registran sus activos y pasivos financieros."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Enero 21, 2024"
              CardTitle="Auditores Externos En Ecuador: Más Allá De Una Obligación Legal Y Normativa"
              CardDescription="os auditores externos aportan una visión clara que puede identificar oportunidades de mejora que tal vez tu equipo interno haya pasado por alto. "
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Enero 2, 2024"
              CardTitle="¿Qué Significado Tiene El Término “Costo O Esfuerzo Desproporcionado” En Las NIIF?"
              CardDescription="El término «costo o esfuerzo desproporcionado» es un tema importante para el análisis, pues las Normas NIIF PYMES lo mencionan en algunas Normas."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-mi-naranja px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
