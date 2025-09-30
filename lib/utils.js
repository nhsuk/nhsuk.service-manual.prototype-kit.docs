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
