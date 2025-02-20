const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.send('Kerosence!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})