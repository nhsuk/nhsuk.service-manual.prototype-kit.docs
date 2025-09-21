---
title: Using filters
description: Filters are a Nunjucks feature that you can use within your page templates.
order: 4
tags:
  - general
---

They are useful for improving visual formatting or for displaying a calculated value.

## How to use filters

To use a filter, add the `|` character (a vertical line or ‘pipe’), and then the name of the filter.

For example, the `upper` filter can be used to display all the letters in uppercase:

```njk
Your postcode is {% raw %}{{ data.postcode | upper }}{% endraw %}.
```

You can also use filters within Nunjucks macros for NHS components.

For example, if you have a question with checkboxes, you can use the `join` filter to display the checked answers in a summary list, with a comma and a space between each one:

```njk
{% raw %}{{ summaryList({
  rows: [
    {
      key: {
        text: "Symptoms"
      },
      value: {
        text: data.symptoms | join(", ")
      }
    }
  ]
}) }}{% endraw %}
```

## NHS filters

The prototype kit come with some filters specific to the NHS.

### formatNhsNumber

Use this to format an NHS number according to the NHS style guide, as 3 groups of numbers with a single space between them, like this: <samp>999 123 4567</samp>.

```njk
Your NHS number is {% raw %}{{ data.nhsNumber | formatNhsNumber }}{% endraw %}.
```

## General filters

Here are some general filters included within Nunjucks that often used within prototypes:

### Text filters

- `upper` – makes all letters uppercase
- `lower` – makes all letters lowercase
- `nl2br` – replaces line breaks with `<br>` tags

### List (or array) filters

- `length` – counts the number of items in the list
- `first` – the first item in the list
- `last` – last last item of the list
- `reverse` – reverses the order
- `join(", ")` – joins the items in the list with a separator
- `sort` – orders the items alphabetically (A-Z) or numerically (lowest first)
- `sort(true)` – orders the items in reverse alphabetically (Z-A) or numerically (highest first)

### Number filters

- `round` – rounds a decimal to the nearest whole number

See the [full list of built-in filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) in the Nunjucks documentation.
