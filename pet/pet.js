function petcheck(){
    let pet = document.getElementById("pet").value
   console.log(pet)
    let response = ""

if(pet=="Dog"){
    response="😊 That's great! Keep smiling!"
}
else if (pet=="cat"){
   response="😢 Sorry to hear that. Hope things get better!"
}
else if (pet=="rabbit"){
    response="😄 Woohoo! Keep the energy up!"
}
else if (pet=="hamster"){
    response="😴 Time to get some rest!"
}
else if (pet=="lion"){
    response="👌sorry to hear that but now calm down and breath"
}
else if (pet=="tiger"){
    response="😤calm down breath in and out"
}
else{
    response="🤔 Hmm... I’m not sure how to respond to that"

}

document.getElementById("response").innerHTML= response
}
function checkMood(){
    let mood = document.getElementById("moodInput").value.toLowerCase()
   let response = ""

if(mood=="happy"){
    response="😊 That's great! Keep smiling!"
}
else if (mood=="sad"){
   response="😢 Sorry to hear that. Hope things get better!"
}
else if (mood=="excited"){
    response="😄 Woohoo! Keep the energy up!"
}
else if (mood=="tired"){
    response="😴 Time to get some rest!"
}
else if (mood=="angry"){
    response="👌sorry to hear that but now calm down and breath"
}
else{
    response="🤔 hmmn...i dont know how to answer that"
}

document.getElementById("resope").innerHTML= response
}