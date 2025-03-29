var comment = document.querySelector("#comment");
var inputValue = document.querySelector("#input");
var errormsg = document.querySelector("#errormsg");
var sendbtn = document.querySelector("#send");
var clearbtn = document.querySelector("#clear");
comment.classList.add("space-y-4");

function addComment() {
    const inputValues = inputValue.value;
    var new_div = document.createElement("div");
    var span = document.createElement("span");
    new_div.appendChild(span);
    span.innerText=inputValues;
    if(!inputValues.trim()){
        errormsg.classList.remove("hidden");
        setTimeout(() => {
           errormsg.classList.add("hidden") 
        }, 1000);
        return;
    }
    new_div.classList.add(
        "bg-gray-300",
        "rounded-lg",
        "p-4",
        "w-[80%]",
        "flex",
        "flex-wrap",
        "items-center",
        "gap-4"
    )
    var editbtn= document.createElement("button");
    editbtn.classList.add(
        "bg-green-500",
        "px-2",
        "py-1",
        "rounded-sm",
        "text-white"
    ) 
    var delbtn= document.createElement("button");
    delbtn.classList.add(
        "bg-purple-500",
        "px-2",
        "py-1",
        "rounded-sm",
        "text-white"
    ) 
    delbtn.innerText="Delete";
    editbtn.innerText="Edit";
    span.innerHTML=inputValues;

    delbtn.addEventListener("click", function () {
        comment.removeChild(new_div);
    })
    editbtn.addEventListener("click", function () {
       var edit_input= document.createElement("input");
       edit_input.type="text";
       edit_input.value=span.innerText;
       edit_input.classList.add("outline-none");
       span.replaceWith(edit_input);
       edit_input.focus();

       edit_input.addEventListener("blur", () => {
        span.innerText = edit_input.value;
        edit_input.replaceWith(span);
      });

    })

    new_div.appendChild(delbtn);
    comment.appendChild(new_div);
    new_div.appendChild(editbtn);
    inputValue.value =""

}

sendbtn.addEventListener("click", function() {
    addComment();
})
clearbtn.addEventListener("click", function () {
    comment.innerHTML='';

})

inputValue.addEventListener("keypress", (event)=>{
    if(event.code === "Enter"){
        addComment();
    }
}
)