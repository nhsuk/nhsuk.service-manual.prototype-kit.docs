---
layout: page
title: Training course trainer notes
---

These notes are for anyone running the training course.

## Introductions

Ask everyone gives a brief introduction of themselves, their role, and what they’d like to get out of the course.

Why prototype in code? – ask people for their thoughts

### The plan for today

We are going to create a prototype of a new NHS service called “Order a test to check if you have magical powers”

You will work in pairs.  Explain benefits of pair working.

We’ll help you get started and with the initial questions. You can also choose to customise it and add your own. Have some fun!

Each pair will demo their service at the end of the day!

## Lesson 0: Get set up

Before we can start, we need to create a new prototype. You’ll only do this once per prototype, so don’t worry if you forget it. There is a guide online.

You should all have a GitHub account set up. If you don’t, create one now. It’s free.

Person A: Go to https://github.com/nhsuk/nhsuk-prototype-kit/ and click ‘Use this template’.

Click ‘Create a new repository’ - repositories are the GitHub name for projects

Choose an owner: select your own personal name (for real prototypes you would select organisation). We won’t do this because we don’t want 60 tutorial website repos there.

Repository name: type order-a-test-for-magical-powers-prototype or similar.

It’s good to have descriptive names

Leave description blank for now

You can make it public or private (and you can change this later)

Press **Create repository button**

You now have a copy of the prototype kit ready to get started

Add partner to the repo to collaborate

Go to Settings, Collaborators

Under Manage access, click ‘Add people’ and add your partner’s GitHub name

Person B:  accept the invitation – you can either do this from your email or log in to GitHub and go to notifications or share the repository link.

You now both have access to the project and can both make updates.

For today, only one of you will be making changes at a time, and the other person will be helping. This will help avoid conflicts, and means you have a second pair of eyes to spot typos and fix issues! Try not to let the more confident person do everythign.

We’ll swap over at regular intervals.

Set up the prototype

There are 2 ways to work on your prototype. You can either run it on your laptop and edit it using a code editor like Visual Studio, or you can run it online in the cloud and use a web version of Visual Studio.

Long term you may want to run it on your laptop – but for today for ease of demo...

Today we will use the web version, to save having to install things. This is called GitHub Codespaces.

Set up codespaces

For both team members:

Click on the green Code button, then the Codespaces tab, then click Create codespace on main.

Wait whilst things get set up.

After a while, you should see a window on the right with the prototype running with the title “Service name goes here” and on the left a file browser

You can also click the arrow button to open it in a new tab on your browser if you need more space.

If you’re on a small screen, you might find the code scrolls off the screen. We can turn on auto-word wrap using `option-z`(mac) or `alt-z` (windows)

## Lesson 1: An introduction to html and the kit

An introduction to HTML. Quick history of why it was invented.

It’s not scary - designed for everyone, not just developers.

List out the basic tags

Chat about pairing tags and nesting them, indentation

Attributes within tags – eg href

Talk through the folder structure of the kit in VS Code.

### Demo

* create a test.html page
* navigate to it in the preview
* add some tags

## Exercise

* ask Person A to create a basic page

Adds some tags
Warm up exercise:  creating a basic HTML page
Talk through the folder structure
App – everything you need to edit is in here
Views – contains the pages
Assets – for images and CSS
Config.js - some setup stuff
Update the name of your service
This is in the config file as you may need to show it on multiple pages
Open config.js
Change ‘Service name goes here’ to “Order a test to check if you have magical powers” - if you’d like to come up with a different service, feel free to choose a different name.
Usually on your computer you need to save files before they update. With codespaces it’s *always* saving.
Refresh the preview and see that it has changed.
Go to the Branching icon on the left
Enter a message like “Add name of service”
Commit messages are traditionally present tense
Press commit
If you get a popup select Yes
Press Sync
Update the first page
Remove the “you can delete these lines” and the ones below
Remove everything after the h1 up until the </div>

## Lesson 2: Let’s make some pages

