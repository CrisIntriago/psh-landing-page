import config from "@/config";

const fetchBlogs = async (params) => {

    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN_API}`
      }
    }
  
  
    const request = await fetch(`${config.api}/api/pshblogs?populate=*&${params}`, reqOptions);
    const response = await request.json();
  
    return response;
  }


  export default fetchBlogs;