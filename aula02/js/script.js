const pokemon = 'oddish';
const button = document.querySelector("button");


function verifyPokemon(){
    const p = document.querySelector("p");
    const answer = document.querySelector("input").value.toLowerCase().trim();

    if(pokemon == answer){
        p.innerText = 'Você acertou!! peepoHappy';
        console.log('Você acertou');
        p.classList.remove("error");
        
        
    } else{
        p.classList.add("error");
        p.innerText = 'Você errou, peepoSad';
        console.log('Você errou');
    }
    p.style.display = 'block';
}

button.onclick = verifyPokemon;
