class Post 
{
  private _curtidas: number = 0;
  private _curtidores: string[] = [];

  constructor(
    private _mensagem: string
  ) {}

  
  public curtir(usuario_que_curtiu: string):void {
    this._curtidas ++;
    this._curtidores.push(usuario_que_curtiu); 
  }
  
  public get mensagem(): string {
    return this._mensagem;
  }

  public get curtidas(): number {
    return this._curtidas;
  }

  public  retornaCurtidores(): string {
    return this._curtidores.join(' ');
  }

  public toString(): string {
    return this.mensagem;
  }
}

export { Post }