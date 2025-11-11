---
title: nl2br
theme: Text filters
order: 4
---

This replaces line breaks in the text with `<br>` tags, so that browsers will render a line break.

It’s especially useful in summary lists where a user may have selected more than 1 checkbox option.

## Example

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
