"use client";
import React from "react";

// Tool items — logo via Simple Icons CDN (white version)

// Row 1: Web & Dev
const ROW_1 = [
  { name: "Next.js",      slug: "nextdotjs"    },
  { name: "React",        slug: "react"        },
  { name: "TypeScript",   slug: "typescript"   },
  { name: "Tailwind CSS", slug: "tailwindcss"  },
  { name: "Three.js",     slug: "threedotjs"   },
  { name: "Vercel",       slug: "vercel"       },
  { name: "Framer",       slug: "framer"       },
  { name: "Figma",        slug: "figma"        },
  { name: "Node.js",      slug: "nodedotjs"    },
  { name: "MongoDB",      slug: "mongodb"      },
  { name: "Supabase",     slug: "supabase"     },
  { name: "Webflow",      slug: "webflow"      },
  { name: "WordPress",    slug: "wordpress"    },
  { name: "Shopify",      slug: "shopify"      },
];

// Row 2: AI Tools
const ROW_2 = [
  { name: "OpenAI",         slug: "openai"        },
  { name: "Anthropic",      slug: "anthropic"     },
  { name: "Google Gemini",  slug: "googlegemini"  },
  { name: "Perplexity",     slug: "perplexity"    },
  { name: "Hugging Face",   slug: "huggingface"   },
  { name: "Stability AI",   slug: "stabilityai"   },
  { name: "ElevenLabs",     slug: "elevenlabs"    },
  { name: "Mistral AI",     slug: "mistralai"     },
  { name: "xAI (Grok)",     slug: "xai"           },
  { name: "Meta AI",        slug: "meta"          },
  { name: "Runway",         slug: "runway"        },
  { name: "Midjourney",     slug: "midjourney"    },
  { name: "HeyGen",         slug: "heygen"        },
  { name: "Suno",           slug: "suno"          },
  { name: "Replicate",      slug: "replicate"     },
];

// Row 3: Marketing & Automation
const ROW_3 = [
  { name: "Make",              slug: "make"                },
  { name: "Zapier",            slug: "zapier"              },
  { name: "n8n",               slug: "n8n"                 },
  { name: "HubSpot",           slug: "hubspot"             },
  { name: "Mailchimp",         slug: "mailchimp"           },
  { name: "Stripe",            slug: "stripe"              },
  { name: "Google Analytics",  slug: "googleanalytics"     },
  { name: "Meta Ads",          slug: "meta"                },
  { name: "Ahrefs",            slug: "ahrefs"              },
  { name: "Semrush",           slug: "semrush"             },
  { name: "Notion",            slug: "notion"              },
  { name: "Slack",             slug: "slack"               },
];

function ToolItem({ name, slug }) {
  return (
    <div
      className="flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 shrink-0 group cursor-default"
      style={{ minWidth: "max-content" }}
    >
      {/* Logo */}
      <div className="w-9 h-9 flex items-center justify-center shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt={name}
          width={30}
          height={30}
          style={{ width: 30, height: 30, objectFit: "contain", filter: "drop-shadow(0 0 4px rgba(255,255,255,0.15))" }}
          loading="lazy"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>
      {/* Name */}
      <span
        className="text-[15px] font-medium text-white/60 group-hover:text-white/90 transition-colors duration-300 tracking-wide"
        style={{ fontFamily: "var(--font-dm), sans-serif", whiteSpace: "nowrap" }}
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, speed = 35 }) {
  const duplicated = [...items, ...items];
  return (
    <div className="flex overflow-hidden relative">
      <div
        className="flex gap-5 items-center"
        style={{
          animation: `toolsMarquee${reverse ? "Rev" : ""} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {duplicated.map((tool, i) => (
          <ToolItem key={`${tool.slug}-${i}`} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default function Tools() {
  return (
    <section className="relative bg-black py-20 md:py-28 overflow-hidden border-t border-white/[0.05]">

      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(200,241,53,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16 px-4 relative z-10">
        <div className="section-eyebrow justify-center" style={{ marginBottom: "0.75rem" }}>
          THE STACK
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne text-white tracking-tight uppercase">
          Tools We Work With
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-3 max-w-md mx-auto leading-relaxed">
          Powered by the industry's most trusted platforms — built for speed, scale, and results.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 flex flex-col gap-6">

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000 0%, transparent 100%)" }}
        />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000 0%, transparent 100%)" }}
        />

        {/* Row 1 — left */}
        <MarqueeRow items={ROW_1} speed={40} />

        {/* Row 2 — right (reverse) */}
        <MarqueeRow items={ROW_2} reverse speed={45} />

        {/* Row 3 — left */}
        <MarqueeRow items={ROW_3} speed={38} />
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes toolsMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes toolsMarqueeRev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          @keyframes toolsMarquee    { 0% { transform: translateX(0); }    100% { transform: translateX(-50%); } }
          @keyframes toolsMarqueeRev { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); }    }
        }
      `}</style>
    </section>
  );
}
