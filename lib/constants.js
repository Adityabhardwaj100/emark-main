import {
 Code,
 Smartphone,
 ShoppingCart,
 Wrench,
 Bot,
 Video,
 Cpu,
 Mail,
 MessageSquare,
 FileText,
 BarChart,
 Globe,
 Database,
 Lock,
 Zap,
 Palette,
 Camera,
 Layers,
 Search,
 Target,
 TrendingUp
} from "lucide-react";

export const AI_SERVICES = [
 {
 title: "AI Calling & Support Agents",
 icon: Bot,
 description: "Human-like AI agents that handle your sales calls and customer support 24/7.",
 features: [
 "Voice agents for sales & support",
 "24/7 AI customer chatbots",
 "Automated lead qualification",
 "Appointment booking agents",
 "Multi-language support",
 "Instant response times",
 "CRM & WhatsApp integration",
 "Zero human intervention needed",
 ],
 details: "We build custom AI voice and chat agents that talk to your customers just like a human would, handling everything from support to sales."
 },
 {
 title: "Business Process Automation",
 icon: Zap,
 description: "Automate your daily business tasks and save hundreds of hours every month.",
 features: [
 "Auto-reply to emails & socials",
 "Invoice & bill processing",
 "Automated progress reports",
 "Data entry & management",
 "Workflow sync between apps",
 "Custom internal AI tools",
 "Error-free operations",
 ],
 details: "We connect your favorite apps and build custom workflows that handle the boring stuff automatically."
 },
 {
 title: "Custom AI Solutions",
 icon: Cpu,
 description: "Tailored AI tools built specifically to solve your unique business problems.",
 features: [
 "Custom AI software",
 "Private data training",
 "Smart recommendation engines",
 "Secure AI deployment",
 "Consulting & strategy",
 ],
 details: "If you have a specific problem, we build a specific AI solution to fix it securely and efficiently."
 }
];

export const DEV_SERVICES = [
 {
 title: "Website Development",
 slug: "website-development",
 icon: Code,
 description: "Blazing-fast, SEO-optimized websites built with Next.js, Tailwind, and modern web standards.",
 features: [
 "Custom design & branding",
 "Mobile-first responsive layouts",
 "CMS integration (Sanity, Contentful)",
 "Performance & Core Web Vitals",
 "Landing pages & portfolios",
 "Interactive 3D/Canvas elements",
 "High-availability cloud hosting",
 "Global CDN distribution",
 "Server-side rendering (SSR)",
 "Edge-function optimization",
 ]
 },
 {
 title: "App Development",
 slug: "app-development",
 icon: Smartphone,
 description: "Cross-platform mobile and web apps — built to scale from Day 1.",
 features: [
 "React Native & Flutter",
 "iOS & Android deployment",
 "API integrations & backend",
 "Real-time features & notifications",
 "MVP to production-ready",
 "Offline-first sync logic",
 "Biometric security integration",
 "Cloud-native architecture",
 "Push-notification swarms",
 ]
 },
 {
 title: "Digital Marketing & SEO",
 slug: "digital-marketing-seo",
 icon: Globe,
 description: "Dominate search results and scale your customer acquisition with data-driven marketing.",
 features: [
 "AI-driven SEO audits",
 "Cognitive keyword research",
 "Semantic content optimization",
 "Automated ad-spend management",
 "Predictive audience targeting",
 "Conversion Rate Optimization (CRO)",
 "Technical SEO & Schema markup",
 "Backlink profile acceleration",
 "User-intent behavior mapping",
 ]
 },
 {
 title: "E-commerce Development",
 slug: "ecommerce-development",
 icon: ShoppingCart,
 description: "Convert more. Sell more. Grow more. We build stores that actually make money.",
 features: [
 "Shopify & WooCommerce",
 "Custom e-commerce platforms",
 "Payment gateway integration",
 "Inventory & order management",
 "Product catalog & checkout UX",
 "AI-powered product recommendations",
 "Global scaling & multi-currency",
 "Dynamic pricing algorithms",
 "Logistics API integration",
 ]
 },
 {
 title: "Brand Strategy & Design",
 slug: "brand-strategy",
 icon: Palette,
 description: "Create a visual identity that resonates and commands authority in your industry.",
 features: [
 "Logo & Brand Identity Design",
 "Corporate Typography Systems",
 "Color Psychology Mapping",
 "Digital Brand Guidelines",
 "Marketing Collateral Suite",
 "UX/UI System Design",
 "Social Media Visual Strategy",
 "Packaging & Physical Assets",
 "High-fidelity Prototyping",
 ]
 },
 {
 title: "Creative Production",
 slug: "graphic-design",
 icon: Layers,
 description: "Stunning visuals and high-quality video content that capture attention and drive results across every platform.",
 features: [
 "Logo & Brand Identity",
 "Social Media Graphics",
 "Short-form content (Reels/TikTok)",
 "High-converting Video Ads",
 "Pitch Decks & Presentations",
 "Motion Graphics & VFX",
 ]
 }
];

export const IMPACT_STATS = [
 { value: "52", suffix: "%", label: "Growth in AI Literacy Among Indian SMBs" },
 { value: "17", suffix: "%", label: "Increase in AI Engineering Skills" },
 { value: "75", suffix: "%", label: "SMBs Actively Experimenting with AI" },
 { value: "30", suffix: "%", label: "AI-Driven GDP Growth from SMBs" },
];

