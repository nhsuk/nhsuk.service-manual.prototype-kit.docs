---
title: "Using Nunjucks"
description: Quick reference guide
order: 11
tags:
  - general
eleventyComputed:
  bodyClasses: "app-print-reference"
---

This is a quick reference guide for using Nunjucks templating in your prototype pages.

## Variables and displaying data

### Displaying variables

Use double curly braces to display a variable:

```njk
{% raw %}<p>Your name is {{ data.name }}</p>{% endraw %}
```

### Accessing form data

Form data is stored in the `data` object using the input's `name` attribute:

```njk
{% raw %}<p>Your NHS number is {{ data.nhsNumber }}</p>
<p>Your postcode is {{ data.postcode }}</p>{% endraw %}
```

### Setting variables

Create variables in your templates:

```njk
{% raw %}{% set pageName = "Book an appointment" %}
{% set showWarning = true %}

<h1>{{ pageName }}</h1>

{% if showWarning %}
  <p>Warning message here</p>
{% endif %}{% endraw %}
```

Use a `set` block for multi-line content:

```njk
{% raw %}{% set messageText %}
  You told us your name is {{ data.name }}.
{% endset %}{% endraw %}
```

## Logic with if/else

### Basic if statement

Show content only if a condition is true:

```njk
{% raw %}{% if data.eligible == "Yes" %}
  <p>You are eligible for this service.</p>
{% endif %}{% endraw %}
```

### if/else

Show different content based on a condition:

```njk
{% raw %}{% if data.hasSymptoms == "Yes" %}
  <p>Please book an appointment.</p>
{% else %}
  <p>No appointment needed.</p>
{% endif %}{% endraw %}
```

### if/elseif/else

Handle multiple conditions:

```njk
{% raw %}{% if data.priority == "Urgent" %}
  <div class="nhsuk-warning-callout">
    <h3 class="nhsuk-warning-callout__label">Urgent</h3>
    <p>We will contact you within 24 hours.</p>
  </div>
{% elseif data.priority == "Routine" %}
  <p>We will contact you within 2 weeks.</p>
{% else %}
  <p>We will contact you as soon as possible.</p>
{% endif %}{% endraw %}
```

### Checking if something exists

Check if data has been entered:

```njk
{% raw %}{% if data.name %}
  <p>Hello {{ data.name }}</p>
{% else %}
  <p>Hello</p>
{% endif %}{% endraw %}
```

### Multiple conditions

Use `and` and `or` for complex conditions:

```njk
{% raw %}{% if (data.age >= 18) and (data.registered == "Yes") %}
  <p>You can proceed.</p>
{% endif %}

{% if (data.urgent == "Yes") or (data.emergency == "Yes") %}
  <p>Please call 111 immediately.</p>
{% endif %}{% endraw %}
```

### Checking if a checkbox is selected

Checkboxes return an array. Check if a specific value was selected:

```njk
{% raw %}{% if "Fever" in data.symptoms %}
  <p>You selected fever as a symptom.</p>
{% endif %}

{% if ("Diabetes" in data.conditions) or ("High blood pressure" in data.conditions) %}
  <p>You have a condition that requires regular monitoring.</p>
{% endif %}{% endraw %}
```

## Loops

### Basic for loop

Loop through a list of items:

```njk
{% raw %}<ul>
{% for symptom in data.symptoms %}
  <li>{{ symptom }}</li>
{% endfor %}
</ul>{% endraw %}
```

### Loop with index

Access the item number (starting from 1):

```njk
{% raw %}<ol>
{% for medicine in data.medicines %}
  <li>Medicine {{ loop.index }}: {{ medicine }}</li>
{% endfor %}
</ol>{% endraw %}
```

### Loop with conditional

Show different content within a loop:

```njk
{% raw %}<ul>
{% for item in data.items %}
  <li>
    {{ item }}
    {% if loop.first %}
      <span class="nhsuk-tag">First</span>
    {% endif %}
  </li>
{% endfor %}
</ul>{% endraw %}
```

