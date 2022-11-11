function arraysFormHandler(form){
    let result = document.getElementById("result");
    result.innerHTML = arrays(form.array.value);
}

function arrays(arr){
    arr = arr.split(",");
    if(arr.length == 0) return "Empty array.";
    else if(arr.length == 1) return "Too few elements.";
    else if(!sameValueType(arr)) return "Incorrect types.";
    else{
        if(!isNaN(arr[0])){
            arr = parseArray(arr);
        }
        if(typeof arr[0] == "number"){
            arr = bubbleSortNumbers(arr);
            return "Second biggest number: " + arr[1];
        }
        else if(typeof arr[0] == "string"){
            bubbleSortStrings(arr);
            return "Second longest word: " + arr[1];
        }
        console.log(arr)
    }
}

function sameCharType(value){
    for(let i=0; i<value.length-1; i++){
        if(isNaN(value.charAt(i)) != isNaN(value.charAt(i+1))){
            return false;
        }
    }
    return true;
}

function sameValueType(arr){
    for(let i=0; i<arr.length-1; i++){
        if(!sameCharType(arr[i])){
            return false;
        }
        else if(isNaN(arr[i]) != isNaN(arr[i+1])){
            return false;
        }
    }
    return true;
}

function parseArray(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function bubbleSortNumbers(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] < arr[j+1]){
                let bubble = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = bubble;
            }
        }
    }
    return arr;
}

function bubbleSortStrings(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j].length < arr[j+1].length){
                let bubble = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = bubble;
            }
        }
    }
    return arr;
}