// Enums allow us to define a set of named constants. We can give these constants numeric or string values
// numeric enums
var Responses;
(function (Responses) {
    Responses[Responses["no"] = 0] = "no";
    Responses[Responses["yes"] = 1] = "yes";
    Responses[Responses["maybe"] = 2] = "maybe"; //3
})(Responses || (Responses = {}));
(function (Responses) {
    Responses[Responses["no"] = 2] = "no";
    Responses[Responses["yes"] = 3] = "yes";
    Responses[Responses["maybe"] = 4] = "maybe"; //4
})(Responses || (Responses = {}));
(function (Responses) {
    Responses[Responses["no"] = 2] = "no";
    Responses[Responses["yes"] = 10] = "yes";
    Responses[Responses["maybe"] = 24] = "maybe";
})(Responses || (Responses = {}));
// String enums
(function (Responses) {
    Responses["no"] = "No";
    Responses["yes"] = "Yes";
    Responses["maybe"] = "Maybe";
})(Responses || (Responses = {}));
//Heterogenous Enums
(function (Responses) {
    Responses[Responses["no"] = 0] = "no";
    Responses[Responses["yes"] = 1] = "yes";
    Responses["maybe"] = "Maybe";
})(Responses || (Responses = {}));
/////////
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var newStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.SHIPPED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
var order = {
    orderNumber: 948485,
    status: OrderStatus.PENDING //0
};
