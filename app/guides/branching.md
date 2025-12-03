---
title: Branching
description: You can show a user different pages, depending on how they've answered a question.
order: 7
tags:
  - advanced
---

To do this, add some JavaScript to your `routes.js` file.

Here is an example:

```js
// Called when answering question about whether NHS number is known
router.post("/do-you-know-your-nhs-number-answer", (req, res) => {
  // Make a variable and give it the value from 'nhsNumberKnown'
  const nhsNumberKnown = req.session.data.nhsNumberKnown

  // Check whether the variable matches a condition
  if (nhsNumberKnown === "Yes") {
    // Send user to a page where they'll enter their NHS number
    res.redirect("/enter-nhs-number")
  } else if (nhsNumberKnown === "No") {
    // Send user to a page where they can find their NHS number
    res.redirect("/find-nhs-number")
  } else {
    // Send user back to the question page
    res.redirect("/do-you-know-your-nhs-number")
  }
})
```