export const INDUSTRIES = [
 "🏢 Professional Services",
 "🏥 Healthcare & Wellness",
 "🏠 Real Estate",
 "🛍️ E-commerce & Retail",
 "📱 Digital Marketing",
 "🎓 Education",
 "🍽️ Hospitality & Food",
 "💻 Tech & SaaS",
 "🏦 FinTech & Banking",
 "⚡ Energy & Utilities",
 "🏭 Manufacturing & Industrial",
 "🚚 Logistics & Supply Chain",
];

export const INDUSTRY_CASE_STUDIES = [
 {
 name: "E-commerce & Retail",
 metric: "+42%",
 result: "Checkout Growth",
 description: "Deployed an AI shopping assistant that reduced cart abandonment by recommending bundled products based on real-time browsing context."
 },
 {
 name: "FinTech & Banking",
 metric: "99.9%",
 result: "Fraud Detection",
 description: "Implemented a neural anomalies engine that scans transactions in sub-ms latency, identifying suspicious patterns with institutional precision."
 },
 {
 name: "Healthcare & Wellness",
 metric: "-60%",
 result: "Admin Reduction",
 description: "Automated patient intake processing and appointment scheduling using intelligent OCR and NLP data extraction."
 },
 {
 name: "Manufacturing & Logistics",
 metric: "-35%",
 result: "Operational Waste",
 description: "Engineered a predictive maintenance swarm that monitors machine health and predicts failures before they cause downtime."
 },
 {
 name: "Real Estate",
 metric: "3x",
 result: "Lead Intensity",
 description: "Implemented a 24/7 conversational AI agent that qualifies property inquiries and books viewing appointments autonomously."
 },
 {
 name: "SaaS & Tech",
 metric: "+75%",
 result: "Support Efficiency",
 description: "Deployed specialized technical agents that resolve Level 1-2 support tickets instantly through deep-link knowledge bases."
 },
 {
 name: "Energy & Utilities",
 metric: "22%",
 result: "Grid Efficiency",
 description: "Developed an AI-driven load balancer that predicts consumption spikes and reroutes energy in real-time."
 },
 {
 name: "Education & EdTech",
 metric: "4x",
 result: "Learning Retention",
 description: "Built a personalized learning path generator that adapts curricula to student performance metrics automatically."
 }
];

export const STEPS = [
 { num: "01", title: "Free Audit", description: "We look at your current business and find exactly where AI can save you time and money." },
 { num: "02", title: "Strategy Session", description: "We show you a clear plan of what we will build and how it will help you grow." },
 { num: "03", title: "Launch & Integration", description: "Our experts build and launch your tools, making sure they work perfectly with your team." },
 { num: "04", title: "Scale Up", description: "We keep optimizing your systems to ensure you're always ahead of the competition." },
];

export const PRICING_TIERS = [
 {
 title: "Startup AI",
 price: "Custom",
 subtitle: "One-time setup for your first AI agent",
 features: [
 "Custom AI Agent Setup",
 "Integration with your tools",
 "30 Days of Free Support",
 "Basic Team Training",
 "Performance Report Included",
 "1-Click Dashboard Access",
 "Secure Cloud Hosting Setup",
 ],
 ctaText: "Get Quote →",
 popular: false,
 delay: 0.1
 },
 {
 title: "Business Growth",
 price: "Custom",
 subtitle: "Ongoing AI support and expansion",
 features: [
 "Unlimited Automation Tasks",
 "Ongoing AI Model Improvements",
 "24/7 Priority Support",
 "Monthly Growth Audits",
 "New Feature Early Access",
 "Dedicated Project Manager",
 "Real-time Data Monitoring",
 "Weekly Performance Reports",
 "Scalability Roadmap included",
 ],
 ctaText: "Get Started →",
 popular: true,
 delay: 0.2
 },
 {
 title: "Custom Enterprise",
 price: "Tailored",
 subtitle: "Full-scale AI transformation",
 features: [
 "Full Business AI Audit",
 "Custom Software Development",
 "Dedicated Support Team",
 "White-Glove Implementation",
 "Institutional-Grade Security",
 "Multi-Agent AI Systems",
 "Private Server Deployment",
 "Unlimited Tech Support",
 "On-site Team Training",
 "Custom API & CRM Sync",
 ],
 ctaText: "Contact Us →",
 popular: false,
 delay: 0.3
 }
];

export const FAQS = [
 {
 q: "How long does a typical AI implementation take?",
 a: "Depending on the scope, most initial automation workflows can be deployed within 2 to 4 weeks. Custom LLM or RAG solutions typically take 6 to 8 weeks."
 },
 {
 q: "Do I need technical expertise to use your solutions?",
 a: "Not at all. We build intuitive dashboards and integrate directly with the tools you already use (like Slack, WhatsApp, or email) so your team can operate the AI without any coding knowledge."
 },
 {
 q: "How secure is my business data?",
 a: "We adhere to enterprise-grade security standards. All custom AI deployments are built within private cloud environments, ensuring your proprietary data is never used to train public models."
 }
];
