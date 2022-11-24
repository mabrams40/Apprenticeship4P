// Zadanie 9. (1pkt)
// Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
// Jako callback (wywołanie w konsoli) niech wypisze zwrócony string w konsoli.

new Promise(resolve => {
    setTimeout(() => console.log("Udało się!"), 5000);
});

// Zadanie 10. (2pkt)
// Napisz funkcję multiplysync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów jest niepoprawny (nie jest liczbą). 
// W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback (wywołanie w konsoli), który wypisuje wynik w konsoli.

const multiplysync = (x, y) => new Promise((resolve, reject) => {
    if(typeof(x) != "number" || typeof(y) != "number"){
        reject("Not a number!");
    }
    else resolve(x*y);
});
console.log(multiplysync(2, 5));

// Zadanie 11. dodatkowe (2pkt)
// Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts
// Jako pierwszy callback (wywołanie w konsoli) - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
// Jako następny callback (wywołanie w konsoli) - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'title' i 'body' każdego z postów.

const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
.then(res => {
    if(res.ok){
        return res.json();
    }
    else{
        throw new Error(res.statusText);
    }
})
.then(res => res.map(post => {
    console.log(`Post nr ${post.id}:`);
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
}))
.catch(console.error);