function palindromeFormHandler(form){
    let result = document.getElementById("result");
    result.innerHTML = palindromeDetector(form.word.value);
}

function palindromeDetector(word){
    if(word.length == 0) return "Type in the word.";
    else if(word.length == 1) return "It is not a word."
    else if(word.length % 2 == 0){
        for(let i=0; i<word.length/2; i++){
            if(word.charAt(i) != word.charAt(word.length-1-i)){
                return "It is not a palindrome.";
            }
        }
        return "It is a palindrome.";
    }
    else{
        let pivot = (word.length-1)/2;
        for(let i=pivot-1; i<word.length-1; i++){
            if(word.charAt(pivot+i) != word.charAt(pivot-i)){
                return "It is not a palindrome.";
            }
        }
        return "It is a palindrome.";
    }
}