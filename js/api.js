
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
        console.log(namesFighters);
    });
}


// ImagesXs
// function getImagesXsFighters(array){
//     array.forEach(fighter => {
//         const imgXsFighters = fighter.images.xs;
//         console.log(imgXsFighters);
//     });
// }




