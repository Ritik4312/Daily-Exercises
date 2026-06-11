class Car{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get color(){
        return this._color;
    }
    set color(value){
        this._color = value;
    }
    print(){
        console.log(this.name);
        console.log(this.color);
    }
}
class Model extends Car{
    constructor(name,color,model){
        super(name,color);
        this.model = model;
    }
    print(){
        super.print();
        console.log(this.model);
    }
    static hello(){
        console.log("Say Hello to new car");
        
    }
}
let myCar = new Model("BMW","Red","2022")
myCar.name = "Audi";
myCar.color = "Blue";
myCar.print();
Model.hello();