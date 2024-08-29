function getPassword(length){
     const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

document.getElementById('button').addEventListener('click', function() {
    const passwordLength = 12; // Define the password length
    const pwd1 = getPassword(passwordLength); // Generates a password with a length of 12 characters
    const pwd2 = getPassword(passwordLength); // Generates another password with a length of 12 characters.

    document.getElementById('pwd1').textContent = pwd1;
    document.getElementById('pwd2').textContent = pwd2;
});
