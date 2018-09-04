const app = require('./server')
const db = require('./models/db')

async function run() {
    await db.sync()
    console.log('DataBase is ready')
    app.listen(2929, () => {
        console.log('Server started at http://localhost:2929')
    })
}

run()