---
title: Change the service name
order: 2
---

The service name is displayed in the header of every page. We don’t want to have to edit every page if you decide to rename the service.

Instead, it is set in a config file so that you can set it in one place and then every page will update automatically.

To set your service name:

1. Open the `config.js` file in your `app` folder
2. Change `serviceName` from `"Service name goes here"` to `"{{example.name}}"`
3. Press <kbd><kbd>Command</kbd></kbd> + <kbd><kbd>S</kbd></kbd> on Mac or <kbd><kbd>Ctrl</kbd></kbd> + <kbd><kbd>S</kbd></kbd> on Windows to save your change

You must save every time you make a change to a file. In most code editors, a dot indicator appears in the tab for any file that has unsaved changes.

Normally your changes will automatically show in the browser without refreshing. But for this config change, you need to refresh the page. You should see your service name change on the Start page.
