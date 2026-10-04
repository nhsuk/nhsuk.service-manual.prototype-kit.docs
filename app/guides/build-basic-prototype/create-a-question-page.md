---
title: Create a question page
order: 4
redirectFrom:
 - /guides/build-basic-prototype/link-page-together/
---

Create an empty file for your first question named <kbd>{{example.radios.url}}.html</kbd> in your `app/views` folder.

As before, add this line to the top of each file:

```njk { .nhsuk-code--button }
{% raw %}{% extends "layout.html" %}{% endraw %}
```

Visit the [question page pattern](https://service-manual.nhs.uk/design-system/patterns/question-pages) to see some example question pages.

Find the first example with radios and copy the Nunjucks in to the file you just made.

Preview the page by visiting <http://localhost:3000/{{example.radios.url}}> in your browser.

The example includes a default radio question 'Where do you live?' with 4 possible answers.

### Customise the example code

1. Delete these lines: `{% raw %}{% from "back-link/macro.njk" import backLink %}
{% from "button/macro.njk" import button %}
{% from "radios/macro.njk" import radios %}{% endraw %}` (they not needed in the prototype kit).
2. Under `legend`, change `text` from `Where do you live?` to `{{example.radios.legend}}`.
3. Change `name` to `hasSymptoms`
4. Update the first 3 radio options to be ‘Yes’, ‘No’ and ‘Not sure’. The `text` is what is used as the radio label. The `value` is what is sent to the server when the form is submitted and it's what will be used when we display the data. It's often easiest if these match. The 4th radio option is not needed, so you’ll need to delete it. You’ll also need to remember to delete the comma after the 3rd radio option, as it’s now the last one.
5. Add some hint text by adding `hint: { text: "For example, things moving when you have strong feelings or hearing someone's thoughts"}` to the component.

Your component code should now look something like this:

```njk { .nhsuk-code--button }
{% raw %}{{ radios({
  fieldset: {
    legend: {
      text: "Have you felt symptoms of magical powers in the last 30 days?",
      size: "l",
      isPageHeading: true
    }
  },
  name: "hasSymptoms",
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

## Link the 2 pages together

To take users from one page to another, you will use either:

- links – either `<a>` tags or components like back links, action links and buttons with an `href` attribute
- forms – a `<form>` tag, used when submitting form data

The method used will depend on whether the page is submitting form data (radios, text inputs, etc) to the server. Otherwise we use links.

### Make the back link work

If you select the back link on your question page, you’ll notice that nothing happens.

To make the back link work, you’ll need to tell it which page to go back to.

Find the `backLink` component in your code, and change the `href` from `"#"` to `"/{{example.startPage.url}}"`.

Click the back link to check that it takes you back to the start page.

### Make the start now button work

On your start page, you’ll notice that the ‘Start now’ button also does not work.

Links normally appear as text with underlines. We make ‘Start now’ look like a button to make it more obvious to users.

You’ll now need to update this button to link to your question page.

1. Open `{{example.startPage.url}}.html` in your `app/views` folder.
2. Find the button component. This will start with `{% raw %}{{ button({{% endraw %}` and have 'Start now' inside.
3. Change the value of the `href` attribute from `#` to `/{{example.radios.url}}`.

Click the ‘Start now’ button to check it works.
