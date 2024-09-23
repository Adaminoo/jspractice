let drink = {
    size: "large",
}

function findPrice(drinkSize) {
    switch (drinkSize) {
        case "small":
            console.log("$2.00");
            break;
        case "medium":
            console.log("$3.50");
            break;
        case "large":
            console.log("$4.50");
            break;
        case "xlarge":
            console.log("$6.00");
            break;
        default:
            console.log("fuck you")
    }
}

findPrice(drink.size);