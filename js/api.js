
async function waitingForResponse() {
const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
const fighterList = await response.json();
getNamesFighters(fighterList);
// getImagesXsFighters(fighterList);
}
waitingForResponse()



// Names
function getNamesFighters(array){
    array.forEach(fighter => {
        const newUl = document.createElement("ul")
        document.getElementById("names-fighters").appendChild(newUl);
        
        const newLi = document.createElement("li")
        newUl.appendChild(newLi)

    
        newLi.innerHTML = `<p>${fighter.name}</p> <a href="#"><img class="image-xs" src="${fighter.images.xs}"></a>`;
       
        console.log(newLi);

    });
};


// document.getElementById("names-fighters").addEventListener("click", function(event){
//     if(event.target.classList.contains("image-xs")) console.log("click");
//     // afficher une petite 
// })

