
function Thechant() {
    alert("You'll Never Walk Alone! ")
}

function Changebgcolor() {
    
    const body = document.body;
    if (body.style.backgroundColor ==="rgb(0, 163, 152)") {
        
        body.style.backgroundColor="rgb(255, 253, 208)"; //the color of the 2023/24 second kit, make sure to double check
        
    } else {body.style.backgroundColor = "rgb(0, 163, 152)";}

}
 function Checkifcool() {
    const answer= document.getElementById("Fananswer").value.toLowerCase().trim();
    const result= document.getElementById("Fancoolcheck");

    if (answer=== "yes") {
        result.innerText= "Yessirr!!!! YNWA! You're one of the cool ones."
    
    } else if (answer=== "yess") {result.innerText= "Love the passion mate! YNWA!"}
    else if (answer==="yesss")  {result.innerText= "Alright bud, it's not that deep."}
    else if (answer==="no") {result.innerText= "You should be, grass is greener over here."}
    
    
    else {
        result.innerText = "Please respond with a yes or no. "
    }
 }
 function hideorshowres() {
    const element = document.getElementById("Fancoolcheck");

    element.style.display= element.style.display === "none" ? "block" : "none";
 }

 document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Everything starttttt');

    const dots= document.querySelectorAll(".dots");
const image = document.getElementById("kit display");
dots.forEach((dot)=> {
    dot.addEventListener("click", () =>  {
    const value=dot.getAttribute("value");
    console.log(value);
    image.setAttribute("src",  "./" + value + ".jpg");
    })
 });
});
