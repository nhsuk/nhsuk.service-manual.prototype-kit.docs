---
layout: sub-navigation
title: Filters
sectionKey: Filters
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
