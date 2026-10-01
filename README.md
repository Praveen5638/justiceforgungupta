# JUSTICE FOR GUN GUPTA — PRAYAGRAJ / UIT / UCER CASE
## Technical SEO Architecture, Sourced Timeline & Google Search Readiness

A production-ready, highly discoverable, ethical public information website built with **HTML5, CSS3, and Vanilla JavaScript**.

This website serves as an independent, student-led public advocacy platform for the reported death of **Gun Gupta**, a third-year B.Tech CSE student at United College of Engineering and Research (UCER / UIT), Prayagraj.

---

## 🔍 FULL SEO & TECHNICAL ARCHITECTURE AUDIT

### 1. On-Page SEO & Metadata Strategy
- **Target Search Intent Keywords**:
  - `Gun Gupta case Prayagraj`
  - `Gun Gupta UCER`
  - `Gun Gupta UIT`
  - `Gun Gupta United College`
  - `Gun Gupta United University`
  - `UCER Prayagraj student case`
  - `UIT Prayagraj student case`
  - `Prayagraj student case`
  - `Gun Gupta case details`
  - `Gun Gupta timeline`
  - `Gun Gupta medical leave allegations`
  - `Gun Gupta attendance issue`
- **Page Title**: `Gun Gupta Case Prayagraj — Case Timeline, Sourced Records & Updates | UCER / UIT`
- **Meta Description**: `Gun Gupta student case public information repository in Prayagraj, featuring a verified timeline, student-reported accounts, AKTU attendance policy analysis, institutional reply portal, and campaign updates.`
- **Heading Structure**: Single `H1` headline (`JUSTICE FOR GUN GUPTA`) supported by clean semantic `H2` and `H3` section headings.
- **Language Stack**: High-impact English titles, navigation, and UI buttons paired with natural Devanagari Hindi descriptive content (`Noto Sans Devanagari` font).

### 2. Structured Data (Schema.org JSON-LD)
Configured inside `<script type="application/ld+json">` in `index.html`:
- `@type: WebSite`: Defines the campaign site hierarchy and multi-language targets (`en`, `hi`).
- `@type: WebPage`: Specifies canonical page context, case description, and target entities.
- `@type: Organization`: Defines the independent campaign entity, verified email, and core topics (`UCER Prayagraj`, `UIT Prayagraj`, `AKTU Attendance Ordinance`).
- `@type: FAQPage`: Formats clarification questions for Google rich snippet eligibility.

### 3. Open Graph & Twitter Social Cards
- Vector preview image (`assets/og-image.svg` — 1200x630px).
- Meta tags for Facebook, LinkedIn, WhatsApp, X (Twitter), and Discord (`og:title`, `og:description`, `og:image`, `twitter:card: summary_large_image`).

### 4. Technical Crawlability & Indexing Files
- **`robots.txt`**: Configured to allow all public content while referencing the live sitemap.
- **`sitemap.xml`**: Valid XML sitemap specifying the homepage canonical URL and `<lastmod>`.
- **`manifest.webmanifest`**: PWA standards web app manifest for mobile home-screen integration and theme color (`#080808`).

---

## 🛠️ DOMAIN CONFIGURATION INSTRUCTIONS (BEFORE GOING LIVE)

Before publishing to your final hosting platform (Netlify, Vercel, GitHub Pages, or Custom Domain), perform a quick search-and-replace across the codebase for the placeholder string:

`YOUR_PRODUCTION_DOMAIN.com`

Replace it with your actual live domain (e.g. `justiceforgungupta.org` or `gunguptacase.netlify.app`):

1. **`index.html`**:
   - `<link rel="canonical" href="https://YOUR_PRODUCTION_DOMAIN.com/">`
   - `<meta property="og:url" content="https://YOUR_PRODUCTION_DOMAIN.com/">`
   - `<meta property="og:image" content="https://YOUR_PRODUCTION_DOMAIN.com/assets/og-image.svg">`
   - `<meta name="twitter:image" content="https://YOUR_PRODUCTION_DOMAIN.com/assets/og-image.svg">`
   - `@id` and `url` values in JSON-LD `<script type="application/ld+json">`
