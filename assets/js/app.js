let signupform = document.querySelector('.signupform');
let uname = signupform.querySelector('input[placeholder="Name"]');
let email = signupform.querySelector('input[placeholder="Email"]');
let select = signupform.querySelector('select');
let result = signupform.querySelector('.result');

/**
 * ekane variable dorle value gula paina;
 * let gender = signupform.querySelector('input[type="radio"]:Checked ');
let skill = signupform.querySelectorAll('input[type="checkbox"]:Checked');
 */



signupform.onsubmit = ('submit', function(e){
    e.preventDefault();
    let gender = signupform.querySelector('input[type="radio"]:Checked ');
    let skill = signupform.querySelectorAll('input[type="checkbox"]:Checked');

    
    
    let skills = '';


    for (let i = 0; i < skill.length; i++) {
        skills += ` ${skill[''+ i].value},`
   }

   if (uname.value == '' || email.value == '' || select.value == '') {
    result.innerHTML =validation('Please try again') 
       
   }else{
    result.innerHTML =validation(`Name : ${uname.value}
    Email : ${email.value}  Location : ${select.value} Gender : ${gender.value} skill : ${skills}`, `info`)
    uname.value  = ``;
    email.value  = ``;
    select.value = ``;
    gender.value = ``;
   }

})

function validation(outputResult, type = 'danger') {
    return `<p class = "alert alert-${type}"> ${outputResult}</p>`
}






