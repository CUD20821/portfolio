# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

**Development**
- `npm run dev` - Start development server on http://localhost:3000 with Turbopack
- `npm run build` - Build the production bundle
- `npm run start` - Run the production server
- `npm run lint` - Run ESLint

**Requirements**
- Node.js >= 20.0
- pnpm or npm for package management

## Project Overview

This is a Next.js 16 portfolio application with multi-language support (Vietnamese and Japanese) using **next-intl**. It features a home page, projects showcase with filtering, and an about section. The site uses Tailwind CSS for styling, markdown files for content management, and theme switching with **next-themes**.

## Architecture

### Key Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4, SASS
- **Internationalization**: next-intl (Vietnamese "vi", Japanese "ja") with locale-prefixed routing
- **Theming**: next-themes (light/dark mode)
- **Content**: Markdown files with gray-matter for front matter parsing
- **UI Libraries**: React Markdown, Chart.js/react-chartjs-2

### Directory Structure

**`app/[locale]/`** - Main app directory following Next.js App Router structure:
- `(home)/page.tsx` - Home page (server component)
- `(home)/homePageClient.tsx` - Home page interactive logic (client component)
- `layout.tsx` - Locale-specific layout with i18n providers (ThemeProvider, NextIntlClientProvider)
- `projects/page.tsx` - Projects list page (server component)
- `projects/projectClient.tsx` - Projects filtering and visualization (client component)
- `projects/[id]/page.tsx` - Individual project detail page
- `about/page.tsx` - About page

**`component/`** - Reusable React components:
- Component structure: each component has its own folder with `index.tsx` and optional `.css`
- Key components: Header, Footer, Project, Experience, Timeline, Skill, ThemeSwitcher, LanguageSwitcher, Charts, Skeletons
- Components follow naming convention with PascalCase folder names

**`app/contents/projects/`** - Project markdown files for content:
- YAML front matter contains: id, titleVI/JP, descriptionVI/JP, tech, category, start/end dates, image, url
- Two locale sections marked with `<---vi--->` and `<---ja--->` for detailed content
- Used by `getListMarkdownData()` to load projects at build time

**`i18n/`** - Internationalization configuration:
- `routing.ts` - Defines supported locales and routing rules (always prefix URLs with locale)
- `request.ts` - i18n request configuration

**`app/utils/`** - Server-side utilities:
- `index.ts` - `getListMarkdownData()` reads all markdown files and extracts metadata using gray-matter
- `graph.ts` - `getCategoryStats()` and `getTechStackStats()` compute chart data from project metadata
- `formatExperienceDuration.ts` - Formats date ranges with locale-specific labels

**`messages/`** - Translation JSON files:
- `vi.json` - Vietnamese translations
- `ja.json` - Japanese translations
- Structure: nested objects for different page sections (HomePage, Experience, etc.)

**`constants/index.ts`** - Static data:
- `dataSkill` - Hardcoded skill list
- `dataContact` - Social/contact links
- `dataMenu` - Navigation menu items
- `localeLabels` - Locale-specific date formatting labels
- `SupportedLocale` type definition

### Content Flow

1. Markdown files in `app/contents/projects/` are read at **build time** (server components only)
2. `getListMarkdownData()` parses front matter and returns array of project objects
3. Projects are passed to client components for filtering and rendering
4. **Filtering**: On projects page, users can filter by category or tech stack, stored in sessionStorage
5. **Languages**: Content is bilingual—switch via LanguageSwitcher, re-renders with appropriate translations from messages JSON

### Rendering Pattern

- **Server Components** (`.tsx` pages): Fetch data, pass to client components
- **Client Components** (`Client` suffix): Handle interactivity (filtering, theme/language switching, charts)
- Split pattern prevents unnecessary client-side data fetching while maintaining interactivity

## Locale-Specific Details

**Supported Locales**: "vi" (Vietnamese, default) and "ja" (Japanese)

**Routing**: All routes are prefixed with locale: `/vi/projects`, `/ja/projects`

**Messages Loading**:
- Messages are imported directly in `app/[locale]/layout.tsx` as JSON
- Passed to `NextIntlClientProvider` for static export compatibility
- Components use `useTranslations()` hook for translation lookups

**Theme + Locale**: Both are managed independently:
- Theme stored in DOM attribute `data-theme` (managed by next-themes)
- Locale from URL params via `useParams()` hook

## Data Structure: Projects

Project markdown front matter example:
```yaml
id: "ai-audio"
titleVI: "..."  # Vietnamese title
titleJP: "..."  # Japanese title
descriptionVI: "..."
descriptionJP: "..."
tech: ["React", "Python"]  # Used for filtering
category: "AI"             # Used for filtering
start: "2024-12"           # Format: YYYY-MM
end: "2026-02"
image: "/projects/ai-audio.png"
url: "/projects/ai-audio"
```

Markdown sections are marked with `<---vi--->` and `<---ja--->` for locale-specific detailed content.

## Common Tasks

**Add a new project**: Create `.md` file in `app/contents/projects/` with frontmatter fields (id, titleVI/JP, descriptionVI/JP, tech, category, start, end, image, url) and locale-specific content sections.

**Update translations**: Edit JSON files in `messages/` (vi.json, ja.json). Structure mirrors nested usage in components.

**Add a new page**: Create folder in `app/[locale]/` with `page.tsx` (server) and optional client component file. Remember to import translations using `useTranslations()`.

**Modify styling**: Most components have corresponding `.css` files in their folders. Global styles in `app/global.css`. Tailwind classes used inline; avoid duplicating existing component styles.

## Build & Deployment

- Static export is partially configured (`images.unoptimized: true` in next.config.ts)
- Built for Vercel deployment
- Metadata includes canonical URLs and language alternates for SEO
