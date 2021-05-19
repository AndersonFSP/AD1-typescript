import { Amigo } from "./modelo/Amigo";
import { Post } from "./modelo/Post";
import { Rede } from "./modelo/Rede";

const paraiso: Rede = new Rede();
const anderson: Amigo = new Amigo("Anderson filipe");
const letty: Amigo = new Amigo("Letty");
const emisu: Amigo = new Amigo("Emerson");

paraiso.adicionarAmigos(anderson);
paraiso.adicionarAmigos(letty);
paraiso.adicionarAmigos(emisu);


const bomdia: Post = new Post("Bom dia");
const boatarde: Post = new Post("Boa tarde");
const boanoite: Post = new Post("Boa noite");

anderson.postar(bomdia);
anderson.postar(boatarde);
letty.postar(boanoite);

letty.curtir(bomdia);
letty.curtir(boatarde);
anderson.curtir(boanoite);
emisu.curtir(bomdia);
emisu.curtir(boatarde);
emisu.curtir(boanoite);

console.log("TIMELINE")
console.log(paraiso.timeline())
console.log()
console.log("Posts mais curtidos de "+ anderson.nome);
console.log("Quem curtiu: " + anderson.retornaPostMaisCurtido().retornaCurtidores())
