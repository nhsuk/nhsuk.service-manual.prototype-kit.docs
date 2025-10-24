---
layout: page
title: Updates
description: Changes made in each major and minor version.
redirectFrom: whats-new/updates
---

## 7.1.0 - 20 October 2025

- Adds a filter for formatting NHS numbers with spaces
- Fixes Browsersync within GitHub Codespaces
- Fixes nested query strings not saving correctly
- Changes to GitHub Codespaces config (setting tab size to 2, turning on line wrapping by default)

## 7.0.0 -- 27 August 2025

- NHS frontend updated to 10.0.0. This is a breaking change release -- follow the [updating to version 10 guide](https://service-manual.nhs.uk/design-system/guides/updating-to-v10) to see additional changes you need to make
- The kit will now offer to use a different port if something is running on the default one
- The jQuery JavaScript library is no longer included
- The question page template is no longer included, as this is now available on the NHS Service manual website: [question pages](https://service-manual.nhs.uk/design-system/patterns/question-pages)

## 6.3.0 -- 26 June 2025

- It’s now easier to [set page titles](/guides/set-page-titles)
- NHS frontend updated to 9.6.3

## 6.2.0 -- 23 May 2025

- NHS frontend updated to 9.6.1
- Mark the kit as compatible with Node 22
- Preserve query strings when redirecting from POSTs

## 6.1.0 -- 16 May 2025

- NHS frontend updated to 9.5.2
- Fix to include the NHS JavaScript in the default template

## 6.0.0 -- 7 May 2025

- Adds a new 'Reset data' feature, linked in the footer
- Switches to a new [page template](https://service-manual.nhs.uk/design-system/styles/page-template) included within NHS frontend
- removes the 'Check your answers' and confirmation page example templates
- NHS frontend updated to 9.4.1

## 5.3.0 -- 14 February 2025

- [Panel component](https://service-manual.nhs.uk/design-system/components/panel) added
- Checkboxes and radios items can now more easily be pre-selected. See [passing data page to page guide](/guides/passing-data-page).

## 5.2.0 -- 13 December 2024

- [Task list component](https://service-manual.nhs.uk/design-system/components/task-list) added
- Added a devcontainer.json file to configure using the kit with [Github Codespaces](https://github.com/features/codespaces)
- Fixes for using the `serviceName` variable
- Page templates and middleware moved to lib folder

## 5.1.0 -- 12 November 2024

- The guidance and tutorials were removed from the kit and are now hosted separately as part of this website
- NHS frontend updated to 9.1.0
- Errors are now shown in the terminal when session data defaults crashes

## 5.0.0 -- 15 October 2024

- NHS frontend updated to 9.0.1 -- see [version 9.0.0 release notes](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v9.0.0) for details on the breaking changes
- The `outerContent` block has been dropped -- use `beforeContent` block for both breadcrumbs and back links

## 4.12.0 -- 15 August 2024

- The username and password browser prompt replaced with a custom page that asks for a password only
- Console logging enabled for nodemon
- NHS frontend update to 8.3.0
- Fixed setting PORT via the command line

## 4.11.0 -- 27 June 2024

- Nunjucks caching disabled so changes to templates show immediately
- The server is no longer restarted whenever .html and .scss files are changed
- NHS website template updated to match the current live ones

## 4.10.0 -- 22 February 2024

- NHS frontend to updated to 8.1.0
- Node.js updated to version 20
- Minor bug fixes and template updates

## 4.9.0 -- 1 June 2023

- NHS frontend updated to 7.0.0
- Bug fixes and documentation updates

## 4.8.0 -- 2 February 2022

- NHS frontend updated to 6.1.0

## 4.7.0 -- 22 September 2021

- NHS frontend updated to 5.2.0

## 4.6.0 -- 16 August 2021

- Custom styles can be added on a per template basis with a new `customStyles` template block.

## 4.5.0 -- 26 July 2021

- NHS website page examples and Google homepage template added

## 4.4.0 -- 17 May 2021

- NHS frontend updated to 5.1.0
- Dependency updates

## 4.3.0 -- 16 March 2021

- NHS frontend updated to 5.0.0
- Dependency updates

## 4.2.0 -- 25 February 2021

- `outerContent` block added to template for content that needs to appear outside the `<main>` tag but inside `<div class="nhsuk-width-container">`
- Example page templates updated

## 4.1.0 -- 21 January 2021

- NHS frontend updated to 4.1.0
- Dependency updates

## 4.0.0 -- 27 October 2020

- Removed custom Phase banner component
- Removed custom Tag component
- Updated the class names for the Confirmation panel which now uses the Card component
- Removed the custom panel confirmation styles
- NHS frontend updated to 4.0.0
- Dependency updates

For details of changes before 4.0.0, see the [full NHS prototype kit changelog on GitHub](https://github.com/nhsuk/nhsuk-prototype-kit/blob/main/CHANGELOG.md).
