import { Post } from "./Post";

class Amigo 
{ 
  private posts: Post[] = [];
  private _post_maior_curtidas: any

  constructor(
    private _nome: string
  ) {}


  public curtir(post: Post): void {
    post.curtir(this._nome);
  }

  public postar(post: Post):void {
    if(!this.posts.length) 
      this.post_maior_curtidas = post;

    this.posts.push(post);
  }

  public set nome(nome: string) {
    this._nome = nome; 
  }

  public get nome(): string {
    return this._nome;
  }

  public set post_maior_curtidas(post: Post) {
    this._post_maior_curtidas = post;
  }

 public retornaPostMaisCurtido(): Post {
  this.posts.forEach(post => {
    let curtidas: number = post.curtidas;
    const post_mais_curtido = this._post_maior_curtidas?.curtidas;
    
    if(!post_mais_curtido)
      throw new Error("O perfil não possui posts");

    if(curtidas > post_mais_curtido) 
      this._post_maior_curtidas = post;
  })

  return this._post_maior_curtidas ;
 }

 public postsCurtidos(): string {
  let posts_curtidos = "";
  this.posts.forEach(post => {
    posts_curtidos += `  ${post.mensagem}: ${post.curtidas} curtidas \n`
  });
  return posts_curtidos;
 }
}

export { Amigo }