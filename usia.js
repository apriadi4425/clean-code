const Pembeli = [
    {
        id_user : 1,
        usia : 25
    },
    {
        id_user : 2,
        usia : 24
    },
    {
        id_user : 3,
        usia : 25
    },
    {
        id_user : 4,
        usia : 20
    },
    {
        id_user : 5,
        usia : 21
    },
    {
        id_user : 6,
        usia : 15
    },
    {
        id_user : 7,
        usia : 18
    },
]

const MenghitungJumlahPembeliBerdasarkanUsia = (arr) => {
    let jumlah = {}
    arr.forEach(item => {
        if(jumlah[item.usia]){
            jumlah[item.usia]++
        }else{
            jumlah[item.usia] = 1
        }
    });
    return jumlah
}

console.log(MenghitungJumlahPembeliBerdasarkanUsia(Pembeli))