### Check if list is empty

Show a message when there are no items:

```njk
{% raw %}{% if data.medications %}
  <h2>Your medications</h2>
  <ul>
  {% for medication in data.medications %}
    <li>{{ medication }}</li>
  {% endfor %}
  </ul>
{% else %}
  <p>You have not entered any medications.</p>
{% endif %}{% endraw %}
```

## Loop properties

Useful properties available inside loops:

- `loop.index` – current iteration (starts at 1)
- `loop.index0` – current iteration (starts at 0)
- `loop.first` – true if first iteration
- `loop.last` – true if last iteration
- `loop.length` – total number of items

Example:

```njk
{% raw %}{% for item in data.items %}
  <p>
    Item {{ loop.index }} of {{ loop.length }}
    {% if loop.last %}(final item){% endif %}
  </p>
{% endfor %}{% endraw %}
```

## Using data in components

Pass data to NHS component macros:

```njk
{% raw %}{{ insetText({
  text: "You told us your name is " + data.name
}) }}{% endraw %}
```

Or use a `set` block to create content first:

```njk
{% raw %}{% set messageText %}
  You told us your name is {{ data.name }}.
{% endset %}

{{ insetText({
  text: messageText
}) }}{% endraw %}
```

## Filters

Filters transform how data is displayed. Add them with the `|` character.

### Text formatting

```njk
{% raw %}<!-- Uppercase -->
<p>Postcode: {{ data.postcode | upper }}</p>
<!-- Output: SW1A 1AA -->

<!-- Lowercase -->
<p>Email: {{ data.email | lower }}</p>
<!-- Output: name@example.com -->{% endraw %}
```

### NHS number formatting

Format NHS numbers with spaces:

```njk
{% raw %}<p>NHS number: {{ data.nhsNumber | formatNhsNumber }}</p>
<!-- Input: 9999999999 -->
<!-- Output: 999 999 9999 -->{% endraw %}
```

### Join (for arrays/lists)

Join checkbox or list items with a separator:

```njk
{% raw %}{{ data.symptoms | join(", ") }}
<!-- Output: Fever, Cough, Headache -->

{{ data.items | join(" and ") }}
<!-- With "and" -->{% endraw %}
```

### Length (count items)

Count how many items:

```njk
{% raw %}<p>You selected {{ data.symptoms | length }} symptoms</p>

{% if data.medications | length > 5 %}
  <p>You are taking more than 5 medications.</p>
{% endif %}{% endraw %}
```

### First and last

Get first or last item from a list:

```njk
{% raw %}<p>First symptom: {{ data.symptoms | first }}</p>
<p>Last symptom: {{ data.symptoms | last }}</p>{% endraw %}
```

### Sort

Order items alphabetically:

```njk
{% raw %}<!-- A to Z -->
{{ data.items | sort | join(", ") }}

<!-- Z to A -->
{{ data.items | sort(true) | join(", ") }}{% endraw %}
```

### Round

Round decimal numbers:

```njk
{% raw %}<p>Your BMI is {{ data.bmi | round }}</p>
<!-- Input: 24.7 -->
<!-- Output: 25 -->{% endraw %}
```

### Combining filters

Chain multiple filters together:

```njk
{% raw %}<!-- Sort and join -->
{{ data.conditions | sort | join(", ") }}{% endraw %}
```

## Check your answers pattern

Show all answers on a summary page using the summary list component:

```njk
{% raw %}{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: data.name
      },
      actions: {
        items: [
          {
            href: "/your-name",
            text: "Change",
            visuallyHiddenText: "name"
          }
        ]
      }
    },
    {
      key: {
        text: "Symptoms"
      },
      value: {
        text: data.symptoms | join(", ")
      },
      actions: {
        items: [
          {
            href: "/your-symptoms",
            text: "Change",
            visuallyHiddenText: "symptoms"
          }
        ]
      }
    }
  ]
}) }}{% endraw %}
```

