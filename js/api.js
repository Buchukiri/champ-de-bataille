
async function waitingForResponse() {
const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
const fighterList = await response.json();
// const fightersArray = Object.values(fighterList);
console.log(fighterList);

fighterList.forEach(fighter => {
    // console.log(fighter.name);
});
}
waitingForResponse()




