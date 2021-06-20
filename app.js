const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();

app.use(cors());

const ReportsController = require('./controllers/report.controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.set('port', process.env.PORT || 8080);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
});

app.route('/reports')
    .get(ReportsController.getAll);

app.route('/reports/:reportId')
    .put(ReportsController.updateTicketState);

app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
