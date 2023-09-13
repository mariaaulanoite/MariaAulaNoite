
 
/*
    /*
    const numero1 = 15
    const numero2 = 5
    if(numero1>numero2){
    console.log("o numero1 e maior que o numero2")
    }
    else if(numero1<numero2){
    console.log("o numero um e menor que o numero2")
    }
    else{
    console.log("o numero1 e igual ao numero2")
    }
    */
    /*
    const pokemonInicial = "squirtle"
    const pokemon2 = "charmander"
    const pokemon3 = "bulbasauro"
     if(pokemonInicial === "charmander"){
    console.log("seu pokemon e do tipo fogo.")
     }
     else if(pokemonInicial === "bulbasauro"){
    console.log("seu pokemon é do tipo planta e veneno.")
     }
     else{
     console.log("seu pokemon é do tipo água.")
     }
    */
    
     let concluçãoEnsinoMédio = prompt("voçe concluiu o ensino medio?")
     let idade = number(prompt("qual a sua idade?"))
     let cursandoFaculdade = prompt("voçe esta cursando faculdade?")
     
     function podeEntrarNaFacul (concluçãoEnsinoMédio, idade, cursandoFaculdade){
     if (concluçãoEnsinoMédio === "não" && idade>=18 && cursandoFaculdade === "não"){
     console.log("voçe pode fazer faculdade")
     } else {
         console.log("voçe não pode fazer faculdade")
     }

         podeEntrarNaFacul ("concluçãoEnsinoMédio, idade, cursandoFaculdade")