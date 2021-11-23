var imgpath
    
function myFunction(){
if(confirm("Presiona Aceptar si tu animal es mamífero, de lo contrario presiona Cancelar")){console.log("Si/NO")
if(confirm("Presiona Aceptar si tu animal pone huevos, de lo contrario presiona Cancelar")){
  resultado="Ornitorrinco";
}else{
  if(confirm("Presiona Aceptar si tu animal es terrestre, de lo contrario presiona Cancelar")){resultado="Jirafa";}else{resultado="Ballena";}
}
}else{
if(confirm("Presiona Aceptar si tu animal es acuatico, de lo contrario presiona Cancelar")){resultado="Pez Payaso";}else{resultado="Serpiente";}
}

textfull="Tu animal es " + resultado +"!";
window.alert(textfull);

switch (resultado){
case "Ornitorrinco":
  imgpath="./assets/img/Ornitorrinco.png"
  text1="Tu animal es Ornitorrinco"
  break
case "Jirafa":
  imgpath="./assets/img/Jirafa.png"
  text1="Tu animal es jirafa"
  break
case "Ballena":
  imgpath="./assets/img/Ballena.png"
  text1="Tu animal es Ballena"
  break
case "Pez_Payaso":
  imgpath="./assets/img/Pez_Payaso.png"
  text1="Tu animal es Pez Payaso"
  break
case "Serpiente":
  imgpath="./assets/img/Serpiente.png"
  text1="Tu animal es Serpiente"
  break
}
var x = document.getElementById("myDIV");
if (x.style.display === "block") {
x.style.display = "none";
} else {
x.style.display = "block";
}
}
function cualEs(){
var img = new Image();
img.src = imgpath;
document.getElementById('myDIV').appendChild(img)
var texto = document.createElement('div');
texto.innerHTML = textfull;
document.getElementById('myDIV').appendChild(texto);
}