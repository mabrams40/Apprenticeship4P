let values = [];

function intervalFormHandler(form){
    let a = parseInt(form.beginning.value);
    let b = parseInt(form.ending.value);

    let result = document.getElementById("result");
    result.innerHTML = recursion(a, b);
    values = [];
}

function recursion(a, b){
    if(a<=b){
        values.push(a);
        recursion(a+1, b);
    }
    return values;
}