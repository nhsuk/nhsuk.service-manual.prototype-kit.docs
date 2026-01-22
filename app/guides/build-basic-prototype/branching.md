---
title: Show different pages depending on user input
order: 8
---

Our 1st question asks the user if they have had symptoms of magical powers in the last 30 days. We're going to send them to an 'ineligible' page if they answer anything other than yes. Sending users to different pages based on their input is called branching.

To do this, we're going to need an `{{example.ineligible.url}}.html` page, and some logic to decide when to send users there.

This kind of logic goes in a file called `app/routes.js`, which is written in JavaScript. Routes let us use code to decide what to do when a user visits a URL or submits a form.

We'll make a route that takes the answer the user gave to the 1st question and either sends them to the next question or the ineligible page.

## Create an ineligible page

First, make an `{{example.ineligible.url}}.html` page by copying this code to `app/views`.

```njk
{% raw %}{% extends "layout.html" %}

{% set pageName = "Ineligible" %}

{% block content %}
  <div class="nhsuk-grid-row">
    <div class="nhsuk-grid-column-two-thirds">
      <h1>{{ pageName }}</h1>
    </div>
  </div>
{% endblock %}{% endraw %}
```

Then update the content to tell the user why they're ineligible and what they can do next.

To check it works, go to <http://localhost:3000/{{example.ineligible.url}}>.

## Create a route

We're going to write some logic to process the user's answer to question 1. If the user has had magical symptoms in the last 30 days, we'll send them to question 2. If they answer with anything else, we'll send them to the ineligible page.

Currently, the `{{example.radios.url}}` page sends the user directly to question 2. Instead, we're going to send them to a special URL where we can run some code to check their answer.

1. In `{{example.radios.url}}.html` change the form `action` to `/{{example.radios.url}}-answer`. This is a URL we're making up now so that we can have a route that responds at this URL.
2. Open `/app/routes.js`.
3. Insert new JavaScript into line 5, before `module.exports = router`.

   ```js
   // Run this code when a form submitted to '/{{example.radios.url}}-answer'
   router.post('/{{example.radios.url}}-answer', function (req, res) {

     // Make a variable and give it the value from 'hasSymptoms'
     const hasSymptoms = req.session.data.hasSymptoms

     // Check whether the variable matches a condition
     if (hasSymptoms === "Yes") {

       // Send user to next page
       res.redirect('/{{example.textarea.url}}')
     }
     else if (hasSymptoms === "No" || hasSymptoms === "Not sure") {

       // Send user to ineligible page
       res.redirect('/{{example.ineligible.url}}')
     }
     else {

       // No answer, return to question
       res.redirect('/{{example.radios.url}}')
     }
   })
   ```

4. Check it works. Selecting 'Yes' should send you to the next question. Selecting 'No' or 'Not sure' should send you to the ineligible page. If the question isn't answered, you should be sent back to the question.

## If it does not work

If you do not get a page, check in the terminal to see if the kit has crashed. This is a common problem if there's a typo in the JavaScript. If so, the kit will try to tell you the line number with the issue.

If the kit crashes, you will see something like this on the terminal:

```shell
/Users/florence/Projects/{{example.url}}-prototype/app/routes.js:12
^
SyntaxError: Unexpected token }
at Object.exports.runInThisContext (vm.js:76:16)
at Module._compile (module.js:542:28)
at Object.Module._extensions..js (module.js:579:10)
at Module.load (module.js:487:32)
at tryModuleLoad (module.js:446:12)
at Function.Module._load (module.js:438:3)
at Module.require (module.js:497:17)
at require (internal/module.js:20:19)
at Object.&lt;anonymous&gt; (/Users/florence/Projects/{{example.url}}-prototype/server.js:7:14)
at Module._compile (module.js:570:32)
[14:11:50] [nodemon] app crashed - waiting for file changes before starting…
```

The 1st line of this sample output ends with `/app/routes.js:12`.

The '12' suggests there's probably an issue on line 12 or the line before it. In this case, the issue was a missing bracket.
