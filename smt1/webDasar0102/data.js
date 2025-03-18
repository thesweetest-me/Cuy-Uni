const nama = "nurudina awalia";
let usia = 12;

let biodata = document.getElementById('biodata');

function generatebiodata() {
    let generasi;
    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    } else {
        generasi = "gatau apa nyebutnya wkwk";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generatebiodata();