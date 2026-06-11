---
layout: post
title: "बहुभाषी साइट कैसे बनाएं"
date: 2024-02-10
lang: hi
ref: multilingual-site
categories: [jekyll, i18n]
permalink: /hi/blog/multilingual-site/
---
अपनी Jekyll साइट को कई भाषाओं में उपलब्ध कराना उतना मुश्किल नहीं जितना लगता है।

## बुनियादी तरीका

कोई plugin नहीं चाहिए। बस हर पेज और पोस्ट के front matter में `lang` फ़ील्ड जोड़ें, फिर layout में उसी फ़ील्ड से कंटेंट फ़िल्टर करें।

## फ़ोल्डर स्ट्रक्चर

पोस्ट को अलग-अलग भाषा के फ़ोल्डर में रखें:
