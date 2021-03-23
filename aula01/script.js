document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault();
    
    var real = document.querySelector('.real').value;
    console.log(real)
    document.querySelector('.dolar').textContent = '$' + Number(real / 5.49).toFixed(2);
});
