// External dependencies
const express = require('express');

const router = express.Router();
const packageJson = require('../package.json');

// Documentation router
router.get('/', (req, res) => {
  res.render('index');
});

// Install - Mac or Windows branching
router.post('/install/mac', (req, res) => {
  const { machine } = req.session.data;

  if (machine === 'Mac') {
    res.redirect('/install/mac/terminal');
  } else if (machine === 'Windows') {
    res.redirect('/install/windows/terminal');
  } else res.redirect('/install/mac-or-windows');
});

router.get('/download', (req, res) => {
  const { prototypeKitVersion } = packageJson;
  res.redirect(
    `https://github.com/nhsuk/nhsuk-prototype-kit/archive/refs/tags/v${prototypeKitVersion}.zip`,
  );
});

module.exports = router;
