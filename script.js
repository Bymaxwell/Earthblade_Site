const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login-button');
const back_ground = document.querySelector('.wallpaper_1');

let contador = 1
setInterval(()=>{
    let n = 3; //Número máximo de imagens no Login
    if(contador == n){
        back_ground.classList.remove(`wallpaper_${n}`);
        back_ground.classList.add(`wallpaper_${1}`);
        contador = 0;
    }
    else{
    back_ground.classList.remove(`wallpaper_${contador}`);
    back_ground.classList.add(`wallpaper_${contador+1}`);
    }
    contador+=1;

}, 4000);


const handleFocus = (event)=>{
    const span = event.target.previousElementSibling;
    span.classList.add('span_active');
}

const NoFocus = (event)=>{
    const span = event.target.previousElementSibling;
    if(event.target.value == ''){
    span.classList.remove('span_active');
    }
}

const button_change = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', '');
    }

}

inputs.forEach((input) => input.addEventListener('focus', handleFocus))
inputs.forEach((input) => input.addEventListener('focusout', NoFocus))
inputs.forEach((input) => input.addEventListener('input', button_change))
