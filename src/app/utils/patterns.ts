import { Pattern } from "@/app/types/pattern";

export const gridPatterns: Pattern[] = [
  {
    id: "top-gradient-radial",
    name: "Top Gradient Radial",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)" }}>Button</button>`,
  },
  {
    id: "bottom-gradient-radial",
    name: "Bottom Gradient Radial",
    category: "decorative",
    badge: "New",
    description: "Radial gradient from white to purple starting from bottom",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)" }}>Button</button>`,
  },
  {
    id: "bottom-violet-radial",
    name: "Bottom Violet Radial",
    category: "decorative",
    badge: "New",
    description: "Rich violet from bottom - luxury feel for premium brands",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #7c3aed 100%)" }}>Button</button>`,
  },
  {
    id: "bottom-slate-radial",
    name: "Bottom Slate Radial",
    category: "decorative",
    badge: "New",
    description: "Sophisticated slate from bottom - clean and professional",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)" }}>Button</button>`,
  },
  {
    id: "radial-teal-glow",
    name: "Teal Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
    `,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  {
    id: "radial-pink-glow",
    name: "Pink Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
    `,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  {
    id: "radial-amber-glow",
    name: "Amber Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
    `,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  {
    id: "radial-emerald-glow",
    name: "Emerald Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)
    `,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  // dark one
  {
    id: "dark-horizon-glow",
    name: "Dark Horizon Glow",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `
     radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)
    `,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  {
    id: "crimson-depth",
    name: "Crimson Depth",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)`,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  {
    id: "emerald-void",
    name: "Emerald Void",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)`,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  {
    id: "violet-abyss",
    name: "Violet Abyss",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)`,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'radial-gradient(125% 125% at 50% 90%, #000000 40%, #2b092b 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  {
    id: "azure-depths",
    name: "Azure Depths",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)`,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  {
    id: "orchid -depths",
    name: "Orchid  Depths",
    badge: "New",
    category: "decorative",
    style: {
      background: "#000000",
      backgroundImage: `radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)`,
      backgroundSize: "200% 200%",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'radial-gradient(125% 125% at 50% 100%, #000000 40%, #350136 100%)', backgroundSize: "200% 200%" }}>Button</button>`,
  },
  //top
  {
    id: "dark-horizon-glow-top",
    name: "Dark Horizon Glow Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)" }}>Button</button>`,
  },
  {
    id: "crimson-depth-top",
    name: "Crimson Depth Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b0707 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b0707 100%)" }}>Button</button>`,
  },
  {
    id: "emerald-void-top",
    name: "Emerald Void Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)" }}>Button</button>`,
  },
  {
    id: "violet-abyss-top",
    name: "Violet Abyss Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 100%)" }}>Button</button>`,
  },
  {
    id: "azure-depths-top",
    name: "Azure Depths Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)" }}>Button</button>`,
  },
  {
    id: "orchid-depths-top",
    name: "Orchid Depths Top",
    badge: "New",
    category: "decorative",
    style: {
      background:
        "radial-gradient(125% 125% at 50% 10%, #000000 40%, #350136 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #350136 100%)" }}>Button</button>`,
  },
  {
    id: "purple-gradient-grid-right",
    name: "Purple Gradient Grid Right",
    badge: "New",
    category: "geometric",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 400px at 100% 100px, #d5c5ff, transparent)
    `,
      backgroundSize: "48px 32px, 48px 32px, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px), radial-gradient(circle 400px at 100% 100px, #d5c5ff, transparent)', backgroundSize: "48px 32px, 48px 32px, 100% 100%" }}>Button</button>`,
  },

  {
    id: "purple-gradient-grid-left",
    name: "Purple Gradient Grid Left",
    badge: "New",
    category: "geometric",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 400px at 0% 100px, #d5c5ff, transparent)
    `,
      backgroundSize: "48px 32px, 48px 32px, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px), radial-gradient(circle 400px at 0% 100px, #d5c5ff, transparent)', backgroundSize: "48px 32px, 48px 32px, 100% 100%" }}>Button</button>`,
  },
  {
    id: "dual-gradient-overlay-strong",
    badge: "New",
    category: "geometric",
    name: "Dual Gradient Overlay",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 250px at 20% 80%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 250px at 80% 20%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "24px 24px, 24px 24px, 100% 100%, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px), radial-gradient(circle 250px at 20% 80%, rgba(139,92,246,0.3), transparent), radial-gradient(circle 250px at 80% 20%, rgba(59,130,246,0.3), transparent)', backgroundSize: "24px 24px, 24px 24px, 100% 100%, 100% 100%" }}>Button</button>`,
  },
  {
    id: "dual-gradient-overlay-strong-swapped",
    name: "Dual Gradient Overlay Swapped",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 250px at 20% 20%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 250px at 80% 80%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "24px 24px, 24px 24px, 100% 100%, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px), radial-gradient(circle 250px at 20% 20%, rgba(139,92,246,0.3), transparent), radial-gradient(circle 250px at 80% 80%, rgba(59,130,246,0.3), transparent)', backgroundSize: "24px 24px, 24px 24px, 100% 100%, 100% 100%" }}>Button</button>`,
  },
  {
    id: "dual-gradient-overlay-top",
    name: "Dual Gradient Overlay (Top)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 250px at 0% 20%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 250px at 100% 0%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "24px 24px, 24px 24px, 100% 100%, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px), radial-gradient(circle 250px at 0% 20%, rgba(139,92,246,0.3), transparent), radial-gradient(circle 250px at 100% 0%, rgba(59,130,246,0.3), transparent)', backgroundSize: "24px 24px, 24px 24px, 100% 100%, 100% 100%" }}>Button</button>`,
  },
  {
    id: "dual-gradient-overlay-bottom",
    name: "Dual Gradient Overlay (Bottom)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 250px at 20% 100%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 250px at 100% 80%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "24px 24px, 24px 24px, 100% 100%, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px), radial-gradient(circle 250px at 20% 100%, rgba(139,92,246,0.3), transparent), radial-gradient(circle 250px at 100% 80%, rgba(59,130,246,0.3), transparent)', backgroundSize: "24px 24px, 24px 24px, 100% 100%, 100% 100%" }}>Button</button>`,
  },
  {
    id: "top-fade-grid",
    name: "Top Fade Grid",
    category: "geometric",
    style: {
      background: "#f8fafc",
      backgroundImage: `
      linear-gradient(to right, #e2e8f0 1px, transparent 1px),
      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
    `,
      backgroundSize: "10px 15px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#f8fafc", backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: "10px 15px", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)", maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)" }}>Button</button>`,
  },
  {
    id: "bottom-fade-grid",
    name: "Bottom Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f8fafc",
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "10px 15px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#f8fafc", backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: "10px 15px", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)", maskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)" }}>Button</button>`,
  },
  {
    id: "diagonal-fade-grid-left",
    name: "Diagonal Fade Grid Left",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
      backgroundSize: "16px 16px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#f9fafb", backgroundImage: 'linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)', backgroundSize: "16px 16px", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)", maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)" }}>Button</button>`,
  },
  {
    id: "diagonal-fade-grid-right",
    name: "Diagonal Fade Grid Right",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
      linear-gradient(to right, #d1d5db 1px, transparent 1px),
      linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
    `,
      backgroundSize: "16px 16px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#f9fafb", backgroundImage: 'linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)', backgroundSize: "16px 16px", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)", maskImage: "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)" }}>Button</button>`,
  },

  // NEW GRADIENT COLORSF
  {
    id: "dark-radial-glow",
    name: "Dark Radial Glow",
    category: "gradients",
    style: {
      background: "#020617",
      backgroundImage:
        "radial-gradient(circle 250px at 50% 100px, #3e3e3e, transparent)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#020617", backgroundImage: "radial-gradient(circle 250px at 50% 100px, #3e3e3e, transparent)" }}>Button</button>`,
  },

  {
    id: "blue-radial-glow",
    name: "Blue Radial Glow",
    category: "gradients",
    style: {
      background: "#0f172a",
      backgroundImage:
        "radial-gradient(circle 300px at 50% 50%, rgba(59,130,246,0.3), transparent)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f172a", backgroundImage: "radial-gradient(circle 300px at 50% 50%, rgba(59,130,246,0.3), transparent)" }}>Button</button>`,
  },

  {
    id: "purple-radial-glow",
    name: "Purple Radial Glow",
    category: "gradients",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage:
        "radial-gradient(circle 250px at 50% 50px, rgba(139,92,246,0.4), transparent)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#020617", backgroundImage: "radial-gradient(circle 250px at 50% 50px, rgba(139,92,246,0.4), transparent)" }}>Button</button>`,
  },

  {
    id: "emerald-radial-glow",
    name: "Emerald Radial Glow",
    category: "gradients",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage:
        "radial-gradient(circle 250px at 50% 150px, rgba(16,185,129,0.35), transparent)",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#020617", backgroundImage: "radial-gradient(circle 250px at 50% 150px, rgba(16,185,129,0.35), transparent)" }}>Button</button>`,
  },

  // Warm Backgrounds

  {
    id: "beige-texture",
    name: "Warm Beige",
    category: "effects",
    badge: "New",
    style: {
      background: "#f5f5dc",
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)
      `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#f5f5dc", backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)' }}>Button</button>`,
  },
  {
    id: "soft-warm-pastel-texture",
    name: "Soft Warm Pastel",
    category: "effects",
    style: {
      background: "#fff8f0",
      backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255, 182, 153, 0.3) 0%, transparent 50%),  /* soft peach */
      radial-gradient(circle at 80% 20%, rgba(255, 244, 214, 0.5) 0%, transparent 50%),  /* pale buttery yellow */
      radial-gradient(circle at 40% 40%, rgba(255, 182, 153, 0.1) 0%, transparent 50%)   /* lighter peach */
    `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#fff8f0", backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 182, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 244, 214, 0.5) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 182, 153, 0.1) 0%, transparent 50%)' }}>Button</button>`,
  },

  {
    id: "warm-light-apricot-coral",
    name: "Warm Light Apricot & Coral",
    category: "effects",
    style: {
      background: "#fff9f5",
      backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),  /* soft apricot */
      radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%), /* pale coral cream */
      radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)  /* light coral */
    `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#fff9f5", backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)' }}>Button</button>`,
  },
  {
    id: "warm-pastel-coral-cream",
    name: "Warm Soft Coral & Cream",
    category: "effects",
    style: {
      background: "#fef9f7",
      backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),  /* soft coral */
      radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),  /* pale cream */
      radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)  /* lighter coral */
    `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#fef9f7", backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)' }}>Button</button>`,
  },

  // GLOW ONES
  {
    id: "soft-yellow-glow",
    name: "Soft Yellow Glow",
    category: "effects",
    style: {
      backgroundImage: `
      radial-gradient(circle at center, #FFF991 0%, transparent 70%)
    `,
      opacity: 0.6,
      mixBlendMode: "multiply",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ backgroundImage: 'radial-gradient(circle at center, #FFF991 0%, transparent 70%)', opacity: 0.6, mixBlendMode: "multiply" }}>Button</button>`,
  },
  {
    id: "soft-dark-yellow-glow",
    name: "Soft Dark Yellow Glow",
    category: "effects",
    badge: "New",
    style: {
      backgroundImage: `
      radial-gradient(circle at center, #ccb755 0%, transparent 70%)
    `,
      opacity: 0.6,
      mixBlendMode: "multiply",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ backgroundImage: 'radial-gradient(circle at center, #ccb755 0%, transparent 70%)', opacity: 0.6, mixBlendMode: "multiply" }}>Button</button>`,
  },
  {
    id: "orange-soft-glow",
    name: "Orange Soft Glow",
    category: "effects",
    style: {
      backgroundImage: `
      radial-gradient(circle at center, #FF7112, transparent)
    `,
      opacity: 0.3,
      mixBlendMode: "multiply",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ backgroundImage: 'radial-gradient(circle at center, #FF7112, transparent)', opacity: 0.3, mixBlendMode: "multiply" }}>Button</button>`,
  },
  {
    id: "soft-green-glow",
    name: "Soft Green Glow",
    category: "effects",
    badge: "New",
    style: {
      backgroundImage: `
      radial-gradient(circle at center, #8FFFB0, transparent)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ backgroundImage: 'radial-gradient(circle at center, #8FFFB0, transparent)' }}>Button</button>`,
  },
  // glow right
  {
    id: "purple-glow-bg",
    badge: "New",
    name: "Purple Glow Right",
    category: "effects",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(173, 109, 244, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top right, rgba(173, 109, 244, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },

  {
    id: "teal-glow-bg",
    name: "Teal Glow Right",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(56, 193, 182, 0.5),  /* teal color */
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top right, rgba(56, 193, 182, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  {
    id: "warm-orange-glow-bg",
    name: "Warm Orange Glow Right",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(255, 140, 60, 0.5),  /* warm orange */
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top right, rgba(255, 140, 60, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  {
    id: "cool-blue-glow-bg",
    name: "Cool Blue Glow Right",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top right,
        rgba(70, 130, 180, 0.5),  /* steel blue */
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top right, rgba(70, 130, 180, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  // glow left
  {
    id: "purple-glow-bg-left",
    name: "Purple Glow Left",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top left,
        rgba(173, 109, 244, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top left, rgba(173, 109, 244, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  {
    id: "teal-glow-bg-left",
    name: "Teal Glow Left",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top left,
        rgba(56, 193, 182, 0.5),  /* teal color */
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top left, rgba(56, 193, 182, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  {
    id: "warm-orange-glow-bg-left",
    name: "Warm Orange Glow Left",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top left,
        rgba(255, 140, 60, 0.5),  /* warm orange */
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top left, rgba(255, 140, 60, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  {
    id: "cool-blue-glow-bg-left",
    name: "Cool Blue Glow Left",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top left,
        rgba(70, 130, 180, 0.5),  /* steel blue */
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top left, rgba(70, 130, 180, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },

  // glow top
  {
    id: "purple-glow-bg-top",
    name: "Purple Glow Top",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top center,
        rgba(173, 109, 244, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top center, rgba(173, 109, 244, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  {
    id: "teal-glow-bg-top",
    name: "Teal Glow Top",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top center,
        rgba(56, 193, 182, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top center, rgba(56, 193, 182, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  {
    id: "warm-orange-glow-bg-top",
    name: "Warm Orange Glow Top",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top center,
        rgba(255, 140, 60, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top center, rgba(255, 140, 60, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },
  {
    id: "cool-blue-glow-bg-top",
    name: "Cool Blue Glow Top",
    category: "effects",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(
        circle at top center,
        rgba(70, 130, 180, 0.5),
        transparent 70%
      )
    `,
      filter: "blur(40px)",
      backgroundRepeat: "no-repeat",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at top center, rgba(70, 130, 180, 0.5), transparent 70%)', filter: "blur(40px)", backgroundRepeat: "no-repeat" }}>Button</button>`,
  },

  // PATTERNS

  {
    id: "paper-texture",
    name: "Paper Texture",
    category: "geometric",
    badge: "New",
    style: {
      background: "#faf9f6",
      backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      `,
      backgroundSize: "4px 4px, 16px 16px, 16px 16px",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#faf9f6", backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)', backgroundSize: "4px 4px, 16px 16px, 16px 16px" }}>Button</button>`,
  },
  {
    id: "diagonal-lines",
    name: "Diagonal Stripes",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage:
        "repeating-linear-gradient(45deg, transparent, transparent 1px, #f3f4f6 1px, #f3f4f6 2px)",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 1px, #f3f4f6 1px, #f3f4f6 2px)" }}>Button</button>`,
  },
  {
    id: "diagonal-light",
    name: "Diagonal Grid - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#fafafa",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 10px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 10px)
      `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#fafafa", backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 10px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },
  {
    id: "diagonal-light-green",
    name: "Diagonal Grid - Electric",
    category: "geometric",
    badge: "New",
    style: {
      background: "#fafafa",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 10px),
        repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 10px)
      `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#fafafa", backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 10px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },
  {
    id: "zigzag-lightning-light",
    name: "Zigzag Lightning - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(75, 85, 99, 0.08) 10px, rgba(75, 85, 99, 0.08) 11px),
      repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(107, 114, 128, 0.06) 15px, rgba(107, 114, 128, 0.06) 16px),
      repeating-linear-gradient(60deg, transparent, transparent 20px, rgba(55, 65, 81, 0.05) 20px, rgba(55, 65, 81, 0.05) 21px),
      repeating-linear-gradient(150deg, transparent, transparent 18px, rgba(31, 41, 55, 0.04) 18px, rgba(31, 41, 55, 0.04) 19px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(75, 85, 99, 0.08) 10px, rgba(75, 85, 99, 0.08) 11px), repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(107, 114, 128, 0.06) 15px, rgba(107, 114, 128, 0.06) 16px), repeating-linear-gradient(60deg, transparent, transparent 20px, rgba(55, 65, 81, 0.05) 20px, rgba(55, 65, 81, 0.05) 21px), repeating-linear-gradient(150deg, transparent, transparent 18px, rgba(31, 41, 55, 0.04) 18px, rgba(31, 41, 55, 0.04) 19px)' }}>Button</button>`,
  },
  {
    id: "circuit-board-light",
    name: "Circuit Board - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(75, 85, 99, 0.08) 10px, rgba(75, 85, 99, 0.08) 11px, transparent 11px, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(75, 85, 99, 0.08) 10px, rgba(75, 85, 99, 0.08) 11px, transparent 11px, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
      radial-gradient(circle at 10px 10px, rgba(55, 65, 81, 0.12) 1px, transparent 1px),
      radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px, 20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(75, 85, 99, 0.08) 10px, rgba(75, 85, 99, 0.08) 11px, transparent 11px, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px), repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(75, 85, 99, 0.08) 10px, rgba(75, 85, 99, 0.08) 11px, transparent 11px, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px), radial-gradient(circle at 10px 10px, rgba(55, 65, 81, 0.12) 1px, transparent 1px), radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 1px, transparent 1px)', backgroundSize: "20px 20px, 20px 20px, 20px 20px, 20px 20px" }}>Button</button>`,
  },
  {
    id: "concentric-squares-light",
    name: "Concentric Squares - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(75, 85, 99, 0.06) 3px, rgba(75, 85, 99, 0.06) 4px, transparent 4px, transparent 8px),
      repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(75, 85, 99, 0.06) 3px, rgba(75, 85, 99, 0.06) 4px, transparent 4px, transparent 8px),
      repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(107, 114, 128, 0.04) 5px, rgba(107, 114, 128, 0.04) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(107, 114, 128, 0.04) 5px, rgba(107, 114, 128, 0.04) 6px, transparent 6px, transparent 15px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(75, 85, 99, 0.06) 3px, rgba(75, 85, 99, 0.06) 4px, transparent 4px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(75, 85, 99, 0.06) 3px, rgba(75, 85, 99, 0.06) 4px, transparent 4px, transparent 8px), repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(107, 114, 128, 0.04) 5px, rgba(107, 114, 128, 0.04) 6px, transparent 6px, transparent 15px), repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(107, 114, 128, 0.04) 5px, rgba(107, 114, 128, 0.04) 6px, transparent 6px, transparent 15px)' }}>Button</button>`,
  },
  {
    id: "woven-fabric-light",
    name: "Woven Fabric - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, rgba(75, 85, 99, 0.08), rgba(75, 85, 99, 0.08) 1px, transparent 1px, transparent 3px),
      repeating-linear-gradient(90deg, rgba(107, 114, 128, 0.06), rgba(107, 114, 128, 0.06) 1px, transparent 1px, transparent 3px),
      repeating-linear-gradient(0deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 6px),
      repeating-linear-gradient(90deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 6px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'repeating-linear-gradient(0deg, rgba(75, 85, 99, 0.08), rgba(75, 85, 99, 0.08) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(107, 114, 128, 0.06), rgba(107, 114, 128, 0.06) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(0deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(90deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 6px)' }}>Button</button>`,
  },
  {
    id: "crosshatch-art-light",
    name: "Crosshatch Art - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px),
      repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px),
      repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px),
      repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)' }}>Button</button>`,
  },
  {
    id: "white-grid-with-dots",
    name: "White Grid with Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
    `,
      backgroundSize: "10px 10px, 10px 10px, 10px 10px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px), radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)', backgroundSize: "10px 10px, 10px 10px, 10px 10px", backgroundPosition: "0 0, 0 0, 0 0" }}>Button</button>`,
  },

  {
    id: "noise-texture-darker-dots",
    name: "Noise Texture (Darker Dots)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)
    `,
      backgroundSize: "10px 10px",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#ffffff", backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)', backgroundSize: "10px 10px" }}>Button</button>`,
  },
  {
    id: "circuit-board",
    name: "Circuit Board",
    category: "geometric",
    style: {
      background: "#f8fafc",
      backgroundImage: `
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      `,
      backgroundSize: "25px 25px, 25px 25px, 5px 5px, 5px 5px",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "#f8fafc", backgroundImage: 'linear-gradient(90deg, #e2e8f0 1px, transparent 1px), linear-gradient(180deg, #e2e8f0 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px), linear-gradient(180deg, #cbd5e1 1px, transparent 1px)', backgroundSize: "25px 25px, 25px 25px, 5px 5px, 5px 5px" }}>Button</button>`,
  },
  {
    id: "basic-grid",
    name: "Basic Grid",
    category: "geometric",
    style: {
      backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },
  {
    id: "white-sphere-grid",
    name: "White Sphere Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "white",
      backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
     radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
   `,
      backgroundSize: "16px 16px, 16px 16px, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "white", backgroundImage: 'linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px), radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)', backgroundSize: "16px 16px, 16px 16px, 100% 100%" }}>Button</button>`,
  },
  {
    id: "magenta-orb-grid-light",
    name: "Magenta Orb Grid Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "white",
      backgroundImage: `
   linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
   linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
   radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
 `,
      backgroundSize: "20px 20px, 20px 20px, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md" style={{ background: "white", backgroundImage: 'linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px), radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)', backgroundSize: "20px 20px, 20px 20px, 100% 100%" }}>Button</button>`,
  },
  // Dark versions of the patterns
  {
    id: "dark-sphere-grid",
    name: "Dark Sphere Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "16px 16px, 16px 16px, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#020617", backgroundImage: 'linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px), radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)', backgroundSize: "16px 16px, 16px 16px, 100% 100%" }}>Button</button>`,
  },

  {
    id: "magenta-orb-grid",
    name: "Magenta Orb Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage: `
      linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
      radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
    `,
      backgroundSize: "20px 20px, 20px 20px, 100% 100%",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#020617", backgroundImage: 'linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px), radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)', backgroundSize: "20px 20px, 20px 20px, 100% 100%" }}>Button</button>`,
  },
  {
    id: "dark-basic-grid-slate",
    name: "Dark Basic Grid",
    category: "geometric",
    style: {
      background: "#020617",
      backgroundImage: `
      linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#020617", backgroundImage: 'linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },
  {
    id: "dark-basic-grid-faded",
    name: "Dark Basic Grid (Faded)",
    category: "geometric",
    style: {
      background: "#0f172a",
      backgroundImage: `
      linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f172a", backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },
  {
    id: "black-basic-grid",
    name: "Black Basic Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },
  {
    id: "small-grid",
    name: "Small Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      linear-gradient(to right, #262626 1px, transparent 1px),
      linear-gradient(to bottom, #262626 1px, transparent 1px)
    `,
      backgroundSize: "10px 10px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)', backgroundSize: "10px 10px" }}>Button</button>`,
  },
  {
    id: "black-grid-white-dots",
    name: "Black Grid with White Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
    `,
      backgroundSize: "10px 10px, 10px 10px, 10px 10px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: "10px 10px, 10px 10px, 10px 10px", backgroundPosition: "0 0, 0 0, 0 0" }}>Button</button>`,
  },
  {
    id: "dark-grid-white-dots",
    name: "Dark Grid with White Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f172a",
      backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
    `,
      backgroundSize: "10px 10px, 10px 10px, 10px 10px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f172a", backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px), radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: "10px 10px, 10px 10px, 10px 10px", backgroundPosition: "0 0, 0 0, 0 0" }}>Button</button>`,
  },

  {
    id: "dark-dotted-grid",
    name: "Dark Dotted Grid",
    category: "geometric",
    style: {
      background: "#0f172a",
      backgroundImage: `
        radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
        radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
        radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "10px 10px, 20px 20px, 30px 30px",
      backgroundPosition: "0 0, 5px 5px, 15px 15px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f172a", backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px), radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px), radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)', backgroundSize: "10px 10px, 20px 20px, 30px 30px", backgroundPosition: "0 0, 5px 5px, 15px 15px" }}>Button</button>`,
  },
  {
    id: "dark-white-dotted-grid",
    name: "Dark White Dotted Grid",
    category: "geometric",
    style: {
      background: "#000000",
      backgroundImage: `
      radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
    `,
      backgroundSize: "15px 15px",
      backgroundPosition: "0 0",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: "15px 15px", backgroundPosition: "0 0" }}>Button</button>`,
  },

  {
    id: "dark-noise-colored-high",
    name: "Dark Noise Colored",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
    `,
      backgroundSize: "10px 10px, 15px 15px, 12px 12px",
      backgroundPosition: "0 0, 5px 5px, 8px 3px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0), radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0), radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)', backgroundSize: "10px 10px, 15px 15px, 12px 12px", backgroundPosition: "0 0, 5px 5px, 8px 3px" }}>Button</button>`,
  },
  {
    id: "matrix-green",
    name: "Matrix Green",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 6px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 6px),
        repeating-linear-gradient(90deg, rgba(0, 255, 65, 0.03) 0, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 2px)
    `,
      backgroundSize: "12px 12px, 12px 12px, 4px 4px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#000000", backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(90deg, rgba(0, 255, 65, 0.03) 0, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 2px)', backgroundSize: "12px 12px, 12px 12px, 4px 4px" }}>Button</button>`,
  },
  {
    id: "diagonal-green-glow",
    name: "Diagonal Grid - Green Glow",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 10px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 10px)
      `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 10px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },
  {
    id: "diagonal-red/blue-glow",
    name: "Diagonal Grid - Red/Blue Glow",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 10px),
      repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 10px)
    `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 10px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },
  {
    id: "diagonal-electric erange",
    name: "Diagonal Grid - Electric Orange",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
     repeating-linear-gradient(45deg, rgba(255, 140, 0, 0.12) 0, rgba(255, 140, 0, 0.12) 1px, transparent 1px, transparent 11px),
        repeating-linear-gradient(-45deg, rgba(255, 69, 0, 0.08) 0, rgba(255, 69, 0, 0.08) 1px, transparent 1px, transparent 11px)
    `,
      backgroundSize: "22px 22px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 140, 0, 0.12) 0, rgba(255, 140, 0, 0.12) 1px, transparent 1px, transparent 11px), repeating-linear-gradient(-45deg, rgba(255, 69, 0, 0.08) 0, rgba(255, 69, 0, 0.08) 1px, transparent 1px, transparent 11px)', backgroundSize: "22px 22px" }}>Button</button>`,
  },
  {
    id: "complex-multiplier",
    name: "Complex Multiplier",
    category: "geometric",
    badge: "New",
    style: {
      background: "#101014",
      backgroundImage: `
      repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 10px),
     repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 15px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px),
      radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
    `,
      backgroundSize: "40px 40px, 20px 20px, 30px 30px, 40px 40px, 100% 100%",
      backgroundPosition: "0 0, 0 0, 0 0, 20px 20px, center",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#101014", backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 15px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px), radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)', backgroundSize: "40px 40px, 20px 20px, 30px 30px, 40px 40px, 100% 100%", backgroundPosition: "0 0, 0 0, 0 0, 20px 20px, center" }}>Button</button>`,
  },
  {
    id: "hexagonal-lines",
    name: "Hexagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 11px),
      repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 11px),
      repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 11px)
    `,
      backgroundSize: "22px 22px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 11px), repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 11px), repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 11px)', backgroundSize: "22px 22px" }}>Button</button>`,
  },
  {
    id: "diagonal-synthwave",
    name: "Diagonal Grid - Synthwave",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0a0a0a",
      backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 1px, transparent 1px, transparent 15px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 12px)
      `,
      backgroundSize: "20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0a0a0a", backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 1px, transparent 1px, transparent 15px), repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 12px)', backgroundSize: "20px 20px" }}>Button</button>`,
  },

  {
    id: "gradient-left-diagonal-lines",
    name: "Gradient Left Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, 
        rgba(0, 255, 128, 0.2) 0px, 
        rgba(0, 255, 128, 0) 1px, 
        transparent 1px, 
        transparent 12px
      )
    `,
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0px, rgba(0, 255, 128, 0) 1px, transparent 1px, transparent 12px)' }}>Button</button>`,
  },
  {
    id: "gradient-right-diagonal-lines",
    name: "Gradient Right Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(-45deg, 
        rgba(255, 0, 100, 0.2) 0px, 
        rgba(255, 0, 100, 0) 1px, 
        transparent 1px, 
        transparent 12px
      )
    `,
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0px, rgba(255, 0, 100, 0) 1px, transparent 1px, transparent 12px)' }}>Button</button>`,
  },
  {
    id: "cross-diagonal-lines",
    name: "Cross Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 10px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 10px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 10px)' }}>Button</button>`,
  },
  {
    id: "multi-cross-diagonal-lines",
    name: "Multi Cross Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
       repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 10px),
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 10px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 10px)' }}>Button</button>`,
  },

  {
    id: "variable-spacing",
    name: "Variable Spacing",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(30deg, 
        rgba(255, 100, 0, 0.1) 0, 
        rgba(255, 100, 0, 0.1) 1px, 
        transparent 1px, 
        transparent 5px,
        rgba(255, 100, 0, 0.15) 6px, 
        rgba(255, 100, 0, 0.15) 7px, 
        transparent 7px, 
        transparent 20px
      )
    `,
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(30deg, rgba(255, 100, 0, 0.1) 0, rgba(255, 100, 0, 0.1) 1px, transparent 1px, transparent 5px, rgba(255, 100, 0, 0.15) 6px, rgba(255, 100, 0, 0.15) 7px, transparent 7px, transparent 20px)' }}>Button</button>`,
  },

  {
    id: "circuit-board-vibes",
    name: "Circuit Board Vibes",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, 
        rgba(0, 255, 0, 0.12) 0, rgba(0, 255, 0, 0.12) 1px, 
        transparent 1px, transparent 20px
      ),
      repeating-linear-gradient(90deg, 
        rgba(0, 255, 0, 0.08) 0, rgba(0, 255, 0, 0.08) 1px, 
        transparent 1px, transparent 40px
      ),
      repeating-linear-gradient(45deg, 
        rgba(255, 100, 0, 0.10) 0, rgba(255, 100, 0, 0.10) 1px, 
        transparent 1px, transparent 80px
      )
    `,
      backgroundSize: "40px 40px, 80px 80px, 160px 160px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.12) 0, rgba(0, 255, 0, 0.12) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, rgba(0, 255, 0, 0.08) 0, rgba(0, 255, 0, 0.08) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(45deg, rgba(255, 100, 0, 0.10) 0, rgba(255, 100, 0, 0.10) 1px, transparent 1px, transparent 80px)', backgroundSize: "40px 40px, 80px 80px, 160px 160px" }}>Button</button>`,
  },
  {
    id: "zigzag-lightning-dark",
    name: "Zigzag Lightning - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(34, 197, 94, 0.12) 10px, rgba(34, 197, 94, 0.12) 11px),
      repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(16, 185, 129, 0.10) 15px, rgba(16, 185, 129, 0.10) 16px),
      repeating-linear-gradient(60deg, transparent, transparent 20px, rgba(59, 130, 246, 0.08) 20px, rgba(59, 130, 246, 0.08) 21px),
      repeating-linear-gradient(150deg, transparent, transparent 18px, rgba(147, 51, 234, 0.06) 18px, rgba(147, 51, 234, 0.06) 19px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(34, 197, 94, 0.12) 10px, rgba(34, 197, 94, 0.12) 11px), repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(16, 185, 129, 0.10) 15px, rgba(16, 185, 129, 0.10) 16px), repeating-linear-gradient(60deg, transparent, transparent 20px, rgba(59, 130, 246, 0.08) 20px, rgba(59, 130, 246, 0.08) 21px), repeating-linear-gradient(150deg, transparent, transparent 18px, rgba(147, 51, 234, 0.06) 18px, rgba(147, 51, 234, 0.06) 19px)' }}>Button</button>`,
  },
  {
    id: "circuit-board-dark",
    name: "Circuit Board - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(34, 197, 94, 0.15) 10px, rgba(34, 197, 94, 0.15) 11px, transparent 11px, transparent 20px, rgba(34, 197, 94, 0.15) 20px, rgba(34, 197, 94, 0.15) 21px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(34, 197, 94, 0.15) 10px, rgba(34, 197, 94, 0.15) 11px, transparent 11px, transparent 20px, rgba(34, 197, 94, 0.15) 20px, rgba(34, 197, 94, 0.15) 21px),
      radial-gradient(circle at 10px 10px, rgba(16, 185, 129, 0.18) 1px, transparent 1px),
      radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.18) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px, 20px 20px",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(34, 197, 94, 0.15) 10px, rgba(34, 197, 94, 0.15) 11px, transparent 11px, transparent 20px, rgba(34, 197, 94, 0.15) 20px, rgba(34, 197, 94, 0.15) 21px), repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(34, 197, 94, 0.15) 10px, rgba(34, 197, 94, 0.15) 11px, transparent 11px, transparent 20px, rgba(34, 197, 94, 0.15) 20px, rgba(34, 197, 94, 0.15) 21px), radial-gradient(circle at 10px 10px, rgba(16, 185, 129, 0.18) 1px, transparent 1px), radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.18) 1px, transparent 1px)', backgroundSize: "20px 20px, 20px 20px, 20px 20px, 20px 20px" }}>Button</button>`,
  },
  {
    id: "concentric-squares-dark",
    name: "Concentric Squares - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(99, 102, 241, 0.15) 3px, rgba(99, 102, 241, 0.15) 4px, transparent 4px, transparent 8px),
      repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(99, 102, 241, 0.15) 3px, rgba(99, 102, 241, 0.15) 4px, transparent 4px, transparent 8px),
      repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(139, 92, 246, 0.12) 5px, rgba(139, 92, 246, 0.12) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(139, 92, 246, 0.12) 5px, rgba(139, 92, 246, 0.12) 6px, transparent 6px, transparent 15px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(99, 102, 241, 0.15) 3px, rgba(99, 102, 241, 0.15) 4px, transparent 4px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(99, 102, 241, 0.15) 3px, rgba(99, 102, 241, 0.15) 4px, transparent 4px, transparent 8px), repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(139, 92, 246, 0.12) 5px, rgba(139, 92, 246, 0.12) 6px, transparent 6px, transparent 15px), repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(139, 92, 246, 0.12) 5px, rgba(139, 92, 246, 0.12) 6px, transparent 6px, transparent 15px)' }}>Button</button>`,
  },
  {
    id: "crosshatch-art-dark",
    name: "Crosshatch Art - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(16, 185, 129, 0.18) 1px, rgba(16, 185, 129, 0.18) 2px, transparent 2px, transparent 4px),
      repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(245, 101, 101, 0.10) 1px, rgba(245, 101, 101, 0.10) 2px, transparent 2px, transparent 4px),
      repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(234, 179, 8, 0.08) 1px, rgba(234, 179, 8, 0.08) 2px, transparent 2px, transparent 4px),
      repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(249, 115, 22, 0.06) 1px, rgba(249, 115, 22, 0.06) 2px, transparent 2px, transparent 4px)
    `,
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "#0f0f0f", backgroundImage: 'repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(16, 185, 129, 0.18) 1px, rgba(16, 185, 129, 0.18) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(245, 101, 101, 0.10) 1px, rgba(245, 101, 101, 0.10) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(234, 179, 8, 0.08) 1px, rgba(234, 179, 8, 0.08) 2px, transparent 2px, transparent 4px), repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(249, 115, 22, 0.06) 1px, rgba(249, 115, 22, 0.06) 2px, transparent 2px, transparent 4px)' }}>Button</button>`,
  },

  // New Ellipse Glow Pattern
  {
    id: "aurora-midnight-glow",
    name: "Aurora Midnight Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "crimson-shadow-glow",
    name: "Crimson Shadow Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "emerald-depths-glow",
    name: "Emerald Depths Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "violet-storm-glow",
    name: "Violet Storm Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "golden-horizon-glow",
    name: "Golden Horizon Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "ocean-abyss-glow",
    name: "Ocean Abyss Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "rose-twilight-glow",
    name: "Rose Twilight Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "copper-forge-glow",
    name: "Copper Forge Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "arctic-lights-glow",
    name: "Arctic Lights Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "indigo-cosmos-glow",
    name: "Indigo Cosmos Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "pearl-mist-glow",
    name: "Pearl Mist Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000" }}>Button</button>`,
  },
  {
    id: "magenta-nebula-glow",
    name: "Magenta Nebula Glow",
    category: "gradients",
    badge: "New",
    style: {
      background:
        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236, 72, 153, 0.25), transparent 70%), #000000",
    },
    code: `<button className="px-6 py-2 rounded-md text-white" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(236, 72, 153, 0.25), transparent 70%), #000000" }}>Button</button>`,
  },
];