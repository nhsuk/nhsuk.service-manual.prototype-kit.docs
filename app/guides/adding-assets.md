---
title: PDFs and other files
description: How to include downloadable files.
order: 6
tags:
  - general
---

If you need to use PDFs or other types of downloadable files in your prototype beyond [images](/guides/images/), you can create folders for them within `app/assets/`.

For example, you could create `app/assets/pdfs/` for PDFs or `app/assets/symptoms/` for a collection of downloadable documents about symptoms.

Use the folder names when linking to the files in your prototype.

For example if you create a subfolder in `assets` called `downloads` and add a PDF named `report.pdf`, link to it like this:

```html
<a href="/assets/downloads/report.pdf">Download report (PDF, 1MB)</a>
```

Do not put files directly in `public` because it’s deleted and rebuilt every time you make a change to your prototype.

We avoid publishing PDFs, however. Read the guidance on [PDFs and other non-HTML documents in the service manual](https://service-manual.nhs.uk/content/pdfs-and-other-non-html-documents).
