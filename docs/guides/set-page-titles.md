---
title: Setting page titles
description: Change the page title displayed in the browser tab.
order: 2
tags:
  - general
---

> [!NOTE]
> This feature requires version 6.3.0 of the NHS prototype kit or above.

The page title (`<title>`) is displayed in the browser tab.

The NHS Digital service manual has guidance on [writing page titles](https://service-manual.nhs.uk/design-system/styles/page-template#page-title).

To follow this guidance, set the first part of the page title by setting the `pageName` variable somewhere at the top of your view template:

```js
{% raw %}{% set pageName = "Register with a GP" %}{% endraw %}
```

This will be used along with the `serviceName` set in `config.js` to generate a page title with this format:

```text
Register with a GP - Service name goes here - NHS
```

As the page name used in the title will often be the same as the `<h1>` heading, you can re-use the same variable there to ensure consistency:

```js
{% raw %}{% set pageName = "Register with a GP" %}

{% block content %}
  <h1>{{ pageName }}</h1>
{% endblock %}{% endraw %}
```

## Adding an error prefix

If your prototype includes validation error messages, you can set the `errors` variable to include an error prefix in the page title:

```js
{% raw %}{% set pageName = "Your previous address" %}
{% set errors = true %}{% endraw %}
```

This will generate the page title:

```text
Error: Your previous address - Service name goes here - NHS
```

The error prefix will also be included if the `errors` variable is set to a non-empty string, array or object

## Custom page title formats

If you need to use a different page title format, you can do so by overriding the `pageTitle` block in your `layout.html` file.

For example:

```js
{% raw %}{% block pageTitle -%}
  {{ pageName }} - NHS {{ serviceName }}
{%- endblock %}{% endraw %}
```
