
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
        const namesFighters = fighter.name;
        const newDiv = document.createElement("div")
        document.getElementById("names-fighters").appendChild(newDiv);
        const newP = document.createElement("p")
        newDiv.appendChild(newP)
        newP.innerText = namesFighters

        // newDiv.innerHTML = '<p> namesFighters.text </p>'
        console.log(newDiv);
    });
}


// ImagesXs
// function getImagesXsFighters(array){
//     array.forEach(fighter => {
//         const imgXsFighters = fighter.images.xs;
//         console.log(imgXsFighters);
//     });
// }




