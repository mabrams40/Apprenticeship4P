// 1 - Just fetch image
function fetchImg(){
    fetch("https://cataas.com/c")
    .then(response => response.blob())
    .then(imgBlob => {
        const imgObjectUrl = URL.createObjectURL(imgBlob);
        const img = document.createElement("img");
        img.src = imgObjectUrl;
        document.body.appendChild(img);
    });
}
fetchImg();

// 2 - Fetch after pressing button
const btn = document.createElement("button");
btn.onclick = fetchImg;
btn.innerText = "Add cat";

// 3 - After pressing div
const div = document.createElement("div");
div.onclick = fetchImg;
div.innerText = "More cats";

// 4 - Only one image
let activated = false;
const btn2 = document.createElement("button");
btn2.onclick = () => {
    if(!activated){
        fetchImg();
        activated = true;
    }
};
btn2.innerText = "Add once";

// 5 - Form with tag searching
const form = document.createElement("form");
form.onsubmit = function(){return false;};
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search by tags..";
searchInput.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        let tag = searchInput.value;
        if(tag.trim().length == 0){
            alert("Empty tag.");
            return;
        }
        fetch(`https://cataas.com/cat/${tag}`)
        .then(response => {
            if (!response.ok) {
                alert(`Tag \"${tag}\" not found!`);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob();
        })
        .then(imgBlob => {
            const imgObjectUrl = URL.createObjectURL(imgBlob);
            const img = document.createElement("img");
            img.src = imgObjectUrl;
            img.alt = tag;
            document.body.appendChild(img);
        })
        .catch(console.error);
        searchInput.value="";
    }
});
form.appendChild(searchInput);

// Add elements
window.onload = () => {
    document.body.appendChild(btn);
    document.body.appendChild(div);
    document.body.appendChild(btn2);
    document.body.appendChild(form);
}