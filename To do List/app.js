//variable declaration 

const  btn = document.getElementById("button");
const inpt = document.querySelector(".input");
const tskParent = document.querySelector(".tasks");
const warning = document.querySelector("#warningMsg");

//add event function

function addTasks(e){
    e.preventDefault();
    if( inpt.value !==" "){
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = "X";
        btn.className = "btn2";
        li.append(inpt.value,btn);
        tskParent.append(li);
        inpt.value = " ";
    }
     else {
        warning.textContent = "Warning!  empty input";
        setTimeout(()=>{            
            warning.textContent = "";
        }, 2000)
    }
}


btn.addEventListener("click", addTasks);

//add event function end

//remove task


tskParent.addEventListener("click", (e) =>{
    let ele =e.target;
    if(ele.tagName === "BUTTON" && ele.textContent === "X"){
       let parent = ele.parentNode;
       parent.remove(ele.parentNode);
    }
   
});