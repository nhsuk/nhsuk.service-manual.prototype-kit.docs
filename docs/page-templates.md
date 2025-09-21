---
layout: page
title: Page templates
---

You can find some example page templates in [patterns section of the NHS service manual](https://service-manual.nhs.uk/design-system/patterns).

These include:

- [question pages](https://service-manual.nhs.uk/design-system/patterns/question-pages)
- [confirmation pages](https://service-manual.nhs.uk/design-system/patterns/confirmation-page)
- [check answers pages](https://service-manual.nhs.uk/design-system/patterns/check-answers)
- [task list pages](https://service-manual.nhs.uk/design-system/patterns/complete-multiple-tasks)

To use one, copy and paste the Nunjucks code from the page into a new file in your `app/views` folder.

The file name should end with `.html` and not contain any spaces, for example `what-are-your-symptoms.html`

You will also need to add this line of code to the top of each page:

```njk
{% raw %}{% extends "layout.html" %}{% endraw %}
```

## NHS website pages

If you are prototyping a service which includes pages on the NHS website, you can use these templates:

- [NHS website homepage](/templates/nhsuk-homepage)
- [Health A to Z](/templates/nhsuk-health-a-to-z)
- [NHS services](/templates/nhsuk-nhs-services)
- [Live Well](/templates/nhsuk-live-well)
- [Mental health](/templates/nhsuk-mental-health)
- [Care and support](/templates/nhsuk-social-care-and-support)
- [Pregnancy](/templates/nhsuk-pregnancy)
