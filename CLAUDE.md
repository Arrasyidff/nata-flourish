# Claude.md — Landing Page Project

## Struktur Folder

> **Catatan:** Struktur di bawah ini hanya sebagai **template referensi**. Folder dan file yang dibuat menyesuaikan kebutuhan proyek, tidak harus mengikuti struktur ini secara penuh.

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── (marketing)/
│   │   └── page.tsx
│   │
│   └── api/
│       └── contact/
│           └── route.ts
│
├── components/
│   │
│   ├── layout/
│   │   ├── navbar/
│   │   │   ├── index.tsx
│   │   │   ├── NavbarLogo.tsx
│   │   │   ├── NavbarMenu.tsx
│   │   │   ├── NavbarMobile.tsx
│   │   │   └── NavbarCTA.tsx
│   │   │
│   │   └── footer/
│   │       ├── index.tsx
│   │       ├── FooterLinks.tsx
│   │       ├── FooterSocial.tsx
│   │       └── FooterCopyright.tsx
│   │
│   ├── sections/
│   │   │
│   │   ├── hero/
│   │   │   ├── index.tsx
│   │   │   ├── HeroContent.tsx
│   │   │   ├── HeroImage.tsx
│   │   │   ├── HeroStats.tsx
│   │   │   └── HeroCTA.tsx
│   │   │
│   │   ├── about/
│   │   │   ├── index.tsx
│   │   │   ├── AboutContent.tsx
│   │   │   ├── AboutImage.tsx
│   │   │   └── AboutValues.tsx
│   │   │
│   │   ├── collections/
│   │   │   ├── index.tsx
│   │   │   ├── CollectionGrid.tsx
│   │   │   ├── CollectionCard.tsx
│   │   │   ├── CollectionFilter.tsx
│   │   │   └── collections.data.ts
│   │   │
│   │   ├── gallery/
│   │   │   ├── index.tsx
│   │   │   ├── GalleryGrid.tsx
│   │   │   ├── GalleryItem.tsx
│   │   │   ├── GalleryModal.tsx
│   │   │   └── gallery.data.ts
│   │   │
│   │   ├── why-choose-us/
│   │   │   ├── index.tsx
│   │   │   ├── WhyChooseCard.tsx
│   │   │   └── whyChoose.data.ts
│   │   │
│   │   ├── testimonials/
│   │   │   ├── index.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── TestimonialSlider.tsx
│   │   │   └── testimonials.data.ts
│   │   │
│   │   ├── faq/
│   │   │   ├── index.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── faq.data.ts
│   │   │
│   │   ├── cta/
│   │   │   ├── index.tsx
│   │   │   └── CTAButtons.tsx
│   │   │
│   │   └── contact/
│   │       ├── index.tsx
│   │       ├── ContactForm.tsx
│   │       ├── ContactInfo.tsx
│   │       └── ContactMap.tsx
│   │
│   ├── common/
│   │   ├── Container.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SectionBadge.tsx
│   │   ├── MaxWidthWrapper.tsx
│   │   ├── Grid.tsx
│   │   ├── Flex.tsx
│   │   ├── Divider.tsx
│   │   ├── EmptyState.tsx
│   │   └── Loading.tsx
│   │
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   ├── sheet.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── carousel.tsx
│   │
│   ├── icons/
│   │   ├── WhatsAppIcon.tsx
│   │   ├── InstagramIcon.tsx
│   │   └── TikTokIcon.tsx
│   │
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       ├── StaggerContainer.tsx
│       └── ScaleIn.tsx
│
├── hooks/
│   ├── useScroll.ts
│   ├── useMediaQuery.ts
│   ├── useNavbar.ts
│   └── useIntersection.ts
│
├── lib/
│   ├── cn.ts
│   ├── format.ts
│   ├── constants.ts
│   └── metadata.ts
│
├── services/
│   ├── contact.service.ts
│   └── gallery.service.ts
│
├── store/
│   └── useGalleryStore.ts
│
├── types/
│   ├── collection.ts
│   ├── testimonial.ts
│   └── gallery.ts
│
├── data/
│   ├── navigation.ts
│   ├── socials.ts
│   └── company.ts
│
├── styles/
│   ├── animations.css
│   └── utilities.css
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── collections/
│   │   ├── gallery/
│   │   ├── testimonials/
│   │   └── logo/
│   ├── icons/
│   └── videos/
│
└── config/
    ├── site.ts
    └── seo.ts
