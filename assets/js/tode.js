// ToDo js
let userData = document.getElementById('userData');
let addBtn = document.getElementById('add');
let list =document.querySelector('.listGroupText');

addBtn.addEventListener('click', function(){    
 list.innerHTML +=`<li class="list-group-item">${userData.value}</li> `;
 userData.value = '';

});