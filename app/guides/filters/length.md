---
title: length
theme: List (or array) filters
order: 10
---

Use this to count how many items are in the list.

## Example

```njk
{% raw %}<p>You selected {{ data.symptoms | length }} symptoms.</p>{% endraw %}
```

Displays as:

```njk
{% raw %}<p>You selected 2 symptoms.</p>{% endraw %}
```

## Example within a condition

You can also use it within a condition:

```njk
{% raw %}{% if data.medications | length > 5 %}
  <p>You are taking more than 5 medications.</p>
{% endif %}{% endraw %}
```

