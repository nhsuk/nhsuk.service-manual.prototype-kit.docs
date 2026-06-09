---
title: Create a second question page
order: 5
redirectFrom:
 - /guides/build-basic-prototype/use-components-2/
---

Create another empty file for your second question named <kbd>{{example.textarea.url}}.html</kbd> in your `app/views` folder.

As before, add this line to the top of each file:

```njk { .nhsuk-code--button }
{% raw %}{% extends "layout.html" %}{% endraw %}
```

Preview the page by visiting <http://localhost:3000/{{example.textarea.url}}> in your browser.

Our `{{example.textarea.url}}.html` page is going to have a textarea component to collect details of the users symptoms.

1. Go to the [textarea page of the design system](https://service-manual.nhs.uk/design-system/components/textarea).
2. Select the <kbd><samp>Nunjucks</samp></kbd> tab under the 'Radios with hints' example, then <kbd><samp>Copy code</samp></kbd>.
3. Open `{{example.textarea.url}}.html` in your `app/views` folder.
4. Paste the component inside the `<form>` tag, before the continue button.

### Customise the example code

1. Delete `{% raw %}{% from "textarea/macro.njk" import textarea %}{% endraw %}`. These import lines are not needed in the prototype kit.
2. Under `label`, change `text` from "Can you provide more detail?" to "{{example.textarea.label}}".
3. Change the `id` and `name` to `{{example.textarea.name}}`.
4. We don't need a hint, so remove it and the comma just before it.
5. We also want to make the label be the page `h1`, so in the `label` area add `size: "l",` and `isPageHeading: true`

Your component code should now look like this:

```njk { .nhsuk-code--button }
{% raw %}{{ textarea({
  name: "details",
  id: "details",
  label: {
    text: "Tell us your symptoms of magical powers",
    size: "l",
    isPageHeading: true
  }
}) }}{% endraw %}
```

Your page should now look like this:

![Web page with the heading ‘Tell us your symptoms of magical powers’, a textarea and continue button.](/assets/images/guides/build-basic-prototype/textarea.png 'Screenshot of how your prototype should look.')

## Link the pages together

As before, you’ll need to link 2 pages together.

### Make the back link work

Find the back link on this second question page and update the `href` to `/{{example.radios.url}}` to link it back to the first question.

### Make the continue button on the first question work

You’ll notice that the continue button on the first question page takes you to a ‘Page not found’ error page.

To make this button work, you will have to do something different from the button on the start page. That’s because this time it's a real HTML button, not a link. Buttons submit form data -- the URL is on the form tag, not the button.

To make the form work:

1. Open `{{example.radios.url}}.html` in your `app/views` folder.
2. Find the line `<form action="/form-handler" method="post" novalidate>`.
3. Change the value of the `action` attribute from `/form-handler` to `/{{example.textarea.url}}`.

Click on the Continue button to check that it now works. It should take you the second question page.