```

---

## Desain

### Typography

Proyek ini menggunakan **2 font utama**:

| Font | Kegunaan |
|------|----------|
| **Libre Baskerville** | Font serif — digunakan untuk heading, judul section, dan elemen display |
| **Montserrat** | Font sans-serif — digunakan untuk body text, navigasi, button, dan teks umum |

#### Heading — Libre Baskerville

> Format: `font-size / line-height` (dalam px)

| Tag | Font Size | Line Height | Font Weight |
|-----|-----------|-------------|-------------|
| H1  | 38px      | 120%        | Bold        |
| H2  | 40px      | 120%        | Bold        |
| H3  | 33px      | 120%        | Bold        |
| H4  | 28px      | 120%        | Bold        |
| H5  | 23px      | 120%        | Bold        |
| H6  | 19px      | 120%        | Bold        |

#### Body Text — Montserrat

> Format: `font-size / line-height` (dalam px)

| Elemen      | Font Size | Line Height | Font Weight | Keterangan |
|-------------|-----------|-------------|-------------|------------|
| Body Text 1 | 16px      | 120%        | Regular     | —          |
| Body Text 2 | 13px      | 120%        | Regular     | —          |
| Body Text 3 | 11px      | 120%        | Regular     | —          |
| Button      | 14px      | 120%        | Medium      | Uppercase  |
| Tagline     | 13px      | 120%        | Medium      | Uppercase  |

#### Logo — Libre Baskerville

| Elemen | Font Size | Line Height | Font Weight | Keterangan |
|--------|-----------|-------------|-------------|------------|
| Logo   | 13px      | 120%        | Medium      | Uppercase  |

---

### Aturan Implementasi Font

Setiap elemen teks **wajib** menerapkan `font-weight` dan `text-transform` (jika ada) sesuai tabel typography di atas. Jangan menggunakan nilai default browser — selalu set secara eksplisit.

| Elemen      | Tailwind Font Weight  | Tailwind Text Transform |
|-------------|-----------------------|-------------------------|
| H1–H6       | `font-bold`           | —                       |
| Body Text 1 | `font-normal`         | —                       |
| Body Text 2 | `font-normal`         | —                       |
| Body Text 3 | `font-normal`         | —                       |
| Button      | `font-medium`         | `uppercase`             |
| Tagline     | `font-medium`         | `uppercase`             |
| Logo        | `font-medium`         | `uppercase`             |

> **Catatan:** Setiap kali membuat atau mengedit komponen yang mengandung teks, pastikan class font weight dan text transform sudah sesuai dengan elemen yang dimaksud.

---

### Color Palette

Proyek ini menggunakan **1 warna utama: Hijau**, dengan urutan dari tergelap hingga tercerah.

| Token           | Hex       | Preview |
|-----------------|-----------|---------|
| `darker`        | `#1a240f` | 🟫 |
| `dark:active`   | `#212e13` | 🟫 |
| `dark:hover`    | `#2c3e19` | 🟩 |
| `dark`          | `#374d20` | 🟩 |
| `normal:active` | `#3a5222` | 🟩 |
| `normal:hover`  | `#425d26` | 🟩 |
| `normal`        | `#49672a` | 🟩 |
| `light:active`  | `#c7d0bd` | 🟨 |
| `light:hover`   | `#e4e8df` | 🟨 |
| `light`         | `#edf0ea` | 🟨 |

---

### Spacing & Layout

| Properti                       | Nilai   |
|--------------------------------|---------|
| Spacing antar component        | `120px` |
| Grid gap                       | `20px`  |
| Padding kiri & kanan section   | `40px`  |

> **Aturan:** Jangan pernah menambahkan `max-width` pada elemen section manapun. Section harus selalu melebar penuh mengikuti lebar container induknya.

### Border Radius

| Elemen | Nilai      | Keterangan |
|--------|------------|------------|
| Card   | `12px`     | —          |
| Button | `99999px`  | Pill / full rounded |

### Button

| Properti      | Nilai    |
|---------------|----------|
| Padding Y     | `14px`   |
| Padding X     | `16px`   |
| Min-width     | `155px`  |
| Border        | `1px`    |
| Border Radius | `9999px` |
