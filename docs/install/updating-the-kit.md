---
title: Updating the kit
description: Use the latest version of the NHS prototype kit.
---

> [!NOTE]
> If you are upgrading to NHS prototype kit version 7, this also upgrades NHS frontend to version 10. You will need to follow the [upgrading to version 10 guide](https://service-manual.nhs.uk/design-system/guides/updating-to-v10) to make any required changes to your code.

1. [Download the latest version of the prototype kit (zip file)]({{downloadUrl}})

2. In your prototype folder, delete everything apart from the `app` and `.git` folders (the `.git` may be hidden).

3. Copy everything from the latest kit into your prototype folder, apart from the `app` folder.

   If you have made any changes outside the `app` folder, this process will overwrite those changes. We will try and improve the update process to avoid this, but in the meantime you will need to make a note of your changes outside `app`, and add them back after updating.

4. Navigate to your prototype in the terminal and enter: <kbd>npm install</kbd>

   The install may take up to a minute.

   While installing it may `WARN` about some items -- this is okay. As long as there are no `ERRORs` you can continue.

   ```shell
   added 1251 packages, and audited 1252 packages in 7s

   180 packages are looking for funding
   run `npm fund` for details

   15 vulnerabilities (6 moderate, 9 high)

   To address issues that do not require attention, run:
   npm audit fix

   To address all issues (including breaking changes), run:
   npm audit fix --force

   Run `npm audit` for details.
   ```

5. Start your local server by entering in the terminal: <kbd>npm run watch</kbd>

   After the kit has started, you should see a message telling you that the kit is running:

   ```shell
   [18:58:50] Starting 'watch'...
   [18:58:50] [nodemon] 2.0.22
   [18:58:50] [nodemon] to restart at any time, enter `rs`
   [18:58:50] [nodemon] watching path(s): *.*
   [18:58:50] [nodemon] watching extensions: js
   [18:58:50] [nodemon] starting `node app.js`
   [Browsersync] Proxying: http://localhost:2000
   [Browsersync] Access URLs:
   ----------------------------------
      Local: http://localhost:3000
   External: http://192.168.1.94:3000
   ----------------------------------
   [Browsersync] Watching files...
   ```

## Help and support

If you have any problems:

- ask a developer on your team (if you have one)
- email the service manual team at [england.service-manual.nhs.net](mailto:england.service-manual@nhs.net?subject=NHS%20prototype%20kit%20-%20Updating%20the%20kit)
- get in touch on the [NHS digital service manual #prototype-kit Slack channel](https://nhs-service-manual.slack.com/messages/CFYL2GDGW)
