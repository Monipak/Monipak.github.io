function reactToClick(){
    let barre = document.getElementById("searchbar");
    let content = barre.value;
    window.location = "https://duckduckgo.com/?t=ffab&q=" + content;
}