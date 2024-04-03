import config from "@/config";

const fetchBlogs = async (params) => {

    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_API}`
      }
    }
  
  
    const request = await fetch(`${config.api}/api/blogs?populate=*&${params}`, reqOptions, { cache: 'no-store' });
    const response = await request.json();
  
    return response;
  }


  export default fetchBlogs;