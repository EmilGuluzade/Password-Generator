const generateBtn = document.querySelector(".generateBtn");
const copyBtn = document.querySelector(".fa-copy");
const Alert = document.querySelector(".alert");
const input = document.querySelector("#input");

const createPassword = () => {
  const passwordLength = 14;
  const characters =
    "0123456789qwertyuiopasdfghjklzxcvbnm`~!@#$%^&*(),./[]{}:_+QWERTYUIOPASDFGHJKLZXCVBNM";
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
  }
  input.value = password;

};

generateBtn.addEventListener("click", createPassword);

const copyPassword=()=>{
    
if (input.value) {
    input.select();
    navigator.clipboard.writeText(input.value)
    Alert.classList.remove("active")
    setTimeout(()=>{Alert.classList.add("active")},2000)
} 
}



copyBtn.addEventListener("click",copyPassword)