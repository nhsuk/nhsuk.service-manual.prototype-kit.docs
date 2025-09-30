// External dependencies
const express = require('express');

const router = express.Router();
const packageJson = require('../package.json');

// Documentation router
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/download', (req, res) => {
  const { prototypeKitVersion } = packageJson;
  res.redirect(
    `https://github.com/nhsuk/nhsuk-prototype-kit/archive/refs/tags/v${prototypeKitVersion}.zip`,
  );
});

module.exports = router;
