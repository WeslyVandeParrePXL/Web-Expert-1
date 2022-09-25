let dagen = ["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag"];
dagen.forEach((dag) => console.log(dag));

alert("de lengte van de array is " + dagen.length);
//alert(' de lengte van de array: ${dagen.length}')
//interpolation

for (let i = 0; i < dagen.length; i++) {
    if (dagen[i] === "zaterdag") {
    dagen.splice(i, 1);
    }
}

//dagen.splice(5,1);
console.log(dagen);
