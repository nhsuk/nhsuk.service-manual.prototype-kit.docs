module.exports = (config) => (req, res, next) => {
  res.locals.serviceName = config.serviceName;
  res.locals.url = process.env.URL;

  next();
};
