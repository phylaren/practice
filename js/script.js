let numbers = [
    "Jenny:123123123",
    "Vicky:907813459",
    "Jasmine:800789567",
    "Josh: 456724085",
    "Jasmine:234123867",
]

let input = document.querySelector("input");
let btn = document.querySelector("button");
let para = document.querySelector("p");

btn.addEventListener("click", findNumber);

function findNumber(){
    para.textContent = "Result: "
    let searchedHuman = input.value;
    input.value = "";
    input.focus();

    for(let i =0; i<numbers.length; i++){
        let contact = numbers[i].split(":");
        console.log(contact)
        if(contact[0]===searchedHuman){
            para.textContent += `
                ${contact[0]} number is ${contact[1]}
            `;
            break;
        }
    }
    if(para.textContent === "Result: "){
        para.textContent += "Not found";
    }
}