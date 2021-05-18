import { Amigo } from "./Amigo"

class Rede 
{
  private _amigos: Amigo[] = [];
  
  public adicionarAmigos(amigo: Amigo): void {
    this._amigos.push(amigo);
  }

  public timeline(): string {
    let timeline_msg = ""
    this._amigos.forEach(amigo => {
      timeline_msg += `${amigo.nome}: \n`;
      timeline_msg += amigo.postsCurtidos();
    })
    return timeline_msg;
  }

}

export { Rede }