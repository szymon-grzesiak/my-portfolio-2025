"use client";

import React, { useState } from "react";
import { Plus, Check, Calculator, ShieldCheck } from "lucide-react";

interface Addon {
  id: string;
  name: string;
  namePl: string;
  minPrice: number;
  maxPrice: number;
  minPricePl: number;
  maxPricePl: number;
}

interface BaseOption {
  id: string;
  name: string;
  namePl: string;
  minPrice: number;
  maxPrice: number;
  minPricePl: number;
  maxPricePl: number;
}

interface PricingCalculatorProps {
  isPolish?: boolean;
}

const baseFeatures: Record<string, { en: string[]; pl: string[] }> = {
  landing: {
    en: [
      "1 Custom designed page (Figma design)",
      "Tailored lead capture / Form integration",
      "Full SEO Optimization (Metadata & Semantics)",
      "Next.js performance (100/100 Lighthouse score)",
      "Responsive layout (Mobile, Tablet, Desktop)",
      "Analytics & conversion tracking setup",
      "1-2 Weeks delivery timeline"
    ],
    pl: [
      "Indywidualny projekt graficzny (UI/UX w Figma)",
      "Formularz kontaktowy / System zbierania leadów",
      "Optymalizacja techniczna SEO (Metatagi i semantyka)",
      "Maksymalna szybkość Next.js (Wynik bliski 100/100)",
      "Pełna responsywność (Mobile, Tablet, Desktop)",
      "Integracja analityki (Google Analytics / Pixele)",
      "Czas realizacji: ok. 1-2 tygodnie"
    ]
  },
  website: {
    en: [
      "Up to 5 custom-designed subpages",
      "Integrated Headless CMS (Sanity / Storyblok)",
      "Custom animated components (Framer Motion)",
      "Advanced SEO setup (Sitemaps, Schema markup)",
      "Dynamic blog or service directory",
      "Interactive contact & booking forms",
      "3-4 Weeks delivery timeline"
    ],
    pl: [
      "Do 5 zindywidualizowanych podstron",
      "Zintegrowany intuicyjny panel CMS (np. Sanity)",
      "Płynne animacje i mikrointerakcje (Framer Motion)",
      "Zaawansowane SEO (Struktura, Mapa witryny, Schemas)",
      "Wygodny moduł blogowy lub katalog usług",
      "Interaktywne formularze i rezerwacje",
      "Czas realizacji: ok. 3-4 tygodnie"
    ]
  },
  ecommerce: {
    en: [
      "Headless Shopify, MedusaJS or Stripe Checkout",
      "Fully customizable product catalog & filters",
      "Secure checkout workflow with auto-invoicing",
      "Stripe / PayU / PayPal / BLIK integration",
      "Stock control & order management dashboard",
      "Automated transactional email setup (Resend)",
      "4-6 Weeks delivery timeline"
    ],
    pl: [
      "Silnik Headless Shopify / MedusaJS / Stripe",
      "Zaawansowane filtry i katalog produktów",
      "Bezpieczny proces zakupowy (Checkout)",
      "Integracja płatności: PayU / BLIK / Stripe / PayPal",
      "System zarządzania stanami i zamówieniami",
      "Automatyczne maile transakcyjne (Resend/SendGrid)",
      "Czas realizacji: ok. 4-6 tygodni"
    ]
  }
};

