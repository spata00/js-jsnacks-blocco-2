/*Inserisci un numero, se è pari stampa il numero, 
se è dispari stampa il numero successivo
*/
/*
var numero=parseInt(prompt("numero"));
if(numero%2==0){
    console.log(numero);
}else{
    console.log(numero+1);
}*/

/*
Generatore di “nomi cognomi” casuali: prendendo 
una lista di nomi e una lista di cognomi,
 Gatsby vuole generare una falsa lista di invitati.-*/
/*
var cognomi=[
    "Rossi",
    "Ferrari",
    "Russo",
    "Bianchi",
    "Romano",
    "Gallo",
    "Costa",
    "Fontana",
    "Conti",
    "Esposito",
    "Ricci",
    "Bruno",
    "De Luca",
    "Moretti",
    "Marino",
    "Greco",
    "Barbieri",
    "Lombardi",
    "Giordano",
    "Cassano",
    "Colombo",
    "Mancini",
    "Longo",
    "Leone",
    "Martinelli",
    "Marchetti",
    "Martini",
    "Galli",
    "Gatti",
    "Mariani",
    "Ferrara",
    "Santoro",
    "Marini",
    "Bianco",
    "Conte",
    "Serra",
    "Farina",
    "Gentile",
    "Caruso",
    "Morelli",
    "Ferri",
    "Testa",
    "Ferraro",
    "Pellegrini",
    "Grassi",
    "Rossetti",
    "D'Angelo",
    "Bernardi",
    "Mazza",
    "Rizzi"
    ];
var nomi=[
    "mario",
    "niccolo",
    "Rossi",
    "Ferrari",
    "Russo",
    "Bianchi",
    "Romano",
    "Gallo",
    "Costa",
    "Fontana",
    "Conti",
    "Esposito",
    "Ricci",
    "Bruno",
    "De Luca",
    "Moretti",
    "Marino",
    "Greco",
    "Barbieri",
    "Lombardi",
    "Giordano",
    "Cassano",
    "Colombo",
    "Mancini",
    "Longo",
    "Leone",
    "Martinelli",
    "Marchetti",
    "Martini",
    "Galli",
    "Gatti",
    "Mariani",
    "Ferrara",
    "Santoro",
    "Marini",
    "Bianco",
    "Conte",
    "Serra",
    "Farina",
    "Gentile",
    "Caruso",
    "Morelli",
    "Ferri",
    "Testa",
    "Ferraro",
    "Pellegrini",
    "Grassi",
    "Rossetti",
    "D'Angelo",
    "Bernardi",
    "Mazza",
    "Rizzi"
    ];
var cognomi_usati=[];
var nomi_usati=[];
var cicli=0;
var cognome;
var nome;
var lista_falsa=[];
if(cognomi.length>=nomi.length){
    cicli=nomi.length;
}else{
    cicli=cognomi.length;
}
for(var i=0;i<cicli;i++){
    do{
        cognome=cognomi[Math.floor(Math.random()*cognomi.length)];
    }while(cognomi_usati.includes(cognome));
    cognomi_usati.push(cognome);
    do{
        nome=nomi[Math.floor(Math.random()*nomi.length)];
    }while(nomi_usati.includes(nome));
    nomi_usati.push(nome);
    lista_falsa.push(nome+" "+cognome);
    console.log(lista_falsa[i]);
}*/
/*Crea un array di numeri interi e fai la somma di tutti 
gli elementi che sono in posizione dispari*/
/*
var lista=[1,2,3,4,5,6,7,8,9,10];
var somma=0;
for(var i=1;i<lista.length;i+=2){
    somma+=lista[i];
}
console.log(somma);
*/

var array1=[5,6,2];
var array2=[5,6,5,7,5,6,8];
while(array1.length!=array2.length){
    if(array1.length>array2.length){
        array2.push(Math.floor(Math.random()*10)+1);
    }else{
        array1.push(Math.floor(Math.random()*10)+1);
    }
}
console.log(array1.length,array2.length);