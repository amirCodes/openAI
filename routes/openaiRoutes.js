const express = require('express')
const openaiRouter = express.Router()
openaiRouter.post('/generateimage', (req, res) => {
  res.status(200).json({
    success: true
  })
})
openaiRouter.get('/', (req, res) => {
  res.send('Welcome to openAI, Got </openai/generateimage> to generate images')
})
// this module will esxport all the route under its name[openaiRouter]
module.exports = openaiRouter
