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

// Branching example
router.post('/examples/branching/answer', (req, res) => {
  // Make a variable and give it the value from 'know-nhs-number'
  const nhsNumber = req.session.data['know-nhs-number'];

  // Check whether the variable matches a condition
  if (nhsNumber === 'Yes') {
    // Send user to next page
    res.redirect('/examples/branching/answer-yes');
  } else {
    // Send user to ineligible page
    res.redirect('/examples/branching/answer-no');
  }
});

module.exports = router;
