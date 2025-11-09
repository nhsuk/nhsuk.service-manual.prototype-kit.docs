---
title: round
theme: Number filters
order: 20
---

Use this to round a decimal number to its nearest whole number.

## Example

```njk
{% raw %}<p>Your BMI is {{ data.bmi | round }}.</p>{% endraw %}
```

Displays:

```html
{% raw %}<p>Your BMI is 21.</p>{% endraw %}
```
