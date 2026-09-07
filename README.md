# Affiliate LP Template — Kitchen Gift Notes / AeroBlend Go

Pure static affiliate landing-page template inspired by modern DTC energy (original design — not a brand clone).

## Quick start

```bash
python3 -m http.server 8765 --directory /workspace/affiliate-lp-template
```

Open: http://127.0.0.1:8765/

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Full page + Product JSON-LD |
| `styles.css` | Mobile-first DTC styles |
| `script.js` | Year stamp + sticky header helper |
| `images/product-placeholder.svg` | Hero product art |
| `images/og-placeholder.svg` | Open Graph / Twitter image |
| `images/favicon.svg` | Favicon |
| `robots.txt` | Crawl allow + sitemap pointer |
| `sitemap.xml` | Single-URL sitemap |

## Design palette (original hexes)

- Near-black ink: `#1A1A20`
- Soft ink: `#4A4A55`
- Mint primary: `#5EBD9A` (hover `#4AA887`)
- Mint soft / mid: `#E8F6F1` / `#D4EDE5`
- Lavender: `#A78BFA` / deep `#7C6CF0` / soft `#EDE8FF`
- Cream bg: `#F7FAF8`
- Cons accent: `#C45C6A`

## Compliance built in

- Visible FTC affiliate disclosure near top + footer reprise
- Amazon links use `rel="nofollow sponsored noopener"` and `target="_blank"`
- Tag: `bacino019-20` · Placeholder ASIN: `B000000000`
- No hardcoded price, no AggregateRating, no InStock
- Soft copy — no hands-on testing claims
- Quotes use initials only (template placeholders)

## TODOs before publishing (Dale)

1. **Swap ASIN** — replace `B000000000` everywhere (HTML CTAs, JSON-LD `sku`, README) with a real Amazon ASIN.
2. **Real photos** — replace SVG placeholders with product photos; update `og:image` / `twitter:image` to a PNG/JPG if platforms require raster.
3. **Domain** — replace `https://example.com/aeroblend-go/` in canonical, OG, JSON-LD, robots.txt, and sitemap.xml.
4. **Quotes** — swap illustrative initials quotes for real, permissioned testimonials (or remove the strip).
5. **“Featured in” pills** — only keep labels you can substantiate; or remove.
6. **Verify listing details** — capacity, box contents, and feature claims should match the live Amazon listing.
7. **Optional** — add a real favicon.ico / apple-touch-icon if deploying to production.

## License note

Template structure for Dale Bacino’s affiliate projects. Fictional product name “AeroBlend Go” is a placeholder only.
