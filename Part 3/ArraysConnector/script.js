function formHandler(form){
    let arr1 = form.array1.value;
    let arr2 = form.array2.value;

    arr1 = arr1.split(",");
    arr2 = arr2.split(",");

    arr1 = parseArray(arr1);
    arr2 = parseArray(arr2);

    let result = document.getElementById("result");
    result.innerHTML = joinArrays(arr1, arr2);
}

function parseArray(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

const joinArrays = (arr1, arr2) => [...arr1, ...arr2];