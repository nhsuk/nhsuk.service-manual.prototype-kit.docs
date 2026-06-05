---
title: Create a confirmation page
order: 8
---

Create an empty file named <kbd>{{example.confirmation.url}}.html</kbd> in `app/views`.

Copy the Nunjucks code from the [confirmation page pattern](https://service-manual.nhs.uk/design-system/patterns/confirmation-page) into the file.

Add this line to the top of the file:

```njk { .nhsuk-code--button }
{% raw %}{% extends "layout.html" %}{% endraw %}
```

Go to <http://localhost:3000/{{example.confirmation.url}}> to check.

Update the content to suit this fictional service.

## Link to the confirmation page from the Check answers page

As before, you’ll need to link to this page from the previous page. However there is only 1 link to update as the Confirmation page does not have a back link.

To link to the confirmation page:

1. Open `{{example.checkAnswers.url}}.html` in your `app/views` folder.
2. Find the line `<form action="/form-handler" method="post" novalidate>`.
3. Change the value of the `action` attribute from `/form-handler` to `/{{example.confirmation.url}}`.

Click on the ‘Confirm and send’ button to check that it now works. It should take you the second question page.
