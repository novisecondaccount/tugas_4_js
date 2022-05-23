//kasus permutasi maka akan ada ABC, ACB, BAC, BCA, CAB, CBA 6 varian dari kecil ke besar
let ana = 2
let budi = 3
let chika = 1

if (ana < budi) {
    if (ana < chika) {
        var terendah = ana
        if (budi < chika){ //ABC
            var tengah = budi
            var tertinggi = chika
        }else {
            var tengah = chika //ACB
            var tertinggi = budi
        }
    }else { //CAB
        var terendah = chika 
        var tengah = ana
        var tertinggi =budi
    }
    
}
else {
    if (budi > chika){  //CBA
        var tertinggi = ana
        var tengah = budi
        var terendah = chika 
    }else {
        if (ana < chika){ //BAC
            var tertinggi = chika
            var tengah = ana
            var terendah = budi
        }
        else { //BCA
            var tertinggi = ana
            var tengah = chika
            var terendah = budi
        }
    }
}

console.log("Tertinggi : "+ tertinggi)
console.log("urutan tertinggi ke terendah : " +tertinggi +" "+tengah +" " +terendah)
