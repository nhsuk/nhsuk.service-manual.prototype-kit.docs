---
title: Displaying error messages
description: Why to avoid adding validation errors in prototypes.
order: 10
tags:
  - general
---

The NHS prototype kit does not currently include any code or feature that makes it easy to display [error messages](https://service-manual.nhs.uk/design-system/components/error-message) based upon the user’s answers (for example, leaving a field empty).

Whilst you can add validation errors, to do so you will have to write your own JavaScript code.

## Avoid adding validation errors

In most scenarios, we recommend not adding validation errors to your prototype, as it can be a lot of effort for little value.

Instead, in usability research you could observe whether users do anything which would cause an error.

If you want to check whether your error messages make sense, you could make a copy of the page with static error messages and show these to participants within usability testing.

When developers are building your service for real, you could create a separate document to list all the possible errors in your service along with the required logic and the error message to display.

See [validation for prototypes](https://www.craigabbott.co.uk/blog/validation-for-prototypes/) by Craig Abbott for some further thoughts on this topic.
