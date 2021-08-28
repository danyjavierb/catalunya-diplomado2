const mayusAlter = (cadena) => {

    array = cadena.split('');
    let newCadena = array[0].toUpperCase();
    array.forEach(element, i => {
        newCadena+= element;
        
    });
}

var repetidos = [];
var arrayTemp = [];
const NoRepetidos = (array) => {

    array.forEach((element, i) => {
        //arrayTemp = Object.assign([],element); 
        array.splice(i,1); 
            if(array.indexOf(element)==-1 && repetidos.indexOf(element)!=-1) {     
                repetidos.push(element); 
            }     
    });

    return repetidos;
}

const DividirParesImpares = (array) => {
        let arrayPar = [];
        let arrayImpar =[];
        let newArray =[];
    array.forEach(element => {

        if(ParImpar(element)){
            arrayPar.push(element);
        }else{
            arrayImpar.push(element);
        }
    });
    newArray.push(arrayPar);
    newArray.push(arrayImpar);
    return newArray;
}

const ParImpar = (numero) => {
if(numero % 2 == 0){
    return true;
}
return false;
}

/*const array = [1,2,3,4,5,6,7,8,9];
console.log(DividirParesImpares(array));*/

const array = [1,1,2,2,3];
console.log(NoRepetidos(array));