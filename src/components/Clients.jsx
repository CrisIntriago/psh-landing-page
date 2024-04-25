import React, {useState}  from "react";
import { CardClient } from "./CardClient";
import { Slide } from "react-awesome-reveal";
import Row from "./Row";



const Clients = () => {
  const [playing, setPlaying] = useState(true);
  const clientLogos = [
    "/logoArkavid.png",
    "/logoDelpyg.png",
    "/logoNavieraNeptuno.png",
    "/logoTECASEN.png",
    "/logoSeaWorldTraffic.png",
  ];

  return (
    <Slide direction="up" triggerOnce cascade>
      <section className="container mx-auto overflow-hidden pt-14 bg-white mt-10">
      <div className="mx-auto mb-[30px] max-w-[510px] text-center">
      <span className="mb-2 block text-lg font-semibold text-mi-naranja">
                Nuestros Clientes
              </span>
              <h2 className="mb-2 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                Principales clientes de nuestra firma
              </h2>
            </div>
        <div className='mt-8'>
          <div className='overflow-hidden w-full'>
            <Row speed={20} playing={playing}>
              {clientLogos.map((route, idx) => (
                <CardClient key={idx} route={route} />
              ))}
              {clientLogos.map((route, idx) => (
                <CardClient key={idx + clientLogos.length} route={route} />
              ))}
            </Row>
          </div>
        </div>
      </section>
    </Slide>
  );
};

export default Clients;