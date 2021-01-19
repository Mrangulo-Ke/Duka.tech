const app = require('./app')
const connnectDatbase = require('./config/database')
const dotenv = require('dotenv')

//setting up config file
dotenv.config({ path: 'backend/config/config.env'})

// Connecting to database
connnectDatbase()

app.listen(process.env.PORT, () => {
	console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})