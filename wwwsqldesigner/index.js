const express = require('express')
const http = require('http')
const path = require('path')
const compression = require('compression')

const app = express()

app.use(compression())

let apiUrl = `sql`

app.use(`/${apiUrl}/backend`, express.static('backend'));
app.use(`/${apiUrl}/db`, express.static('db'));
app.use(`/${apiUrl}/images`, express.static('images'));
app.use(`/${apiUrl}/js`, express.static('js'));
app.use(`/${apiUrl}/locale`, express.static('locale'));
app.use(`/${apiUrl}/styles`, express.static('styles'));

app.get(`/${apiUrl}/`, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})


app.set('port', (process.env.PORT || 2000));

let port = app.get('port');
app.listen(port, function () {
  console.log('wwwsqldesigner started');
  console.log(`http://localhost:${port}/${apiUrl}`);
  console.log('Port', port);
});