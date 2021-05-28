const express = require('express')
const Router = express.Router()

const salesController = require('./../controllers/salesController') 

Router.get('/get/client/:id_sales',salesController.getClient)
Router.post('/add/client',salesController.addClient)
Router.patch('/edit/client/:id_client',salesController.editClient)
Router.delete('/delete/client/:id_client',salesController.deleteClient)

module.exports = Router 