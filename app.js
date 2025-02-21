// 

let cntr = document.querySelector(".container");

let input = document.querySelector(".prompt");
let btn = document.querySelector("#button");





import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCF8ngsBWcr3kFABIKNnlg6ESVKdQBUls0");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
   








// failed to call api from the google 

 async function   getData() {
    

        
     if (input.value) {
        
         
        const result = await model.generateContent(input.value);
        console.log(result.response.text());
        
        let p1 = document.createElement("p")
        let p2 = document.createElement("p");
        p2.className = "para";

        // console.log("hello world");
        
        p1.innerText = input.value;
        p1.className = "para";
    
        p2.innerText = result.response.text();
        p1.style.textAlign = "left";
        p2.style.color = "white";
        
        p2.style.textAlign = "right";
        cntr.append(p1);
        cntr.append(p2);
        // p1.innerText = "";
        // p2.innerText = "";
    }
    else {
        let p1 = document.createElement("p")
        p1.className = "para"
        p1.innerHTML = "Please Enter a prompt";
        cntr.append(p1);
    }
        
}
let event1 = "click";



btn.addEventListener(event1,getData );





