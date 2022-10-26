let express = require('express')
let path = require('path')
let skillsRouter = require('./routes/skills')
let app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.listen(3000, function() {
    console.log('Listening on port 3000');
  });

module.exports = app