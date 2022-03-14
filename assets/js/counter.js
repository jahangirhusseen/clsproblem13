// counter js

//** */
let userinput = document.getElementById('userinput');
let start = document.getElementById('start');
let countStop = document.getElementById('stop');
let countReset = document.getElementById('reset');
let counterProgress = document.querySelector('.counterProgress');
let counter_output = document.querySelector('#counter_result h3');


let count;
let counter;
start.addEventListener('click', function(e){
    e.preventDefault();
    count =userinput.value;
   
    counter = setInterval(() => {
        counter_output.innerHTML = count ;


        let width = counterProgressbar(userinput.value,count) ;
        
        counterProgress.style.width = `${width}%` ;
        if (width > 70 && width <= 100) {
            counterProgress.style.backgroundColor = '#ffc107';
            
        }else{
            counterProgress.style.backgroundColor = 'tomato';
        }

        if (count == 0) {
            clearInterval(counter_reslut);
        }
        count--;
    
    }, 1000);
    
});

countStop.addEventListener('click',function(){
    clearInterval(counter);
});
countReset.addEventListener('click',function(){
    clearInterval(counter);
    counter_output.innerHTML = 0 ;
    counterProgress.style.width = 0;
});

function counterProgressbar(userinput,count) {
    return `${(count  * 100) / userinput}`; 
}