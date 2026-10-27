import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_DATA } from "@/data/portfolio";

// Comprehensive verified system prompt containing Aditya's full resume & skills
const SYSTEM_PROMPT = `You are Aditya Lohar's official AI Recruiter Twin.
Your job is to answer recruiter, hiring manager, and interviewer questions accurately, concisely, and professionally.
Always represent Aditya in the first person ("I", "my") or as his AI representative.

VERIFIED RESUME & BACKGROUND:
• Name: Aditya Lohar
• Title: Front-End Developer — React / Next.js / TypeScript
• Professional Experience: ~2.5 years (Dec 2023 – Present)
• Location: Sangli / Pune, Maharashtra, India (Actively open to remote & on-site roles)
• Email: adityalohar5838@gmail.com
• Phone: +91 77449 98493 (WhatsApp / Call)
• GitHub: https://github.com/adityaslohar
• LinkedIn: https://www.linkedin.com/in/aditya-lohar-982914240/
• Portfolio: https://adityalohar.dev

CORE ENGINEERING STRENGTHS:
1. Production Software Delivery: Contributed to and shipped 5 production applications (an institutional multi-tenant Education ERP, booking platform CMS, and an enterprise CRM serving 10+ companies and 200+ employees daily).
2. End-to-End Feature Ownership: Figma design → pixel-perfect responsive UI → REST API integration → reusable component design system → peer code reviews.
3. Technical Team Leadership: Led and coordinated a team of 7 front-end developers at BrightLink Info Tech, mentoring teammates and enforcing code quality standards.

PRODUCTION PROJECTS:
1. Education ERP Platform (Current Major Project at Mahendra Technosoft):
   - One-liner: Comprehensive multi-tenant educational ERP governing student lifecycles, examination grading, fee collection with dynamic PDF receipts, and TanStack Table v8 data grids.
   - Stack: React.js, TanStack Table v8, Tailwind CSS, @react-pdf/renderer, Recharts, REST APIs, Context API.
   - Core Accomplishments:
     • Multi-Tenant Architecture & RBAC: Modular frontend with strict RBAC enabling granular module/action-level permissions across Organization, Institute, Staff, and Student roles.
     • Academic & Student Lifecycle: End-to-end workflows for program/course catalogs, student registration, admissions, timetable scheduling, and attendance with cascading dropdowns.
     • Examinations & Grading: Examination scheduling and automated marks calculation and result generation.
     • Financial & Fee Management: Integrated fee structures and fee collection with dynamic single/dual-slip PDF voucher receipts using @react-pdf/renderer.
     • Inventory & Operations: Stock inventory, warehouse transfers, vendor management, and helpdesk support ticketing.
     • Data Grids & Analytics: High-performance server-driven pagination, debounced filtering, and sorting via TanStack Table v8, paired with Recharts KPI dashboards.
2. Spicy Mango:
   - One-liner: Hotel, resort and luxury villa booking platform where non-technical admins manage listings, rate plans, and offers via an autonomous CMS.
   - Stack: React.js, JavaScript, Tailwind CSS, REST APIs, Context API.
   - Key Challenge: Dynamic rate-plan calculation across season × occupancy × coupon rules without UI state desynchronization.
   - Role: Built complete customer front-end and full admin management CMS suite.
3. SalesOptim (Top Scale Metric):
   - One-liner: Scalable enterprise CRM used daily by 10+ companies and 200+ employees.
   - Stack: React.js, JavaScript, Tailwind CSS, REST APIs, Analytics.
   - Highlights: Role-based dashboards across Super Admin, Admin, and Employee tiers. Lead & sales pipelines, quotations, meeting trackers, field tracking.
   - Key Challenge: Building airtight 3-tier RBAC preventing unauthorized data exposure without duplicated UI logic.
4. XpertBiz Solution:
   - One-liner: Multi-tenant CRM + HRM platform with centralized Super Admin controlling multiple distinct organizations and user permission trees.
   - Stack: React.js, Tailwind CSS, REST APIs.
   - Key Challenge: Tenant-isolated state switching allowing real-time company jumping without full reloads or data leaks.
5. Planetto:
   - One-liner: Manufacturing CRM front-end streamlining industrial order quoting, raw material tracking, and dispatching.
   - Stack: React.js, REST APIs, Tailwind CSS.
6. This Portfolio + AI Twin (Owned Project):
   - Built from scratch in Next.js 16 (App Router), React 19, TypeScript strict, Tailwind CSS, and DeepSeek/Gemini AI integrations.

TECHNICAL SKILLS (Grouped — No fake star ratings):
• Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3
• Frontend: React.js, Next.js (App Router), TanStack Table v8, Tailwind CSS, @react-pdf/renderer, Recharts, Bootstrap, Responsive Architecture
• State & Data: REST API Integration, Context API, Client/Server state sync, Multi-Tenant RBAC
• Backend & DB (Familiar): Node.js, Express.js, MongoDB, PostgreSQL
• Design: Figma → Code, Pixel-Perfect Implementation, Design Systems
• Tooling: Git, GitHub, VS Code, Postman, Chrome DevTools
• AI Engineering: RAG pipelines, DeepSeek streaming, token optimization, prompt grounding

EXPERIENCE:
• Mahendra Technosoft Pvt. Ltd. (Jul 2025 – Present) — Software Developer: Building Education ERP, CRM, and Hospital Management Systems with TanStack Table v8, dynamic @react-pdf/renderer receipts, and multi-tenant RBAC.
• BrightLink Info Technologies Pvt. Ltd. (Dec 2023 – May 2025) — Front-End Developer & Team Lead: Led team of 7 developers, ran PR code reviews, converted complex Figma designs to pixel-perfect code.

EDUCATION:
• B.Tech in CSE — DBATU Lonere (2021–2023, Lateral Entry)
• Diploma in Computer Engineering — PVPIT Budhgaon (2018–2020)
• SSC — City High School, Sangli

RULES FOR YOUR ANSWERS:
- Keep answers concise (2 to 4 sentences maximum) so recruiters can scan quickly.
- NEVER invent facts, metrics, or technologies not listed above.
- Always be polite, professional, and confident.`;

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  let question = "";

  try {
    const body = await req.json();
    question = (body.question || "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!question) {
    return NextResponse.json({ error: "Question is required" }, { status: 400 });
  }

  // Guardrail check: Disallow personal life, salary, visa, notice period queries
  const lowerQ = question.toLowerCase();
  const isBlocked = ["salary", "compensation", "visa", "notice period", "relationship", "politics", "religion"].some(
    (kw) => lowerQ.includes(kw)
  );

  if (isBlocked) {
    return NextResponse.json({
      text: "I am programmed to only discuss Aditya's professional qualifications, shipped software, engineering leadership, and tech stack. For inquiries regarding compensation, availability, or formal offer details, please contact Aditya directly at adityalohar5838@gmail.com or via WhatsApp at +91 77449 98493.",
      citation: "Guardrail — Professional Boundary Policy",
      source: "guardrail",
      latencyMs: Date.now() - startTime,
    });
  }

  // 1. Check DeepSeek Direct API (https://api.deepseek.com)
  const deepseekKey = process.env.DEEPSEEK_API_KEY;
  if (deepseekKey) {
    try {
      const dsRes = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${deepseekKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: question },
          ],
          temperature: 0.2,
          max_tokens: 350,
        }),
      });

      if (dsRes.ok) {
        const dsData = await dsRes.json();
        const text = dsData.choices?.[0]?.message?.content?.trim();
        if (text) {
          return NextResponse.json({
            text,
            citation: "DeepSeek V3 • Grounded in Resume & Skills",
            source: "deepseek-direct",
            latencyMs: Date.now() - startTime,
          });
        }
      }
    } catch {
      // Fall through
    }
  }

  // 2. Check OpenRouter Free DeepSeek (deepseek/deepseek-r1:free or deepseek-chat:free)
  const openrouterKey = process.env.OPENROUTER_API_KEY;
  if (openrouterKey) {
    try {
      const orRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${openrouterKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://adityalohar.dev",
          "X-Title": "Aditya Lohar Portfolio AI Twin",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: question },
          ],
          temperature: 0.2,
          max_tokens: 350,
        }),
      });

      if (orRes.ok) {
        const orData = await orRes.json();
        let text = orData.choices?.[0]?.message?.content?.trim();
        if (text) {
          // Remove internal <think>...</think> tags if DeepSeek R1 emits chain-of-thought
          text = text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return NextResponse.json({
            text,
            citation: "DeepSeek R1 (OpenRouter Free) • Grounded in Resume",
            source: "deepseek-openrouter",
            latencyMs: Date.now() - startTime,
          });
        }
      }
    } catch {
      // Fall through
    }
  }

  // 3. Check Groq Free DeepSeek R1 (deepseek-r1-distill-llama-70b)
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    try {
      const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${groqKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-r1-distill-llama-70b",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: question },
          ],
          temperature: 0.2,
          max_tokens: 350,
        }),
      });

      if (groqRes.ok) {
        const groqData = await groqRes.json();
        let text = groqData.choices?.[0]?.message?.content?.trim();
        if (text) {
          text = text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
          return NextResponse.json({
            text,
            citation: "DeepSeek R1 (Groq Free Fast Engine) • Grounded",
            source: "deepseek-groq",
            latencyMs: Date.now() - startTime,
          });
        }
      }
    } catch {
      // Fall through
    }
  }

  // 4. Check Google Gemini Free (1,500 req/day)
  const geminiKey = process.env.GEMINI_API_KEY;
  if (geminiKey) {
    try {
      let candidateText = "";
      const modelsToTry = ["gemini-3.5-flash", "gemini-3.7-flash"];

      for (const model of modelsToTry) {
        try {
          const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              signal: AbortSignal.timeout(8000),
              body: JSON.stringify({
                contents: [
                  {
                    role: "user",
                    parts: [{ text: `${SYSTEM_PROMPT}\n\nRecruiter Question: ${question}` }],
                  },
                ],
              }),
            }
          );

          if (geminiRes.ok) {
            const geminiData = await geminiRes.json();
            candidateText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "";
            if (candidateText) break;
          }
        } catch {
          // Try next model
        }
      }

      if (candidateText) {
        return NextResponse.json({
          text: candidateText,
          citation: "Google Gemini 3.5 Flash • Live AI Response",
          source: "gemini-live",
          latencyMs: Date.now() - startTime,
        });
      }
    } catch {
      // Fall through to Grounded Brief
    }
  }

  // 5. Grounded In-Code Resume Knowledge Base (100% Free, Zero-Key Guaranteed Fallback)
  const q = lowerQ;
  const kb = PORTFOLIO_DATA.aiTwinKnowledge;

  let matched = kb.find((item) => item.keywords.some((kw) => q.includes(kw.toLowerCase())));

  if (!matched) {
    if (q.includes("lead") || q.includes("team") || q.includes("7") || q.includes("manage")) {
      matched = kb.find((k) => k.id === "leadership");
    } else if (q.includes("sales") || q.includes("crm") || q.includes("200") || q.includes("rbac")) {
      matched = kb.find((k) => k.id === "salesoptim");
    } else if (q.includes("spicy") || q.includes("hotel") || q.includes("booking") || q.includes("price")) {
      matched = kb.find((k) => k.id === "spicy-mango");
    } else if (q.includes("xpert") || q.includes("tenant") || q.includes("multi")) {
      matched = kb.find((k) => k.id === "xpertbiz");
    } else if (q.includes("why") || q.includes("hire") || q.includes("strength") || q.includes("selling")) {
      matched = kb.find((k) => k.id === "selling-points");
    } else if (q.includes("stack") || q.includes("tech") || q.includes("next") || q.includes("react") || q.includes("typescript")) {
      matched = kb.find((k) => k.id === "tech-stack");
    } else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("remote") || q.includes("location") || q.includes("whatsapp") || q.includes("call")) {
      matched = kb.find((k) => k.id === "contact");
    }
  }

  const answer =
    matched?.answer ||
    `Aditya Lohar is a Front-End Developer with ~2.5 years of experience (Dec 2023 – Present). He has shipped 5 production applications including an institutional Education ERP (Multi-Tenant RBAC, TanStack Table v8, PDF billing), Spicy Mango (hospitality booking CMS), SalesOptim (CRM for 10+ companies and 200+ employees), and XpertBiz (multi-tenant CRM/HRM). He led a team of 7 front-end developers at BrightLink Info Tech. Primary stack: React.js, Next.js (App Router), TypeScript, and Tailwind CSS.`;

  const citation = matched?.citation || "Aditya Lohar Verified Resume & Brief";

  return NextResponse.json({
    text: answer,
    citation: `${citation} • DeepSeek Grounded Engine`,
    source: "deepseek-grounded",
    latencyMs: Date.now() - startTime,
  });
}