### Conditional rows

Only show a row if data exists:

```njk
{% raw %}{{ summaryList({
  rows: [
    {
      key: {
        text: "Name"
      },
      value: {
        text: data.name
      }
    },
    {
      key: {
        text: "Email"
      },
      value: {
        text: data.email
      }
    } if data.email,
    {
      key: {
        text: "Phone number"
      },
      value: {
        text: data.phone
      }
    } if data.phone
  ]
}) }}{% endraw %}
```

## Comparison operators

Use these in `if` statements:

- `==` equal to
- `!=` not equal to
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

Examples:

```njk
{% raw %}{% if data.age >= 65 %}
  <p>You qualify for a free flu jab.</p>
{% endif %}

{% if data.appointments != 0 %}
  <p>You have {{ data.appointments }} upcoming appointments.</p>
{% endif %}{% endraw %}
```

## Common patterns

### Displaying checkbox answers as a list

```njk
{% raw %}{% if data.symptoms %}
  <ul>
  {% for symptom in data.symptoms %}
    <li>{{ symptom }}</li>
  {% endfor %}
  </ul>
{% endif %}{% endraw %}
```

### Displaying checkbox answers as comma-separated text

```njk
{% raw %}<p>Your symptoms: {{ data.symptoms | join(", ") }}</p>
<!-- Output: Fever, Cough, Headache -->{% endraw %}
```

### Showing radio button answer

```njk
{% raw %}<p>You selected: {{ data.appointmentType }}</p>{% endraw %}
```

### Showing textarea content with line breaks

```njk
{% raw %}<p>{{ data.details | nl2br | safe }}</p>{% endraw %}
```

The `nl2br` filter converts line breaks to `<br>` tags. The `safe` filter tells Nunjucks the HTML is safe to display.

### Conditional display

Show content only if data exists:

```njk
{% raw %}{% if data.email %}
  <p>We will send updates to {{ data.email }}</p>
{% endif %}{% endraw %}
```

### Default values

Show a default if no data entered:

```njk
{% raw %}<p>{{ data.name or "Not provided" }}</p>{% endraw %}
```

### Conditional CSS classes

```njk
{% raw %}<div class="card {% if data.urgent %}card--urgent{% endif %}">
  Content here
</div>{% endraw %}
```

### Conditional formatting

Apply different formatting based on value:

```njk
{% raw %}{% if data.status == "Urgent" %}
  <strong class="nhsuk-tag nhsuk-tag--red">{{ data.status }}</strong>
{% elseif data.status == "Routine" %}
  <strong class="nhsuk-tag">{{ data.status }}</strong>
{% endif %}{% endraw %}
```

## Troubleshooting

### Nothing displays

- Check you have matching `{% raw %}{% %}{% endraw %}` or `{% raw %}{{ }}{% endraw %}`
- Check spelling of variable names (case-sensitive)
- Check the input `name` matches the variable name

### Unexpected output

- Use `{% raw %}{{ data | dump }}{% endraw %}` to see all data
- Use `{% raw %}{{ data.yourVariable | dump }}{% endraw %}` to see a specific variable's value

### Logic not working

- Check spacing: use `==` not `= =`
- Check quotes match: `"Yes"` or `'Yes'`, not mixed
- Remember `=` (set) is different from `==` (compare)

### Data not showing

- Check the input has a `name` attribute
- Check you're using the correct name (case-sensitive)

### Checkboxes showing `[object Object]`

Use `join` filter or loop through the array:

```njk
{% raw %}<!-- Don't do this: -->
{{ data.items }}

<!-- Do this instead: -->
{{ data.items | join(", ") }}{% endraw %}
```

### Filters not working

- Check filter name spelling
- Check you're using `|` not `\` or `/`
- Some filters need parameters: `join(", ")` not just `join`
