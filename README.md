# Aditya Lohar — Front-End Developer Portfolio & AI Assistant

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript (Strict Mode)**, and **Tailwind CSS**. Features verified production case studies and an interactive **Grounded AI Recruiter Assistant** with real-time response generation.

---

## 🌟 Key Highlights

* **Production Case Studies:** Deep dives into 5 real-world applications including an institutional multi-tenant **Education ERP**, **SalesOptim CRM** (10+ companies, 200+ daily staff), **Spicy Mango** (hospitality booking CMS), and **XpertBiz Solution**.
* **AI Recruiter Assistant:** Interactive conversational assistant grounded strictly in verified resume data, production metrics, and architecture challenges with zero hallucinations.
* **Modern Design & Performance:** 60fps GPU canvas background, responsive obsidian dark-mode aesthetics, accessible modal dialogs, and instant first-viewport recruiter CTA strip.
* **Strict Engineering Rigor:** Zero TypeScript errors (`tsc --noEmit`), static page optimization with Next.js Turbopack, and zero external analytics tracking.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Node.js](https://nodejs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling & Icons** | [Tailwind CSS](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) |
| **Data Grids & Analytics**| [TanStack Table v8](https://tanstack.com/table/v8), [Recharts](https://recharts.org/) |
| **Document Generation** | [@react-pdf/renderer](https://react-pdf.org/) |
| **AI Integration** | Custom Grounded Knowledge Engine, Streaming Response Pipeline, Context API |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/adityaslohar/adityaportfolio1.git
cd adityaportfolio1
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory:
```bash
# Optional AI Key (Free Google Gemini 3.5 Flash or DeepSeek API)
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: DeepSeek API Key
# DEEPSEEK_API_KEY=your_deepseek_api_key_here

# Optional: HeyGen Live Streaming Avatar
# HEYGEN_API_KEY=your_heygen_api_key_here
```
> *Note:* If no API keys are provided, the portfolio automatically operates using the built-in verified in-code knowledge base with zero configuration required.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── public/                 # Static assets (portraits, resume PDF)
├── src/
│   ├── app/                # Next.js 16 App Router pages & API routes
│   │   ├── api/ask/        # Grounded AI Assistant endpoint
│   │   ├── api/avatar/     # WebRTC avatar token handler
│   │   ├── globals.css     # Global theme & scrollbar styling
│   │   ├── layout.tsx      # Root metadata & font configurations
│   │   └── page.tsx        # Single-page portfolio entrypoint
│   ├── components/         # Reusable UI components
│   │   ├── HeroSection.tsx            # Main hero & recruiter quick strip
│   │   ├── AnimatedHeroBackground.tsx # 60fps GPU particle constellation
│   │   ├── SellingPointsSection.tsx   # Core engineering competencies
│   │   ├── ProjectsSection.tsx        # Project case studies & categories
│   │   ├── ProjectDetailModal.tsx     # Deep-dive architecture inspector
│   │   ├── SkillsSection.tsx          # Grouped technical competencies
│   │   ├── ExperienceSection.tsx      # Professional timeline
│   │   ├── EducationSection.tsx       # Degrees & certifications
│   │   ├── ContactFooter.tsx          # Recruiter direct contact actions
│   │   ├── AiTwinDrawer.tsx           # Streaming chat assistant
│   │   └── LiveStreamingAvatar.tsx    # Digital avatar preview & WebRTC
│   ├── data/
│   │   └── portfolio.ts    # Single source of truth for portfolio data
│   └── types/              # TypeScript definitions
└── README.md
```

---

## 📬 Contact Aditya Lohar

* **Email:** [adityalohar5838@gmail.com](mailto:adityalohar5838@gmail.com)
* **Phone / WhatsApp:** [+91 77449 98493](https://wa.me/917744998493)
* **LinkedIn:** [linkedin.com/in/aditya-lohar-982914240](https://www.linkedin.com/in/aditya-lohar-982914240/)
* **GitHub:** [github.com/adityaslohar](https://github.com/adityaslohar)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
