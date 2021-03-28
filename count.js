const Pembelian = [
    {
        id_user : 1,
        total : 100,
    },
    {
        id_user : 2,
        total : 320,
    },
    {
        id_user : 3,
        total : 50,
    },
]

const TotalPembelian = Pembelian.reduce((length, outuput) => length + outuput.total, 0)
console.log(TotalPembelian)