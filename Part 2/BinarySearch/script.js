function formHandler(form){
    let search = parseInt(form.search.value);
    let arr = form.array.value;
    arr = arr.split(",");
    arr = parseArray(arr);
    console.clear();
    
    let result = document.getElementById("result");
    result.innerHTML = binarySearch(arr, 0, arr.length-1, search);
}

function binarySearch(arr, start, stop, x){
    if(start > stop) return "Element not found.";
    else{
        let mid = Math.round((start + stop) / 2);
        console.log(`mid = ${mid}`)
        if(arr[mid] == x) {
            console.log(`${arr[mid]} == ${x}`)
            return mid;
        }
        else if(arr[mid] > x){
            console.log(`${arr[mid]} > ${x}`)
            return binarySearch(arr, start, mid-1, x);
        }
        else if(arr[mid] < x){
            console.log(`${arr[mid]} < ${x}`)
            return binarySearch(arr, mid+1, stop, x);
        }
    }
}

function parseArray(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}