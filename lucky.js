function generateStarName(){
    const name = document
          .getElementById("nameInput").value.trim().toLowerCase();
   const result =    document.getElementById("result"); 
   if (name === ""){
     result.innerHTML = "🚨 Please enter your name!";
          return;
   }   
   const starWords = [
          "Luna",
          "Nova",
          "Blaze",
          "Ray",
          "Aurora",
          "Spark",
          "Shadow",
          "Glow",
          "steeze",
        ];
   let luckyName = "";
   for (let i = 0; i < name.length; i++){
     const letter = name[i];
 
          if (
            letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u"
          ) {
            luckyName += starWords[i % starWords.length] + " ";
          }
          if (luckyName === "") {
          luckyName = "Mystic Star";
        }
 
        result.innerHTML = `🌟 Your Lucky Star Name is: <strong>${luckyName.trim()}</strong>`; 

   }
}