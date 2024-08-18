let updatePasswordForm=document.getElementById('updatePasswordForm');
let newPassword=document.getElementById('newPassword');
let confirmPassword=document.getElementById('confirmPassword');
let newError=document.getElementById('newerror');
let confirmError=document.getElementById('confirmerror');
let notmatch=document.getElementById('notmatch');


newPassword.addEventListener('blur',validNew);
confirmPassword.addEventListener('blur',validConfirm);


function validNew(){
    if(newPassword.value===""){
        newError.textContent="Required*";
    }
    else{
        newError.textContent="";
    }
}

function validConfirm(){
    if(confirmPassword.value===""){
        confirmError.textContent="Required*";
    }
    else{
        confirmError.textContent="";
    }
}

function bothmatch(){
    if(newPassword.value!=confirmPassword.value){
        notmatch.textContent="Passwords must be same";
       
    }
    else{
        notmatch.textContent="";
    }
}

updatePasswordForm.addEventListener('submit',function(event)
{
    event.preventDefault();
    validNew();
    validConfirm();
    bothmatch();
}
);