"use strict";
// Order System
// ENUM 
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pendind"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELEVERED";
})(OrderStatus || (OrderStatus = {}));
class Order {
    orderId;
    totalAmount;
    isPaid;
    product;
    deliverLocation;
    static;
    paymentMethod;
    extraData;
    customer;
    constructor(orderId, customer, products) {
        this.orderId = orderId;
        this.customer = customer;
        this.product = products;
        this.totalAmount = this.calculateTotalAmount();
        this.isPaid = false;
        this.deliverLocation = ["Delhi", "Rampur"];
        this.static = OrderStatus.Pendind;
        this.paymentMethod = "UPI",
            this.extraData = {
                coupon: "Number"
            };
    }
    printInfo() {
        console.log("Order Id: ", this.orderId);
        console.log("Customer Name: ", this.customer.customerName);
        console.log("Total Amount: ", this.totalAmount);
        console.log("Is Paid: ", this.isPaid);
        console.log("Deliver Location: ", this.deliverLocation);
    }
    calculateTotalAmount() {
        return this.product.reduce((total, product) => total + product.price, 0);
    }
}
const productList = [
    {
        id: 1,
        name: "laptop",
        price: 60000
    }
];
const customer1 = {
    customerId: 1,
    customerName: "Ram",
    isPremium: true
};
const order1 = new Order("O101", customer1, productList);
//    Order1.printInfo();
console.log(order1);
