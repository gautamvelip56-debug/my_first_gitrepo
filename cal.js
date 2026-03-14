let inputBox = document.getElementById('inputbox');
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
        else if (buttonText=== '=') {
            try{
                inputBox.value = eval(inputBox.value);
            }
            catch {
                inputBox.value = 'error';
            }

        }
        else if (buttonText=== 'BIN') {
            try{
                let num = parseInt(inputBox.value);
                inputBox.value = num.toString(2);
            }
            catch{
                inputBox.value = 'error';
            }
        }
        else if (buttonText=== 'HEX') {
            try{
                let num = parseInt(inputBox.value);
                inputBox.value = num.toString(16);
            }
            catch{
                inputBox.value = 'error';
            }
        }
        else if (buttonText=== 'OCT') {
            try{
                let num = parseInt(inputBox.value);
                inputBox.value = num.toString(8);
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