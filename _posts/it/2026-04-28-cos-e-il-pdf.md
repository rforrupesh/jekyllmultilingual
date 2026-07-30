---
layout: post
title: Che Cos'è il Portable Document Format (PDF)?
thumbnail: /assets/img/que-es-el-pdf.webp
description: "Scopri cos'è un PDF, il suo significato, la sua storia, come funziona e perché è importante per condividere documenti digitali in modo sicuro e professionale."
ref: que-es-el-pdf
lang: it
---

PDF sta per Portable Document Format. Adobe lo ha creato nel 1993 e il nome stesso spiega tutto: il documento è portabile. Appare uguale sul tuo schermo, sullo schermo del tuo collega, su una stampante in un altro paese o su un telefono di cinque anni fa. Il file contiene tutto ciò di cui ha bisogno per essere visualizzato correttamente e non dipende da nulla installato sul tuo dispositivo.

## Da Dove Viene l'Idea

L'idea stessa è nata da un memo scritto da uno dei fondatori di Adobe, John Warnock, intitolato *The Camelot Project* nel 1991.

A posteriori, il problema era evidente: progetti qualcosa sul tuo computer, e quando viene visualizzato su un altro computer appare completamente diverso: font sbagliati, layout rotti e formattazione incoerente.

Warnock voleva che i documenti fossero descritti come istruzioni per creare qualcosa, piuttosto che essere legati a una specifica applicazione software. In altre parole, qualcosa di più vicino a un documento stampato, ma digitale.

---

## Come Appare Realmente un PDF

Un PDF non è semplicemente un'immagine delle pagine che crei. Al contrario, un PDF è essenzialmente un indice di comandi di rendering.

Il PDF contiene un flusso di contenuti che include tutte le istruzioni necessarie per ricreare gli elementi:

> "Renderizza questo carattere a queste coordinate usando questo font."

Le definizioni dei font, le immagini, i colori e altre risorse sono incorporate direttamente nel file stesso. Tutto è racchiuso insieme.

Infine, il file PDF contiene un indice alla fine chiamato **tabella di riferimento incrociato**, che indica al lettore dove si trova ogni pagina all'interno del file. È così che i lettori PDF possono saltare direttamente a pagina 80 senza dover leggere prima le pagine da 1 a 79.

---

## Il Significato delle Versioni PDF

Tutti i file PDF iniziano con un numero di versione all'inizio della prima riga, ad esempio:

```text
%PDF-1.7
```

Il formato è stato revisionato molte volte dalla sua creazione nel 1993.

Tuttavia, la tappa più importante è avvenuta nel 2008, quando Adobe ha trasferito le specifiche all'Organizzazione Internazionale per la Standardizzazione (ISO). È diventato **ISO 32000**, uno standard aperto che non appartiene a nessuna singola azienda.

Ciò significa che chiunque può accedere liberamente alle specifiche e creare strumenti che funzionino con i PDF senza pagare Adobe o richiedere autorizzazione.

Ecco perché il supporto PDF è stato implementato dai browser di Mozilla, Google e Apple senza restrizioni.

Nel 2017 è stata rilasciata la versione 2.0 con miglioramenti nella crittografia e nelle funzionalità di accessibilità.

Quasi tutti i file PDF utilizzati oggi si basano sulle versioni da 1.4 a 1.7.

---

## Come i Browser Possono Visualizzare i PDF Senza Plugin

Aprire un PDF in Chrome o Firefox prima del 2010 richiedeva generalmente il caricamento di un plugin Adobe Reader all'interno del browser. Quei plugin erano noti per essere lenti e soggetti a crash.

Google ha iniziato a integrare un visualizzatore PDF integrato in Chrome nel 2010, chiamato **PDFium**.

Il visualizzatore è open source ed è ora ampiamente utilizzato in molte applicazioni, tra cui:

* Microsoft Edge
* Android WebView
* Altri browser basati su Chromium

Firefox utilizza il proprio motore di rendering chiamato **PDF.js**, mentre Safari si affida al renderer nativo della piattaforma Apple.

Il visualizzatore PDF è diventato una storia di successo silenziosa, utilizzata ogni giorno da milioni di persone senza ricevere molta attenzione.

---

## Perché Alcuni File PDF Sono Così Grandi

Molte persone presumono che i file PDF siano sempre piccoli. Non è così.

Il testo si comprime estremamente bene perché le lettere possono essere codificate in modo molto efficiente.

Allora cosa occupa spazio nei PDF?

**Le immagini.**

Una singola immagine ad alta risoluzione può occupare diversi megabyte. Un documento scansionato di dieci pagine può facilmente superare i 50 MB perché ogni pagina contiene una scansione completa dell'immagine.

Tipi diversi di dati utilizzano algoritmi di compressione diversi:

| Tipo di Dato | Algoritmo di Compressione |
| ------------- | ------------------------- |
| Fotografie | JPEG |
| Scansioni in bianco e nero | JBIG2 |
| Dati generali del documento | Flate |

Cosa fa realmente il software di compressione PDF?

Principalmente, riduce la qualità delle immagini mantenendo il testo invariato.

---

## Domande Frequenti

### Posso Modificare il Testo in un Documento PDF?

In teoria: sì.

In pratica: non molto bene.

I PDF sono progettati principalmente per la visualizzazione, non per la modifica.

Applicazioni come Adobe Acrobat e molti editor PDF online consentono la modifica del testo, ma la formattazione spesso diventa incoerente perché il documento non è mai stato concepito per comportarsi come un file di elaborazione testi.

---

### Perché Non Riesco a Evidenziare il Testo in Questo PDF?

Il file è probabilmente un documento scansionato.

Non esiste un livello di testo reale, solo immagini di testo. Per rendere il testo selezionabile, il documento deve essere elaborato tramite OCR (Riconoscimento Ottico dei Caratteri).

---

### Posso Visualizzare in Modo Sicuro un File PDF da una Fonte Sconosciuta?

In generale, sì.

I file PDF possono tecnicamente contenere codice JavaScript, e i software di lettura PDF hanno avuto vulnerabilità in passato.

Tuttavia, i moderni visualizzatori PDF basati su browser sono significativamente più sicuri e molto più difficili da sfruttare rispetto alle vecchie applicazioni standalone per la lettura di PDF.
