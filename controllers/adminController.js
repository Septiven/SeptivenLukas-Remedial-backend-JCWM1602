// Import Connection
const db = require('../connection/connection')

// const getSales = (req,res) =>{
//     try{
//         db.query(`SELECT id,name,address,hp,jabatan.jabatan AS jabatan, jabatan.id_atasan AS id_atasan FROM sales JOIN jabatan ON sales.id_jabatan=jabatan.id_jabatan;`,(err,result)=>{
//             try{
//                 if(err) throw err
//                 res.status(200).send({
//                     result
//                 })
//             }catch(error){
//                 res.status(500).send({
//                     error: true,
//                     message: 'failed to get sales'
//                 })
//             }
//         })
//     }catch(error){
//         res.status(406).send({
//             error: true,
//             message: error.message
//         })
//     }
// }
// SELECT id,name,address,hp,jabatan.jabatan AS jabatan, jabatan.id_atasan AS id_atasan
// FROM sales JOIN jabatan ON sales.id_jabatan=jabatan.id_jabatan;


const getSales = (req,res) =>{
    try{
        db.query(`SELECT id,name,address,hp,jabatan.jabatan AS jabatan, jabatan.id_atasan AS id_atasan FROM sales JOIN jabatan ON sales.id_jabatan=jabatan.id_jabatan;`,(err,result)=>{
            try{
                if(err) throw err
                const NewArr = []
                
                result.forEach((val,idx) => {
                    // console.log(val)
                    if(val.id_atasan===0){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: null
                        })
                    }else if(val.id_atasan === 1){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: 'Nelle'
                        })
                    }else if(val.id_atasan === 2){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: 'Willa'
                        })
                    }else if(val.id_atasan === 3){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: 'Unity'
                        })
                    }else if(val.id_atasan === 4){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: 'Charles'
                        })
                    }else if(val.id_atasan === 5){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: 'Bradley'
                        })
                    }else if(val.id_atasan === 6){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: "Upton"
                        })
                    }else if(val.id_atasan === 7){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: "Olga"
                        })
                    }else if(val.id_atasan === 8){
                        NewArr.push({
                            id: val.id,
                            name: val.name,
                            address: val.address,
                            hp: val.hp,
                            jabatan: val.jabatan,
                            atasan: "Shaeleigh"
                        })
                    }else{}

                });

                res.status(200).send({
                    NewArr
                })

            }catch(error){
                res.status(500).send({
                    error: true,
                    message: 'failed to get sales'
                })
            }
        })
    }catch(error){
        res.status(406).send({
            error: true,
            message: error.message
        })
    }
}

const getReport = (req,res) =>{
    try{
        db.query(`SELECT sales.id,sales.name,sales.hp,COUNT(*) AS total_client,SUM(credit) AS total_credit FROM client JOIN sales ON sales.id=client.id_sales GROUP BY id_sales ORDER BY total_credit DESC;`,(err,result)=>{
            try{
                if(err) throw err
                res.status(200).send({
                    result
                })
            }catch(error){
                res.status(500).send({
                    error: true,
                    message: error.message
                })
            }
        })
        
    }catch(error){
        res.status(406).send({
            error: true,
            message: error.message
        })
    }
}

module.exports ={
    getSales: getSales,
    getReport: getReport
}