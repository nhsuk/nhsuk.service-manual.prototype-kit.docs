Node.js is very easy to install.

The kit is designed to work with Node.js LTS (Long Term Support) version 22, 24 or 26.

## 1. Check if you have Node.js

In the {{cli}} enter: <kbd>node --version</kbd>

If it says:

- <samp>command not found</samp>
- <samp>'node' is not recognised...</samp>
- <samp>Error 0x2 starting node.exe --version</samp>
- or another number such as <samp>0.12</samp> or <samp>5.x.x</samp>

Then you will need to download and install Node.js LTS version 22, 24 or 26.

### If the version number starts with 22, 24 or 26

You have the correct version installed and can go to [step 3](/install/{{slug}}/text-editor).

## 2. Downloader and install Node.js LTS version

Download Node.js LTS version 22, 24 or 26.

Run the installer with all default options.

[Download and install Node.js (opens in new window)](https://nodejs.org/en/).

## 3. Check if Node.js is installed properly

You'll need to quit and restart the {{cli}} to be able to use Node.js for the first time.

To check it is installed correctly you can run <kbd>node --version</kbd>.

If it's installed correctly it should show a number starting with 22, 24 or 26:

{% if slug == "windows" %}

```shell
Microsoft Windows [Version 10.0.14393]
(c) 2016 Microsoft Corporation. All rights reserved.

C:\Users\florence>node --version
v26.13.0

C:\Users\florence>
```

{% else %}

```shell
Last login: Mon Sep 15 10:30:15 on ttys000
MacBook-Pro:~ florence$ node --version
v26.13.0
MacBook-Pro:~ florence$ █
```

{% endif %}
