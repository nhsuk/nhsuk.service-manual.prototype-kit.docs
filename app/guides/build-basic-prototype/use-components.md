---
title: Use components from the design system
order: 4
---

You can copy example code from the NHS design system to add page elements like radios and text inputs. We call these 'components'.

## HTML and Nunjucks

HTML is the main language used to create web pages.

Nunjucks is another language we can use in the prototype kit, to generate HTML for us. Short, simple Nunjucks code can create much longer, more complex HTML.

In the design system, components have both Nunjucks and HTML code examples. Either will work in the prototype kit, but the Nunjucks examples are recommended.

## Add radios to question 1

1. Go to the [radios component in the design system](https://service-manual.nhs.uk/design-system/components/radios).
2. Select the <kbd><samp>Nunjucks</samp></kbd> tab under the 'Radios with hints' example, then <kbd><samp>Copy code</samp></kbd>.
3. Open `{{example.radios.url}}.html` in your `app/views` folder.
4. Paste the component inside the `<form>` tag, before the continue button.

### Customise the example code

1. Delete `{% raw %}{% from "radios/macro.njk" import radios %}{% endraw %}`. These import lines are not needed in the prototype kit.
2. Change `name` and `idPrefix` to `{{example.radios.name}}`.
3. Under `legend`, change `text` from `Do you know your NHS number?` to `{{example.radios.legend}}`.
4. In the `hint: { text:` area replace the hint with `{{example.radios.hint}}`.
5. Update each of the radio options so the text is appropriate. The `text` is what is used as the radio label. The `value` is what is sent to the server when the form is submitted. It's what will be used when we display the data. It's often easiest if these match.

Your component code should now look like this:

```njk
{% raw %}{{ radios({
  idPrefix: "has-symptoms",
  name: "has-symptoms",
  fieldset: {
    legend: {
      text: "Have you felt symptoms of magical powers in the last 30 days?",
      classes: "nhsuk-fieldset__legend--l",
      isPageHeading: true
    }
  },
  hint: {
    text: "For example, things moving when you have strong feelings or hearing someone's thoughts"
  },
  items: [
  {
    value: "Yes",
    text: "Yes"
  },
  {
    value: "No",
    text: "No"
  },
  {
    value: "Not sure",
    text: "I'm not sure"
  }
]
}) }}{% endraw %}
```

Your page should now look like this:

![Web page with the heading ‘Have you had symptoms of magical power in the last 30 days?’, 3 radios and a continue button.](/assets/images/guides/build-basic-prototype/radios.png 'Screenshot of how your prototype should look.')
