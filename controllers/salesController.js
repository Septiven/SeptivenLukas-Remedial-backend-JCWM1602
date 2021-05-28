// Import Connection
const db = require('../connection/connection')

// get
const getClient = (req,res) => {
    try{
        // const clientID = req.params.id_client
        const salesID = req.params.id_sales

        db.query(`SELECT * FROM client WHERE id_sales = '${salesID}'`,(err,result)=>{
            try{
                if(err) throw err

                res.status(200).send({
                    result
                })

            }catch(error){
                res.status(500).send({
                    error: true,
                    message: 'Failed to get id client'
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

// add
const addClient = (req,res) => {
    try{
        const data = req.body
        const DataToSend = {
            name: data.name,
            address: data.address,
            hp: data.hp,
            zip_code: data.zip_code,
            credit: data.credit,
            id_sales: data.id_sales
        }

        db.query(`INSERT INTO client SET ?`,[DataToSend],(err,result)=>{
            try{
                if(err) throw err
                db.query(`SELECT * FROM client WHERE name = ? AND address = ? AND hp = ? AND zip_code = ? AND credit = ? AND id_sales = ?`,[data.name,data.address,data.hp,data.zip_code,data.credit,data.id_sales],(err,result2)=>{
                    try{
                        if (err) throw err
                        res.status(200).send({
                            result2
                        })
                    }catch(error){
                        res.status(500).send({
                            error: true,
                            message: 'failed to get client'
                        })
                    }
                })
            }catch(error){
                res.status(500).send({
                    error: true,
                    message: 'failed to add client'
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

// edit
const editClient = (req,res) => {
    try{
        const data = req.body
        const clientID = req.params.id_client

        const DataToSend = {
            name: data.name,
            address: data.address,
            hp: data.hp,
            zip_code: data.zip_code,
            credit: data.credit,
            id_sales: data.id_sales
        }

        db.query(`SELECT * FROM client WHERE id = '${clientID}'`,(err,result)=>{
        try{
            if(result.length === 1){
                db.query(`UPDATE client SET ? WHERE id = ?`,[DataToSend,clientID],(err,result2)=>{
                    try{
                        if(err) throw err

                        res.status(200).send({
                            status: 200,
                            message: `Client with id ${clientID} has been updated.`
                        })

                    }catch(error){
                        res.status(500).send({
                            error: true,
                            message: error.message
                        })
                    }
                })
            }else{
                res.status(500).send({
                    error: true,
                    message: 'client id not found'
                })
            }
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

// delete
const deleteClient = (req,res) => {
    try{
        const clientID = req.params.id_client
        db.query(`SELECT * FROM client WHERE id = ?`,[clientID],(err,result)=>{
            try{
                if(err) throw err
                db.query(`DELETE FROM client WHERE id = ?`,[clientID],(err,result2)=>{
                    try{
                        if(err) throw err
                        res.status(200).send({
                            status: 200,
                            message: `Client with id ${clientID} has been deleted.`
                        })
                    }catch(error){
                        res.status(500).send({
                            error: true,
                            message: 'failed to delete client'
                        })
                    }
                })
            }catch(error){
                res.status(500).send({
                    error: true,
                    message: 'client id not found'
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
    getClient: getClient,
    addClient: addClient,
    editClient: editClient,
    deleteClient: deleteClient
}