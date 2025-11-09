---
title: formatNhsNumber
theme: NHS filters
order: 1
---

Use this to format an NHS number according to the NHS style guide, as 3 groups of numbers with a single space between them, like this: <samp>999 123 4567</samp>.

## Example

```njk
{% raw %}<p>Your NHS number is {{ data.nhsNumber | formatNhsNumber }}.</p>{% endraw %}
```

Displays as:

```html
{% raw %}<p>Your NHS number is 999 123 4567.</p>{% endraw %}
```
