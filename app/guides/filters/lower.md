---
title: lower
theme: Text filters
order: 3
---

Use this to makes all letters uppercase.

## Example

```njk
{% raw %}<p>Email: {{ data.email | lower }}</p>{% endraw %}
```

Displays:

```html
<p>Email: name@example.com</p>
```
