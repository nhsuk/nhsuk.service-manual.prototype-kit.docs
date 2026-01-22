---
title: Show the user's answers
order: 6
---

The prototype kit stores answers that users enter. This means you can make more realistic prototypes, for example by showing answers for users to check or to branch off to different pages depending on their answer.

When storing data, the kit uses the `name` attribute from the component to save it. We'll use this when looking up the user's answer.

## Show the answer to question 1

1. Open `{{example.checkAnswers.url}}.html` in your `app/views` folder.
2. In the first row, find the `key` that contains the text "NHS number".
3. Change "NHS number" to "{{example.radios.summaryListKey}}".
4. In `value` on the next line, change '485 777 3456' to `data.hasSymptoms`.

This is how we use data a user has entered – 'hasSymptoms' is the `name` attribute from the input component on the question page.

In the same row, find the line with `visuallyHiddenText` and change 'NHS number' to '{{example.radios.summaryListKey | lower}}'.

The link text will read as "Change {{example.radios.summaryListKey | lower }}" to screen reader users. Screen readers will read this out but it will not appear on the page. Without this hidden text, screen reader users would just hear "Change" and not necessarily know what it relates to.

## Show the answer to question 2

1. In the second row, find the `key` that contains the text 'Name'.
2. Change "Name" to "{{example.textarea.summaryListKey}}".
3. In the `value` on the next line, change 'Kevin Francis' to `data.{{example.textarea.name}}`.
4. On the line with `visuallyHiddenText`, change 'name' to '{{example.textarea.summaryListKey | lower}}'

Go to <http://localhost:3000/{{exampleStart.url}}> and answer the questions to check your answers show up correctly.

## Delete the remaining example answers

On the "Check answers" template page, there are example answers that you do not need.

1. Find the `,` (comma) after the details you have changed, and delete this and everything up to the `]` (square bracket).
2. Delete everything from the line that contains "Medical details" down to the line before "Now send your application".

Your code should now look like this:

```njk
{% raw %}<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <h1 class="nhsuk-heading-l">
      Check your answers before sending your application
    </h1>

    <h2 class="nhsuk-heading-m">
      Personal details
    </h2>

    {{ summaryList({
      rows: [
        {
          key: {
            text: "Symptoms of magical powers"
          },
          value: {
            text: data.hasSymptoms
          },
          actions: {
            items: [
              {
                href: "#",
                text: "Change",
                visuallyHiddenText: "symptoms of magical powers"
              }
            ]
          }
        },
        {
          key: {
            text: "Details of the symptoms"
          },
          value: {
            text: data.details
          },
          actions: {
            items: [
              {
                href: "#",
                text: "Change",
                visuallyHiddenText: "details of the symptoms"
              }
            ]
          }
        }
      ]
    }) }}

    <h2 class="nhsuk-heading-m">
      Now send your application
    </h2>

    <p>
      By submitting this application you are confirming that,
      to the best of your knowledge, the details you are providing
      are correct.
    </p>

    <p>
      Your details will be sent to Rose Medical Practice to begin
      your registration.
    </p>

    <a href="/confirmation-page" class="nhsuk-button">
      Accept and send registration
    </a>
  </div>
</div>{% endraw %}
```
