let signupform = document.querySelector('.signupform');
let result = signupform.querySelector('.result');





let gender = signupform.querySelectorAll('input[type="radio"]');



signupform.onsubmit = ('submit', function(e){
    e.preventDefault();
    gender.forEach(data => {
        console.log(data);
        // if (data.hasAttribute(checked)) {
        //     console.log(data.value);
            
        // }
    });

    if (gender == 'input[value="Male"]') {
        console.log(gender.value);
    }else if (gender == 'input[value="Female"]') {
        console.log(gender.value);
    }
   
  












    let skill = signupform.querySelectorAll('input[type="checkbox"]:Checked');
    let skills = [];
    
    // Gender : ${gender.value}
    for (let i = 0; i < skill.length; i++) {
        skills += ` ${skill[''+ i].value},`
   }
   result.innerHTML =`<li class="list-group-item">Gender : ${gender.value}</li>   
   <li class="list-group-item">Skill : ${skills}</li> 
   `;
});
