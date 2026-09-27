# TESHGE – Creative „Gehört ins Museum“ (9:16)

Das Motiv ist eine alte Porzellan-Schraubsicherung unter einer Museums-Glasglocke auf einem Sockel in TESHGE-Blau. Die Metapher: Alte Elektrik ist ein Ausstellungsstück, kein Betriebsmittel. Das Angebot ist die Modernisierung des Zählerschranks.

## Dateien

| Datei | Zweck |
| --- | --- |
| `teshge-creative-museum-9x16.png` | 1080 × 1920, für Meta/TikTok-Upload |
| `teshge-creative-museum-9x16@2x.png` | 2160 × 3840, Master für Print und Nachbearbeitung |
| `source/museum.html` | Vektor-Quelle (SVG + HTML), komplett editierbar |
| `source/render.js` | Export per Playwright |

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
