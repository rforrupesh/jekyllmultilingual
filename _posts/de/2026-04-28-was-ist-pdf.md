---
layout: post
title: Was ist das Portable Document Format (PDF)?
thumbnail: /assets/img/que-es-el-pdf.webp
description: "Erfahren Sie, was ein PDF ist, welche Bedeutung es hat, wie es entstanden ist, wie es funktioniert und warum es für den sicheren und professionellen Austausch digitaler Dokumente wichtig ist."
lang: de
ref: que-es-el-pdf
---

PDF steht für **Portable Document Format**. Adobe entwickelte dieses Dateiformat im Jahr 1993. Der Name beschreibt seinen Zweck bereits sehr gut: Ein Dokument bleibt portabel. Es sieht auf Ihrem Computer genauso aus wie auf dem Bildschirm eines Kollegen, auf einem Drucker in einem anderen Land oder auf einem Smartphone von vor fünf Jahren. Alle benötigten Informationen sind direkt in der Datei enthalten, sodass sie unabhängig von installierter Software korrekt dargestellt wird.

## Woher stammt die Idee?

Die Idee entstand aus einem Memo von Adobe-Mitgründer **John Warnock** mit dem Titel *The Camelot Project*, das 1991 veröffentlicht wurde.

Damals war das Problem offensichtlich: Ein Dokument sah auf dem eigenen Computer perfekt aus, erschien auf einem anderen Gerät jedoch mit falschen Schriftarten, verschobenem Layout oder fehlerhafter Formatierung.

Warnocks Ziel war es, Dokumente als eine Beschreibung der Darstellung zu speichern und nicht an eine bestimmte Software zu binden. Das Ergebnis war ein digitales Dokument, das sich wie eine gedruckte Seite verhält.

---

## Wie ist ein PDF aufgebaut?

Ein PDF ist nicht einfach nur ein Bild der einzelnen Seiten. Stattdessen enthält es eine Sammlung von Anweisungen, die dem PDF-Reader genau sagen, wie jede Seite dargestellt werden soll.

Der sogenannte **Content Stream** enthält beispielsweise Anweisungen wie:

> „Zeichne dieses Zeichen an diesen Koordinaten mit dieser Schriftart.“

Schriftarten, Bilder, Farben und weitere Ressourcen werden direkt in der PDF-Datei eingebettet.

Am Ende der Datei befindet sich außerdem eine **Cross-Reference-Tabelle (XRef)**. Sie zeigt dem PDF-Reader die Position aller Seiten und Objekte an. Deshalb kann ein PDF-Reader sofort zu Seite 80 springen, ohne zuvor die Seiten 1 bis 79 laden zu müssen.

---

## Bedeutung der PDF-Versionen

Jede PDF-Datei beginnt mit einer Versionsnummer, zum Beispiel:

```text
%PDF-1.7
```

Seit der Einführung im Jahr 1993 wurde das PDF-Format mehrfach erweitert.

Ein wichtiger Meilenstein war das Jahr **2008**, als Adobe die Spezifikation an die **International Organization for Standardization (ISO)** übergab. Seitdem ist PDF als **ISO 32000** ein offener Standard und gehört keinem einzelnen Unternehmen mehr.

Dadurch kann jeder Entwickler Programme erstellen, die PDF-Dateien unterstützen, ohne Adobe-Lizenzen erwerben zu müssen.

Deshalb unterstützen Browser wie Mozilla Firefox, Google Chrome und Apple Safari PDF-Dateien heute direkt.

Im Jahr **2017** erschien PDF **2.0** mit Verbesserungen bei Sicherheit, Verschlüsselung und Barrierefreiheit.

Die meisten heute verwendeten PDF-Dateien basieren jedoch weiterhin auf den Versionen **1.4 bis 1.7**.

---

## Warum Browser PDFs ohne Plugins öffnen können

Vor 2010 benötigten Browser meist das Adobe Reader-Plugin, um PDF-Dateien anzuzeigen. Diese Plugins galten als langsam und instabil.

Google integrierte deshalb 2010 den integrierten PDF-Viewer **PDFium** in Chrome.

Heute wird PDFium unter anderem verwendet in:

- Microsoft Edge
- Android WebView
- anderen Chromium-basierten Browsern

Firefox nutzt stattdessen seine eigene Rendering-Engine **PDF.js**, während Safari den nativen PDF-Renderer von Apple verwendet.

Dadurch können Millionen Menschen PDFs täglich direkt im Browser öffnen, ohne zusätzliche Software installieren zu müssen.

---

## Warum manche PDF-Dateien so groß sind

Viele glauben, PDF-Dateien seien grundsätzlich klein. Das stimmt nicht.

Text lässt sich sehr effizient komprimieren.

Den größten Speicherplatz benötigen meist **Bilder**.

Ein einzelnes hochauflösendes Bild kann mehrere Megabyte groß sein. Ein zehnseitiges eingescanntes Dokument überschreitet deshalb oft problemlos **50 MB**, weil jede Seite als vollständiges Bild gespeichert wird.

Je nach Inhalt kommen unterschiedliche Komprimierungsverfahren zum Einsatz:

| Datentyp | Komprimierungsverfahren |
| --------- | ----------------------- |
| Fotos | JPEG |
| Schwarz-Weiß-Scans | JBIG2 |
| Allgemeine Dokumentdaten | Flate |

Was macht eine PDF-Komprimierung eigentlich?

In den meisten Fällen werden hauptsächlich die Bilder stärker komprimiert, während der Text unverändert bleibt.

---

## Häufig gestellte Fragen

### Kann ich Text in einer PDF-Datei bearbeiten?

Theoretisch: ja.

Praktisch: nur eingeschränkt.

PDF-Dateien wurden in erster Linie für die Anzeige und Weitergabe entwickelt, nicht für die Bearbeitung.

Programme wie Adobe Acrobat und viele Online-PDF-Editoren ermöglichen zwar Änderungen, doch dabei können Formatierungsprobleme auftreten, da PDFs ursprünglich nicht als Textverarbeitungsdokumente konzipiert wurden.

---

### Warum kann ich in dieser PDF-Datei keinen Text markieren?

Wahrscheinlich handelt es sich um ein eingescanntes Dokument.

Es enthält keine echte Textebene, sondern lediglich Bilder des Textes. Damit der Text markiert oder durchsucht werden kann, muss zunächst eine **OCR-Erkennung (Optical Character Recognition)** durchgeführt werden.

---

### Ist es sicher, eine PDF-Datei aus unbekannter Quelle zu öffnen?

Im Allgemeinen: ja.

PDF-Dateien können zwar JavaScript enthalten, und ältere PDF-Programme hatten in der Vergangenheit Sicherheitslücken.

Moderne PDF-Viewer in aktuellen Webbrowsern sind jedoch deutlich sicherer und wesentlich schwerer auszunutzen als frühere eigenständige PDF-Programme.
