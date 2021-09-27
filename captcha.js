const captcha = document.querySelector(".captcha");
const reloadBtn = document.querySelector(".reload-btn");
const inputField = document.querySelector("input");
const checkBtn = document.querySelector(".check-btn");
const statusTxt = document.querySelector(".status-txt");


let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
                     'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

function getCaptcha(){
    for (let i = 0; i < 6; i++){                // getting six random characters from the array using for loop.
        let randomChar = allCharacters[Math.floor(Math.random()*allCharacters.length)];
       captcha.innerText += `${randomChar}`;    // passing 6 character value in captcha box ;
    
    }
}
getCaptcha();
reloadBtn.addEventListener("click", ()=>{
    captcha.innerText = "";
    inputField.value = "";
    getCaptcha();
});


checkBtn.addEventListener("click", e =>{
    e.preventDefault();   // preventing button from it's default behaviour.
    statusTxt.style.display = "block";
    let inputValue = inputField.value;
    
    if(inputValue == captcha.innerText){
        // console.log("captcha Matched");
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerText = "Nice! You don't appear to be a robot"
        setTimeout(()=>{
            statusTxt.style.display = "";
            inputField.value = "";
            captcha.innerText = "";
            getCaptcha();      // calling getCaptcha function;
        }, 3000);   // removing user entered vlue and captcha innerText after 4 seconds.
    }else{
        statusTxt.style.color = "#ff1616";
        statusTxt.innerText = "Captcha not matched. Please try again!"
        setTimeout(()=>{
            statusTxt.style.display = "";
            inputField.value = "";
            captcha.innerText = "";
            getCaptcha();      // calling getCaptcha function;
        }, 7000);   // removing user entered vlue and captcha innerText after 4 seconds.
    }
});

