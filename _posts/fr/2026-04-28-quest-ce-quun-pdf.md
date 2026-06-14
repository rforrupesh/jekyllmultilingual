---
layout: post
title: Qu’est-ce que le Format de Document Portable (PDF) ?
thumbnail: /assets/img/quest-ce-quun-pdf.jpg
description: "Découvrez ce qu’est un PDF, sa signification, son histoire, son fonctionnement et pourquoi il est essentiel pour partager des documents numériques de manière sécurisée et professionnelle."
ref: que-es-el-pdf
---

PDF signifie **Portable Document Format** (Format de Document Portable). Adobe l’a créé en 1993, et son nom résume parfaitement son objectif : le document est portable. Il s’affiche de la même manière sur votre écran, sur celui de votre collègue, sur une imprimante située dans un autre pays ou sur un téléphone vieux de plusieurs années. Le fichier contient tout ce dont il a besoin pour être affiché correctement et ne dépend pas des logiciels installés sur votre appareil.

## D’où vient cette idée ?

L’idée trouve son origine dans une note rédigée en 1991 par l’un des fondateurs d’Adobe, John Warnock, intitulée *The Camelot Project*.

Avec le recul, le problème qu’il souhaitait résoudre paraît évident : vous créez un document sur votre ordinateur et, lorsqu’il est ouvert sur un autre ordinateur, son apparence change complètement : mauvaises polices, mise en page désorganisée et formatage cassé.

Warnock souhaitait que les documents soient décrits sous forme d’instructions permettant de les reproduire, plutôt que d’être liés à un logiciel particulier. En d’autres termes, quelque chose qui se rapproche davantage d’un document imprimé, mais sous forme numérique.

---

## À quoi ressemble réellement un PDF ?

Un PDF n’est pas simplement une image des pages que vous voyez. En réalité, il s’agit essentiellement d’un ensemble d’instructions de rendu.

Le PDF contient un flux de contenu comprenant toutes les informations nécessaires pour recréer les éléments du document :

> « Affiche ce caractère à ces coordonnées avec cette police. »

Les définitions des polices, les images, les couleurs et les autres ressources sont intégrées directement dans le fichier. Tout est regroupé dans un seul document.

Enfin, le fichier PDF contient à sa fin un index appelé **table de références croisées** (*cross-reference table*) qui indique au lecteur où se trouve chaque page dans le fichier. Grâce à cela, un lecteur PDF peut accéder directement à la page 80 sans devoir parcourir les pages 1 à 79.

---

## Signification des versions PDF

Tous les fichiers PDF commencent par un numéro de version dans leur première ligne, par exemple :

```text
%PDF-1.7
```

Le format a évolué à de nombreuses reprises depuis sa création en 1993.

Cependant, l’événement le plus important est survenu en 2008, lorsque Adobe a transféré la spécification à l’Organisation internationale de normalisation (ISO). Le format est alors devenu **ISO 32000**, une norme ouverte qui n’appartient à aucune entreprise.

Cela signifie que n’importe qui peut consulter librement les spécifications et développer des outils compatibles avec les PDF sans avoir à payer Adobe ou à demander une autorisation.

C’est pour cette raison que la prise en charge des PDF a été intégrée aux navigateurs développés par Mozilla, Google et Apple.

En 2017, la version 2.0 a été publiée avec des améliorations concernant le chiffrement et l’accessibilité.

Aujourd’hui, la majorité des fichiers PDF reposent encore sur les versions 1.4 à 1.7.

---

## Comment les navigateurs affichent les PDF sans plugins

Avant 2010, ouvrir un PDF dans Chrome ou Firefox nécessitait généralement un plugin Adobe Reader intégré au navigateur. Ces plugins étaient réputés pour leur lenteur et leurs nombreux dysfonctionnements.

En 2010, Google a commencé à intégrer un lecteur PDF natif dans Chrome appelé **PDFium**.

Ce lecteur est open source et est désormais utilisé dans de nombreuses applications, notamment :

* Microsoft Edge
* Android WebView
* D’autres navigateurs basés sur Chromium

Firefox utilise son propre moteur de rendu appelé **PDF.js**, tandis que Safari s’appuie sur le moteur natif de la plateforme Apple.

Le lecteur PDF intégré est devenu un succès discret, utilisé chaque jour par des millions de personnes sans même qu’elles s’en rendent compte.

---

## Pourquoi certains fichiers PDF sont-ils si volumineux ?

Beaucoup pensent que les fichiers PDF sont toujours légers. Ce n’est pas le cas.

Le texte se compresse très efficacement, car les caractères sont faciles à encoder de manière optimisée.

Alors, qu’est-ce qui prend réellement de la place dans un PDF ?

**Les images.**

Une seule image haute résolution peut peser plusieurs mégaoctets. Un document numérisé de dix pages peut facilement dépasser 50 Mo, car chaque page contient une image complète du document.

Différents types de données utilisent différents algorithmes de compression :

| Type de données              | Algorithme de compression |
| ---------------------------- | ------------------------- |
| Photographies                | JPEG                      |
| Numérisations noir et blanc  | JBIG2                     |
| Données générales du document| Flate                     |

Que fait réellement un logiciel de compression PDF ?

Dans la plupart des cas, il réduit la qualité des images tout en conservant le texte intact.

---

## Questions fréquentes

### Puis-je modifier le texte d’un document PDF ?

En théorie : oui.

En pratique : pas toujours facilement.

Les PDF sont principalement conçus pour l’affichage et la diffusion, et non pour l’édition.

Des applications comme Adobe Acrobat et de nombreux éditeurs PDF en ligne permettent de modifier le texte, mais la mise en forme peut devenir incohérente, car le document n’a jamais été conçu pour fonctionner comme un fichier de traitement de texte.

---

### Pourquoi ne puis-je pas sélectionner ou surligner le texte dans ce PDF ?

Le fichier est probablement un document numérisé.

Il ne contient pas de véritable couche de texte, seulement des images représentant du texte. Pour rendre le contenu sélectionnable, le document doit être traité par OCR (Reconnaissance Optique de Caractères).

---

### Puis-je ouvrir en toute sécurité un PDF provenant d’une source inconnue ?

Généralement, oui.

Les fichiers PDF peuvent techniquement contenir du code JavaScript, et des vulnérabilités ont déjà été découvertes dans certains lecteurs PDF.

Cependant, les lecteurs PDF modernes intégrés aux navigateurs sont nettement plus sûrs et beaucoup plus difficiles à exploiter que les anciennes applications autonomes.
