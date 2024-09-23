const order = {
    status: "pending",
}

switch(order.status) {
    case "confirmed":
        console.log("The order is confirmed");
    case "complete":
        console.log("The order is empty");
    case "pending":
        console.log("The order is pending");
        break;
    case "delivered":
        console.log("The order is delivered");
        break;
    case "shipped":
        console.log("The order is shipped");
        break;
    default:
        console.log("The order status is unknown");
}