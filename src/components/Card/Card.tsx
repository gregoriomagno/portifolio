import Image, { StaticImageData } from "next/image";
import React from "react";
import BadgeSkill from "../badgeSkill/BadgeSkill";
import Link from "next/link";
interface CardProps {
  title: string;
  description: string;
  stack: string[];
  link: string
  img: string | StaticImageData;
}
const Card = ({ title, description, img, stack,link }: CardProps) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-64 w-full">
        <Image
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
          src={img}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">{title}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 mb-4">
          {stack.map((skil: string, index: number) => {
            return <BadgeSkill title={skil} key={index} />;
          })}
        </div>

        <Link href={link}  target="_blank" className="rounded-full bg-blue-600 py-2 px-3.5 font-com font-semibold text-sm capitalize text-white shadow shadow-black/60">
          Acessar
        </Link>
      </div>
    </div>
  );
};

export default Card;
