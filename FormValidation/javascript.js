const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e =>{
e.preventDefault();
checkInput();
});
function checkInput(){
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if(usernameValue === ''){
    setError(username, 'Username Cannot be Blank');
}
else{
    setSuccess(username);
}

if(emailValue === ''){
    setError(email, 'Email Cannot be Blank');
}
else if(!isEmail(emailValue)){
    setError(email,'Not a Valid email');
}
else{
    setSuccess(email);
}
function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

if(passwordValue === ''){
    setError(password, 'Password Cannot be Blank');
}
else{
    setSuccess(password);
}

if(password2Value === ''){
    setError(username, 'Confirm Password Cannot be Blank');
}
else if(passwordValue !== password2Value)(
    setError(password2,'Password does not match')
    
)
else{
    setSuccess(password2);
}
}
function setError(input,Message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className ='form-control error';
    small.innerText=message;
}

function setSuccess(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
}
