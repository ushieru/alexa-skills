import express from 'express'
import ngrok from 'ngrok'

const app = express()
const port: number = Number(process.env.PORT) || 3000

app.get('/', (_, response) => response.send('Alexa skills is running 🚀🚀'))

app.use('/alexa', require('./routes/alexa'))

app.listen(port, async () => ngrok.connect(port).then(console.log))