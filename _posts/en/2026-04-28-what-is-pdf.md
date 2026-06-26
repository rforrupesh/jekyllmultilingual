---
layout: post
title: What Is the Portable Document Format (PDF)?
thumbnail: /assets/img/que-es-el-pdf.webp
description: "Learn what a PDF is, its meaning, history, how it works, and why it is important for sharing digital documents securely and professionally."
ref: que-es-el-pdf
---

PDF stands for Portable Document Format. Adobe created it in 1993, and the name itself explains everything: the document is portable. It looks the same on your screen, on your colleague’s screen, on a printer in another country, or on a phone from five years ago. The file carries everything it needs to display correctly and does not depend on anything installed on your device.

## Where the Idea Came From

The idea itself originated from a memo written by one of Adobe’s founders, John Warnock, titled *The Camelot Project* in 1991.

In hindsight, the problem was obvious: you design something on your computer, and when it is viewed on another computer, it looks completely different—wrong fonts, broken layouts, and inconsistent formatting.

Warnock wanted documents to be described as instructions for creating something rather than being tied to a specific software application. In other words, something closer to a printed document, but digital.

---

## What a PDF Actually Looks Like

A PDF is not simply an image of the pages you create. Instead, a PDF is essentially an index of rendering commands.

The PDF contains a content stream that includes all the instructions required to recreate the elements:

> “Render this character at these coordinates using this font.”

Font definitions, images, colors, and other resources are embedded directly within the file itself. Everything is packaged together.

Finally, the PDF file contains an index at the end called a **cross-reference table**, which tells the reader where every page is located within the file. This is how PDF readers can jump directly to page 80 without reading pages 1 through 79 first.

---

## Meaning of PDF Versions

All PDF files begin with a version number at the start of the first line, such as:

```text
%PDF-1.7
```

The format has been revised many times since its creation in 1993.

However, the most important milestone occurred in 2008 when Adobe transferred the specification to the International Organization for Standardization (ISO). It became **ISO 32000**, an open standard that belongs to no single company.

This means anyone can freely access the specifications and create tools that work with PDFs without paying Adobe or requesting permission.

That is why PDF support was implemented by Mozilla, Google, and Apple browsers without restrictions.

In 2017, version 2.0 was released with improvements in encryption and accessibility features.

Nearly all PDF files used today rely on versions 1.4 through 1.7.

---

## How Browsers Can View PDFs Without Plugins

Opening a PDF in Chrome or Firefox before 2010 typically required loading an Adobe Reader plugin inside the browser. Those plugins were notorious for being slow and prone to crashes.

Google began integrating a built-in PDF viewer into Chrome in 2010 called **PDFium**.

The viewer is open source and is now widely used in many applications, including:

* Microsoft Edge
* Android WebView
* Other Chromium-based browsers

Firefox uses its own rendering engine called **PDF.js**, while Safari relies on Apple's native platform renderer.

The PDF viewer became a quiet success story, used by millions of people every day without much attention.

---

## Why Some PDF Files Are So Large

Many people assume that PDF files are always small. They are not.

Text compresses extremely well because letters can be encoded very efficiently.

So what actually takes up space in PDFs?

**Images.**

A single high-resolution image can occupy several megabytes. A ten-page scanned document can easily exceed 50 MB because each page contains a full image scan.

Different types of data use different compression algorithms:

| Data Type | Compression Algorithm |
| ---------- | --------------------- |
| Photographs | JPEG |
| Black-and-white scans | JBIG2 |
| General document data | Flate |

What does PDF compression software actually do?

Primarily, it reduces image quality while keeping the text unchanged.

---

## Common Questions

### Can I Edit Text in a PDF Document?

In theory: yes.

In practice: not very well.

PDFs are designed primarily for viewing, not editing.

Applications such as Adobe Acrobat and many online PDF editors allow text editing, but formatting often becomes inconsistent because the document was never intended to behave like a word-processing file.

---

### Why Can't I Highlight Text in This PDF?

The file is probably a scanned document.

There is no actual text layer, only images of text. To make text selectable, the document must go through OCR (Optical Character Recognition).

---

### Can I Safely View a PDF File From an Unknown Source?

Generally, yes.

PDF files can technically contain JavaScript code, and PDF reader software has had vulnerabilities in the past.

However, modern browser-based PDF viewers are significantly safer and much harder to exploit than older standalone PDF reader applications.
