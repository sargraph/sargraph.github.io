const app = require('./app')
const port = process.env.PORT || 3000

app.get('', (req, res) => {
    res.render('index', {
        title: 'SARchart',
        name: 'Tool to view Unix SAR data as Charts'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'SARchart - 404',
        errorMessage: 'This page does not exist'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})