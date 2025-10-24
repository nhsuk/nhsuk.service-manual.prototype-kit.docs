---
eleventyExcludeFromCollections: true
---
<!DOCTYPE html>
<html lang="en">
  <meta charset="utf-8">
  <title>Redirecting…</title>
  <link rel="canonical" href="{{ "/guides" | url }}">
  <script>location = '{{ "/guides" | url }}';</script>
  <meta http-equiv="refresh" content="0; url={{ redirect.to | url }}">
  <meta name="robots" content="noindex">
  <h1>Redirecting…</h1>
  <a href="{{ "/guides" | url }}">Click here if you are not redirected.</a>
</html>
