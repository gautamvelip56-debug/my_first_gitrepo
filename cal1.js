let inputBox = document.getElementById('input');
let buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener('click',() => {
        let buttonText = button.textContent;
        if (buttonText ==='AC'){
            inputBox.value = '';
        }
        else if(buttonText==='DEL'){
            inputBox.value = inputBox.value.slice(0,-1);
        }
        else if (buttonText=== 'BIN TO DEC') {
            try{
                inputBox.value = parseInt(inputBox.value,2);
            }
            catch{
                inputBox.value = 'error';
            }
        }
        else if (buttonText=== 'HEX TO DEC') {
            try{
                inputBox.value = parseInt(inputBox.value,16);
            }
            catch{
                inputBox.value = 'error';
            }
        }
        else if (buttonText=== 'OCT TO DEC') {
            try{
                inputBox.value = parseInt(inputBox.value,8);
            }
            catch{
                inputBox.value = 'error';
            }
        }
        else {
            inputBox.value += buttonText;
        }
    });
});