---
title: first
theme: List (or array) filters
order: 11
---

Use this to get the first item in a list.

## Example

```njk
{% raw %}
{% set firstAppointment = data.appointments | first %}
<p>Your 1st appointment is with {{ firstAppointment.patientName }}</p>{% endraw %}
```
