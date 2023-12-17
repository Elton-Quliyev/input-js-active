


var input = document.querySelector(".container__inp");
var btnAdd = document.querySelector(".btn");
var list = document.querySelector(".container__list");





btnAdd.addEventListener("click" , function(){

    var btnEdit = document.createElement("button");
    var span = document.createElement('span');
    var li = document.createElement('li')

    span.textContent = input.value;


    if(input.value.trim() == ""){
        alert("siz metninizi bosluq veya bosluqlar sekilinde daxil etmisiz")
    }
    else{
        
    list.appendChild(li)
    li.appendChild(span)
    li.appendChild(btnEdit)

    btnEdit.classList.add("btn")
    btnEdit.innerText = "Edit"
    btnEdit.style.backgroundColor = "red"
    li.classList.add("container_li")
    list.style.padding = "0px"
    list.classList.add("list2")

    input.value = "";


    btnEdit.addEventListener("click" , function(){

        var a = prompt("deyiseceyiniz texti yazin..." , span.textContent)
        
        span.textContent = a.trim();
        if(a.trim()==""){
            alert("bele bir yazi yaza bilmezsiniz",)
           
            li.remove();
            
        }

    })
    }

})


var Sekil = document.querySelector(".sekil"); 
var img = createElement(".image");



img.src="./faiq.jpg";
img.appendChild(Sekil);