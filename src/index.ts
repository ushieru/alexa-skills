import express from 'express'
import ngrok from 'ngrok'
import alexaApp from './routes/alexa'

const app = express()
const port: number = Number(process.env.PORT) || 3000

app.get('/', (_, response) => response.send('Alexa skills is running 🚀🚀'))

app.use('/alexa', alexaApp)

app.listen(port, async () => ngrok.connect(port).then(console.log))