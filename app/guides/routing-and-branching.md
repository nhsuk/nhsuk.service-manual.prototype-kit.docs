---
title: "Quick reference: Routing and branching"
description: Reference guide for routing and branching in the NHS prototype kit
order: 10
tags:
  - advanced
---

This is a quick reference guide for creating routes and branching logic in your prototype.

## Basic route structure

Routes go in `app/routes.js`. A route listens for form submissions and decides what to do next.

```js
// app/routes.js

// Run this code when a form is submitted to '/your-page-answer'
router.post('/your-page-answer', function (req, res) {
  // Your logic goes here
  res.redirect('/next-page')
})
```

## Getting data from forms

Form data is stored in `req.session.data` using the input's `name` attribute.

```js
// Get the value from an input with name="symptoms"
const symptoms = req.session.data.symptoms

// Another example
const answer = req.session.data.dateOfBirth
```

## Branching on radio button answers

Send users to different pages based on their radio button selection:

```js
router.post('/eligibility-answer', function (req, res) {
  const eligible = req.session.data.isEligible

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
  const appointmentType = req.session.data.appointmentType

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
  const symptoms = req.session.data.symptoms

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
  const symptoms = req.session.data.symptoms

  if (symptoms && symptoms.includes('Chest pain') && symptoms.includes('Breathlessness')) {
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

## Setting the form action

In your HTML page, set the form to submit to your route:

```njk
{% raw %}<form method="post" action="/your-page-answer">
  <!-- Your form content -->
</form>{% endraw %}
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
const service = req.session.data.serviceType
res.redirect(`/${service}/next-page`)
```

## Troubleshooting

### Kit crashes after adding a route

Check the terminal for error messages. Common issues:

- **Missing brackets** – every `{` needs a matching `}`
- **Missing quotes** – strings need quotes: `"Yes"` not `Yes`
- **Typos in variable names** – JavaScript is case-sensitive

### Route doesn't run

- Check the form `action` matches the route URL exactly
- Check the form `method` is `post` (not `get`)
- Make sure the route is before `module.exports = router` in routes.js

### Wrong page shows

- Check your `if` conditions match exactly what the user selects
- Check spelling and capitalisation in your conditions
- Use `console.log(answer)` to see what value you're actually getting
