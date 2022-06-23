
async function waitingForResponse() {
const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
const fighterList = await response.json();

fighterList.forEach(fighter => {
    const namesFighters = fighter.name;
    const imgXsFighters = fighter.images.xs;
    console.log(fighter.images.xs);
});
}
waitingForResponse()




