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
    {
        id_user : 2,
        total : 500,
    },
]


//start mengubah total setiap id_user === 2
const UpdateTotalPembelian = (item, id, penambahan) => {
    return item.id_user === id ? {...item, total : item.total + penambahan} : item    
}

const NewPembelian = Pembelian.map(item => 
    UpdateTotalPembelian(item, 2, 100)
)
//end
