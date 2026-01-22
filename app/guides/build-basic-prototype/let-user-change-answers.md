---
title: Let the user change their answers
order: 7
---

## Make the 'Change' links work

Make the **Change** links on the "{{example.checkAnswers.title}}" page work by adding the right links.

1. Find the row for `{{example.radios.summaryListKey}}`, then change the `href` value from `'#'` to `'/{{example.radios.url}}'`
2. Find the row for `{{example.textarea.summaryListKey}}`, then change the `href` value from `'#'` to `'/{{example.textarea.url}}'`

If you select a **Change** link, you'll go back to the right question page, but the existing answer will not be pre-filled.

## Show the user's answer in question 1

Radios let you select which radio should be pre-selected by setting the `value` option.

Open the `{{example.radios.url}}.html` file in your `app/views` folder.

Update the radios component to add `value: data.hasSymptoms,`, like this:

```njk
{% raw %}{{ radios({
  idPrefix: "has-symptoms",
  name: "hasSymptoms",
  fieldset: {
    legend: {
      text: "Have you felt symptoms of magical powers in the last 30 days?",
      size: "l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, things moving when you have strong feelings or hearing someone's thoughts"
  },
  value: data.hasSymptoms,
  items: [
  {
    value: "Yes",
    text: "Yes"
  },
  {
    value: "No",
    text: "No"
  },
  {
    value: "Not sure",
    text: "I'm not sure"
  }
]
}) }}{% endraw %}
```

Here we've told the radio component to pre-select a radio item if the value stored at `data.hasSymptoms` is equal to the radio item's value. If it does not match or no data is stored, then nothing will be selected.

Go to <http://localhost:3000/{{example.radios.url}}> and check the journey works by selecting an answer, continuing to the next page, then going back and refreshing the page.

## Show the user's answer in question 2

Text inputs and textareas work in a similar way to radios, by adding a `value` to set what text is pre-filled in them when the page loads.

Open the `{{example.textarea.url}}.html` file in your `app/views` folder.

Update the textarea component to add `value: data.{{example.textarea.name}},`, like this:

```njk
{% raw %}{{ textarea({
  name: "details",
  id: "details",
  value: data.details,
  label: {
    text: "Tell us your symptoms of magical powers",
    classes: "nhsuk-label--l",
    isPageHeading: true
  }
}) }}{% endraw %}
```

Go to <http://localhost:3000/{{example.textarea.url}}> and check it works by filling in an answer, continuing to the next page, going back, then refreshing your browser.
