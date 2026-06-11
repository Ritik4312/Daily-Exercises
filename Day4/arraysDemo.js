function arrayDemo(){
    let arr1 = [1,2,3,4,5];
    let arr2 = ["John", 14, "Doe"];
    for(let i=0; i<arr2.length; i++){
        document.getElementById("demo").innerHTML += "<h2>" + arr2[i] + "</h2>";
    
    }
}