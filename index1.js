


// now we willl repeate our work same in this file 

const todoBtn  = document.querySelector(".todo-btn");
// console.log(todoBtn)

// text field op of todo 
const todoText = document.querySelector("#todo-text");
// console.log(todoBtn)

const todoItems =document.querySelector(".todo-items");

todoBtn.addEventListener("click" ,(ei)=>{
    // peley to iska refresh hona roktey hen 
    ei.preventDefault();

    console.log(todoText.value);

    // ab hm ne krna ye he k isi event k honey pr hamri ul item list me li add  krna he 
    const li = document.createElement("li");
    li.innerHTML=`<span class="text"> ${todoText.value} </span>  
    <span class="btn-span">
         <button class="btn btn-done">  Done </button> 
         <button class="btn btn-remove">  Remove</button> 
    </span>`;
    todoItems.append(li);
    // end pr clear krna 
    todoText.value="";
})


// yahan tak ham ne adition ka kaam mukamml krlia  he 
// ab ham is me done or remove oney ka kaam karengey 


// yaaad krn even tdelegation  == inheritane 

todoItems.addEventListener("click" , (ei)=>{

    if(ei.target.classList.contains("btn-done"))
    {
        ei.target.parentNode.previousElementSibling.style.textDecoration="line-through"
    }
    if(ei.target.classList.contains("btn-remove"))
    {
        ei.target.parentNode.parentNode.remove();
    }

})


// ========================== signUp Section wala 



const btnSignUp = document.querySelector(".sign-up-btn");



const un = document.querySelector("#username");
const pd = document.querySelector("#password");
const Cpd = document.querySelector("#confirm-pwd");
const phon = document.querySelector("#phone");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");



btnSignUp.addEventListener("click" , (ei)=>{

    ei.preventDefault();

    console.log( un.value );
    console.log( pd.value );
    console.log( Cpd.value );
    console.log( phon.value );
    console.log( email.value );
    console.log( msg.value );

    un.value="";
    pd.value="";
    Cpd.value="";
    phon.value="";
    msg.value="";
    email.value="";

    

} );


