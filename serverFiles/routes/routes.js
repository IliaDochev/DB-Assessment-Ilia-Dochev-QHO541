const express = require('express');
const Route = express.Router()
const services = require('../services/renderer');
const controller = require('../controller/controller')

Route.get('/',services.homeRoutes);

Route.get('/new_student', services.new_student);

Route.get('/update-student', services.update_student);

Route.post('/api/students', controller.create)
Route.get('/api/students',     controller.find)
Route.put('/api/students/:id', controller.update)
Route.delete('/api/students/:id', controller.delete)

module.exports = Route;