# 🍲 lama mala - Buffet Ordering System

ระบบสั่งอาหารบุฟเฟต์หมาล่าแบบ Realtime สำหรับร้าน **lama mala** พัฒนาด้วย Next.js (App Router) และ Supabase

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, JavaScript)
- **Database & Realtime:** [Supabase](https://supabase.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
lama-mala-buffet/
├── app/
│   ├── layout.js            # Root Layout
│   └── page.js              # หน้าแรกสำหรับทดสอบ (Home / Hub)
├── lib/
│   └── supabaseClient.js    # Supabase Client Config
├── .env.local               # Local Environment Variables (Do not commit)
├── .gitignore               # Git Ignore Rules
├── CLAUDE.md                # AI Development Context & Schema Reference
├── next.config.js           # Next.js Configuration
├── package.json             # Project Dependencies & Scripts
└── README.md                # Dokumentation / Getting Started
