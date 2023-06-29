const isiArray = []
let arrayGenap = []
let arrayGanjil = []

function randomNumber(){
    for (let i=0; i<100; i++){
        let number = Math.floor(Math.random()*50) + 1
        isiArray.push(number)
    }    

    console.log("Isi Array")
    console.log(isiArray)
    console.log("Jumlah Index pada Array = " + isiArray.length)
}

randomNumber()

console.log("=======================================")

function separateArray(){
    for (let j=0; j<isiArray.length; j++){
        if(j % 2 === 0){
            arrayGenap.push(isiArray[j])
        }else{
            arrayGanjil.push(isiArray[j])
        }
    }

    console.log("Index Array Genap")
    console.log(arrayGenap)
    console.log("Jumlah Index Array Genap = " + arrayGenap.length)

    console.log("=======================================")

    console.log("Index Array Ganjil")
    console.log(arrayGanjil)
    console.log("Jumlah Index Array Ganjil = " + arrayGanjil.length)
}

separateArray()

console.log("=======================================")

let totalArrayGenap = 0
let minArrayGenap =  arrayGenap[0]
let maxArrayGenap =  arrayGenap[0]
    
function calculationArrayGenap(){

    for (let k=0; k<arrayGenap.length; k++){
        totalArrayGenap += arrayGenap[k]
    
        if(arrayGenap[k] < minArrayGenap){
            minArrayGenap = arrayGenap[k]
        }
    
        if(arrayGenap[k] > maxArrayGenap){
            maxArrayGenap = arrayGenap[k]
        }
    }
    
    console.log("Total pada Array Genap = " + totalArrayGenap)
    console.log("Nilai Max pada Array Genap = " + maxArrayGenap)
    console.log("Nilai Min pada Array Genap = " + minArrayGenap)

}

calculationArrayGenap()

console.log("=======================================")

let totalArrayGanjil = 0
let minArrayGanjil =  arrayGanjil[0]
let maxArrayGanjil =  arrayGanjil[0]

function calculationArrayGanjil(){
    
    for (let k=0; k<arrayGanjil.length; k++){
        totalArrayGanjil += arrayGanjil[k]
    
        if(arrayGanjil[k] < minArrayGanjil){
            minArrayGanjil = arrayGanjil[k]
        }
    
        if(arrayGanjil[k] > maxArrayGanjil){
            maxArrayGanjil = arrayGanjil[k]
        }
    }
    
    console.log("Total pada Array Ganjil = " + totalArrayGanjil)
    console.log("Nilai Max pada Array Ganjil = " + maxArrayGanjil)
    console.log("Nilai Min pada Array Ganjil = " + minArrayGanjil)

}

calculationArrayGanjil()

console.log("=======================================")

function average(nilai1, nilai2){
    return nilai1 / nilai2
}

let averageArrayGenap = average(totalArrayGenap, arrayGenap.length)
console.log("Rata - rata Nilai pada Array Genap = " + averageArrayGenap)

let averageArrayGanjil = average(totalArrayGanjil, arrayGanjil.length)
console.log("Rata - rata Nilai pada Array Ganjil = " + averageArrayGanjil)

console.log("=======================================")

function perbandingan(nilai1, nilai2){
    if (nilai1 < nilai2){
        return ("Lebih Besar Array Genap")
    }if (nilai1 > nilai2){
        return ("Lebih Besar Array Ganjil")
    }else{
        return ("Memiliki Nilai Sama antara Array Genap dan Ganjil")
    }
}

let minPerbandingan = perbandingan(minArrayGanjil, minArrayGenap)
console.log("Min " + minPerbandingan)

let maxPerbandingan = perbandingan(maxArrayGanjil, maxArrayGenap)
console.log("Max " + maxPerbandingan)

let totalPerbandingan = perbandingan(totalArrayGanjil, totalArrayGenap)
console.log("Total " + totalPerbandingan)

let rataPerbandingan = perbandingan(averageArrayGanjil, averageArrayGenap)
console.log("Rata - rata " + rataPerbandingan)

console.log("=======================================")