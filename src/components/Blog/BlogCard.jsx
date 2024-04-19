import config from "@/config";
import formatoFecha from "@/helpers/formatoFecha";

const BlogCard = ({ id, image, date, CardTitle, CardDescription , slug}) => {


    const dateEspanol = formatoFecha(date);

    return (
      <>
        
          <div className="mb-10 w-full">
            <div className="mb-8 overflow-hidden rounded h-[200px] w-full content-center justify-center">
              <img src={`${image}`} alt="" className="w-full" />
            </div>
            <div>
              {dateEspanol && (
                <span className="mb-5 inline-block rounded bg-mi-naranja px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                  {dateEspanol}
                </span>
              )}
              <h3>
                <a
                  href= {`/${slug}`}
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
        
      </>
    );
  };


export default BlogCard;