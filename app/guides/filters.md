---
title: Filters
description: Filters are a Nunjucks feature that you can use within your page templates.
order: 4
tags:
  - general
---

They are useful for improving visual formatting or for displaying a calculated value.

[[toc]]

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

## NHS prototype kit filters

These are custom filters developed for the NHS prototype kit.

### formatNhsNumber

Use this to format an NHS number according to the NHS style guide, as 3 groups of numbers with a single space between them, like this: <samp>999 123 4567</samp>.

Example:

```njk
{% raw %}<p>Your NHS number is {{ data.nhsNumber | formatNhsNumber }}.</p>{% endraw %}
```

Displays as:

```html
{% raw %}<p>Your NHS number is 999 123 4567.</p>{% endraw %}
```

## Text filters

### upper

Use this to makes all letters uppercase.

Example:

```njk
{% raw %}<p>Postcode: {{ data.postcode | upper }}</p>{% endraw %}
```

Displays as:

```html
<p>Postcode: SW1A 1AA</p>
```

### lower

Use this to makes all letters lowercase.

Example:

```njk
{% raw %}<p>Email: {{ data.email | lower }}</p>{% endraw %}
```

Displays as:

```html
<p>Email: name@example.com</p>
```

### nl2br

This replaces line breaks in the text with `<br>` tags, so that browsers will render a line break.

It’s especially useful in summary lists where a user may have selected more than 1 checkbox option:

```njk
{% raw %}{{ summaryList({
  rows: [
    {
      key: {
        text: "Contact preferences"
      },
      value: {
        html: (data.contactPreferences | nl2br | safe)
      }
    }
  ]
}) }}{% endraw %}
```

## List (or array) filters

### length

Use this to count how many items are in the list.

Example:

```njk
{% raw %}<p>You selected {{ data.symptoms | length }} symptoms.</p>{% endraw %}
```

Displays as:

```njk
{% raw %}<p>You selected 2 symptoms.</p>{% endraw %}
```

You can also use it within a condition:

```njk
{% raw %}{% if data.medications | length > 5 %}
  <p>You are taking more than 5 medications.</p>
{% endif %}{% endraw %}
```

### first

Use this to get the first item in a list.

Example:

```njk
{% raw %}
{% set firstAppointment = data.appointments | first %}
<p>Your 1st appointment is with {{ firstAppointment.patientName }}</p>{% endraw %}
```

### last

Use this to get the last item in a list.

Example:

```njk
{% raw %}
{% set lastAppointment = data.appointments | last %}
<p>Your last appointment ends at {{ lastAppointment.endTime }}</p>{% endraw %}
```

### join

Use this to combine items in a list together with a text or HTML separator.

Example:

```njk
{% raw %}<p>You selected these symptoms: {{ data.symptoms | join(", ") }}.</p>{% endraw %}
```

Displays as:

```njk
{% raw %}<p>You selected these symptoms: headache, high temperature.</p>{% endraw %}
```

The join filter is especially useful in summary lists where a user may have selected more than 1 checkbox option:

```njk
{% raw %}{{ summaryList({
  rows: [
    {
      key: {
        text: "Contact preferences"
      },
      value: {
        html: (data.contactPreferences | join('<br>') | safe)
      }
    }
  ]
}) }}{% endraw %}
```

### sort

Use this to order items.

By default, they will be ordered alphabetically (if text) or in ascending order (if numbers).

Example:

```njk
{% raw %}{{ data.symptoms | sort | join(", ") }}{% endraw %}
```

You can also order in reverse alphabetically (Z-A), or descending order (for numbers) by using `sort(true)`:

```njk
{% raw %}{{ data.symptoms | sort(true) | join(", ") }}{% endraw %}
```

## Number filters

Use this to round a decimal number to its nearest whole number.

Example:

```njk
{% raw %}<p>Your BMI is {{ data.bmi | round }}.</p>{% endraw %}
```

Displays as:

```html
{% raw %}<p>Your BMI is 21.</p>{% endraw %}
```

---

See the [full list of built-in filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) in the Nunjucks documentation.
