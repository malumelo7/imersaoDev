var secretNumber = parseInt(Math.random()*10);
var i = 3;

var p = document.querySelector('p');
var button = document.querySelector('button');




function verifyGuess(){

    var answer = document.querySelector('input').value;

    if(secretNumber == answer){
        p.innerText = 'Você Acertou!';
        console.log('Voce acertou');
    } else if(secretNumber < answer){
        p.innerText = "O valor é menor que esse";
        console.log('O valor é menor que esse');
        i--;
    }else if(secretNumber > answer){
        p.innerText = 'O valor é maior que esse'
        console.log('O valor é maior que esse');
        i--;
    }

    if (i == 0){
        p.innerText = 'Suas tentativas acabaram! O numero secreto era ' + secretNumber;
        console.log('Suas tentativas acabaram! O numero secreto era ' + secretNumber);
        i = 3;
        secretNumber = parseInt(Math.random()*10);
    }
}

button.onclick = verifyGuess;