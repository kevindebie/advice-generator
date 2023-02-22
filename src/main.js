// Initial advice
getData();
function getData() {
    fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("advice-number").innerHTML = data.slip.id;
            document.getElementById("advice-quote").innerHTML = data.slip.advice;
        })
}
function newAdvice() {

    // Get new advice
    getData();

    // Fade animation for the id and quote text
    const id = document.querySelector('#advice-number');
    const quote = document.querySelector('#advice-quote');
    const button = document.querySelector('#dice-button');

    id.classList.add('fade');
    quote.classList.add('fade');
    button.classList.add('disable');

    setTimeout(function(){
        id.classList.remove('fade');
        quote.classList.remove('fade');
        button.classList.remove('disable');
    },1000)
}

