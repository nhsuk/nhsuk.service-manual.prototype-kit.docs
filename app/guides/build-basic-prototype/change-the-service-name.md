---
title: Change the service name
order: 2
---

You'll normally edit the HTML to make changes to pages, but the service name is in a config file. This is so we can change it in one place to update it on every page in your prototype.

1. Open the `config.js` file in your `app` folder
2. Change `serviceName` from `"Service name goes here"` to `"{{example.name}}"`
3. Press <kbd><kbd>Command</kbd></kbd> + <kbd><kbd>S</kbd></kbd> on Mac or <kbd><kbd>Ctrl</kbd></kbd> + <kbd><kbd>S</kbd></kbd> on Windows to save your change

You must save every time you make a change to a file. In most code editors, a dot appears in the tab for any file that has unsaved changes.

Normally your changes will automatically show in the browser without refreshing. But for this config change, you need to refresh the page. You should see your service name change on the Start page.
