---
title: sort
theme: List (or array) filters
order: 15
---

Use this to order items.

By default, they will be ordered alphabetically (if text) or in ascending order (if numbers).

## Default

```njk
{% raw %}{{ data.symptoms | sort | join(", ") }}{% endraw %}
```

## Reverse

You can also order in reverse alphabetically (Z-A), or descending order (for numbers) by using `sort(true)`:

```njk
{% raw %}{{ data.symptoms | sort(true) | join(", ") }}{% endraw %}
```
