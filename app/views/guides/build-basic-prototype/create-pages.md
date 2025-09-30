---
title: Create pages
order: 2
---

Create pages by copying examples from the [patterns section of the NHS Service manual](https://service-manual.nhs.uk/design-system/patterns).

## Create a start page

Create an empty file named <kbd>{{example.startPage.url}}.html</kbd> in your `app/views` folder.

Add this line to the very top of your file:

```njk
{% raw %}{% extends "layout.html" %}{% endraw %}
```

This line tells the kit to use the standard page layout for your page. You'll need it on all pages you create.

Visit the [start page pattern](https://service-manual.nhs.uk/design-system/patterns/start-page) and select the Nunjucks option under the first example. This will reveal the Nunjucks code.

Copy the Nunjucks code into your file, below the line we added at the start. There is a 'Copy code' button to make this easier.

Preview pages by going to <kbd>http://localhost:3000/name-of-file</kbd> in your web browser. You don't use the file extension in URLs.

For example, go to <http://localhost:3000/{{example.startPage.url}}> to see `{{example.startPage.url}}.html`.

### Change the service name

You'll normally edit the HTML to make changes to pages, but the service name is in a config file. This is so we can change it in one place to update it on every page in your prototype.

1. Open the `config.js` file in your `app` folder
2. Change `serviceName` from `"Service name goes here"` to `"{{example.name}}"`
3. Press <kbd>Cmd</kbd> + <kbd>S</kbd> on Mac or <kbd>Ctrl</kbd> + <kbd>S</kbd> on Windows to save your change

You must save every time you make a change to a file. In most code editors, a dot appears in the tab for any file that has unsaved changes.

Normally your changes will automatically show in the browser without refreshing. But for this config change, you need to refresh the page. You should see your service name change on the Start page.

## Question pages

Create 2 empty files for question pages in `app/views` named:

- `{{example.radios.url}}.html`
- `{{example.textarea.url}}.html`

As before, add this line to the top of each file:

```njk
{% raw %}{% extends "layout.html" %}{% endraw %}
```

Visit the [question page pattern](https://service-manual.nhs.uk/design-system/patterns/question-pages) to see some example question pages.

Find the first example with radios and copy the Nunjucks in to the first file. Copy the Nunjucks in to the first file you made.

The example includes a default radio question 'Where do you live', but we don't actually need this as we'll add our own components from the design system later. Delete the radio component by deleting all the code from `{% raw %}{{ radios({{% endraw %}` to `{% raw %}}) }}{% endraw %}`.

Preview the page by visiting <http://localhost:3000/{{example.radios.url}}> in your browser. You should be left with a back link and a continue button.

For `{{example.textarea.url}}.html` you can copy all the code from the `{{example.radios.url}}.html` page we just made. Check it works by visiting <http://localhost:3000/{{example.textarea.url}}> in your browser.

## Check answers page

Create an empty file named <kbd>{{example.checkAnswers.url}}.html</kbd> in `app/views`.

Add this line to the top of the file:

```njk
{% raw %}{% extends "layout.html" %}{% endraw %}
```

Copy the Nunjucks code from the [check answers pattern page](https://service-manual.nhs.uk/design-system/patterns/check-answers) and add it to the file.

Go to <http://localhost:3000/{{example.checkAnswers.url}}> to check it works.

## Confirmation page

Create an empty file named <kbd>{{example.confirmation.url}}.html</kbd> in `app/views`.

Copy the Nunjucks code from the [confirmation page pattern](https://service-manual.nhs.uk/design-system/patterns/confirmation-page) into the file.

Add this line to the top of the file:

```njk
{% raw %}{% extends "layout.html" %}{% endraw %}
```

Go to <http://localhost:3000/{{example.confirmation.url}}> to check.
