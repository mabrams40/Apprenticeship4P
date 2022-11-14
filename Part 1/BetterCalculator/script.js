function calculatorFormHandler(form, operationType){
    let result = document.getElementById("result");
    result.innerHTML = calculate(form, operationType);
}

function calculate(form, operationType){
    let a = parseInt(form.number1.value);
    let b = parseInt(form.number2.value);
    if(isNaN(a) || isNaN(b)) return "Type in both numbers.";
    switch(operationType){
        case "Add":
            return a + "+" + b + "=" + (a+b);
        case "Substract":
            return a + "-" + b + "=" + (a-b);
        case "Multiply":
            return a + "*" + b + "=" + (a*b);
        case "Divide":
            if(b == 0){
                return "You cannot divide by 0.";
            }
            return a + ":" + b + "=" + (a/b);
        case "Power":
            if(b>20){
                return "Too high power.";
            }
            return  a + "<sup>" + b + "</sup>" + "=" + power(a,b);
        case "Logarithm (base 2)":
            if(b<=0){
                return "Logarithmic number must be greater than 0.";
            }
            return "log<sub>2</sub>" + a + "≈" + logarithm(a);
        case "Root":
            return "<sup>" + a + "</sup>&Sqrt;" + b + "=" + root(a, b);
    }
}

function power(a, b){
    if(b > 0){
        return a*power(a, b-1);
    }
    return 1;
}

function logarithm(a){
    if(a > 1){
        return 1+logarithm(a/2);
    }
    return 0;
}

function root(a, b){
    return Math.pow(b, 1/a);
}