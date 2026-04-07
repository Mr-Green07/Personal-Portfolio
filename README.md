# Yuvraj Singh — Personal Portfolio

A modern, animated developer portfolio built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS v3**, and **Framer Motion v11**.

---

## ✨ Features

- **Dark tech aesthetic** — Deep black surfaces with teal/cyan gradient accents
- **Smooth animations** — Framer Motion powered — typewriter hero, parallax scroll, viewport-triggered reveals, animated skill bars
- **Full routing** — Next.js App Router with 6 pages and 4 API endpoints
- **Live API calls** — Every page fetches data from its own API route on mount
- **Responsive** — Mobile-first, tested at 375px → 1440px
- **Accessible** — Semantic HTML, keyboard nav, WCAG contrast, focus rings
- **Contact form** — With validation, loading states, success/error feedback
- **Custom Fonts** — Cabinet Grotesk (display) + Satoshi (body) via Fontshare

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone or extract the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout (Navbar + Footer + metadata)
│   ├── page.tsx                  # Home page
│   ├── not-found.tsx             # Custom 404 page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── projects/
│   │   ├── page.tsx              # All projects grid
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic project detail page
│   ├── skills/
│   │   └── page.tsx              # Skills page
│   ├── contact/
│   │   └── page.tsx              # Contact form page
│   └── api/
│       ├── projects/
│       │   ├── route.ts          # GET /api/projects
│       │   └── [id]/
│       │       └── route.ts      # GET /api/projects/:id
│       ├── skills/
│       │   └── route.ts          # GET /api/skills
│       └── contact/
│           └── route.ts          # POST /api/contact
│
├── components/
│   ├── Navbar.tsx                # Sticky nav with animated active pill
│   ├── Footer.tsx                # 3-column footer with social links
│   ├── AnimatedSection.tsx       # Reusable viewport-triggered animation wrapper
│   └── ProjectCard.tsx           # Animated project card with hover effects
│
├── lib/
│   └── data.ts                   # 📌 Single source of truth for all portfolio data
│
├── styles/
│   └── globals.css               # Design tokens, dark theme, utility classes
│
├── public/                       # Static assets (favicons, OG images)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
└── README.md
```

---

## 🗺️ Pages & Routes

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — Hero with typewriter, stats, project preview (API), skills, certifications, CTA |
| `/about` | `app/about/page.tsx` | About — Bio, interests grid, education timeline, certifications, contact sidebar |
| `/projects` | `app/projects/page.tsx` | Projects — Filtered grid of all projects (fetched from API), skeleton loading |
| `/projects/:id` | `app/projects/[id]/page.tsx` | Project Detail — Full description, key highlights, tech stack, related projects |
| `/skills` | `app/skills/page.tsx` | Skills — Animated skill bars (programming/libraries), AI/ML chip tags, concepts cloud |
| `/contact` | `app/contact/page.tsx` | Contact — Form with live validation, loading spinner, success/error states |
| `*` | `app/not-found.tsx` | 404 — Custom not-found page |

---

## 🔌 API Endpoints

All API routes live under `/api/` and follow a consistent `{ success, data }` response shape.

### `GET /api/projects`
Returns all portfolio projects.

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": "speech-recognition",
      "title": "Speech Recognition Model",
      "shortDesc": "...",
      "description": "...",
      "tags": ["Python", "Machine Learning", "Audio Processing"],
      "period": "Oct – Nov 2023",
      "highlights": ["..."],
      "category": "ML / Audio",
      "icon": "🎙️",
      "color": "from-teal-500/20 to-cyan-500/10",
      "featured": false
    }
    // ...
  ]
}
```

---

### `GET /api/projects/:id`
Returns a single project by its string ID.

**URL Params:** `id` — one of `speech-recognition`, `emotion-recognition`, `llm-assistant`

**Success (200):**
```json
{ "success": true, "data": { /* project object */ } }
```

**Not Found (404):**
```json
{ "success": false, "error": "Project not found" }
```

---

