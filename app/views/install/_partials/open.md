> [!NOTE]
> Make sure your prototype folder has the same name and location as in [step 4](/install/{{slug}}/download)

Navigate to your prototype by entering the following in the {{cli}}:

<kbd>cd {% if slug == "windows" %}Documents/Projects{% else %}~/Projects{% endif %}/find-a-pharmacy</kbd>

The {{cli}} should show the prototype folder before the prompt:

{% if slug == "windows" %}

```shell
Microsoft Windows [Version 10.0.14393]
(c) 2016 Microsoft Corporation. All rights reserved.

C:\Users\florence>cd Documents/Projects

C:\Users\florence\Documents\Projects\find-a-pharmacy>
```

{% else %}

```shell
Last login: Mon Sep 15 10:30:15 on ttys000
MacBook-Pro:~ florence$ cd ~/Projects/find-a-pharmacy
MacBook-Pro:find-a-pharmacy florence$ █
```

{% endif %}
