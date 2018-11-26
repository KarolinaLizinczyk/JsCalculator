/**
 * Created by Jacob on 2017-10-24.
 */

var output = "";
var num1 = null;
var num2 = null;
var operation = null;
var result = null;
var dot = null;

$(document).ready(function(){
    $("[id^='oper']").click(function(){
         if (num2 == null && operation != null){
             get_num2 = output.split(operation);
             num2 = Number(get_num2[1]);

             result = operation_selector(num1, num2, operation);
             console.log("num1 = " + num1 + "; num2 = " + num2 + "; result= " + result);
             if (this.id == 'oper_equal') {
                output = result;
                operation = null;
                num1 = result;
                num2 = null;
             }
             else {
                output = result + this.value;
                operation = this.value;
                num1 = result;
                num2 = null;
             }
         }
         else if (output == ""){
            output = "0";
            console.log("output is Hello "+ output);
            document.getElementById("output").value = output;
         }
         else{
             if(this.value == "=") {
                console.log(output);
                document.getElementById("output").value = output;
                num1 = null;
                num2 = null;
                operation = null;
                result = null;
             }
             else {
                num1 = Number(output);
                operation = this.value;
                console.log("operation is:" + typeof (operation));
                output += operation;
             }
         }
        console.log(this.value);
        console.log(output);
        document.getElementById("output").value = output;
    });

    $("[id^='num_']").click(function(){

        if (output == "" || output == '0') {
            output = this.value;
        }
        else if (output.split(operation)[1] == "0") {
            stripped_output = output.split(operation)[1].replace("0", this.value)
            output = output.split(operation)[0] + operation + stripped_output;
        }
        else  {
            output += this.value;
        }

        console.log(output);
        document.getElementById("output").value = output;
    });

    function operation_selector(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return arg1 + arg2;
        case "-":
            return arg1 - arg2;
        case "/":
            return arg1 / arg2;
        case "%":
            return arg1 % arg2;
        case "*":
            return arg1 * arg2;
    }
}
    $('#backspace').click(function () {
        if (output.length == 1) {
            document.getElementById("output").value = "0";
            output = "";
            num1 = null;
            num2 = null;
            operation = null;
            result = null;
        }
        else if (output.length > 1) {
            console.log("This is my output" + output);
            remove_last = output.substring(0, output.length-1);
            output = remove_last;
            num1 = Number(output);
            console.log("This is my output " + output);
            console.log("This is my output " + num1);
            document.getElementById("output").value = output;
        }

        console.log("This is my output" + output);

    });
    $('#dot').click(function() {
         output += this.value;
         document.getElementById("output").value = output;
    });


});

console.log("output");

var clear_output = function () {
    document.getElementById("output").value = "0";
    output = "";
    num1 = null;
    num2 = null;
    operation = null;
    result = null;
};


