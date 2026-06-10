---
layout: post
title: "How to Build a Multilingual Site"
date: 2024-02-10
lang: en
categories: [jekyll, i18n]
permalink: /blog/multilingual-site/
---

Making your Jekyll site available in multiple languages is simpler than it sounds.

## The basic approach

You don't need a plugin. The key is using front matter to tag each page and post with a `lang` field, then filtering content by that field in your layouts.

## Structure

Keep your posts in separate folders by language:

```
_posts/
  en/
    2024-01-01-hello.md
  fr/
    2024-01-01-bonjour.md
```

Each post gets `lang: en` or `lang: fr` in its front matter.

## Language switcher

In your nav, build the alternate URL and link to it. Use `hreflang` meta tags in your `<head>` so Google knows about both versions.

That's the core of it. Simple and maintainable.
