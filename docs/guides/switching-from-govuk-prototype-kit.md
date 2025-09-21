---
title: Switching from the GOV.UK Prototype Kit
description: If you have learned how to use the GOV.UK Prototype Kit, you will be able to use the NHS prototype kit.
order: 10
tags:
  - advanced
---

While the two prototype kits are built in the same way, you must do some things differently.

## Installing and running the NHS prototype kit

When you are installing and running your prototype:

{% list title="Do", type="tick" %}

- get the kit either by [downloading it as a zip]({{downloadUrl}}) or by [cloning or downloading a copy from GitHub](https://github.com/nhsuk/nhsuk-prototype-kit)
- start your local server by running `npm run watch`
  {%- endlist %}

{% list title="Don’t", type="cross" %}

- do not try to create a prototype by running a command in the terminal – you must download it
- do not start your local server the same way as in the GOV.UK Prototype Kit as it will not work
  {%- endlist %}

## Making pages

When you are making pages:

{% list title="Do", type="tick" %}

- use the NHS design system for [styles](https://service-manual.nhs.uk/design-system/styles), [components](https://service-manual.nhs.uk/design-system/components) and [patterns](https://service-manual.nhs.uk/design-system/patterns) – you can also copy [template pages in the NHS prototype kit](/page-templates)

- use [NHS macro naming conventions](https://service-manual.nhs.uk/design-system) which do not have a prefix, for example `{% raw %}{{ radios }}{% endraw %}` instead of `{% raw %}{{ govukRadios }}{% endraw %}`

- use [NHS typography classes](https://service-manual.nhs.uk/design-system/styles/typography) on headings and other text, for example `<p class="nhsuk-body">nhsuk-body</p>`

- know that the NHS prototype kit does not have some functionality that is in the GOV.UK one, for example the interface to create pages from templates

- know that plugins designed for the GOV.UK Prototype Kit may not work or may need to be installed differently – for example, if you want to use the [GOV.UK Prototype Kit filters plugin](https://x-govuk.github.io/govuk-prototype-filters/get-started/) you must use instructions for earlier versions of the kit and make changes in `filters.js`
  {%- endlist %}

{% list title="Don’t", type="cross" %}

- do not copy pages from the GOV.UK Prototype Kit or GOV.UK Design System and expect them to work – you may need to copy over extra code like CSS to make them work properly
- do not use GOV.UK macro naming conventions or GOV.UK typography classes as they will not work
  {%- endlist %}

## Using routing and session data

When you save any changes to `routes.js` file, the app will restart. This will also delete all session data and reset them with any values set in `data/session-data-defaults.js`.

## Publishing your prototype online

Set the password using the variable `PROTOTYPE_PASSWORD`. Check the [guide to publish your prototype online](/guides/publish-your-prototype-online) for more details.

## Updating your prototype

If you want to update your prototype to the latest version, you will need to download the latest version of the kit and copy some files into your prototype. Go to the [guide on updating the kit](/install/updating-the-kit) for more details.

## Help and support

If you have any problems:

- ask a developer on your team (if you have one)
- email the service manual team at [england.service-manual.nhs.net](mailto:england.service-manual@nhs.net?subject=NHS%20prototype%20kit%20-%20Updating%20the%20kit)
- get in touch on the [NHS digital service manual #prototype-kit Slack channel](https://nhs-service-manual.slack.com/messages/CFYL2GDGW)
