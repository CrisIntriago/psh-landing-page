import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


const IconoWhats = () => {
    return (
        <>
            <a href={"https://api.whatsapp.com/send/?phone=593960627444&text&type=phone_number&app_absent=0"} target="_blank" rel="noopener noreferrer" className='fixed bottom-10 right-10 w-15 h-15 bg-[#25d366] text-white rounded-full text-center text-5xl shadow-md z-50'>
                <FaWhatsapp size={70} />
            </a>
        </>
    )
}

export default IconoWhats