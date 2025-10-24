---
title: Publishing your prototype
description: Publishing your prototype online means you can share it with others and test it with users.
order: 7
tags:
  - general
---

You'll need a hosting service to publish prototypes online.

## Hosting services

The NHS prototype kit runs on any hosting service that supports Node.js. This means it does not run on 'static' hosting services like GitHub Pages or Netlify.

Your organisation may already use a hosting service for the prototype kit. Check with your digital team about which platform to use.

The kit has been tested with:

- [Heroku](https://www.heroku.com)
- [Railway](https://railway.com/)

### If you are using GitHub to store your code online

Many hosting services have an option to automatically update your published prototype every time you push new changes to the connected GitHub repository.

See [GitHub integration for Heroku](https://devcenter.heroku.com/articles/github-integration) and [deploying from a GitHub for Railway](https://docs.railway.com/guides/services#deploying-from-a-github-repo).

### Other ways to publish your prototype onto a hosting service

Hosting services also let you publish your prototype from the terminal using Git or a command line interface (CLI).

See [deploying with Git on Heroku](https://devcenter.heroku.com/articles/git) and [using the CLI for Railway](https://docs.railway.com/guides/cli).

## Using environment variables

Some options within the kit need to be set with your hosting service using environment variables (also known as configuration variables).

See [configuration variables for Heroku](https://devcenter.heroku.com/articles/config-vars) and [using variables for Railway](https://docs.railway.app/develop/variables).

For other hosting services, check the documentation for how to set environment variables.

### Setting a password

When running the prototype kit online, you must set a password. This is to stop anyone accidentally finding your prototype and mistaking it for a real service.

The password should be set using the variable `PROTOTYPE_PASSWORD`.

If you are using an older version of the prototype kit (before v4.12.0) you will also need to set a username using the variable `PROTOTYPE_USERNAME`.

### Setting production mode

You should also set `NODE_ENV` variable to the value `production`.

This will improve the speed of the prototype slightly, and make sure that the prototype uses HTTPS.

On Heroku and Railway this will have been set for your automatically.
