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
        else {
            inputBox.value += buttonText;
        }
    });
});