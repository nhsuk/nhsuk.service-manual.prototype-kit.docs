---
title: Create a start page
order: 3
redirectFrom:
 - /guides/build-basic-prototype/create-pages/
 - /guides/build-basic-prototype/use-components/
---

Create an empty file named <kbd>{{example.startPage.url}}.html</kbd> in your `app/views` folder.

Add this line to the very top of your file:

```njk { .nhsuk-code--button }
{% raw %}{% extends "layout.html" %}{% endraw %}
```

This line tells the kit to use the standard page layout for your page. You'll need it on all pages you create.

Visit the [start page pattern](https://service-manual.nhs.uk/design-system/patterns/start-page) and select the Nunjucks option under the first example. This will reveal the Nunjucks code.

Copy the Nunjucks code into your file, below the line we added at the start. There is a 'Copy code' button to make this easier.

Preview pages by going to <kbd>http://localhost:3000/name-of-file</kbd> in your web browser. You don't use the file extension in URLs.

For example, go to <http://localhost:3000/{{example.startPage.url}}> to see `{{example.startPage.url}}.html`.

## Add some components

You can copy example code from the NHS design system to add page elements like radios and text inputs. We call these 'components'.

HTML is the main language used to create web pages.

Nunjucks is another language we can use in the prototype kit, to generate HTML for us. Short, simple Nunjucks code can create much longer, more complex HTML.

In the design system, components have both Nunjucks and HTML code examples. Either will work in the prototype kit, but the Nunjucks examples are recommended.

Go to the [Components section](https://service-manual.nhs.uk/design-system/components) of the NHS design system. The components are listed on the left hand side.

Each page has some guidance on when and how to use it.

Select one of the ‘Content presentation’ components, like Details, Expander or Warning callout.

Find an example on the page and select ‘Nunjucks’ to reveal the Nunjucks code. Copy the code and then paste it into the code for your start page.

Edit the content to suit this fictional service.

When you are finished editing, move on to the next step in this tutorial. You can always come back and edit the Start page content some more later.
