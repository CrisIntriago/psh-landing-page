import Image from "next/image";

export const CardClient = ({ route }) => {
  return (
    <div className='h-full w-[400px] m-2 flex-shrink-0'>
        <div className='rounded-3xl overflow-hidden relative h-[160px] flex justify-center items-center'>
            <Image
                src={route}
                alt="logo"
                width={150}
                height={150}
                loading="lazy"
            />
        </div>
    </div>
  )
};
