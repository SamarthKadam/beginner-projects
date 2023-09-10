import User from './helper/User.js'
const Name=document.querySelector('.input_name');
const Gender1=document.querySelector('.maleparent');
const Gender2=document.querySelector('.femaleparent');
const Date=document.querySelector('.input_date');
const Email=document.querySelector('.input_email');
const Phone=document.querySelector('.input_number');
const save=document.querySelector('.button2');
const clear=document.querySelector('.button1');
const firstPart=document.querySelector('.firstPart');
const secondPart=document.querySelector('.secondPart');
let isMale=undefined;
let arr=[];

Gender1.addEventListener("click",function(){
    this.style.backgroundColor='#FED501';
    Gender2.style.backgroundColor='#F6F7F9'
    isMale=1;
})

Gender2.addEventListener("click",function(){
    this.style.backgroundColor='#FED501';
    Gender1.style.backgroundColor='#F6F7F9';
    isMale=0;

})


function clearWhole()
{
        const data=[Name,Date,Email,Phone];
        data.forEach((element)=> { 
            element.value='';
        });
        isMale=undefined;
        Gender1.style.backgroundColor='#F6F7F9';
        Gender2.style.backgroundColor='#F6F7F9'

}
clear.addEventListener("click",clearWhole)

save.addEventListener("click",function(){
    firstPart.classList.add('animate');
    setTimeout(()=>{
        firstPart.classList.add('hidden');
        secondPart.classList.remove('hidden');
        if(!(Name.value && isMale && Date.value && Email.value && Phone.value))
        {
            alert("Enter the inputs correctly");
        }
        let userData=new User(Name.value,isMale,Date.value,Email.value,Phone.value);
        userData.render();
        clearWhole();
        arr.push(userData);
    },1000)
})