### `GET /api/skills`
Returns all skills as a flat array with category labels, plus a categories list.

**Response:**
```json
{
  "success": true,
  "categories": ["programming", "aiml", "libraries", "concepts"],
  "data": [
    { "name": "Python", "level": 92, "category": "programming" },
    { "name": "Deep Learning", "level": 85, "category": "aiml" },
    { "name": "Signal Processing", "category": "concepts" }
    // ...
  ]
}
```

---

### `POST /api/contact`
Receives and validates a contact form submission.

**Request Body (JSON):**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "subject": "string (optional)",
  "message": "string (required)"
}
```

**Success (200):**
```json
{
  "success": true,
  "message": "Message received! Yuvraj will get back to you soon."
}
```

**Validation Error (400):**
```json
{ "success": false, "error": "Name, email, and message are required." }
```

**Server Error (500):**
```json
{ "success": false, "error": "Internal server error." }
```

> **Note:** To enable real email delivery, integrate [Resend](https://resend.com) or Nodemailer in `app/api/contact/route.ts`. Add your API key to `.env.local`.

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0a0a0f` | Page background |
| `--color-surface` | `#111118` | Card/section backgrounds |
| `--color-primary` | `#00d4aa` | Teal accent — CTAs, highlights |
| `--color-text` | `#e8e8f0` | Primary text |
| `--color-text-muted` | `#8888a8` | Secondary text |

### Fonts
| Role | Font | Source |
|---|---|---|
| Display / Headings | Cabinet Grotesk | Fontshare |
| Body / UI | Satoshi | Fontshare |
| Monospace | JetBrains Mono | Google Fonts |

### Animations
| Element | Animation |
|---|---|
| Hero heading | Framer Motion fade + slide up |
| Role text | Custom typewriter effect |
| Hero section | Parallax scroll with `useScroll` + `useTransform` |
| Nav active pill | Framer Motion `layoutId` shared element |
| Section reveals | Viewport-triggered `useInView` fade/slide |
| Skill bars | Animated width reveal on scroll entry |
| Project cards | Hover lift + shadow + border transition |
| Mobile nav | `AnimatePresence` height + opacity |
| Scroll indicator | Looping bounce animation |

---

## 🧩 Components

### `Navbar`
- Sticky with scroll-aware blur + border
- Animated active pill using Framer Motion `layoutId`
- Mobile hamburger with `AnimatePresence` slide-down drawer
- CTA "Hire Me" button links to email

### `Footer`
- 3-column grid: brand, navigation, contact info
- Social icons: GitHub, LinkedIn, Email
- Auto-updating copyright year

### `AnimatedSection`
- Reusable wrapper component
- Triggers `useInView` and animates `opacity` + `y`/`x` offset
- Supports `delay`, `direction` props

### `ProjectCard`
- Hover lift (`whileHover`)
- Gradient accent bar on top (color-coded by project)
- Tag chips with overflow count
- Featured badge support
- Links to `/projects/:id`

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | 14.2.5 | Framework |
| `react` | ^18.3 | UI library |
| `framer-motion` | ^11.3 | Animations |
| `lucide-react` | ^0.417 | Icons |
| `tailwindcss` | ^3.4 | Styling |
| `typescript` | ^5.5 | Type safety |
| `clsx` | ^2.1 | Conditional classNames |

---

## 🛠️ Customization

All portfolio content is centralized in **`lib/data.ts`**. To update:

1. **Personal info** → edit `personalInfo` object
2. **Add a project** → push a new entry to `projects[]` array
3. **Update skills** → edit `skills.programming`, `skills.aiml`, `skills.libraries`, `skills.concepts`
4. **Add certifications** → push to `certifications[]`

No page components need to change — they all pull from `lib/data.ts`.

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

---

## 📬 Contact

**Yuvraj Singh** — AI/ML Engineer  
📧 yuvrajkumar5070@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/yuvraj-singh-45o12/)  
🐙 [GitHub](https://github.com/Mr-Green07)

---

*Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion*
