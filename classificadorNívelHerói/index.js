let nomeHeroi = "Tony Stark"
let nivelXP = 1002

if (nivelXP <= 1000) {
	nomeNivel = "Ferro"
    }
    else if (nivelXP >= 1001 && nivelXP <= 2000){
    	nomeNivel = "Bronze"
    } 
    else if (nivelXP >= 2001 && nivelXP <= 5000){
    	nomeNivel = "Prata"
    }
    else if (nivelXP >= 5001 && nivelXP <= 7000){
   	nomeNivel = "Ouro"
    }
    else if (nivelXP >= 7001 && nivelXP <= 8000){
   	nomeNivel = "Platina"
    }
    else if (nivelXP >= 8001 && nivelXP <= 9000){
   	nomeNivel = "Ascendente"
    }
   else if (nivelXP >= 9001 && nivelXP <= 10000){ 
   	nomeNivel = "Imortal"
    }
   else {
   	nomeNivel = "Radiante"
    }

console.log("O Herói " + nomeHeroi + " (XP " + nivelXP + ") está no nível " + nomeNivel + "!")
    