Core concepts to talk through
How templates/views relate to pages
Usually there’s a one to one mapping – a template file in views makes a page in the prototype.
Talk about how these templates get converted in to pages
Index.html is special
You can use slashes in urls to go in to folders
Create a start page
Right click on ‘views’ and choose ‘new file’.
Call the new file `start-page.html`. Press enter.  This will be used in the URL of the prototype. Use lowercase with hyphens and use plain english words that you will remember what they mean
At the top of the file add `{% extends "layout.html" %}`. This tells the prototype kit we want to use the default template
Now we need some contents for the file. There’s an example start page on the nhs design system website and some guidance on when to use it.
Direct to ‘patterns’ section of design system, find start page pattern and pick from nunjucks
Spend some time updating the content on the page for our service.
Talk about Nunjucks
Give out the Crib sheet for Nunjucks


## Lesson 3: Add a second question page

Create a question page
This is going to ask what magical powers you have
Right click on views and choose new file, name is magical-powers.html
Add extends layout
Copy question page pattern in from the design system
This uses nunjucks for the radio button
This is different from HTML – it uses { instead of <
It will generate HTML for you
It’s a bit more readable
It will be updated more easily if the HTML changes in the design system
Demonstrate that nunjucks is brittle – that wrong commas or brackets willl crash. This is ok. We can always undo. It will give you an error which may be helpful – however the line number won’t always be 100% accurate
Legend represents the question
Items has the options
Text is displayed to users, value is what is saved as data. You can choose to make these the same.
Change the legend text
Update the options, show deleting an option.
Add a hint
Go to design system website, radio example
Go to radios with hints example
Point out nunjucks code, look for ‘hint’ section
Copy in to prototype, hint: "For example, things moving when you have strong feelings or hearing someone's thoughts."

Add a second question page
Now that we have a question page, we can use it as a base to copy from
Make a new file ‘details.html’
Copy the contents of `magical-powers.html’
Check it work by visiting /details. It might be easier to change something on the page to be sure.
Delete the radio
Go to design system and grab text area component
The default component is not set up to be a heading or right size – we need to add this – sadly it’s a bit cumbersome:
Update the back link to point to `/magical-powers`
Continue button on magical powers doesn’t work.
Talk  about how forms are special
Change ‘action’ to the url for the next page - `/details`
Fix the back links
Change the href to `”/start-page”` -
When linking between pages we do not use the file extensions
Make the start button work
Currently the button doens’t link to anything. We need to link to the magical powers page.
This is done with something called the ‘href’
Change it to ‘/magical-powers’

## Lesson 4: Check your answers and using data

Make new page `check-your-answers.html`
Add `{% extends “layout.html” %}`
Copy design system check answers code in to page
Check it works by visiting /check-your-answers
Update the first row – change the display name, value and visuallyHidden – go back and update the name attribute
Update the second row – change the display name, value and visuallyHidden– go back and update the name attribute
Delete remaining rows
Delete second summary list and heading
Point form handler to `/confirmation`
Update change links so they work – test it
Update question macros to pre-fil the data using ‘value’ param
Make a confirmation page
Create new page `confirmation.html`
Add {% extends “layout.html” %}
Grab confirmation page from design system
Update the content so it makes sense

## Lesson 5: Branching and routes – Ed

Give out Crib Sheet for Branching

Things to cover:

* Talk about relationship between browser and server
* Create ineligible page
* Create route to decide where to go
* Check it works

Create a new file called `ineligible.html`

Add `{% extends “layout.html” %}`

The heading is too large – let's use a class to fix it. Add this to h1 `class="nhsuk-heading-l"`

Add a back link:

```
{% block beforeContent %}
  {{ backLink({
    href: "/magical-powers",
    text: "Back"
  }) }}
{% endblock %}
```

Go to routes, add:
// Run this code when a form is submitted to '/magical-powers-answer'
router.post('/magical-powers-answer', function (req, res) {
})

Things to explain:
const means setting a constant (variable) to make it easier to refer to things later
Lines starting with // are comments
== means “is equal to”. Single = means setting variable!
|| means “or”


Go back to `magical-powers.html` and update the form action to use `magical-powers-answer.html`
Demonstrate that things are now broken – now let’s fix things in turn

## Lesson 6: Add your own page

Suggest that pairs spend 5 or 10 minutes coming up with some ideas and planning before getting started. Paper is good for this.

## Demo time

Invite each pair to come to the front and demo their prototype.

Encourage questions.

Make sure each demo ends with a round of applause.

## Close

Thank everyone for coming.

Talk about how to get support.

Mention feedback form.