export default function PricingCalculator({ isPolish = false }: PricingCalculatorProps) {
  const baseOptions: BaseOption[] = [
    {
      id: "landing",
      name: "Landing Page",
      namePl: "Landing Page",
      minPrice: 1200,
      maxPrice: 1800,
      minPricePl: 3500,
      maxPricePl: 5500,
    },
    {
      id: "website",
      name: "Full Website",
      namePl: "Strona firmowa",
      minPrice: 2200,
      maxPrice: 3200,
      minPricePl: 6500,
      maxPricePl: 9500,
    },
    {
      id: "ecommerce",
      name: "E-Commerce Store",
      namePl: "Sklep internetowy",
      minPrice: 3500,
      maxPrice: 5500,
      minPricePl: 10000,
      maxPricePl: 15000,
    },
  ];

  const addons: Addon[] = [
    {
      id: "cms",
      name: "Headless CMS Integration",
      namePl: "Panel CMS / Blog",
      minPrice: 400,
      maxPrice: 800,
      minPricePl: 1500,
      maxPricePl: 2500,
    },
    {
      id: "animations",
      name: "Premium Animations",
      namePl: "Zaawansowane animacje",
      minPrice: 250,
      maxPrice: 500,
      minPricePl: 800,
      maxPricePl: 1500,
    },
    {
      id: "ai",
      name: "AI Chatbot / Automation",
      namePl: "Integracja AI (Chatbot)",
      minPrice: 400,
      maxPrice: 1000,
      minPricePl: 1500,
      maxPricePl: 3000,
    },
    {
      id: "pages",
      name: "Extra Pages Pack",
      namePl: "Dodatkowe podstrony (pakiet)",
      minPrice: 300,
      maxPrice: 600,
      minPricePl: 1000,
      maxPricePl: 2000,
    },
    {
      id: "multilang",
      name: "Multi-Language Support",
      namePl: "Wielojęzyczność (i18n)",
      minPrice: 350,
      maxPrice: 700,
      minPricePl: 1200,
      maxPricePl: 2000,
    },
    {
      id: "seo",
      name: "Advanced SEO Package",
      namePl: "Zaawansowane SEO",
      minPrice: 350,
      maxPrice: 750,
      minPricePl: 1200,
      maxPricePl: 2200,
    },
  ];

  const [selectedBase, setSelectedBase] = useState<string>("landing");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((addonId) => addonId !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentBase = baseOptions.find((opt) => opt.id === selectedBase) || baseOptions[0];
  const activeBaseMin = isPolish ? currentBase.minPricePl : currentBase.minPrice;
  const activeBaseMax = isPolish ? currentBase.maxPricePl : currentBase.maxPrice;

  const activeAddonsMin = addons
    .filter((addon) => selectedAddons.includes(addon.id))
    .reduce((sum, addon) => sum + (isPolish ? addon.minPricePl : addon.minPrice), 0);

  const activeAddonsMax = addons
    .filter((addon) => selectedAddons.includes(addon.id))
    .reduce((sum, addon) => sum + (isPolish ? addon.maxPricePl : addon.maxPrice), 0);

  const totalMin = activeBaseMin + activeAddonsMin;
  const totalMax = activeBaseMax + activeAddonsMax;

  const formatPriceRange = (min: number, max: number, withPlus = false) => {
    if (isPolish) {
      return `${withPlus ? "+" : ""}${min.toLocaleString("pl-PL")} - ${max.toLocaleString("pl-PL")} zł`;
    } else {
      return `${withPlus ? "+" : ""}$${min.toLocaleString("en-US")} - $${max.toLocaleString("en-US")}`;
    }
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm flex flex-col gap-6 md:gap-8 text-black">
      
      {/* Title */}
      <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
        <div className="bg-indigo-50/50 p-2.5 rounded-xl border border-indigo-100/50">
          <Calculator className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-display font-base text-xl md:text-2xl uppercase tracking-tight text-gray-900">
            {isPolish ? "Kalkulator Wyceny & Zakresu" : "Project Scope & Budget Calculator"}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {isPolish 
              ? "Skonfiguruj pakiet bazowy oraz dodatkowe moduły, aby oszacować koszty projektu." 
              : "Select a base package and choose add-ons to customize your project scope and price."}
          </p>
        </div>
      </div>

      {/* Base selection */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
          {isPolish ? "1. Wybierz pakiet bazowy" : "1. Choose Base Package"}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {baseOptions.map((opt) => {
            const isSelected = selectedBase === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedBase(opt.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                  isSelected
                    ? "bg-indigo-50/60 border-indigo-500 text-indigo-900 font-bold"
                    : "bg-gray-50/50 border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-gray-100"
                }`}
              >
                <span className="text-xs uppercase tracking-tight opacity-80">
                  {isPolish ? opt.namePl : opt.name}
                </span>
                <span className="text-sm md:text-base font-black">
                  {formatPriceRange(
                    isPolish ? opt.minPricePl : opt.minPrice,
                    isPolish ? opt.maxPricePl : opt.maxPrice
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic base features display */}
        <div className="mt-2 bg-gray-50/50 border border-gray-150 rounded-xl p-4 text-black">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
            {isPolish ? "W cenie tego pakietu bazowego otrzymujesz:" : "Included in this base package:"}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {baseFeatures[selectedBase][isPolish ? "pl" : "en"].map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Addons Selection (Chips) */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
          {isPolish ? "2. Wybierz opcje dodatkowe (kliknij, aby dodać)" : "2. Select Add-on Modules (Click to toggle)"}
        </label>
        <div className="flex flex-wrap gap-2.5">
          {addons.map((addon) => {
            const isSelected = selectedAddons.includes(addon.id);
            return (
              <button
                key={addon.id}
                type="button"
                onClick={() => toggleAddon(addon.id)}
                className={`px-4 py-2 rounded-full border text-xs md:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-amber-50/60 border-amber-400 text-amber-900"
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {isSelected ? (
                  <Check className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                )}
                <span>{isPolish ? addon.namePl : addon.name}</span>
                <span className={`text-[10px] font-black border-l pl-2 ${isSelected ? "border-amber-300 text-amber-800" : "border-gray-200 text-gray-400"}`}>
                  {formatPriceRange(
                    isPolish ? addon.minPricePl : addon.minPrice,
                    isPolish ? addon.maxPricePl : addon.maxPrice,
                    true
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Total Box */}
      <div className="mt-2 bg-indigo-50/30 border border-indigo-100/50 rounded-xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            {isPolish ? "Szacowany koszt netto" : "Estimated Net Price"}
          </span>
          <p className="text-xs text-gray-500 leading-normal">
            {isPolish 
              ? "Wpisz wybrane opcje w formularzu kontaktowym powyżej, aby zarezerwować termin." 
              : "Specify these options in the message box above to start our project discussion."}
          </p>
        </div>
        <div className="text-2xl sm:text-3xl font-black text-indigo-900 tracking-tight shrink-0 bg-white border border-indigo-100/50 rounded-xl px-5 py-2.5 shadow-sm">
          {formatPriceRange(totalMin, totalMax)}
        </div>
      </div>

    </div>
  );
}
