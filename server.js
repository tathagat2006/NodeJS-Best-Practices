const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send('Hello world!')
})
app.listen(2929, () => {
    console.log('Server started on http://localhost:2929')
})