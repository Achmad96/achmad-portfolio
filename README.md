# Achmad Raihan — Aspiring Machine Learning Engineer Portfolio

A modern, high-impact personal portfolio website and headless technical publication platform built with **Next.js 16 (App Router + Turbopack)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and the **Notion API**.

Designed with a clean, minimalist aesthetic inspired by modern design portfolios, featuring dynamic light and dark theme switching, an interactive vertical career timeline, a filterable production project showcase, and headless Notion-powered articles.

---

## 🚀 Key Highlights & Features

- **Minimalist Design & Custom Typography**:

  - Distinctive brand identity with minimalist `AR.` navigation and pill-shaped actions.
  - Asymmetric organic pebble / squircle avatar frame with studio ambient backlight.
  - Curated typography pairing following designer portfolio standards:
    - **Headings**: `Montserrat` (geometric, modern, punchy display)
    - **Body & UI**: `Open Sans` (clean, neutral, high-legibility sans-serif)
    - **Code & Metadata**: `Fira Code` (technical monospace for chips and dates)
  - Zero Layout Shift (CLS) via Next.js self-hosted `next/font/google`.

- **Dynamic Theme System (Light & Dark Mode)**:

  - Interactive theme switcher (`Sun` / `Moon`) in the navbar.
  - Built with `next-themes` and Tailwind CSS custom variants with zero hydration mismatch and persisted local preferences.

- **Interactive Professional Timeline**:

  - Vertical timeline spine with geometric indicator pins and active pulse indicators on current roles.
  - Documenting applied machine learning, deep learning, computer vision, and systems development at **PT Jasa Web Indonesia (Webtocrat Motion Group)**, **Captiveau**, and **Freelance**.
  - Quantified impact metrics (98% anomaly detection accuracy, 85% multi-object tracking accuracy, 10,000+ data row dashboard queries).

- **Curated Projects Showcase**:

  - Multi-category filter: _All Projects_, _Machine Learning & AI_, _Full-Stack Web_, _Public & Community_, and _Desktop & Systems_.
  - Direct repository links and proprietary project designations.
  - Features real systems including Nvidia NeMo fraud anomaly architectures, real-time match vision tracking, **UMKM Desa Keduyung**, and **Sumbermalang SMART**.

- **Headless Notion CMS for Articles**:

  - Dynamic publication pages (`/articles` and `/articles/[slug]`) powered by the official Notion API (`@notionhq/client`, `notion-to-md`).
  - Next.js Incremental Static Regeneration (ISR) with blur image placeholders via `plaiceholder`.
  - Sticky Table of Contents sidebar with real-time scroll-spy section tracking, smooth scrolling, and 1-click article link sharing.

- **Contact & Communication Channels**:
  - Direct email with 1-click clipboard copy and toast notifications via `sonner`.
  - Automated contact message form backed by an API route (`/api/contact`) utilizing `nodemailer`.
  - Verified social profiles (GitHub, LinkedIn).

---

## 🛠️ Tech Stack

