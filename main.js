let button = document.querySelector('.button');
let links = document.querySelector('.links');

button.addEventListener('click',function(){
 button.classList.toggle('animated');
 links.classList.toggle('linksOpen');
})


const appendItem = document.querySelector('.appendItem');
const inputForm = document.querySelector('.inputForm');
const submitForma = document.querySelector('.submitForma');
const deleteItem = document.querySelector('.delItem');


submitForma.addEventListener('click',function(e){
    e.preventDefault();
 
    let value = inputForm.value;
     
    if(value===''){
      alert('Please iput a value')
    }

    else{
        const div = document.createElement('div');
        div.classList='append-single';
        div.innerHTML=`
        
        <p>${value}</p>
        <i class="delItem">X</i>
        
        `;
        appendItem.appendChild(div);
        console.log(div);


        
    }

  inputForm.value='';
    
    
})


appendItem.addEventListener("click",function(e){
  if (e.target.classList.contains('delItem')){
     let parent = e.target.parentElement;
     parent.remove();
  }
})



