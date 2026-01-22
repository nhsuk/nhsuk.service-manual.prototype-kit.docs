---
title: Passing data page to page
description: The kit stores data from all answers that users give in a prototype. This lets you use or show the answers later.
order: 6
tags:
  - general
---

## How to use

When a user answers questions, their answer is saved within the 'data' object using the `name` attribute of the input.

For example, if you use this input to collect a user's name:

```js
{% raw %}{{ input({
  label: {
    text: "Full name"
  },
  id: "full-name",
  name: "fullName"
}) }}{% endraw %}
```

You can show what the user entered later on like this:

```njk
{% raw %}<p>{{ data.fullName }}</p>{% endraw %}
```

Answers from checkboxes will appear with commas, like 'a,b,c'. To show them as a list, use a `for` loop:

```njk
{% raw %}<ul>
  {% for condition in conditions %}
  <li>test</li>
  {% endfor %}
</ul>{% endraw %}
```

## Showing answers in inputs

If a user goes back to a page where they entered data, they would expect to see the answer they gave.

Most inputs use the `value` option:

```js
{% raw %}{{ input({
  label: {
    text: "Full name"
  },
  id: "full-name",
  name: "fullName",
  value: data.fullName
}) }}{% endraw %}
```

For checkboxes and dates you need to use the `values` option (plural) instead:

```js
{% raw %}{{ checkboxes({
  idPrefix: "conditions",
  name: "conditions",
  fieldset: {
    legend: {
      text: "Have you ever had any of these conditions?",
      size: "l",
      isPageHeading: true
    }
  },
  values: data.conditions,
  hint: {
    text: "Select all that apply"
  },
  items: [
    {
      value: "Asthma",
      text: "Asthma"
    },
    {
      value: "Cancer",
      text: "Cancer"
    },
    {
      value: "Lung disease",
      text: "Lung disease"
    },
    {
      value: "Diabetes",
      text: "Diabetes"
    }
  ]
}){% endraw %}
```

Being able to set checkboxes and radios in this way was added in [NHS Frontend version 9.2.0](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v9.2.0).

## Clearing data

To clear the data, for example at the end of a user research session, ask the user to close their browser or use the 'Reset data' link in the footer.
