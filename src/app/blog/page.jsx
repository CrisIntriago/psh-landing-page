import React from "react";
import BlogCard from "@/components/Blog/BlogCard";
import config from "@/config";
import fetchBlogs from "@/helpers/fetch-blogs";
import Contact from "@/components/Contacto/Contact";



const page = async () => {

  const { data } = await fetchBlogs("sort[0]=createdAt:desc&pagination[pageSize]=6&pagination[page]=1&publicationState=live", { cache: 'no-store' });

  return (

    <>
      {/* 
      <Head>
        <title>My Awesome Page</title>
        <meta name="description" content="A brief description of my page." />

        {/* Open Graph / Facebook */}

      {/*
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mysite.com/my-page" />
        <meta property="og:title" content="My Awesome Page" />
        <meta property="og:description" content="A brief description of my page." />
        <meta property="og:image" content="https://www.mysite.com/static/my-image.jpg" />
 */}
      {/* Twitter */}

      {/* 
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="mysite.com" />
        <meta property="twitter:url" content="https://www.mysite.com/my-page" />
        <meta name="twitter:title" content="My Awesome Page" />
        <meta name="twitter:description" content="A brief description of my page." />
        <meta name="twitter:image" content="https://www.mysite.com/static/my-image.jpg" />
      </Head>
*/}
      <section id="blog" className="bg-[#F9F6F0] pb-10 pt-20 lg:pb-20 lg:pt-[60px]">
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
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">


            {data.map(individual => (


              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
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

      <Contact />
    </>
  );
};



export default page;