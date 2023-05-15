const btnColors = document.querySelectorAll("#btn");

for(let i = 0; i < btnColors.length; i++) {
   btnColors[i].style.color = '#33ffd8';
}
const display = document.getElementById('display')

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '⬅':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText =  'facelessDev indeed!!';
                    }
                    
                    break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

