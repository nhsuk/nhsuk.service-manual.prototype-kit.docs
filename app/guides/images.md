---
title: Images
description: How to add images to your prototype.
order: 4
tags:
  - general
---

Add images to the `app/assets/images` folder. You can also use subfolders to organise them if you have a lot of images.

## Using the image component

Use the [image component](https://service-manual.nhs.uk/design-system/components/images) from the NHS design system if you have an informative image with an optional caption.

Use alt text to describe the image for screen readers.

For example, if you had an image named `stretch-marks.jpg`, reference it in your page like this:

```njk { .nhsuk-code--button }
{% raw %}{{ image({
  src: "/assets/images/stretch-marks.jpg",
  alt: "Close-up of a person's tummy showing a number of creases in the skin under their belly button. Shown on light brown skin.",
  caption: {
    text: "Stretch marks can be pink, red, brown, black, silver or purple. They usually start off darker and fade over time."
  }
}) }}{% endraw %}
```

## Using the img HTML element

You can also include images in pages using the `<img>` element within HTML.

For example:

```html
Available in
<img src="/assets/images/bsl.png" alt="British Sign Language">
```
