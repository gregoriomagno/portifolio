import { IProject } from "@/types/project";
import imagePokemon from "../../public/assets/pokemon.png";
import imageAppetit from "../../public/assets/appetit.png";
import imageLeadster from "../../public/assets/leadster.png";

export const listProjects: IProject[] = [
  {
    title: "Appetit",
    description: "Food project",
    stack: ["React Js", "CSS", " HTMl"],
    link: "https://appetit-three.vercel.app/login",
    img: imageAppetit,
  },
  {
    title: "Pokémon",
    description: "Food project",
    stack: ["React Js", "CSS", " HTMl"],
    link: "https://pokemo-sigma.vercel.app/home",
    img: imagePokemon,
  },
  {
    title: "Leadster",
    description: "Food project",
    stack: ["React Js", "CSS", " HTMl"],
    link: "https://leadster-test-hazel.vercel.app/",
    img: imageLeadster,
  },
];
