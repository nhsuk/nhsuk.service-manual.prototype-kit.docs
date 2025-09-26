---
title: Link your pages together
order: 3
---

To take users from one page to another, you will use either:

- links – either `<a>` tags or button components with an `href` attribute
- forms – a `<form>` tag, used when submitting form data

The method used will depend on whether the page is submitting form data (radios, text inputs, etc) to the server. Otherwise we use links.

## Link your start page to question 1

1. Open `{{example.startPage.url}}.html` in your `app/views` folder.
2. Find the button component. This will start with `{% raw %}{{ button({{% endraw %}` and have 'Start now' inside.
3. Change the value of the `href` attribute from `#` to `/{{example.radios.url}}`.

Go to <http://localhost:3000/{{example.startPage.url}}> and select the <kbd><samp>Start now</samp></kbd> button to check it works.

Links normally appear as text with underlines. We make 'Start now' look like a button to make it more obvious to users.

## Link question 1 to question 2

1. Open `{{example.radios.url}}.html` in your `app/views` folder.
2. Find the line `<form action="/form-handler" method="post" novalidate>`.
3. Change the value of the `action` attribute from `/form-handler` to `/{{example.textarea.url}}`.

Go to <http://localhost:3000/{{example.radios.url}}> and select <kbd><samp>Continue</samp></kbd> to check the button works.

The `/{{example.textarea.url}}` page will look the same as the `/{{example.radios.url}}` page because we copied the same code in, but you should see the URL change.

This time it's a real HTML button, not a link. Buttons submit form data -- the URL is on the form tag, not the button.

## Link question 2 to your 'Check answers' page

1. Open `{{example.textarea.url}}.html` in your `app/views` folder.
2. Find the line `<form action="/form-handler" method="post" novalidate>`.
3. Change the value of the `action` attribute from `/form-handler` to `/{{example.checkAnswers.url}}`.

Go to <http://localhost:3000/{{example.textarea.url}}> and select <kbd><samp>Continue</samp></kbd> to check the button works.

## Link '{{example.checkAnswers.title}}' to your '{{example.confirmation.title}}' page

1. Open `{{example.checkAnswers.url}}.html` in your `app/views` folder.
2. Find the `<form>` tag button component inside.
3. Change the value of the `action` attribute from `/form-handler` to `/{{example.confirmation.url}}`.

Go to <http://localhost:3000/{{example.checkAnswers.url}}> and select <kbd><samp>Confirm and send</samp></kbd> to check the button works.

> [!NOTE]
> The back links in your pages do not go to the correct places yet. If you want, you can try and update the links by using the [back link component guidance](https://service-manual.nhs.uk/design-system/components/back-link).
