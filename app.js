/*const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);
module.exports = app;
// Start the server
const PORT = process.env.PORT || 1515;
console.log(`Server running at http://localhost:${PORT}`);
app.listen(PORT);
*/
const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);

module.exports = app;