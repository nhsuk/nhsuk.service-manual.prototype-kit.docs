---
title: Add a textarea to question 2
order: 5
---

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
5. We also want to make the label be the page `h1`, so in the `label` area add `classes: "nhsuk-label--l",` and `isPageHeading: true`

Your component code should now look like this:

```njk
{% raw %}{{ textarea({
  name: "details",
  id: "details",
  label: {
    text: "Tell us your symptoms of magical powers",
    classes: "nhsuk-label--l",
    isPageHeading: true
  }
}) }}{% endraw %}
```

Your page should now look like this:

![Web page with the heading ‘Tell us your symptoms of magical powers’, a textarea and continue button.](/assets/images/guides/build-basic-prototype/textarea.png 'Screenshot of how your prototype should look.')
