function calculatorFormHandler(form, operationType){
    let operationResult = document.getElementById("operationResult");
    operationResult.innerHTML = calculate(form, operationType);
}

function calculate(form, operationType){
    let a = parseInt(form.number1.value);
    let b = parseInt(form.number2.value);
    switch(operationType){
        case "Add":
            return a+b;
        case "Substract":
            return a-b;
        case "Multiply":
            return a*b;
        case "Divide":
            if(b == 0){
                return "You cannot divide by 0!";
            }
            return a/b;
    }
}