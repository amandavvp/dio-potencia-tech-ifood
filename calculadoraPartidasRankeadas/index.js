let saldoVitorias = resultado(198, 21)

function resultado(numVitorias, numDerrotas){
    let calculo = numVitorias - numDerrotas
    return calculo
}

if (saldoVitorias <= 10) {
	nomeNivel = "Ferro"
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    	nomeNivel = "Bronze"
    } 
    else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    	nomeNivel = "Prata"
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80){
   	nomeNivel = "Ouro"
    }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90){
   	nomeNivel = "Diamante"
    }
    else if (saldoVitorias >= 91 && saldoVitorias <= 100){
   	nomeNivel = "Lendário"
    }
   else {
   	nomeNivel = "Imortal"
    }

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nomeNivel)