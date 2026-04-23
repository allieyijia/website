# Allie He Portfolio — alliehe.com

Custom-coded HTML/CSS/JS portfolio. Travel journal / postcard aesthetic.

## File Structure

```
/
├── index.html          ← Homepage
├── ux.html             ← Work listing page (all 5 projects)
├── ups.html            ← UPS case study
├── beacon.html         ← Beacon case study
├── abg.html            ← Allied Beverage Group internship
├── pawfect.html        ← Pawfect Pets case study
├── savor.html          ← Savor / Cookin' Cubby case study
├── about.html          ← About (passport style)
├── contact.html        ← Contact + resume embed
├── graphics.html       ← Graphics & games gallery
├── style.css           ← Shared stylesheet (all pages link to this)
├── img/                ← All images
│   ├── ups-*.png       ← UPS screenshots
│   ├── beacon-*.jpg    ← Beacon app frames
│   ├── beacon-device-*.jpg ← Beacon physical device frames
│   ├── pawfect-*.jpg   ← Pawfect app frames
│   ├── savor-*.jpg     ← Savor app frames
│   ├── abg-*.jpg       ← ABG internship photos
│   ├── artet-*.jpg     ← Artet brand launch photos
│   ├── sticker-*.png   ← Hand-drawn stickers (homepage decorations)
│   └── allie-photo.jpg ← Your photo (used on about page)
└── files/
    └── allie-he-resume.pdf
```

## Deploying to GitHub Pages

1. Create a new GitHub repo named `alliehe.github.io` (or any name for project pages)
2. Push all files to the `main` branch
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at `https://alliehe.github.io`

## Custom Domain (alliehe.com via Namecheap)

In Namecheap DNS, add:
```
A record → 185.199.108.153
A record → 185.199.109.153
A record → 185.199.110.153
A record → 185.199.111.153
CNAME www → alliehe.github.io
```

In GitHub repo → Settings → Pages → Custom domain → type `alliehe.com` → Save.

GitHub auto-provisions free SSL. DNS propagation: up to 24h but usually faster.

## Still to add (placeholders left in place)

- `graphics.html`: Add newspaper issue photos, more brand work, game screenshots
- Any additional project screenshots can be added to `/img/` and linked in case studies

## Fonts used
- Cormorant Garamond (Google Fonts) — headers
- Nunito (Google Fonts) — body text