| Layer                  | Technology                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------- |
| **Framework**          | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server Components)                       |
| **Language**           | [TypeScript](https://www.typescriptlang.org/) (Strict Mode)                                        |
| **UI Library**         | [React 19](https://react.dev/)                                                                     |
| **Styling**            | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/typography`                            |
| **Theme Management**   | [`next-themes`](https://github.com/pacocoursey/next-themes)                                        |
| **Headless CMS**       | [Notion API](https://developers.notion.com/) (`@notionhq/client`, `notion-to-md`)                  |
| **Image Optimization** | `next/image` + [`plaiceholder`](https://plaiceholder.co/)                                          |
| **Icons**              | [`lucide-react`](https://lucide.dev/), [`react-icons`](https://react-icons.github.io/react-icons/) |
| **Notifications**      | [`sonner`](https://sonner.emilkowal.ski/)                                                          |
| **Mailing**            | [`nodemailer`](https://nodemailer.com/)                                                            |

---

## 📂 Project Directory Structure

```text
portfolio/
├── app/
│   ├── api/
│   │   └── contact/route.ts      # Contact form mailing API route
│   ├── articles/
│   │   ├── [slug]/page.tsx       # Dynamic Notion article reading page
│   │   ├── layout.tsx            # Dedicated articles layout (Nav + Footer)
│   │   └── page.tsx              # Articles archive & pagination
│   ├── actions.ts                # Server actions (blur image generation)
│   ├── globals.css               # Tailwind CSS v4 directives & theme tokens
│   ├── layout.tsx                # Root layout, fonts & theme provider
│   ├── not-found.tsx             # Custom 404 page
│   └── page.tsx                  # Home page & portfolio sections
├── components/
│   ├── About.tsx                 # Core competencies & verified credential card
│   ├── ArticleCard.tsx           # Article card with hover zoom & tag pills
│   ├── ArticleContent.tsx        # Markdown renderer with syntax & anchors
│   ├── ArticleSide.tsx           # Sticky Table of Contents with scroll-spy
│   ├── ContactSection.tsx        # Contact info, social links & message form
│   ├── Experience.tsx           # Vertical timeline of professional roles
│   ├── Footer.tsx                # Minimalist footer with quick navigation
│   ├── Hero.tsx                  # Hero section with asymmetric pebble avatar
│   ├── Navbar.tsx                # Sticky navbar with AR. brand & theme toggle
│   ├── PaginationComponent.tsx   # Clean pagination buttons
│   ├── Projects.tsx              # Filterable featured projects grid
│   └── Skills.tsx                # Categorized tech stack & brand icons
├── constants/
│   └── ProjectsMetadata.ts       # Verified projects data & repository links
├── lib/
│   ├── NotionService.ts          # Notion API data fetching & parsing
│   └── utils.ts                  # Class merger & string formatting utilities
├── providers/
│   └── Provider.tsx              # NextThemes & ProgressBar providers
└── public/
    ├── profile-avatar.png        # Transparent studio profile photo
    └── background.jpg            # Ambient backdrop assets
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/Achmad96/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory (refer to `.env.example`):

```bash
cp .env.example .env
```

Fill in your configuration:

```env
# Notion Headless CMS
NEXT_NOTION_API_KEY="secret_your_notion_api_key"
NEXT_NOTION_DATABASE_ID="your_notion_database_id"

# Nodemailer Contact Form Configuration
# Note: Google requires a 16-character App Password (NOT your regular Gmail password).
# 1. Enable 2-Step Verification in Google Account Security
# 2. Visit https://myaccount.google.com/apppasswords
# 3. Create an app password named "Portfolio" and copy the 16 characters
NEXT_GMAIL_FROM_EMAIL="your_email@gmail.com"
NEXT_GMAIL_PASS="xxxx xxxx xxxx xxxx"
NEXT_GMAIL_TO_EMAIL="your_destination_email@gmail.com"

# Spotify Integration (Optional)
SPOTIFY_CLIENT_ID="your_spotify_client_id"
SPOTIFY_CLIENT_SECRET="your_spotify_client_secret"
SPOTIFY_REFRESH_TOKEN="your_spotify_refresh_token"
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 5. Production Build

To test and create an optimized production build:

```bash
npm run build
npm run start
```

---

## 🚢 Deployment

The portfolio is pre-configured for instant zero-configuration deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Add the environment variables specified in `.env.example` to your Vercel Project Settings.
4. Deploy!

---

## 👨‍💻 Author

**Achmad Raihan**

- **Degree**: S.Kom, Information System — UIN Sunan Ampel (UINSA)
- **Location**: Surabaya, East Java, Indonesia
- **GitHub**: [@Achmad96](https://github.com/Achmad96)
- **LinkedIn**: [achmad-raihan-mamad](https://www.linkedin.com/in/achmad-raihan-mamad)
- **Email**: [work.achmadraihan@gmail.com](mailto:work.achmadraihan@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
