import React from "react";
import BlogCard from "./BlogCard";
import config from "@/config";
import fetchBlogs from "@/helpers/fetch-blogs";




const Blog = async () => {

  const { data } = await fetchBlogs("sort[0]=createdAt:desc&pagination[pageSize]=3&pagination[page]=1&publicationState=live");

  return (
    <>
      <section className="bg-[#F9F6F0] pb-10 pt-20 lg:pb-20 lg:pt-[60px]">
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
                Bienvenidos a la sección donde encontrarás las últimas noticias tributarias de Ecuador. Mantente informado con nosotros.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">


            {data.map(individual => (


              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                {console.log("este es el eroor" + individual.attributes.Banner.data.attributes.formats.medium + "por culpa de: " + individual.id)}
                <BlogCard
                  id={individual.id}
                  image={`${individual.attributes.Banner.data.attributes.formats.medium
                    ? individual.attributes.Banner.data.attributes.formats.medium.url
                    : individual.attributes.Banner.data.attributes.formats.thumbnail.url}`}
                  date={individual.attributes.createdAt}
                  CardTitle={individual.attributes.Titulo}
                  CardDescription={individual.attributes.Resumen}
                  slug={individual.attributes.slug}
                />
              </div>

            ))}


          </div>

        </div>
      </section>
    </>
  );
};

export default Blog;

