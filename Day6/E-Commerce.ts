// Order System
// ENUM 

enum OrderStatus{
    Pendind = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELEVERED"
}

// Type Alias
type Product = {
    id:number,
    name : string,
    price: number,
}
// Interface
interface Customer{
    customerId: number,
    customerName: string,
    isPremium: boolean
}
// class
class Order{
    orderId:string;
    totalAmount : number;
    isPaid : boolean;
    //Array of Alias
    product:Product[];
    //Tuple
    deliverLocation:[string,string];
    //Accessing Enum
    static:OrderStatus;
    //Union type
    paymentMethod:string | number;
    // Any
    extraData:any;
    // Object
    customer:Customer

    constructor(
        orderId:string,
        customer:Customer,
        products:Product[]
    ){
        this.orderId = orderId;
        this.customer = customer;
        this.product = products;
        this.totalAmount = this.calculateTotalAmount();
        this.isPaid = false
        this.deliverLocation = ["Delhi","Rampur"]
        this.static = OrderStatus.Pendind
        this.paymentMethod = "UPI",
        this.extraData = {
            coupon : "Number"
        }
    }
    printInfo():void{
        console.log("Order Id: ", this.orderId);
        console.log("Customer Name: ", this.customer.customerName);
        console.log("Total Amount: ", this.totalAmount);
        console.log("Is Paid: ", this.isPaid);
        console.log("Deliver Location: ", this.deliverLocation);
        
    }
    calculateTotalAmount():number{
        return this.product.reduce(
            (total,product)=> total+product.price,0
        )
    }
}
// data to Array od Alies
    const productList:Product[] = [
        {
            id:1,
            name:"laptop",
            price:60000
        }
   ]
   // Data to class Object
   const customer1:Customer = {
        customerId:1,
        customerName:"Ram",
        isPremium:true
   }
   // Run the Object

   const order1 = new Order("O101",customer1,productList);
//    Order1.printInfo();
    console.log(order1);
