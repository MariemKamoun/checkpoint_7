const PlusButton=document.querySelectorAll('.quantity-button-plus')
const MinusButton=document.querySelectorAll('.quantity-button-minus')
const Price=document.querySelectorAll(".price-")
const deleteButton=document.querySelectorAll('.delete-button')
const quantity=document.querySelectorAll('.quantities')
const sum=document.querySelector('.sum-')
const card=document.querySelectorAll('.card')



for(let i=0; i<PlusButton.length; i++){
    PlusButton[i].addEventListener("click", function()
    {
      quantity[i].innerHTML++
      sum.textContent=Number(Price[i].innerHTML)+Number(sum.innerHTML)  
    }
        )
}


for(let i=0; i<MinusButton.length; i++){
    MinusButton[i].addEventListener("click", function()
    {
      if (quantity[i].innerHTML>0){
        quantity[i].innerHTML--
        sum.textContent=sum.textContent-Number(Price[i].innerHTML)
      }
    }
        )  


    }


for (let i=0; i<deleteButton.length; i++){
    deleteButton[i].addEventListener('click', function(){
        card[i].remove();
        sum.textContent=sum.textContent-Number(Price[i].innerHTML)*quantity[i].innerHTML

        console.log(card)
    }

    )
}


const HeartButton=document.querySelectorAll('.heart')


const colors = ['red','white'];
index=0

for (let i=0;i<HeartButton.length;i++){
  HeartButton[i].addEventListener('click',function onClick() {
    HeartButton[i].style.backgroundColor= colors[index];
    
  
    index = index >= colors.length - 1 ? 0 : index + 1;
  });

  }




