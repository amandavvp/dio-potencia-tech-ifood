class heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi,){
        // para chamar e declarar se usa a palavra "this"
        this.nomeHeroi = nomeHeroi 
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
  }
  
  atacar(){
    let ataque = "";
    switch (this.tipoHeroi) {
      case "Mago":
        ataque = "magia";
        break;
      case "Guerreiro":
        ataque = "espada";
        break;
      case "Monge":
        ataque = "artes marcias";
        break;
      case "Ninja":
        ataque = "shuriken";
        break;    
      default:
        ataque = "não possui um ataque definido";
    }
    console.log(`O ${this.tipoHeroi} atacou usando ${ataque} `);
  }
  }
  
  let ataqueHeroi = new heroi("Jackie Chan", 27, "Monge")
  ataqueHeroi.atacar()