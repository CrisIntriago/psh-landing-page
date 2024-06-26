export const dynamic = "force-dynamic";

import React from 'react'
import Contact from '@/components/Contacto/Contact';
import SocialMedia from '@/components/Contacto/SocialMedia';
import BlogCard from '@/components/Blog/BlogCard';
import fetchBlogs from '@/helpers/fetch-blogs';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import config from '@/config';
import formatoFecha from '@/helpers/formatoFecha';



export async function generateMetadata(props) {
  // read route params

  // fetch data
  const { data } = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`)

  const contenido = await data[0].attributes.Contenido;

  const imgbanner = await data[0].attributes.Banner;

  const titulo = data[0].attributes.Titulo
  const banner = imgbanner.data.attributes.url


  return {
    title: titulo,
    openGraph: {
      images: [banner],
    },
    description: "Auditores Independientes PSH",
  }
}





const BlogDetails = async (props) => {


  const { data } = await fetchBlogs(`filters[slug][$eq]=${props.params.slug}`)

  const query = await fetchBlogs("sort[0]=createdAt:desc&pagination[pageSize]=2&pagination[page]=1&publicationState=live")
  const cards = query.data;

  const contenido = await data[0].attributes.Contenido;

  const imgbanner = await data[0].attributes.Banner;
  console.log(imgbanner.data.attributes.url)



  // Data

  const titulo = data[0].attributes.Titulo
  const banner = imgbanner.data.attributes.url
  const resumen = data[0].attributes.Resumen;

  const fecha = formatoFecha(data[0].attributes.createdAt);

  return (
    <>



      <section className="pb-10 pt-2 lg:pb-20 lg:pt-[20px]">
        <div className="container mx-auto">

          <div className=' relative w-full h-[300px] lg:h-[500px] lg:w-full '>
            <div className="absolute inset-0 bg-black bg-opacity-70">
              <img
                className="object-cover w-full h-full"
                src={`${banner}`}
                alt="Banner"
                style={{ filter: "brightness(50%)" }}
              />
            </div>


            <div className="absolute inset-0 flex items-center justify-center px-[15px]">
              <div className="text-white text-center">
                <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4">{titulo}</h1>
                <p className="text-lg md:text-xl">{fecha}</p>
              </div>
            </div>

          </div>
          <div className='flex w-full flex-wrap'>

            <div className='pt-2 px-6 md:pt-11 lg:pt-11 zona-texto lg:w-3/4 md:w-2/3 w-full  text-slate-800 lg:px-11 md:px-5 md:mr-7 pb-2 lg:pb-16 mt-5 bg-[#F9F6F0]  text-justify justify-center shadow-md'>

              {/* aqui va el texto*/}
              <BlocksRenderer content={contenido} />

              <section className='text-center mt-20'>

                <p className='mt-5 px-11'></p>
                <p>Ante cualquier duda, comuníquese con nosotros.</p>
                <br></br>

                <p>info@pshauditores.com</p>

                <br></br>
                <p>+593 96 062 7444</p>
                <div className='flex items-center justify-center mt-4'>
                  <SocialMedia />
                </div>
              </section>
            </div>




            <div class="zona-recomendados lg:w-1/4 md:w-1/3 mx-auto flex-1 flex-wrap mt-10 justify-center items-center">
              {cards.map(card => (
                <BlogCard
                  id={card.id}
                  image={`${card.attributes.Banner.data.attributes.formats.medium
                    ? card.attributes.Banner.data.attributes.formats.medium.url
                    : card.attributes.Banner.data.attributes.formats.thumbnail.url}`}
                  date={card.attributes.createdAt}
                  CardTitle={card.attributes.Titulo}
                  CardDescription={card.attributes.Resumen}
                  slug={card.attributes.slug}
                />
              ))}
            </div>

          </div>



        </div>


        <Contact />


      </section >
    </>
  )
}



export default BlogDetails;

