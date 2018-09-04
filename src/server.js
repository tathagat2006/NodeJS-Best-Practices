const express = require('express')
const path = require('path')
const app = express()

//to make public folder available at http request.
app.use('/',express.static(path.join(__dirname,'../public')))

//since we'll be using post request somewhere down the line.
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res) => {
    res.send('Hello world!')
})
// app.listen(2929, () => {
//     console.log('Server started on http://localhost:2929')
// })

module.exports = {
    app
}