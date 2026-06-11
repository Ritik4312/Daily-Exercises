function loopsDemo(){
    // for(let i = 0; i < 5; i++){
    //     document.getElementById("demo").innerHTML += "<h2>Value of i is: " + i + "</h2>";
    // }
   let a=0
    // while(a<10){
    //     document.getElementById("demo").innerHTML += "<h2>Value of a from while is: " + a + "</h2>";
    //     a++;
    // }
    do{
        document.getElementById("demo").innerHTML += "<h2>Value of a from do while is: " + a + "</h2>";
        a++;        
    }while(a>10)
}