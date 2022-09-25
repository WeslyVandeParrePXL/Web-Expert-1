let inkoopprijs = parseFloat(prompt("geef een inkoopprijs in"));
let btw = parseFloat(prompt("Geef een BTW-tarief in"));

let verkoopprijs = inkoopprijs * (btw / 100) + inkoopprijs;

alert("de verkoopprijs verkoopprijs = " + verkoopprijs + "€");

if (inkoopprijs && btw) {
    alert("de verkoopprijs = " + (verkoopprijs + (verkoopprijs * btw / 100)));
}
else {
    alert("oeps er ging iets fout");
}
