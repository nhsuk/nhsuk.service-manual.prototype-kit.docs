---
title: Making pages
description: Use your code editor to make pages.
order: 1
tags:
  - general
---

Create all your pages in the `/app/views` folder.

The file names must end in `.html` – this is called the file extension.

It’s a good idea to name the files using a shortened, lowercase version of the page title, with spaces replaced by hyphens. For example, `find-a-gp.html`.

The pages you create are automatically viewable in your browser at the URL that matches the file name.

For example, if you go to <http://localhost:3000/contact> in your browser, you will see the `contact.html` page.

## Specifying a layout

Each page you create will need to specify which layout it uses. Otherwise you’ll get a white background with no header or footer!

To use the standard layout that comes with the prototype kit, add this line to the top of each file:

```njk
{% raw %}{% extends "layout.html" %}{% endraw %}
```

## Using subfolders

The kit allows you add pages into subfolders within `/app/views`.

For example, you can make the page in `/app/views/medicines/ibuprofen.html`, and then view the page by going to <http://localhost:3000/medicines/ibuprofen>.

## Index pages

If a file is named `index.html` it is special, and can be viewed in your browser without specifying the full name.

The file at `/app/views/index.html` is your ‘home page’, and can be viewed at <http://localhost:3000>.

You can also add files named `index.html` within sub-folders.

For example, a file named `/app/views/medicines/index.html` can be viewed at <http://localhost:3000/medicines/>.
