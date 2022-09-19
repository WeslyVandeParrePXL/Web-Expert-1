let inkoopprijs = parseInt(prompt("geef een inkoopprijs in"));
let btw = parseInt(prompt("Geef een BTW-tarief in"));

let verkoopprijs = inkoopprijs * (btw / 100) + inkoopprijs;

alert("de verkoopprijs verkoopprijs = " + verkoopprijs + "€");

/*if (inkoopprijs || btw === null) {
    alert("Je hebt geen getal ingegeven")
}
*/

