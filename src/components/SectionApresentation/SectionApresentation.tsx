import React from "react";
import { ReactSVG } from "react-svg";
import Image from 'next/image'

const SectionApresentation = () => {
  return (
    <section className="flex w-full h-screen flex-col-reverse lg:flex-row  " id="home">
      <div className="flex flex-1 flex-col  justify-center ">
       
        
    
          <h3 className="text-lg lg:text-2xl ">Hello, my name is Gregorio Magno</h3>
          <h1 className="text-7xl ">Frontend Developer</h1>
          <h3 className="text-2xl">
            I like to create systems and websites in an agile and scalable way
          </h3>{" "}
  
      </div>
      <div className="flex flex-2  flex-col items-center justify-center ">
    
      <Image
              src="/ilustration.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={500}
              height={500}
              priority
            />
      <ReactSVG src="/ilustration.svg" />
      
      </div>
    </section>
  );
};

export default SectionApresentation;
