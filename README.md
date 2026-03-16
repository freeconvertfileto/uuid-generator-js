# UUID Generator

Generate version 4 UUIDs in four formats using `crypto.randomUUID()` with a template-string fallback, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/developer-tools/uuid-generator

## How It Works

UUID generation uses `crypto.randomUUID()` when available in the browser. For browsers without `crypto.randomUUID`, a fallback generates via the template `'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'` where `x` is replaced by a random hex digit from `crypto.getRandomValues` and `y` is replaced by `(r & 0x3 | 0x8).toString(16)` to set the variant bits. The raw UUID is then transformed into one of four output formats: standard (lowercase with hyphens), uppercase, no-hyphens, or braces-wrapped (`{uuid}`). Multiple UUIDs can be generated at once and the full list is copyable.

## Features

- `crypto.randomUUID()` with template-string fallback
- Four output formats: standard, uppercase, no-hyphens, braces-wrapped
- Bulk generation (configurable count)
- Copy all UUIDs to clipboard

## Browser APIs Used

- Web Crypto API (`crypto.randomUUID`, `crypto.getRandomValues` fallback)
- Clipboard API (`navigator.clipboard.writeText`)

## Code Structure

| File | Description |
|------|-------------|
| `uuid-generator.js` | `crypto.randomUUID()` + template fallback (`4xxx`/`yxxx` variant bits), 4 format transformations, bulk generation, clipboard copy |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| Count input | Number of UUIDs to generate |
| Format selector | Standard / Uppercase / No-hyphens / Braces |
| Generate button | Generate UUIDs |
| Output area | Generated UUID list |
| Copy button | Copy all UUIDs to clipboard |

## License

MIT
