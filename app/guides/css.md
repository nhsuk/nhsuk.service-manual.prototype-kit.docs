---
title: CSS
description: How to add your own CSS (cascading style sheets).
order: 5
tags:
  - general
---

Cascading style sheets (CSS) are used to style web content, for example setting text sizes, colours or spacing.

The prototype kit comes with the standard styles from [NHS frontend (in GitHub)](https://github.com/nhsuk/nhsuk-frontend).

However, if you need to modify existing styles or add new ones, you can do so by adding your own CSS.

The prototype kit uses [Sass](https://sass-lang.com/guide), which adds extra features to CSS.

## Adding CSS used on multiple pages

If your CSS applies to multiple pages, add it to the bottom of the file at `app/assets/sass/main.scss`.

Do not edit the file at `public/assets/sass/main.css` because it’s deleted and rebuilt every time you make a change to your prototype.

For example, to make all your second level headings pink:

```scss
// Import NHS.UK frontend library
@use "nhsuk-frontend/dist/nhsuk" as * with (
  $nhsuk-assets-path: "/nhsuk-frontend/assets/"
);

// Add your custom CSS/Sass styles below.

h2 {
  color: pink;
}
```

### Using import

If you have a very long `main.scss` file, you can split it up into multiple files and import those into `main.scss`. Use an underscore (`_`) at the start of the import file filenames, for example, `_admin.scss`.

Import this file into your `main.scss` file without the underscore:

```scss
// Import NHS.UK frontend library
@use "nhsuk-frontend/dist/nhsuk" as * with (
  $nhsuk-assets-path: "/nhsuk-frontend/assets/"
);

// Add your custom CSS/Sass styles below.
@forward "admin";
```

## Adding CSS to individual pages

Styles can also be added to individual page templates by using a `<style>` tag:

```njk
{% raw %}{% block bodyStart %}
<style type="text/css">
  body {
    background-color: pink;
  }
</style>
{% endblock%}{% endraw %}
```
