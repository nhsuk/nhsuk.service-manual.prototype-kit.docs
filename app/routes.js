// External dependencies
const express = require('express');

const router = express.Router();

// Documentation router
router.get('/', (req, res) => {
  res.render('index');
});

// Install guide branching
router.post('/install', (req, res) => {
  const { install } = req.session.data;

  if (install === 'Simple') {
    res.redirect('/install/simple');
  }
  else if (install === 'Developer') {
    res.redirect('/install/advanced');
  }
  else if (install === 'Download') {
    res.redirect('/install/download-zip');
  }
  else {
    res.redirect('/install')
  }
});

// Install - Mac or Windows branching
router.post('/install/mac', (req, res) => {
  const { machine } = req.session.data;

  if (machine === 'Mac') {
    res.redirect('/install/mac/terminal');
  } 
  else if (machine === 'Windows') {
    res.redirect('/install/windows/terminal');
  }
  else res.redirect('/install/mac-or-windows')
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
