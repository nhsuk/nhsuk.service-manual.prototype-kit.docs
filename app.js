// Core dependencies
const path = require('path');
const fs = require('fs');

// External dependencies
const cookieParser = require('cookie-parser');
const express = require('express');
const nunjucks = require('nunjucks');
const sessionInMemory = require('express-session');
const highlightjs = require('highlight.js');

// Local dependencies
const packageInfo = require('./package.json');

const automaticRouting = require('./middleware/auto-routing');
const config = require('./app/config');
const locals = require('./app/locals');
const routes = require('./app/routes');
const utils = require('./lib/utils');

// Set configuration variables
const port = parseInt(process.env.PORT, 10) || config.port;

// Initialise applications
const app = express();

// Add variables that are available in all views
app.locals.asset_path = '/public/';
app.locals.serviceName = config.serviceName;

// Use cookie middleware to parse cookies
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    // Set Strict-Transport-Security header to
    // ensure that browsers only use HTTPS
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    next();
  });
}

// Nunjucks configuration for application
const appViews = [
  path.join(__dirname, 'app/views/'),
  path.join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk/components'),
  path.join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk/macros'),
  path.join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk'),
  path.join(__dirname, 'node_modules/nhsuk-frontend/dist'),
];

const nunjucksConfig = {
  autoescape: true,
  noCache: true,
};

nunjucksConfig.express = app;

const nunjucksAppEnv = nunjucks.configure(appViews, nunjucksConfig);
nunjucksAppEnv.addGlobal('version', packageInfo.version);

nunjucksAppEnv.addFilter('highlight', (code, language) => {
  const languages = language ? [language] : false;
  return highlightjs.highlightAuto(code.trim(), languages).value;
});

// Add Nunjucks filters
utils.addNunjucksFilters(nunjucksAppEnv);

// Session uses service name to avoid clashes with other prototypes
const sessionName = `nhsuk-prototype-kit-${(Buffer.from(config.serviceName, 'utf8')).toString('hex')}`;
const sessionOptions = {
  secret: sessionName,
  cookie: {
    maxAge: 1000 * 60 * 60 * 4, // 4 hours
  },
};

// Support session data in memory
app.use(sessionInMemory(Object.assign(sessionOptions, {
  name: sessionName,
  resave: false,
  saveUninitialized: false,
})));

// Warn if node_modules folder doesn't exist
function checkFiles() {
  const nodeModulesExists = fs.existsSync(path.join(__dirname, '/node_modules'));
  if (!nodeModulesExists) {
    console.error('ERROR: Node module folder missing. Try running `npm install`'); // eslint-disable-line no-console
    process.exit(0);
  }

  // Create template .env file if it doesn't exist
  const envExists = fs.existsSync(path.join(__dirname, '/.env'));
  if (!envExists) {
    fs.createReadStream(path.join(__dirname, '/lib/template.env'))
      .pipe(fs.createWriteStream(path.join(__dirname, '/.env')));
  }
}

// initial checks
checkFiles();

// Local variables
app.use(locals(config));

// View engine
app.set('view engine', 'html');

// Middleware to serve static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use('/nhsuk-frontend', express.static(path.join(__dirname, 'node_modules/nhsuk-frontend/dist/nhsuk')));

// Use custom application routes
app.use('/', routes);

// Automatically route pages
app.get(/^([^.]+)$/, (req, res, next) => {
  automaticRouting.matchRoutes(req, res, next);
});

// Clear all data in session if you open /examples/passing-data/clear-data
app.post('/examples/passing-data/clear-data', (req, res) => {
  req.session.data = {};
  res.render('examples/passing-data/clear-data-success');
});

// Redirect all POSTs to GETs
app.post(/^\/([^.]+)$/, (req, res) => {
  res.redirect(`/${req.params[0]}`);
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(`Page not found: ${req.path}`); // eslint-disable-line no-console
  err.status = 404;
  next(err);
});

// Display error
app.use((err, req, res) => {
  console.error(err.message); // eslint-disable-line no-console
  res.status(err.status || 500);
  res.send(err.message);
});

// Run the application
app.listen(port);

module.exports = app;
