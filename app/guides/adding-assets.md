---
title: Adding assets
description: How to add your own CSS (cascading style sheets), JavaScript or images.
order: 3
tags:
  - general
---

The prototype kit comes with standard NHS frontend styles and components for you to use in your prototypes. However, if you need to add your own CSS (cascading style sheets), JavaScript or images, use the `app/assets` folder.

## CSS

CSS lets you change how web pages look, for example text sizes, colours or spacing.

Add your CSS to `app/assets/sass/main.scss`.

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

Do not edit the file `public/assets/sass/main.css` because it's deleted and rebuilt every time you make a change to your prototype.

The prototype kit uses [Sass](https://sass-lang.com/guide), which adds extra features to CSS.

### Using import

If you have a very long `main.scss` file, you can split it up into multiple files and import those into `main.scss`. Use an underscore (\_) at the start of the import file filenames, for example, `\_admin.scss`.

Import this file into your `main.scss` file without the underscore:

```scss
@import "admin";
```

## JavaScript

You can use JavaScript to make changes to a web page without loading a new one. For example, a user could enter some numbers, then JavaScript displays the results of a calculation without loading a new page.

To add JavaScript use: `/app/assets/javascript/main.js`

Do not edit the file `/public/assets/javascript/main.js` because it's deleted and rebuilt every time you make a change to your prototype.

## Images

Add images to the `/app/assets/images` folder. You can also use subfolders to organise them if you have a lot of images.

For example if you add an image named `user.png`, use it in your page like this:

```html
<img src="/assets/images/user.png" alt="User icon">
```

Use 'alt' text to describe the image for screen readers.

Do not put files directly in `/public` because it’s deleted and rebuilt every time you make a change to your prototype.

## Other files

If you need to use other types of files in your prototype, you can create folders for them within `/app/assets/`, for example `/app/assets/pdfs/` or `/app/assets/symptoms/`.

Use the folder names when linking to the files in your prototype.

For example if you create a subfolder in `assets` called `downloads` and add a PDF named `report.pdf`, link to it like this:

```html
<a href="/assets/downloads/report.pdf">Download report (PDF only, 1MB)</a>
```

Do not put files directly in `/public` because it’s deleted and rebuilt every time you make a change to your prototype.

We avoid publishing PDFs, however. Read the guidance on [PDFs and other non-HTML documents in the service manual](https://service-manual.nhs.uk/content/pdfs-and-other-non-html-documents).
