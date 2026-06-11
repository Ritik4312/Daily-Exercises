var currentVal = 0;
const calVal = {
    firstValue:0,
    SecondValue:0,
    operator:""
}
function printVal(btn){
    let val_button = btn.innerText;
    let val_textBox = document.getElementById("cal_input").value;
    let sum = val_textBox + val_button;
    document.getElementById("cal_input").value = sum;
    currentVal = sum;
}
function actionCheck(btn){
    calVal.operator = btn.innerText;
    calVal.firstValue = currentVal;
    document.getElementById("cal_input").value = null;

}
function result(btn){
    if(calVal.operator == "+"){
        calVal.SecondValue = currentVal;
        let sum = parseInt(calVal.firstValue) + parseInt(calVal.SecondValue);
        document.getElementById("cal_input").value = sum;
    }
    
}