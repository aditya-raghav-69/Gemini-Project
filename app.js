// 

let cntr = document.querySelector(".container");

let input = document.querySelector(".prompt");
let btn = document.querySelector("#button");






function   getData() {
    

        
    if (input.value) {
        let p1 = document.createElement("p")
        let p2 = document.createElement("p");
        p2.className = "para";

        console.log("hello world");
        
        p1.innerText = input.value;
        p1.className = "para"
    
        p2.innerText = " upun jaunga right side because boss is always right";
        p1.style.textAlign = "left";
        p2.style.color = "white";
        
        p2.style.textAlign = "right";
        cntr.append(p1);
        cntr.append(p2);
    }
    else {
        let p1 = document.createElement("p")
        p1.className = "para"
        p1.innerHTML = "Please Enter a prompt";
        cntr.append(p1);
    }
        
    }

btn.addEventListener("click",getData );





// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("");
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "Explain how AI works";


// async function myAI(p){
//     const result = await model.generateContent(p);
// console.log(result.response.text());
// }


// myAI(prompt);

