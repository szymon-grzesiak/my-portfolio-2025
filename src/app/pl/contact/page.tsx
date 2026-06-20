import { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { ChevronDown, Sparkles, ShoppingBag, Search, Zap, Code, ShieldCheck, ArrowRight, Trophy } from "lucide-react";
import Grainient from "@/components/ui/grainient";
import { ContactForm } from "@/components/ui/ContactDrawer";
import PricingCalculator from "@/components/ui/PricingCalculator";
import DotPattern from "@/components/ui/dotpattern";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Usługi, Proces i Kontakt",
  description: "Dowiedz się, jak buduję szybkie sklepy e-commerce, strony www i narzędzia AI. Sprawdź proces współpracy, cennik bazowy, FAQ i skontaktuj się ze mną.",
  alternates: {
    canonical: `${siteConfig.url}/pl/contact`,
  },
  openGraph: {
    title: "Usługi, Proces i Kontakt | Szymon Grzesiak",
    description: "Dowiedz się, jak buduję szybkie sklepy e-commerce, strony www i narzędzia AI. Sprawdź proces współpracy, cennik bazowy, FAQ i skontaktuj się ze mną.",
    url: `${siteConfig.url}/pl/contact`,
  },
};

export default function ContactPage() {
  const services = [
    {
      icon: ShoppingBag,
      title: "Sklepy E-Commerce",
      desc: "Szybkie, nastawione na konwersję sklepy internetowe oparte o Next.js lub integracje headless z Shopify, z wygodnymi płatnościami (Stripe, PayU).",
      badge: "Shopify & Dedykowane"
    },
    {
      icon: Search,
      title: "Optymalizacja SEO & Szybkości",
      desc: "Zaawansowana optymalizacja pod kątem Core Web Vitals, semantyczny kod i struktura techniczna SEO gwarantująca maksymalne wyniki w Google.",
      badge: "Wbudowane SEO"
    },
    {
      icon: Zap,
      title: "Integracje AI & Automatyzacje",
      desc: "Wdrażanie autorskich rozwiązań sztucznej inteligencji, chatbotów, integracje z API ChatGPT/Claude oraz narzędzia automatyzujące procesy w firmie.",
      badge: "Inteligentne Narzędzia"
    },
    {
      icon: Code,
      title: "Dedykowane Aplikacje Webowe",
      desc: "Spersonalizowane systemy wewnętrzne, integracje z CRM, panele klienta oraz interaktywne dashboardy zaprojektowane z myślą o bezpieczeństwie i wydajności.",
      badge: "Next.js / React"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Analiza & Wycena",
      desc: "Ustalamy cele biznesowe projektu, strukturę podstron, kluczowe funkcjonalności i przygotowuję dla Ciebie dokładną, stałą wycenę oraz harmonogram."
    },
    {
      number: "02",
      title: "Mój projekt",
      desc: "Unikalny projekt graficzny stworzony w pełni przeze mnie w Figma, dopasowany do Twojej marki i nastawiony na ścieżkę konwersji klienta."
    },
    {
      number: "03",
      title: "Wdrożenie Next.js",
      desc: "Koduję projekt z użyciem najnowszego Next.js i TypeScript. Na tym etapie dbam o najwyższą wydajność, responsywność i techniczne podstawy pod pozycjonowanie."
    },
    {
      number: "04",
      title: "Testy & Premiera",
      desc: "Przeprowadzam dokładne testy na urządzeniach mobilnych, podłączam domenę, konfiguruję analitykę i wdrażam stronę na szybki hosting."
    }
  ];



  const faqs = [
    {
      q: "Jak długo trwa realizacja projektu?",
      a: "Strona typu landing page zazwyczaj powstaje w 1-2 tygodnie. Bardziej rozbudowane strony firmowe i sklepy internetowe wymagają od 3 do 6 tygodni pracy, zależnie od poziomu skomplikowania integracji."
    },
    {
      q: "Czy strona będzie poprawnie działać na telefonach?",
      a: "Zdecydowanie. Responsywność (RWD) to standard każdego mojego projektu. Tworzę interfejsy, które automatycznie i estetycznie dostosowują się do ekranów smartfonów, tabletów oraz dużych monitorów."
    },
    {
      q: "Czy budujesz na WordPressie, czy piszesz własny kod?",
      a: "Projektuję nowoczesne aplikacje przy użyciu technologii Next.js, React i Tailwind CSS. Do zarządzania treścią lub produktami integruję systemy headless (np. Shopify lub Sanity CMS). Dzięki temu strony działają nawet do 10x szybciej i są nieporównywalnie bezpieczniejsze niż tradycyjny WordPress."
    },
    {
      q: "Jak wygląda kwestia płatności?",
      a: "Zazwyczaj rozliczenie opiera się na modelu 50/50: 50% zaliczki przed rozpoczęciem prac projektowych, a drugie 50% po zaakceptowaniu gotowego projektu, testach i wdrożeniu na Twoją domenę."
    }
  ];

  return (
    <main className="relative min-h-screen w-full text-white bg-[#0e0717] overflow-x-hidden md:pl-[130px]">
      
      {/* SECTION 1: Top Fold with Grainient Background */}
      <section className="relative w-full py-20 px-6 lg:pr-10 xl:pr-16 overflow-hidden">
        {/* Grainient Canvas Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Grainient
            color1="#341833"
            color2="#bab5cf"
            color3="#3c00ff"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Header Card (Bento Card) */}
          <div className="md:col-span-2 lg:col-span-2 border border-white/10 rounded-3xl p-6 md:p-8 bg-black/75 backdrop-blur-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="w-fit inline-block bg-white/10 text-indigo-300 text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                Współpraca
              </span>
              <h1 className="font-display font-base text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                Oferta, Proces & <br />
                <span className="text-indigo-300">Wycena Projektów</span>
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                Pomagam markom i firmom wdrażać szybkie, zoptymalizowane pod kątem SEO i konwersji aplikacje oraz sklepy internetowe. Zobacz szczegóły współpracy poniżej.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50 border-t border-white/5 pt-4">
              <Sparkles className="w-4 h-4 text-yellow-300 shrink-0" />
              <span>Wszystkie projekty realizowane są w oparciu o autorski proces projektowy</span>
            </div>
          </div>

          {/* Contact Form Card (Bento Card) */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col h-full">
            <ContactForm className="h-full" />
          </div>

          {/* Service Cards (Bento Cards) */}
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="border border-white/10 rounded-3xl p-6 bg-black/75 backdrop-blur-md flex flex-col justify-between gap-4 group">
                <div className="flex justify-between items-start gap-4">
                  <span className="bg-indigo-500/10 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-500/20">
                    {item.badge}
                  </span>
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
                    <IconComp className="w-5 h-5 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}

          {/* Social Links Card (Bento Card) */}
          <div className="md:col-span-2 lg:col-span-1 border border-white/10 rounded-3xl p-6 bg-black/75 backdrop-blur-md flex flex-col gap-4 hover:border-indigo-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] justify-between">
            <div>
              <h3 className="font-bold text-lg text-white border-b border-white/10 pb-2 mb-3">
                Bezpośrednie kanały kontaktu
              </h3>
              <div className="flex flex-col gap-3">
                <Link 
                  href="https://t.me/jsbr9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-indigo-300 font-medium transition-colors group/link"
                >
                  <FaTelegram className="text-xl text-[#0088cc] group-hover/link:scale-110 transition-transform" />
                  <span>Telegram: @jsbr9</span>
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/szymongrzesiak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-indigo-300 font-medium transition-colors group/link"
                >
                  <FaLinkedin className="text-xl text-[#0a66c2] group-hover/link:scale-110 transition-transform" />
                  <span>LinkedIn: szymongrzesiak</span>
                </Link>
                <Link 
                  href="https://github.com/szymon-grzesiak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-indigo-300 font-medium transition-colors group/link"
                >
                  <FaGithub className="text-xl text-white group-hover/link:scale-110 transition-transform" />
                  <span>GitHub: szymon-grzesiak</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Bottom Fold with DotPattern Background */}
      <section className="relative w-full py-24 px-6 lg:pr-10 xl:pr-16 bg-[#fafafa] text-black border-t border-gray-200 overflow-hidden">
        <DotPattern className="opacity-35" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-24">
          
          {/* Process Section */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-display font-base uppercase tracking-wider text-black border-b border-gray-200 pb-3 flex items-center gap-2">
              <Code className="w-6 h-6 text-indigo-600" />
              Jak wygląda proces współpracy?
            </h2>
            <div className="relative border-l border-gray-300 pl-6 ml-4 flex flex-col gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[37px] top-1 bg-indigo-50 border border-indigo-100 rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold text-indigo-700">
                    {step.number}
                  </div>
                  <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Porównanie Next.js vs WordPress */}
          <div className="border border-indigo-100 rounded-2xl p-6 md:p-8 bg-indigo-50/50 shadow-sm text-black flex flex-col gap-6">
            <h3 className="font-display font-base text-xl md:text-2xl uppercase tracking-tight text-gray-900 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-indigo-600" />
              Next.js vs. WordPress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              {/* Dedykowany Next.js */}
              <div className="bg-white border border-green-100 p-5 rounded-xl shadow-xs">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Dedykowany Next.js (Moje podejście)
                </span>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>10x szybsze ładowanie:</strong> Podstrony otwierają się w 0.2s, zwiększając pozycje w Google i konwersję.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Projekt na wymiar:</strong> Indywidualny design premium stworzony pod Twoje cele biznesowe.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Pełne bezpieczeństwo:</strong> Brak baz danych i wtyczek podatnych na częste ataki hakerskie.</span>
                  </li>
                </ul>
              </div>

              {/* Szablonowy WordPress */}
              <div className="bg-white border border-red-100 p-5 rounded-xl shadow-xs opacity-85">
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Szablonowy WordPress
                </span>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span><strong>Wolne ładowanie:</strong> Obciążenie wtyczkami i ciężkimi kreatorami psuje SEO i wyniki.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span><strong>Powtarzalny szablon:</strong> Strona wygląda jak tysiące innych gotowych motywów w sieci.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span><strong>Stałe ryzyko spamu:</strong> Częste infekcje i ataki poprzez dziurawe wtyczki autorów trzecich.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dynamic Price Estimator (Apple-style) */}
          <PricingCalculator isPolish={true} />

          {/* FAQ Section */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-display font-base uppercase tracking-wider text-black border-b border-gray-200 pb-3 flex items-center gap-2">
              Najczęstsze pytania (FAQ)
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border border-gray-200 rounded-2xl p-5 bg-white shadow-sm [&_svg]:open:rotate-180 transition-all duration-300">
                  <summary className="flex justify-between items-center font-bold text-base md:text-lg cursor-pointer list-none text-black">
                    <span>{faq.q}</span>
                    <span className="transition-transform duration-300 text-indigo-500">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Projects Link Section */}
          <div className="border border-indigo-150 p-6 rounded-2xl bg-indigo-600 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">Chcesz najpierw zobaczyć moje projekty?</h3>
              <p className="text-sm text-indigo-100 leading-normal">
                Przejrzyj praktyczne studia przypadków, stos technologiczny i gotowe realizacje.
              </p>
            </div>
            <Link
              href="/pl/projects"
              className="bg-white text-black font-bold border border-gray-200 rounded-xl px-5 py-3 hover:bg-gray-50 transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-sm"
            >
              <span>Zobacz Projekty</span>
              <ArrowRight className="w-5 h-5 text-indigo-500" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
