# TESHGE – Creative „Gehört ins Museum“ (9:16)

Das Motiv ist eine alte Porzellan-Schraubsicherung unter einer Museums-Glasglocke auf einem Sockel in TESHGE-Blau. Die Metapher: Alte Elektrik ist ein Ausstellungsstück, kein Betriebsmittel. Das Angebot ist die Modernisierung des Zählerschranks.

## Dateien

| Datei | Zweck |
| --- | --- |
| `teshge-creative-museum-nbp-9x16.png` | Finale Version (Nano Banana Pro, fotorealistisch), 1080 × 1920 für den Upload |
| `teshge-creative-museum-nbp-9x16@2x.jpg` | Finale Version, 2160 × 3840 |
| `teshge-creative-museum-9x16.png` | Vektor-Version (Layout-Vorlage), 1080 × 1920 |
| `teshge-creative-museum-9x16@2x.png` | Vektor-Version, 2160 × 3840 |
| `source/museum.html` | Vektor-Quelle (SVG + HTML), komplett editierbar |
| `source/render.js` | Export per Playwright |

## Nano-Banana-Pro-Version

Die Vektor-Version diente als Layout-Referenz, dazu kam das Original-Logo als zweite Referenz. Modell: Google Nano Banana Pro (Image-to-Image, 4K, 9:16) über Artlist. Das Original liegt in der Artlist-Bibliothek (3072 × 5504, PNG) und wurde für die Exporte auf exakt 9:16 beschnitten (15 px bzw. 30 px Höhe).

## Copy

- Headline: Gehört ins Museum.
- Subline: Nicht in deinen Zählerschrank.
- Schild: Exponat Nr. 1958 · Schraubsicherung / Bei dir noch in Betrieb? / Wir planen und bauen deinen neuen Zählerschrank: TAB-konform, zum Festpreis, ohne Subunternehmer.
- CTA: Jetzt Anfrage stellen (Ziel: teshge.de/gespraech)
- Proof: 4,9 aus 200+ Bewertungen · Innungsbetrieb

## Branding

- Farben: `#0F3485` (Blau), `#EDAD24` (Gold), `#040404` (Schwarz), `#FFFFFF`
- Schrift: Outfit 400–800 (SIL OFL)
- Logo: TESHGE Dark-Variante (weiß)

## Neu rendern

```bash
cd source
npm i playwright-core
CHROMIUM_PATH=/pfad/zu/chrome node render.js museum.html out.png 2
```

Letzter Parameter = Skalierung (1 = 1080 × 1920, 2 = 2160 × 3840).
