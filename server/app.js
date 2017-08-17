const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

const port = 4000
const indexPath = path.resolve(__dirname, '..', 'build', 'index.html')
const template = fs.readFileSync(indexPath, 'utf8');

// Sample index page.
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server application is listening on port ${port}`)
})
