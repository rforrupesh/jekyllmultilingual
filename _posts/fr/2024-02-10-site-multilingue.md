---
layout: post
title: "Créer un site multilingue avec Jekyll"
date: 2024-02-10
lang: fr
categories: [jekyll, i18n]
permalink: /fr/blog/site-multilingue/
---

Rendre votre site Jekyll disponible en plusieurs langues est plus simple qu'il n'y paraît.

## L'approche de base

Pas besoin de plugin. L'essentiel est d'utiliser le front matter pour étiqueter chaque page et article avec un champ `lang`, puis de filtrer le contenu par ce champ dans vos layouts.

## Structure

Gardez vos articles dans des dossiers séparés par langue :

```
_posts/
  en/
    2024-01-01-hello.md
  fr/
    2024-01-01-bonjour.md
```

Chaque article reçoit `lang: en` ou `lang: fr` dans son front matter.

## Sélecteur de langue

Dans votre navigation, construisez l'URL alternative et faites-y un lien. Utilisez les balises méta `hreflang` dans votre `<head>` pour que Google connaisse les deux versions.

C'est la base. Simple et facile à maintenir.
