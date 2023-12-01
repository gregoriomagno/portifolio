import { StaticImageData } from "next/image";

export interface IProject{
    title: string,
    description: string,
    stack: string[],
    link: string,
    img: string | StaticImageData
}