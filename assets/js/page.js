const myForm = document.getElementById('form');
const myName = document.getElementById('navn');
const surName = document.getElementById('surName');
const myEmail = document.getElementById('email');
const password1 = document.getElementById('pass1');
const password2 = document.getElementById('pass2');
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) =>{

    event.preventDefault();

    let trimmedName = myName.value.trim();
    let trimmedSurName = surName.value.trim();
    let trimPassword1 = password1.value.trim();
    let trimPassword2 = password2.value.trim();

    if(trimmedName.length > 1 && trimmedSurName.length > 1 && validateEmail(myEmail.value) && trimPassword1.length > 5 && trimPassword2 === trimPassword1){
        
        let success = document.createElement('h4');
        success.innerText = 'Du er tilmeldt!';

        myForm.appendChild(success);

        submit.style.display = 'none';

    }else{

        if(trimmedName.length < 2){
            alert('Navnet skal have mindst 2 karakterer!');
        }
        if(trimmedSurName.length < 2){
            alert('Efternavnet skal have mindst 2 karakterer!');
        }
        if(!validateEmail(myEmail.value)){
            alert('Du har ikke indtastet en gyldig email!');
        }
        if(trimPassword1 < 6){
            alert('Din adgangskode skal have mindst 6 karakterer!');
        }
        if(trimPassword2 !== trimPassword1){
            alert('Du har ikke gentaget koden korrekt!');
        }
    }
});

function validateEmail (email){
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let isValid = emailRegex.test(email);

    return isValid;
}