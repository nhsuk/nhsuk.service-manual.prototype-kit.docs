---
title: Branching
description: You can show a user different pages, depending on how they've answered a question.
order: 7
tags:
  - advanced
---

To do this, add some JavaScript to your `routes.js` file.

## Branching on radio button answers

Send users to different pages based on their radio button selection:

```js
router.post('/eligibility-answer', function (req, res) {
  const data = req.session.data
  const eligible = data.isEligible

  if (eligible == "Yes") {
    res.redirect('/next-question')
  }
  else {
    res.redirect('/not-eligible')
  }
})
```

### Multiple options

Handle more than 2 options with `else if`:

```js
router.post('/appointment-type-answer', function (req, res) {
  const data = req.session.data
  const appointmentType = data.appointmentType

  if (appointmentType == "Face to face") {
    res.redirect('/book-face-to-face')
  }
  else if (appointmentType == "Phone call") {
    res.redirect('/book-phone')
  }
  else if (appointmentType == "Video call") {
    res.redirect('/book-video')
  }
  else {
    // No answer selected, return to question
    res.redirect('/appointment-type')
  }
})
```

## Branching on checkbox answers

Checkboxes return an array of values. Check if a specific value was selected:

```js
router.post('/symptoms-answer', function (req, res) {
  const data = req.session.data
  const symptoms = data.symptoms

  // Check if 'Fever' was selected
  if (symptoms && symptoms.includes('Fever')) {
    res.redirect('/high-risk')
  }
  else {
    res.redirect('/standard')
  }
})
```

### Multiple checkbox conditions

Check for multiple selected values:

```js
router.post('/symptoms-answer', function (req, res) {
  const data = req.session.data
  const symptoms = data.symptoms

  if (
    symptoms &&
    symptoms.includes('Chest pain') &&
    symptoms.includes('Breathlessness')
  ) {
    res.redirect('/urgent')
  }
  else if (symptoms && symptoms.includes('Fever')) {
    res.redirect('/high-risk')
  }
  else {
    res.redirect('/standard')
  }
})
```

## Common patterns

### Return to question if no answer

Always handle the case where nothing is selected:

```js
if (answer == "Yes") {
  res.redirect('/next-page')
}
else if (answer == "No") {
  res.redirect('/other-page')
}
else {
  // Nothing selected - return to question
  res.redirect('/your-question')
}
```

### Using data in redirect URLs

You can use data values in your redirect paths:

```js
const data = req.session.data
const service = data.serviceType
res.redirect(`/${service}/next-page`)
```
