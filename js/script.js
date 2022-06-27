console.log("Hello");
async function waitingForResponse() {
const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
const fighterList = await response.json();
getImageFighter(fighterList);
getCharachteristics(fighterList)
}
waitingForResponse()

    /* Image */ 

const listChamps = document.getElementById("list-champs");
const listFighters = document.getElementById("list-fighters");


function getImageFighter(array){
    array.forEach(fighter => {
        document.getElementById("list-fighters-content").appendChild(listChamps);
        const eachChamp = document.createElement("li");
        listChamps.appendChild(eachChamp);
        eachChamp.classList.add("list-champs-item");
        eachChamp.innerHTML = `<a href="#"><img class="image-xs" src="${fighter.images.xs}"></a>`
    })

    document.querySelectorAll(".image-xs").forEach(image => {
        image.addEventListener("click", function(event) {
            document.getElementById("list-fighters-battle").appendChild(listFighters);
            const eachFighters = document.createElement("li");
            listFighters.appendChild(eachFighters);
            eachFighters.classList.add("list-champs-item");
            eachFighters.innerHTML = `<a href="#"><img class="image-xs-middle" src="${image.src}"></a>`
            const a = this.parentElement
            const li = a.parentElement
            li.remove();
      

            document.querySelectorAll(".image-xs-middle").forEach(imageM => {
            imageM.addEventListener("click", function(event){
                // const val = this.src;
                // this.parentElement.removeChild(this);
                // console.log(this)
                // this.parentElement.removeChild(this);
                // eachChamp.innerHTML = `<a href="#"><img class="image-xs" src="${val}"></a>`
            });      
        })
    })
    })
};

function getCharachteristics(fighterStats) {
   
    fighterStats.forEach(stats => {
    const statsName = stats.name;
    const eachFightersName = document.createElement("li");
    eachFightersName.classList.add("stats-fighters-li");
    eachFightersName.innerHTML = `<p>${statsName}</p>`;
    document.getElementById("stats-fighters").appendChild(eachFightersName)







    // const statsGroup = stats.connections.groupAffiliation;
    // const statsAppearance  = stats.appearance;
    // const statsImageMd  = stats.images.md;
    const statsPowerstats  = stats.powerstats;

    console.log(eachFightersName);
    
});
    
} 