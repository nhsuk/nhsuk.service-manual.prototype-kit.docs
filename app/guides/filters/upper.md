---
title: upper
theme: Text filters
order: 2
---

Use this to makes all letters uppercase.

## Example

```njk
{% raw %}<p>Postcode: {{ data.postcode | upper }}</p>{% endraw %}
```

Displays:

```html
<p>Postcode: SW1A 1AA</p>
```
