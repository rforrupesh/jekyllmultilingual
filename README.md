# Jekyll Multilingual Site

A clean bilingual Jekyll site (English + French) with no plugins needed for i18n.

## Structure

```
├── _config.yml
├── _data/
│   └── translations.yml       # All UI strings (nav, buttons, labels)
├── _layouts/
│   ├── default.html           # Base layout
│   ├── home.html              # Homepage with recent posts
│   ├── blog.html              # Blog index (filtered by lang)
│   └── post.html              # Single post
├── _includes/
│   ├── head.html              # <head> with hreflang meta tags
│   ├── nav.html               # Navbar + language switcher
│   └── footer.html
├── _posts/
│   ├── en/                    # English posts
│   └── fr/                    # French posts
├── assets/css/
│   └── main.css
├── index.md                   # English homepage  →  /
├── en/blog.md                 # English blog      →  /blog/
├── fr/index.md                # French homepage   →  /fr/
└── fr/blog.md                 # French blog       →  /fr/blog/
```

## How it works

1. Every page and post has `lang: en` or `lang: fr` in front matter.
2. Blog layouts filter posts with `{% assign posts = site.posts | where: "lang", page.lang %}`.
3. The language switcher in `_includes/nav.html` builds the alternate URL by prepending/removing `/fr`.
4. `_includes/head.html` outputs the correct `<link rel="alternate" hreflang>` tags on every page.

## Adding a new post

English post in `_posts/en/YYYY-MM-DD-slug.md`:
```yaml
---
layout: post
title: "Your Title"
date: 2024-03-01
lang: en
permalink: /blog/your-slug/
---
```

French post in `_posts/fr/YYYY-MM-DD-slug.md`:
```yaml
---
layout: post
title: "Votre titre"
date: 2024-03-01
lang: fr
permalink: /fr/blog/your-slug/
---
```

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Site runs at `http://localhost:4000/jekyllmultilingual/`

## Deploy to GitHub Pages

Push to a repo named `jekyllmultilingual`. GitHub Pages builds Jekyll automatically.
Make sure `baseurl: "/jekyllmultilingual"` is set in `_config.yml`.
