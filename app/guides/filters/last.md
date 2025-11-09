---
title: last
theme: List (or array) filters
order: 12
---

Use this to get the last item in a list.

## Example

```njk
{% raw %}
{% set lastAppointment = data.appointments | last %}
<p>Your last appointment ends at {{ lastAppointment.endTime }}</p>{% endraw %}
```
