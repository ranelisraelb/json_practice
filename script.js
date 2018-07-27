console.log("we're connected")
let house = {
    exterior: "wood siding",
    roof: "spanish tile",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    hasYard: true
}

const body = document.querySelector("body");

let neighborhood = [
    house,
    {
        exterior: "wood siding",
        roof: "spanish tile",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        hasYard: true
    },
    {
        exterior: "rock",
        roof: "grass",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        hasYard: true
    },
    {
        exterior: "brick",
        roof: "shingle",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        hasYard: true
    }
]
for (i = 0; i < neighborhood.length; i++) {
    build(neighborhood[i]);
}

function build(obj) {
    for (let key in obj) {
        //create a nice paragraph
        let p = document.createElement("p");
        p.innerHTML = key + ": " + obj[key];
        //append it to the body
        body.appendChild(p);
    }
}