const express = require('express')
const Router = express.Router()

const adminController = require('./../controllers/adminController') 

Router.get('/get/sales',adminController.getSales)
Router.get('/get/report',adminController.getReport)

module.exports = Router