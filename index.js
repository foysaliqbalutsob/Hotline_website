function getElement(id){
    const element = document.getElementById(id);
    return element;

}

const now = new Date();
const timeOnly = now.toLocaleTimeString();
console.log(timeOnly);

const btns = document.getElementsByClassName('card-btn');

for(let button of btns){



button.addEventListener('click', function(event){
  
    const  cardTitle = button.parentNode.parentNode.childNodes[3].innerText
    const cardNumber = button.parentNode.parentNode.childNodes[7].innerText

    console.log(cardTitle,cardNumber);

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