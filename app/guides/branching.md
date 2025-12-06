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
router.post('/appointment-type-answer', function (req, res) {
  const data = req.session.data
  const appointmentType = data.appointmentType

  if (appointmentType == "Face to face") {

    res.redirect('/book-face-to-face')

  } else if (appointmentType == "Phone call") {

    res.redirect('/book-phone')

  } else if (appointmentType == "Video call") {

    res.redirect('/book-video')

  } else {

    // No answer selected, return to question
    res.redirect('/appointment-type')

  }
})
```

## Branching on checkbox answers

Checkboxes return a list of checked values, so there can be many more possible combinations.

You can use the JavaScript `includes()` function to test if the list of checked values includes the one you specify within the brackets.

To test if any of of several checkboxes have been checked, combine several of these with `||`, which means 'or'.

To test if multiple checkboxes have all been checked, combine several of these with `&&`, which means 'and'.

```js
router.post('/symptoms-answer', function (req, res) {
  const data = req.session.data
  const symptoms = data.symptoms

  // If either of the urgent symptoms selected
  if (
    symptoms.includes('Chest pain') ||
    symptoms.includes('Breathlessness')
  ) {

    res.redirect('/urgent')

  } else if (symptoms.includes('Fever')) {

    res.redirect('/high-risk')

  } else if (symptoms.includes('None of these')) {

    res.redirect('/standard')

  } else {

    // No answer selected, return to question
    res.redirect('/symptoms')
  }
})
```

## Branching on number inputs

If you use a text input to ask the user to input a number, such as their age, you can then branch based on that number.

All text inputs will be treated as a string of text instead of a number by JavaScript, so you will have to first use `parseInt()` to convert the string to a number.

You can then use these operators to test the number:

- `===` - equal to
- `!==` - not equal to
- `>` – more than
- `>=` – more than or equal to
- `<` – less than
- `<=` – less than or equal to

```js
router.post('/age-answer', function (req, res) {
  const data = req.session.data

  // convert the age from a string into a number
  const age = parseInt(data.age)

  if (age >= 18) {

    res.redirect('/adult')

  } else if (age >= 13) {

    res.redirect('/teenager')

  } else if (age >= 4) {

    res.redirect('/child')

  } else if (age >= 0) {

    res.redirect('/baby')

  } else {

    // No answer selected, return to question
    res.redirect('/age')
  }
})
```
