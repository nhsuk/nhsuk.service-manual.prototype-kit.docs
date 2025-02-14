// NPM dependencies
const path = require('path');

// Require core and custom filters, merges to one object
// and then add the methods to Nunjucks environment
const coreFilters = require('./core_filters');
const customFilters = require('../app/filters');

exports.addNunjucksFilters = function (env) { /* eslint-disable-line func-names */
  const filters = Object.assign(coreFilters(env), customFilters(env));
  Object.keys(filters).forEach((filterName) => {
    env.addFilter(filterName, filters[filterName]);
  });
};

// Try to match a request to a template, for example a request for /test
// would look for /app/views/test.html
// and /app/views/test/index.html

function renderPath(routePath, res, next) {
  // Try to render the path
  res.render(routePath, (error, html) => {
    if (!error) {
      // Success - send the response
      res.set({ 'Content-type': 'text/html; charset=utf-8' });
      res.end(html);
      return;
    }
    if (!error.message.startsWith('template not found')) {
      // We got an error other than template not found - call next with the error
      next(error);
      return;
    }
    if (!routePath.endsWith('/index')) {
      // Maybe it's a folder - try to render [path]/index.html
      renderPath(`${routePath}/index`, res, next);
      return;
    }
    // We got template not found both times - call next to trigger the 404 page
    next();
  });
}

exports.matchRoutes = function (req, res, next) { /* eslint-disable-line func-names */
  let routePath = req.path;

  // Remove the first slash, render won't work with it
  routePath = routePath.substr(1);

  // If it's blank, render the root index
  if (routePath === '') {
    routePath = 'index';
  }

  renderPath(routePath, res, next);
};

// Store data from POST body or GET query in session

const storeData = function (input, data) { /* eslint-disable-line func-names */
  const sessionData = data;
  Object.keys(input).forEach((i) => {
    // any input where the name starts with _ is ignored
    if (i.startsWith('_')) {
      return;
    }

    const val = input[i];

    // Delete values when users unselect checkboxes
    if (val === '_unchecked' || val === ['_unchecked']) {
      delete sessionData[i];
      return;
    }

    // Remove _unchecked from arrays of checkboxes
    if (Array.isArray(val)) {
      const index = val.indexOf('_unchecked');
      if (index !== -1) {
        val.splice(index, 1);
      }
    } else if (typeof val === 'object') {
      // Store nested objects that aren't arrays
      if (typeof sessionData[i] !== 'object') {
        sessionData[i] = {};
      }

      // Add nested values
      storeData(val, sessionData[i]);
      return;
    }

    sessionData[i] = val;
  });
};

// Get session default data from file
let sessionDataDefaults = {};

const sessionDataDefaultsFile = path.join(__dirname, '../app/data/session-data-defaults.js');

try {
  /* eslint-disable-next-line */
  sessionDataDefaults = require(sessionDataDefaultsFile);
} catch (e) {
  console.error('Could not load the session data defaults from app/data/session-data-defaults.js. Might be a syntax error?'); // eslint-disable-line no-console
}

// Middleware - store any data sent in session, and pass it to all views
exports.autoStoreData = function (req, res, next) { /* eslint-disable-line func-names */
  if (!req.session.data) {
    req.session.data = {};
  }

  req.session.data = { ...sessionDataDefaults, ...req.session.data };

  storeData(req.body, req.session.data);
  storeData(req.query, req.session.data);

  // Send session data to all views

  res.locals.data = {};

  Object.keys(req.session.data).forEach((j) => {
    res.locals.data[j] = req.session.data[j];
  });

  next();
};
