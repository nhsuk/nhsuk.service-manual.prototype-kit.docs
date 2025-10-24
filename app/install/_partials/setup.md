Enter <kbd>npm install</kbd> in the {{cli}}.

The install may take up to a minute.

While installing it may `WARN` about some items -- this is okay. As long as there are no `ERROR`s you can continue.

When the installation has finished, npm will show some information about the packages it has installed:

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

{% if slug == "windows" %}
C:\Users\florence\Documents\Projects\find-a-pharmacy>
{% else %}
MacBook-Pro:find-a-pharmacy florence$ █
{% endif %}
```
