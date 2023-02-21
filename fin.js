let greenBtn = document.getElementById ("green");
let redBtn = document.getElementById ("red");
let whiteBtn = document.getElementById ("white");
let fotosBtn = document.getElementById ("fotos");



greenBtn.onclick = function(){

    imagen.src ="/imagenes/plato1.jpg";

    document.getElementById("p1").innerText= "Precio: ₡1300";
}

redBtn.onclick = function(){

    imagen.src ="/imagenes/plato2.jpg" 
    document.getElementById("p1").innerText= "Precio: ₡2500"; 
    
}

whiteBtn.onclick = function(){
 imagen.src ="/imagenes/plato3.jpg";
 document.getElementById("p1").innerText= "Precio: ₡1600";
}



let oraBtn = document.getElementById ("ora");
let grenBtn = document.getElementById ("gren");
let blueBtn = document.getElementById ("blue");
let fotos2Btn = document.getElementById ("fotos2");



oraBtn.onclick = function(){

    imagen2.src ="/imagenes/lasaña.jpg";

    document.getElementById("p2").innerText= "Precio: ₡3500";
}

grenBtn.onclick = function(){

    imagen2.src ="/imagenes/pizzavegetariana.jpg" 
    document.getElementById("p2").innerText= "Precio: ₡5700"; 
    
}

blueBtn.onclick = function(){
 imagen2.src ="/imagenes/spaguetti boloñesa.jpg";
 document.getElementById("p2").innerText= "Precio: ₡4000";
}


let pos1Btn = document.getElementById ("pos1");
let pos2Btn = document.getElementById ("pos2");
let pos3Btn = document.getElementById ("pos3");
let fotos3Btn = document.getElementById ("fotos3");



pos1Btn.onclick = function(){

    imagen3.src ="/imagenes/pannacotta.jpg";

    document.getElementById("p3").innerText= "Precio: ₡2900";
}

pos2Btn.onclick = function(){

    imagen3.src ="/imagenes/postre2.jpg" ;
    document.getElementById("p3").innerText= "Precio: ₡5000"; 
    
}

pos3Btn.onclick = function(){
 imagen3.src ="/imagenes/helado.jpg";
 document.getElementById("p3").innerText= "Precio: ₡1200";
}

let bebiBtn = document.getElementById ("bebi");
let bebi2Btn = document.getElementById ("bebi2");
let bebi3Btn = document.getElementById ("bebi3");
let fotos4Btn = document.getElementById ("fotos4");



bebiBtn.onclick = function(){

    imagen4.src ="/imagenes/lemonsoda.jpg";
    document.getElementById("p4").innerText= "Precio: ₡1000";
    
}

bebi2Btn.onclick = function(){

    imagen4.src ="/imagenes/aperolspritz.jpg" ;
    document.getElementById("p4").innerText= "Precio: ₡1200"; 
    
}

bebi3Btn.onclick = function(){
 imagen4.src ="/imagenes/grappa.jpg";
 document.getElementById("p4").innerText= "Precio: ₡3200";
}




