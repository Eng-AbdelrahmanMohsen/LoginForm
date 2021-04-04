var userName = document.getElementById('username');
var userPass = document.getElementById('userpass');
var userMail = document.getElementById('usermail');
var repeatpass = document.getElementById('UserPass');
var showPass = document.getElementById('show-password');
// ===============================================================
var userMessage = document.getElementById('usertxt');
var passMessage = document.getElementById('passtxt');
var mailMessage = document.getElementById('mailtxt');
var secondMessage = document.getElementById('PassTxt');
// ================================================================

var nameSuccess = document.getElementById('success-name');
var nameFailed = document.getElementById('failed-name');
// ===============================================================
var passSuccess = document.getElementById('success-pass');
var passFailed = document.getElementById('failed-pass');
var secondsuccess = document.getElementById('Success-Pass');
var secondfailed = document.getElementById('Failed-Pass')
// ===============================================================
var mailSuccess = document.getElementById('success-mail');
var mailFailed = document.getElementById('failed-mail');
// ==============================================================
var validationButton = document.querySelector('button');

// ======================== Name Function =================================================
function checkName()
{
    if(userName.value =='')
    {
        userMessage.innerText = "Name Can not be blank";
        userMessage.style.color = 'red';
        nameFailed.classList.remove('invisible');
    }

    else if( !(userName.value>='a' && userName.value<='z') && !(userName.value>='A' && userName.value<='Z'))
    {
        userMessage.innerText = "Name must not contain any numbers";
        userMessage.style.color = 'red';
        nameFailed.classList.remove('invisible');
    }

    else if((userName.value).length < 8)
    {
        userMessage.innerText = "User Name must be at least 8 characters";
        userMessage.style.color = 'red';
        nameFailed.classList.remove('invisible');
    }

    else
    {
        userMessage.innerText = "Valid Name";
        userMessage.style.color = 'green';
        nameSuccess.classList.remove('invisible');
    }
}

// ==========================Password Function ======================================
function checkPassword()
{
    if(userPass.value =='')
    {
        passMessage.innerText = "Password Can not be blank";
        passMessage.style.color = 'red';
        passFailed.classList.remove('invisible');
    }

    else if((userPass.value).length < 8)
    {
        passMessage.innerText = "Password must contain at least 8 characters, including upper/lowercase/symbols/numbers";
        passMessage.style.color = 'red';
        passFailed.classList.remove('invisible');
    }

    else if(!((userPass.value).length < 8)  || !(userPass.value=''))
    {
        passMessage.innerText = "Valid Password";
        passMessage.style.color = 'green';
        passSuccess.classList.remove('invisible');
    }

    if((userPass.value)==(repeatpass.value))
    {
        secondMessage.innerText = "Password Rematch";
        secondMessage.style.color = 'green';
        secondsuccess.classList.remove('invisible');
    }
    
     if((userPass.value)!=(repeatpass.value))
    {
        secondMessage.innerText = "Password  not Rematch";
        secondMessage.style.color = 'red';
        secondfailed.classList.remove('invisible');
    }
}

function showToggle()
{
    if(userPass.type == "password" || repeatpass.value == "password")
    {
        userPass.type = "text";
        repeatpass.type = "text";
    }
    else
    {
        userPass.type = "password";
        repeatpass.type = "password";
    }
}

// ==========================Email Function =================================================
function checkMail()
{
    if((userMail.value).indexOf('@')== -1 || userMail.value == '')
    {
       mailMessage.innerText = userMail.value + ' is not a valid email address';
       mailMessage.style.color = 'red';
       mailFailed.classList.remove('invisible');
    }
    else
    {
        mailMessage.innerText = ' Vaild EMail';
        mailMessage.style.color = 'green';
        mailSuccess.classList.remove('invisible');
    }
}


function validateInputs()
{
    checkName();
    checkPassword();
    checkMail();
    showToggle();
}