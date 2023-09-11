let score = document.getElementById("scores");
let points = 0;

// on ajoute un écouteur d'évènement à la zone rouge
document.getElementById("red_target").addEventListener("click",incPointsBy1)
document.getElementById("blue_target").addEventListener("click",incPointsBy3)
document.getElementById("yellow_target").addEventListener("click",incPointsBy5)
function display(text){
    score.innerHTML = text;
}

function incPointsBy5(event){
    alert("Comportement de la zone jaune non définie, au travail !");
    event.stopPropagation();
}
function incPointsBy3(event){
    alert("Comportement de la zone bleu non définie, au travail !");
    event.stopPropagation();
}
function incPointsBy1(event){
    alert("Comportement de la zone rouge non définie, au travail !");
    event.stopPropagation();
}