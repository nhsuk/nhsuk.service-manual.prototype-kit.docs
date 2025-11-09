---
title: join
theme: List (or array) filters
order: 14
---

Use this to combine items in a list together with a text or HTML sepatator.

## Example

```njk
{% raw %}<p>You selected these symptoms: {{ data.symptoms | join(", ") }}.</p>{% endraw %}
```

Displays:

```njk
{% raw %}<p>You selected these symptoms: headache, high temperature.</p>{% endraw %}
```


## Summary list example

The join filter is especially useful in summary lists where a user may have selected more than 1 checkbox option.

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
