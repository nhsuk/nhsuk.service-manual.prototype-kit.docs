---
title: Filters
description: Filters are a Nunjucks feature that you can use within your page templates.
order: 4
tags:
  - general
---

They are useful for improving visual formatting or for displaying a calculated value.

[[toc]]

## How to use filters

To use a filter, add the `|` character (a vertical line or ‘pipe’), and then the name of the filter.

For example, the `upper` filter can be used to display all the letters in uppercase:

```njk
Your postcode is {% raw %}{{ data.postcode | upper }}{% endraw %}.
```

You can also use filters within Nunjucks macros for NHS components.

For example, if you have a question with checkboxes, you can use the `join` filter to display the checked answers in a summary list, with a comma and a space between each one:

```njk
{% raw %}{{ summaryList({
  rows: [
    {
      key: {
        text: "Symptoms"
      },
      value: {
        text: data.symptoms | join(", ")
      }
    }
  ]
}) }}{% endraw %}
```

## NHS prototype kit filters

These are custom filters developed for the NHS prototype kit.

### formatDate

Use this to format a date according to the [NHS style guide for dates](https://service-manual.nhs.uk/content/numbers-measurements-dates-time#dates), which includes the name of the month.

For example:

```njk
{% raw %}{{ data.dateOfBirth | formatDate }}{% endraw %}
```

Displays as:

```
7 February 1984
```

This can be used for dates entered using the `dateInput` component, like this:

```njk
{% raw %}{{ dateInput({
  id: "date-of-birth",
  namePrefix: "dateOfBirth",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  }
}) }}{% endraw %}
```

#### Including day of the week

You can also include the day of the week, for example if the date relates to an appointment.

For example:

```njk
{% raw %}{{ data.appointmentDate | formatDate({ includeDayOfWeek: true }) }}{% endraw %}
```

Displays as:

```
Wednesday 18 March 2026
```

The filter will also work with dates that are in `YYYY-MM-DD` format.

### formatNhsNumber

Use this to format an NHS number according to the NHS style guide, as 3 groups of numbers with a single space between them, like this: <samp>999 123 4567</samp>.

Example:

```njk
{% raw %}<p>Your NHS number is {{ data.nhsNumber | formatNhsNumber }}.</p>{% endraw %}
```

Displays as:

```html
{% raw %}<p>Your NHS number is 999 123 4567.</p>{% endraw %}
```

### formatPostcode

Use this to format a UK postcode so that it appears uppercase with a space in the middle, regardless of how the user entered it.

Only UK postcodes will be formatted, otherwise the input will stay unchanged.

This filter does not check that the UK postcode actually exists.

Example:

```njk
{% raw %}<p>Postcode: {{ data.postcode | formatPostcode }}.</p>{% endraw %}
```

Displays as:

```html
{% raw %}<p>Postcode: SW1A 1AA.</p>{% endraw %}
```

### formatTime

Use this to format times according to the [NHS style guide for times](https://service-manual.nhs.uk/content/numbers-measurements-dates-time#time), which uses the 12 hour clock, and displays 'midday' or 'midnight' at those exact times to avoid confusion.

For example:

```njk
{% raw %}{{ data.startTime | formatTime }}{% endraw %}
```

Will display using these formats:

```html
{% raw %}5pm
5:30pm
midnight
midday{% endraw %}
```

This can be used with times entered by the user using separate `hour` and `minute` inputs, like this:

```njk { .nhsuk-code--button }
{% raw %}{% call fieldset({
  legend: {
    text: "When will the appointment start?",
    size: "m"
  }
  }) %}

  <div class="nhsuk-form-group nhsuk-form-group--inline">
    {{ input({
      name: "startTime[hour]",
      label: {
        text: "Hour"
      },
      width: 2
    }) }}

    {{ input({
      name: "startTime[minute]",
      label: {
        text: "Minute"
      },
      width: 2
    }) }}
  </div>
{% endcall %}{% endraw %}
```

#### Including minutes on the hour

If you need to, you can choose to always include the minutes, even when the time is on-the-hour:

```
{% raw %}{{ data.startTime | formatTime({ includeMinutesOnTheHour: true }) }}{% endraw %}
```

Displays as:

```
5:00pm
```

#### Using numbers for midday and midnight

You can also choose to not use ‘midday’ and ‘midnight’, for example for consistency in a staff-facing service listing appointment times:

```njk
{% raw %}{{ data.startTime | formatTime({ useMiddayMidnight: false }) }}{% endraw %}
```

Displays as:

```
12:00am
```

#### Using ISO 8601 string format and time zones

The filter will also work with times that are in a string format, either as `HH:MM` or a full ISO 8601 datetime format like `YYYY-MM-DDTHH:MM`.

If your time includes a time zone offset like `Z` (meaning UTC) or `+HH:MM`, then the time will be translated into the UK timezone by default.

This means that a UTC time during the summer months like:

```njk
{% raw %}{{ "2026-07-31T10:30Z" | formatTime }}{% endraw %}
```

will display correctly in UK daylight savings time as:

```
11:30am
```

If you need to display times in a different time zone, you can set the `TZ` [environment variable](/guides/publish-your-prototype-online/#using-environment-variables) to a different time zone, such as `Atlantic/Bermuda`.

Alternatively you can set the `timeZone` option:

```
{% raw %}{% set startsAt = "2026-07-31T23:30Z" %}
{{ startsAt | formatDate({ timeZone: "Atlantic/Bermuda" }) }}{% endraw %}
```

### formatTime24Hour

This filter formats times using the 24 hour clock. Only use this within staff-facing services.

```
{% raw %}{{ data.startTime | formatTime24Hour }}{% endraw %}
```

The filter will also work with times that are in a string format, either as `HH:MM` or a full ISO 8601 datetime format like `YYYY-MM-DDTHH:MM`.

## Text filters

### upper

Use this to makes all letters uppercase.

Example:

```njk
{% raw %}<p>Postcode: {{ data.postcode | upper }}</p>{% endraw %}
```

Displays as:

```html
<p>Postcode: SW1A 1AA</p>
```

### lower

Use this to makes all letters lowercase.

Example:

```njk
{% raw %}<p>Email: {{ data.email | lower }}</p>{% endraw %}
```

Displays as:

```html
<p>Email: name@example.com</p>
```

### nl2br

This replaces line breaks in the text with `<br>` tags, so that browsers will render a line break.

It’s especially useful in summary lists where a user may have selected more than 1 checkbox option:

```njk
{% raw %}{{ summaryList({
  rows: [
    {
      key: {
        text: "Contact preferences"
      },
      value: {
        html: (data.contactPreferences | nl2br | safe)
      }
    }
  ]
}) }}{% endraw %}
```

## List (or array) filters

### length

Use this to count how many items are in the list.

Example:

```njk
{% raw %}<p>You selected {{ data.symptoms | length }} symptoms.</p>{% endraw %}
```

Displays as:

```njk
{% raw %}<p>You selected 2 symptoms.</p>{% endraw %}
```

You can also use it within a condition:

```njk
{% raw %}{% if data.medications | length > 5 %}
  <p>You are taking more than 5 medications.</p>
{% endif %}{% endraw %}
```

### first

Use this to get the first item in a list.

Example:

```njk
{% raw %}
{% set firstAppointment = data.appointments | first %}
<p>Your 1st appointment is with {{ firstAppointment.patientName }}</p>{% endraw %}
```

### last

Use this to get the last item in a list.

Example:

```njk
{% raw %}
{% set lastAppointment = data.appointments | last %}
<p>Your last appointment ends at {{ lastAppointment.endTime }}</p>{% endraw %}
```

### join

Use this to combine items in a list together with a text or HTML separator.

Example:

```njk
{% raw %}<p>You selected these symptoms: {{ data.symptoms | join(", ") }}.</p>{% endraw %}
```

Displays as:

```njk
{% raw %}<p>You selected these symptoms: headache, high temperature.</p>{% endraw %}
```

The join filter is especially useful in summary lists where a user may have selected more than 1 checkbox option:

```njk
{% raw %}{{ summaryList({
  rows: [
    {
      key: {
        text: "Contact preferences"
      },
      value: {
        html: (data.contactPreferences | join('<br>') | safe)
      }
    }
  ]
}) }}{% endraw %}
```

### sort

Use this to order items.

By default, they will be ordered alphabetically (if text) or in ascending order (if numbers).

Example:

```njk
{% raw %}{{ data.symptoms | sort | join(", ") }}{% endraw %}
```

You can also order in reverse alphabetically (Z-A), or descending order (for numbers) by using `sort(true)`:

```njk
{% raw %}{{ data.symptoms | sort(true) | join(", ") }}{% endraw %}
```

## Number filters

Use this to round a decimal number to its nearest whole number.

Example:

```njk
{% raw %}<p>Your BMI is {{ data.bmi | round }}.</p>{% endraw %}
```

Displays as:

```html
{% raw %}<p>Your BMI is 21.</p>{% endraw %}
```

---

See the [full list of built-in filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) in the Nunjucks documentation.
