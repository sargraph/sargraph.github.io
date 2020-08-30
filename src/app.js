const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname) 
// console.log(path.join(__dirname, '../public')) 

const app = express()

// Define Paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup Static directory to serve
app.use(express.static(publicDirPath))

module.exports = app