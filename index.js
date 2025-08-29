function getElement(id){
    const element = document.getElementById(id);
    return element;

}

const now = new Date();
const timeOnly = now.toLocaleTimeString();
console.log(timeOnly);

const btns = document.getElementsByClassName('card-btn');

for(let button of btns){



button.addEventListener('click', function(){
  
    const  cardTitle = button.parentNode.parentNode.childNodes[3].innerText
    const cardNumber = button.parentNode.parentNode.childNodes[7].innerText

    const coin = getElement('coin-container');
    const coinValue = parseInt(coin.children[0].innerText);
    coin.children[0].innerText = coinValue - 20;

    if(coinValue < 20) {
        alert("Not enough coins");
        coin.children[0].innerText = 0;

        return;
    }

    alert(` 📞 Calling ${cardTitle} ${cardNumber} ...`);


    

    const div = document.createElement('div');






    document.getElementById('history-container').innerHTML += `
        <div class="h-[100px] rounded-lg bg-[var(--Surface,rgba(250,250,250,1))] p-4 mb-4 flex justify-between">
        <div>
            <h1 class=" text-[18px]">${cardTitle}</h1>
            <h1 class ="text-[18px] text-[var(--Gray,rgba(92,92,92,1))]">${cardNumber}</h1>
        </div>    
        <div class="flex items-center">
        <h1 id="time">${timeOnly}</h1>

        </div>

        </div>
    `;
    document.getElementById('history-container').appendChild(div);




    

    

});



 


    }


    const clearButton = document.getElementById('refresh-btn');
    clearButton.addEventListener('click', 


        function(){
            document.getElementById('history-container').innerHTML = '';
        }
    )

    const copyButtons = document.getElementsByClassName('copy-btn');
    for (let button of copyButtons) {
        button.addEventListener('click', function () {

            console.log("Copy button clicked");
            const copyNumberCount = getElement('copy-number-count').innerText;
            const copyNumberCountParseInt = parseInt(copyNumberCount);
            getElement('copy-number-count').innerText = copyNumberCountParseInt + 1;
            console.log(copyNumberCountParseInt + 1);



            const cardTitle = button.parentNode.parentNode.childNodes[3].innerText;
            console.log(cardTitle);
            const cardNumber = button.parentNode.parentNode.childNodes[7].innerText;

            console.log(cardNumber);
            alert(`Copied ${cardNumber} to clipboard`);

            navigator.clipboard.writeText(cardNumber);
            
        });
    }




    const heartIcons = document.getElementsByClassName('heart-icon');

    for (let icon of heartIcons) {
        icon.addEventListener('click', function () {
            console.log("Heart icon clicked");

            const heartCount = parseInt(getElement('heart-count').innerText);
            getElement('heart-count').innerText = heartCount + 1;
            console.log(heartCount);

        });
    }   
    
 