2. **`sitemap.xml`**:
   - `<loc>https://YOUR_PRODUCTION_DOMAIN.com/</loc>`
3. **`robots.txt`**:
   - `Sitemap: https://YOUR_PRODUCTION_DOMAIN.com/sitemap.xml`

---

## 🌐 GOOGLE SEARCH CONSOLE SETUP & INDEXING GUIDE

Follow these steps to submit your website to Google after deployment:

1. **Sign in to Google Search Console**:
   - Visit [search.google.com/search-console](https://search.google.com/search-console).
2. **Add Property**:
   - Select **URL prefix** and enter your live domain (e.g., `https://your-domain.com`).
3. **Verify Ownership**:
   - Choose HTML tag verification or upload an HTML verification file to your root directory.
4. **Submit Sitemap**:
   - Navigate to **Sitemaps** in the left sidebar.
   - Enter `sitemap.xml` and click **Submit**.
5. **URL Inspection**:
   - Enter `https://your-domain.com/` in the top search bar and click **Request Indexing**.

> **Note**: Indexing and search rankings are determined autonomously by Google's algorithms based on content relevance, crawl frequency, and site authority. Code optimization ensures full crawlability and rich snippet eligibility, but top positions cannot be artificially guaranteed.

---

## 🏛️ Website Section Breakdown (17 Sections)

1. **Top Announcement Bar with Live Visit Counter** (`#visitCounterBadge`)
2. **Navigation Header** (`#siteHeader` with theme toggle and mobile menu)
3. **Hero Section** (`#hero` — *"STUDENTS ARE NOT MACHINES"*)
4. **About the Case** (`#about` — Documented Info vs. Critical Questions & Methodology Note)
5. **OUR DEMANDS — FEATURED SECTION** (`#demands` — Placed immediately above Timeline)
6. **Detailed Case Timeline** (`#timeline` — Entries 01–08)
7. **Medical Condition & Reported Communication** (`#medical-report` — 3 Medical Panels)
8. **Attendance & Medical Leave Policy** (`#attendance` — 75% Rule & 15% Condonation Infographic)
9. **Evidence Archive** (`#evidence` — Filterable & Searchable Document Library)
10. **Questions Requiring Clarification** (`#questions` — 9 Impartial Inquiry Questions)
11. **Official Response & Right of Reply** (`#official-response` — Administrative Reply Portal Notice)
12. **Campaign Updates & Developments** (`#updates` — Chronological Updates Feed)
13. **Peaceful Student Solidarity** (`#solidarity` — 4 Advocacy Principles & Copyable Statement)
14. **Campaign Event Information** (`#event` — Dynamic Event Schedule & Guidelines)
15. **Media & Press Kit** (`#press-kit` — Press Releases & Printable Fact Sheet)
16. **Contact & Official Channels** (`#contact` — 4-Option Submission Form & Corrections Policy)
17. **Site Footer** (`.site-footer` — Quick Links, Resources, Disclaimer & Footer Visit Counter)

---

## 📁 Project Folder Structure

```
gun gupta/
├── index.html            # Primary HTML5 file (SEO tags, Schema JSON-LD, OpenGraph, Twitter Cards)
├── robots.txt            # Search crawler directives & sitemap location
├── sitemap.xml           # XML sitemap for Search Console
├── manifest.webmanifest  # Web app manifest for PWA standards
├── assets/
│   └── og-image.svg      # High-resolution vector preview graphic for social sharing (1200x630)
├── css/
│   └── style.css         # Complete protest design stylesheet, Noto Sans Devanagari font stack, light/dark theme
├── js/
│   ├── data.js           # Central dataset (Meta, Demands, Timeline, Medical, Qs, Docs, Updates, Press Kit)
│   ├── interactions.js   # Dynamic visit counter, filter/search logic, modals, event status, clipboard scripts
│   └── main.js           # Main bootstrap & keyboard accessibility listener
└── README.md             # Technical documentation & GSC setup guide
```

---

## 🚀 Local Preview Instructions

Preview the website locally using any modern web browser:

1. Double-click `index.html` in your file explorer to open directly in Google Chrome, Microsoft Edge, Firefox, or Safari.
2. Or serve via Python HTTP server:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.
