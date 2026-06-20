import React from "react";
import { projectsData } from "./data";

export const timelineDataPl = [
  {
    title: "09.2025 - Obecnie",
    occupation: "Frontend Developer",
    content: (
      <div className="flex flex-col pt-3">
        <p className="text-neutral-800 text-md font-normal">
          Na co dzień rozwijam aplikacje webowe pisząc w React/TypeScript.
        </p>
      </div>
    ),
  },
  {
    title: "01.2025 - 09.2025",
    occupation: "Freelancer / Twórca SaaS",
    content: (
      <div className="flex flex-col pt-3">
        <p className="text-neutral-800 text-md font-normal">
          Skupiałem się na budowaniu dedykowanych produktów webowych i aplikacji SaaS przy użyciu Next.js i TypeScript.
        </p>
      </div>
    ),
  },
  {
    title: "08.2023 - 01.2025",
    occupation: "Helpfind - Frontend Developer",
    content: (
      <div className="flex flex-col pt-3">
        <p className="text-neutral-800 text-md font-normal">
          Rozwijałem system CRM oparty o React i optymalizowałem dynamiczne portale klientów w Next.js.
        </p>
      </div>
    ),
  },
  {
    title: "2021 - 2025",
    occupation: "Uniwersytet Kaliski - Student Informatyki",
    content: (
      <div>
        <p className="text-neutral-800 pt-3 text-md font-normal mb-8">
          Ukończyłem studia inżynierskie na kierunku Informatyka, skupiając się na inżynierii oprogramowania, bazach danych i technologiach webowych.
        </p>
      </div>
    ),
  },
];

export const projectsDataPl = projectsData.map((project) => {
  let description = project.description;
  let heroTagline = project.heroTagline;

  switch (project.slug) {
    case "parafia-latowice":
      description =
        "Strona internetowa Parafii pw. Matki Bożej Częstochowskiej w Latowicach, stworzona w celu udostępniania ogłoszeń parafialnych, historii oraz ułatwienia kontaktu z parafianami.";
      heroTagline = "Portal społeczności parafialnej";
      break;
    case "diffy":
      description =
        "PipPulse Academy to platforma edukacyjna oferująca kompleksowy kurs metodologii tradingu dla profesjonalnych inwestorów.";
      heroTagline = "Profesjonalna platforma metodologii tradingu";
      break;
    case "hustlers-gang":
      description =
        "Hustlers Gang to strona internetowa dla społeczności przedsiębiorców. Ułatwia kontakt, wymianę wiedzy i doświadczeń między członkami.";
      heroTagline = "Platforma członkowska skoncentrowana na społeczności";
      break;
    case "bnp-global":
      description =
        "bnp.global to strona dla globalnej sieci biznesowej. Ułatwia firmom nawiązywanie kontaktów, wymianę doświadczeń i współpracę.";
      heroTagline = "Łączenie innowatorów ponad granicami";
      break;
    case "wnetrze-raju":
      description =
        "Wnętrze Raju to strona internetowa salonu masażu w Sieradzu. Prezentuje usługi oferowane przez salon, cennik oraz ułatwia kontakt.";
      heroTagline = "Relaks wzniesiony na wyższy poziom dzięki designowi";
      break;
    case "cytrynuch-tiktoker":
      description =
        "Cytrynuch TikToker to strona internetowa dla twórcy treści na TikToku, służąca do prezentacji filmów i informacji o autorze.";
      heroTagline = "Budowanie interaktywnego centrum twórcy";
      break;
    case "vocablaze":
      description =
        "Vocablaze to aplikacja do nauki języków obcych wykorzystująca gry, aby pomóc użytkownikom szlifować słownictwo i gramatykę w ciekawy sposób.";
      heroTagline = "Grywalizacja w nauce języków obcych";
      break;
    case "resoursea":
      description =
        "Resoursea to platforma do dzielenia się materiałami naukowymi. Pomaga studentom i profesjonalistom w odnajdywaniu zasobów potrzebnych do nauki i kariery.";
      heroTagline = "Ułatwianie wymiany wiedzy online";
      break;
  }

  return {
    ...project,
    description,
    heroTagline,
  };
});

export const projectCaseStudiesTranslationsPl: Record<
  string,
  {
    heroTagline: string;
    metadata: {
      title: string;
      description: string;
      keywords: string[];
    };
    overview: string[];
    problem: string[];
    features: { title?: string; description: string }[];
    learnings: string[];
    challenges: string[];
    finalSiteCta?: string;
  }
> = {
  diffy: {
    heroTagline: "Profesjonalna platforma metodologii tradingu",
    metadata: {
      title: "Studium Przypadku PipPulse Academy",
      description: "Budowa wyjątkowej platformy edukacyjnej dla profesjonalnych inwestorów z mechaniką odliczania, formularzem zgłoszeniowym i integracją z Arkuszami Google.",
      keywords: ["PipPulse", "trading", "Next.js", "edukacja", "Arkusze Google"]
    },
    overview: [
      "PipPulse Academy potrzebowało wysoko konwertującego landing page'a do prezentacji kompleksowego kursu metodologii tradingu z limitowaną liczbą miejsc rocznie.",
      "Zbudowałem zaawansowany system odliczania, wielokrokowy formularz aplikacyjny zintegrowany z Arkuszami Google oraz sekcje zoptymalizowane pod kątem konwersji, które przekazują profesjonalną wartość przy zachowaniu ekskluzywności."
    ],
    problem: [
      "Platforma wymagała precyzyjnie kontrolowanego czasowo startu z automatycznym odkrywaniem treści, przy jednoczesnym unikaniu problemów z hydratacją w Next.js 16.",
      "Potrzebowaliśmy skomplikowanego formularza aplikacyjnego, który zapisuje dane w Arkuszach Google, wysyła automatyczne e-maile i utrzymuje płynne wrażenia użytkownika na wielu etapach."
    ],
    features: [
      {
        title: "System odliczania po stronie klienta",
        description: "Niestandardowy odliczacz oparty na hookach z automatycznym blokowaniem treści, który eliminuje rozbieżności w hydratacji i bezproblemowo obsługuje strefy czasowe."
      },
      {
        title: "Wielokrokowy formularz aplikacyjny",
        description: "Zaawansowane okno dialogowe formularza ze wskaźnikami postępu, walidacją, zbieraniem danych krok po kroku i płynnymi przejściami między etapami aplikacji."
      },
      {
        title: "Integracja z Arkuszami Google",
        description: "Automatyczne przesyłanie danych aplikacji do Arkuszy Google z powiadomieniami e-mail, kompleksową obsługą błędów i zapobieganiem duplikatom."
      },
      {
        title: "Sekcje zoptymalizowane pod kątem wydajności",
        description: "Dynamiczny import dla treści poniżej linii zgięcia, animowane ujawnianie sekcji i zoptymalizowane ładowanie zasobów dla płynnego przewijania."
      }
    ],
    learnings: [
      "Rozwiązanie problemów z hydratacją Next.js 16 przy licznikach czasu wymagało odseparowania komponentów klienckich za pomocą dynamicznych importów z wyłączonym SSR (ssr: false).",
      "Budowanie komponentów formularzy wielokrotnego użytku przy użyciu ścisłego trybu TypeScript i walidacji Zod poprawiło łatwość utrzymania i wrażenia użytkownika."
    ],
    challenges: [
      "Zarządzanie stanem odliczania w wielu komponentach przy jednoczesnym unikaniu rozbieżności serwer-klient wymagało scentralizowanego wzorca kontrolera.",
      "Balansowanie elementów projektu napędzających pilność z profesjonalną wiarygodnością wymagało starannego testowania UX i dopracowania tekstów."
    ],
    finalSiteCta: "Odwiedź stronę"
  },
  "hustlers-gang": {
    heroTagline: "Społeczność skoncentrowana na członkach",
    metadata: {
      title: "Studium przypadku Hustlers Gang | Szymon Grzesiak",
      description: "Projekt i wdrożenie wyrazistego serwisu internetowego dla społeczności przedsiębiorców Hustlers Gang.",
      keywords: ["Hustlers Gang", "społeczność", "Next.js", "landing page"]
    },
    overview: [
      "Hustlers Gang potrzebowało wyjątkowej przestrzeni cyfrowej, w której członkowie mogliby bez przeszkód uzyskiwać dostęp do ekskluzywnych wydarzeń, nowości i zasobów.",
      "Skupiłem się na stworzeniu dynamicznego landing page'a, który podkreśla tożsamość marki, jednocześnie dbając o lekkość architektury, by nowe kampanie mogły startować błyskawicznie."
    ],
    problem: [
      "Dotychczasowe narzędzia utrudniały zarządzanie premierami i spójne komunikowanie wartości społeczności w jednym miejscu.",
      "Chcieliśmy stworzyć stronę, która skutecznie konwertuje odwiedzających, obsługuje aktualizacje na żywo i zachowuje unikalny styl marki."
    ],
    features: [
      {
        title: "Strony gotowe do wdrożenia",
        description: "Modułowe sekcje ułatwiają szybkie tworzenie premier, zbieranie zapisów czy promowanie wydarzeń offline w kilka minut."
      },
      {
        title: "Opowiadanie historii na telefonach",
        description: "Projekt zachowuje estetykę Hustlers, pozostając w pełni responsywnym i niezwykle płynnym na urządzeniach mobilnych."
      },
      {
        title: "Analityka kampanii",
        description: "Integracje analityczne pozwalają na błyskawiczne podpięcie śledzenia, dzięki czemu dane o konwersji z każdej nowej oferty są zawsze pod ręką."
      },
      {
        title: "Architektura gotowa na CMS",
        description: "Strukturyzowane komponenty ułatwią w przyszłości migrację do bezgłowego systemu CMS (headless), gdy społeczność urośnie."
      }
    ],
    learnings: [
      "Wykorzystanie wyrazistej typografii i ruchu pomogło przekazać klimat społeczności bez negatywnego wpływu na konwersję.",
      "Stworzenie reużywalnych sekcji dramatycznie przyspieszyło iteracje w tygodniu przed premierą."
    ],
    challenges: [
      "Balansowanie mocnych efektów wizualnych z budżetem wydajnościowym wymagało ciągłego audytu i optymalizacji zasobów.",
      "Koordynowanie szybkich poprawek podczas intensywnych sprintów wymagało sprawnej i bezpośredniej komunikacji z zespołem."
    ],
    finalSiteCta: "Odwiedź stronę"
  },
  "bnp-global": {
    heroTagline: "Łączenie innowatorów ponad granicami",
    metadata: {
      title: "Studium przypadku bnp.global | Szymon Grzesiak",
      description: "Budowa nowoczesnego portalu sieci biznesowej BNP Global łączącego założycieli i inwestorów.",
      keywords: ["bnp.global", "sieć biznesowa", "Next.js", "portal"]
    },
    overview: [
      "bnp.global łączy założycieli i inwestorów, dlatego strona musiała budować wiarygodność i dynamikę od pierwszego przewinięcia.",
      "Układ kładzie nacisk na historię i kluczowe metryki, jednocześnie ułatwiając zespołowi dostosowanie doświadczenia do nowych rynków."
    ],
    problem: [
      "Poprzednia obecność w sieci wydawała się zbyt statyczna i nie pozwalała na bieżąco prezentować nowych historii sukcesu ani partnerów.",
      "Nowe rozwiązanie musiało być responsywne, łatwe to aktualizacji i odzwierciedlać globalny zasięg sieci biznesowej."
    ],
    features: [
      {
        title: "Wyróżnianie ofert",
        description: "Kluczowe partnerstwa i historie są prezentowane bezpośrednio na stronie głównej w elastycznych blokach treści."
      },
      {
        title: "Lokalne formularze kontaktowe",
        description: "Formularze zapytań dostosowują się do rynków docelowych, dzięki czemu zapytania trafiają natychmiast do odpowiednich zespołów."
      },
      {
        title: "Wydajność na pierwszym miejscu",
        description: "Zoptymalizowane obrazy i strategie ładowania utrzymują płynność działania witryny nawet na słabszych połączeniach."
      }
    ],
    learnings: [
      "Dopracowałem system typografii, który dobrze skaluje się przy różnej długości tekstów w różnych językach.",
      "Bliska współpraca z działem marketingu pomogła precyzyjnie oddać ewoluujący głos marki."
    ],
    challenges: [
      "Koordynowanie dostarczania materiałów wizualnych w różnych strefach czasowych wymagało asynchronicznego przepływu pracy.",
      "Musieliśmy utrzymać wysokie wskaźniki dostępności (accessibility) i wydajności przy jednoczesnym eksponowaniu bogatych grafik."
    ],
    finalSiteCta: "Odwiedź stronę"
  },
  "wnetrze-raju": {
    heroTagline: "Relaks wzniesiony na wyższy poziom dzięki designowi",
    metadata: {
      title: "Studium przypadku Wnętrze Raju | Szymon Grzesiak",
      description: "Projekt i wdrożenie relaksującej witryny internetowej dla salonu masażu Wnętrze Raju w Sieradzu.",
      keywords: ["spa", "salon masażu", "Sieradz", "Next.js", "Wnętrze Raju"]
    },
    overview: [
      "Celem było przeniesienie spokojnej atmosfery salonu stacjonarnego do przestrzeni cyfrowej, która wzbudza zaufanie i wycisza.",
      "Punkty wezwania do działania (CTA) płynnie prowadzą odwiedzających od poznania oferty do rezerwacji terminu."
    ],
    problem: [
      "Klienci stacjonarni uwielbiali markę, ale dotychczasowa strona WWW nie oddawała tego klimatu i słabo pozyskiwała nowych klientów.",
      "Musieliśmy wyeksponować unikalne zabiegi, karty podarunkowe i opinie w lekki i zachęcający sposób."
    ],
    features: [
      {
        title: "Układ zorientowany na usługi",
        description: "Przejrzyste sekcje prezentują kluczowe rytuały i masaże z dużym naciskiem na estetyczną prezentację graficzną."
      },
      {
        title: "Szybka rezerwacja",
        description: "Wyraźne przyciski CTA łączą odwiedzających z wybranymi kanałami rezerwacji bez zbędnych kroków."
      },
      {
        title: "Wizualizacja nastroju",
        description: "Delikatne przejścia kolorystyczne, elegancka typografia i subtelne animacje naśladują relaksujący ton fizycznego salonu."
      }
    ],
    learnings: [
      "Dopracowanie hierarchii wizualnej nauczyło mnie, jak drobne korekty typograficzne poprawiają czytelność oferty w branży wellness.",
      "Reużywalne bloki ułatwiają teraz właścicielom samodzielne promowanie ofert sezonowych."
    ],
    challenges: [
      "Pozyskanie wysokiej jakości zdjęć w krótkim czasie wymagało wsparcia w zakresie kierowania artystycznego.",
      "Zbalansowanie estetycznych detali z budżetem wydajności oznaczało ciągłą optymalizację grafik."
    ],
    finalSiteCta: "Odwiedź stronę"
  },
  "cytrynuch-tiktoker": {
    heroTagline: "Tworzenie interaktywnego centrum twórcy",
    metadata: {
      title: "Studium przypadku Cytrynuch TikToker | Szymon Grzesiak",
      description: "Kolorowy i dynamiczny portal internetowy dla polskiego twórcy na TikToku - Cytrynucha.",
      keywords: ["tiktoker", "portfolio twórcy", "TikTok", "Next.js"]
    },
    overview: [
      "Cytrynuch chciał mieć witrynę, która oddaje klimat przewijania feedu na TikToku, ale jednocześnie profesjonalnie kieruje firmy do współpracy.",
      "Zastosowaliśmy wyraziste bloki kolorów i interaktywne widgety, aby zaprezentować najnowsze materiały wideo i ułatwić kontakt."
    ],
    problem: [
      "Same profile społecznościowe utrudniały przedstawienie partnerom biznesowym spójnego i profesjonalnego zestawu informacji medialnych (media kit).",
      "Nowa witryna musiała oddawać styl twórcy, zachowując pełną czytelność dla agencji reklamowych i sponsorów."
    ],
    features: [
      {
        title: "Integracje wideo",
        description: "Krótkie formy wideo, statystyki i referencje mogą być aktualizowane na bieżąco bez konieczności ponownego wdrażania kodu."
      },
      {
        title: "Spójny formularz kontaktowy",
        description: "Formularz kontaktowy pozwala partnerom na przesłanie zapytania w klimacie i tonie pasującym do twórcy."
      },
      {
        title: "Układ gotowy dla sponsorów",
        description: "Specjalne sekcje z metrykami zasięgu, profilami odbiorców i głównymi filarami działalności pomagają szybko sprzedawać kampanie."
      }
    ],
    learnings: [
      "Dopracowałem interfejsy komponentów tak, aby twórca mógł samodzielnie dostosowywać akcenty kolorystyczne i grafiki pod bieżące kampanie.",
      "Dynamiczne osadzanie dowodu społecznego sprawia, że strona tętni życiem tak samo jak profil na TikToku."
    ],
    challenges: [
      "Zapewnienie dostępności (WCAG) przy bardzo żywych, kontrastowych gradientach wymagało starannych audytów kolorystycznych.",
      "Utrzymanie lekkiej wagi kodu przy jednoczesnym osadzaniu zewnętrznych skryptów i widgetów społecznościowych wymagało eksperymentów."
    ],
    finalSiteCta: "Odwiedź stronę"
  },
  "vocablaze": {
    heroTagline: "Grywalizacja w nauce języków obcych",
    metadata: {
      title: "Studium przypadku Vocablaze | Szymon Grzesiak",
      description: "Interaktywna platforma do nauki słówek z mechanizmami grywalizacji, subskrypcjami Stripe i autoryzacją NextAuth.",
      keywords: ["Vocablaze", "nauka języków", "Next.js", "Stripe", "Prisma", "PostgreSQL"]
    },
    overview: [
      "Celem platformy Vocablaze było stworzenie serwisu internetowego do nauki języków obcych, w którym użytkownicy mogą tworzyć własne zestawy słówek, śledzić postępy i grać w interaktywne gry.",
      "Zakres prac obejmował projektowanie UI/UX, wdrożenie pełnego stacku technologicznego oraz walidację wpływu grywalizacji na zaangażowanie uczniów."
    ],
    problem: [
      "Większość aplikacji językowych narzuca sztywne ścieżki lekcyjne. Chcieliśmy dać uczącym się swobodę i kreatywną kontrolę, dbając o dobrą zabawę.",
      "Produkt wymagał również bezpiecznych płatności i solidnej autoryzacji w celu ochrony treści premium."
    ],
    features: [
      {
        title: "Gry językowe",
        description: "Gry takie jak fiszki, łączenie kafelków i wisielec sprawiają, że codzienna praktyka słownictwa staje się wciągająca."
      },
      {
        title: "Panel postępów",
        description: "Przejrzyste wykresy i panele pomagają użytkownikom śledzić ich naukowe postępy w czasie."
      },
      {
        title: "Dostosowywanie motywów",
        description: "Użytkownicy mogą dostosować interfejs do swoich preferencji za pomocą motywów kolorystycznych."
      },
      {
        title: "Dzielenie się materiałami",
        description: "Nauczyciele i uczniowie mogą łatwo eksportować i udostępniać własne talie słówek innym."
      },
      {
        title: "Import słownictwa",
        description: "Aplikacja obsługuje masowe wgrywanie słówek z plików zewnętrznych."
      },
      {
        title: "Subskrypcje premium",
        description: "Płatności Stripe odblokowują zaawansowane statystyki i dodatkowe tryby rozgrywki."
      }
    ],
    learnings: [
      "Wdrożyłem zaawansowane przepływy logowania z resetowaniem haseł i uwierzytelnianiem dwuskładnikowym (2FA).",
      "Zintegrowałem Stripe od A do Z, od obsługi subskrypcji po nasłuchiwanie zdarzeń webhook.",
      "Rozwinąłem umiejętności backendowe poprzez optymalizację zapytań Prisma i logiki po stronie serwera.",
      "Pogłębiłem znajomość zaawansowanych funkcji Next.js, takich jak Server Actions i rewalidacja danych na żądanie."
    ],
    challenges: [
      "Praca w pojedynkę oznaczała pełną odpowiedzialność za projekt, kodowanie, testowanie oraz wdrażanie całego systemu.",
      "Nauka integracji Stripe od zera wymagała precyzji w celu zagwarantowania bezpieczeństwa transakcji.",
      "Uwierzytelnianie dwuskładnikowe i bezpieczne resetowanie haseł dodały złożoności do warstwy bezpieczeństwa.",
      "Balansowanie między zakresem funkcji a sztywnym terminem wymagało bezkompromisowej priorytetyzacji zadań."
    ],
    finalSiteCta: "Odwiedź stronę"
  },
  "resoursea": {
    heroTagline: "Ułatwianie wymiany wiedzy online",
    metadata: {
      title: "Studium przypadku Resoursea | Szymon Grzesiak",
      description: "Budowa portalu wymiany wiedzy programistycznej Resoursea z logowaniem Clerk.js, bazą MongoDB i funkcjami sztucznej inteligencji OpenAI.",
      keywords: ["Resoursea", "baza wiedzy", "Next.js", "OpenAI", "MongoDB", "Clerk"]
    },
    overview: [
      "Resoursea to wszechstronna platforma do dzielenia się wiedzą, na której użytkownicy mogą publikować artykuły, brać udział w dyskusjach i wymieniać się pomysłami.",
      "Witryna łączy konfigurowalne profile, fora dyskusyjne, odznaki oraz wyszukiwarkę ofert pracy, aby utrzymać zaangażowanie społeczności."
    ],
    problem: [
      "Większości forów brakuje jednego, spójnego miejsca, które zachęcałoby zarówno do nauki, uznania zasług, jak i szukania realnych szans zawodowych.",
      "Resoursea wypełnia tę lukę, łącząc wątki dyskusyjne z narzędziami rozwoju kariery, takimi jak tablica ogłoszeń o pracę."
    ],
    features: [
      {
        title: "Zaawansowany system logowania",
        description: "Clerk.js zapewnia bezpieczne uwierzytelnianie, w tym weryfikację dwuskładnikową (2FA) dla power użytkowników."
      },
      {
        title: "Wyszukiwarka globalna",
        description: "Jednolity panel wyszukiwania ułatwia odnajdywanie pytań, postów na forum i wyselekcjonowanych kolekcji."
      },
      {
        title: "Integracja z OpenAI",
        description: "Sztuczna inteligencja pomaga redagować pytania i generuje automatyczne, trafne odpowiedzi wspomagające dyskusję."
      },
      {
        title: "System rekomendacji pracy",
        description: "Tablica ofert pracy pomaga programistom łączyć zdobytą wiedzę z realnymi ofertami zatrudnienia."
      }
    ],
    learnings: [
      "Opanowałem zaawansowane scenariusze logowania i zarządzania użytkownikami w Clerk.js.",
      "Zdobyłem doświadczenie w bezpiecznym integrowaniu API OpenAI przy zachowaniu pełnej kontroli kosztów zużycia tokenów.",
      "Udoskonaliłem projektowanie szybkiej i dokładnej wyszukiwarki przeszukującej wiele encji bazodanowych jednocześnie.",
      "Rozwinąłem umiejętności tworzenia w pełni responsywnego interfejsu (RWD) na różnych typach ekranów."
    ],
    challenges: [
      "Konfigurowanie rozbudowanego uwierzytelniania Clerk z niestandardowymi rolami wymagało przemyślanej architektury UX.",
      "Integracja generatora odpowiedzi AI wymagała obsługi limitów zapytań (rate limiting) i odpowiedniego prezentowania wyników użytkownikom.",
      "Stworzenie szybkiego i wydajnego wyszukiwania w bazie danych wymagało precyzyjnego modelowania i buforowania danych (caching).",
      "Utrzymanie spójności projektu przy jednoczesnym dopracowaniu trybu ciemnego i jasnego wymagało rozbudowania systemu stylów."
    ],
    finalSiteCta: "Odwiedź stronę"
  }
};

import { projectCaseStudies } from "./data";

export const projectCaseStudiesPl = projectCaseStudies.map((project) => {
  const trans = projectCaseStudiesTranslationsPl[project.slug];
  if (!trans) return project;
  return {
    ...project,
    heroTagline: trans.heroTagline,
    metadata: trans.metadata,
    overview: trans.overview,
    problem: trans.problem,
    features: trans.features,
    learnings: trans.learnings,
    challenges: trans.challenges,
    finalSite: {
      ...project.finalSite,
      ctaText: trans.finalSiteCta ?? "Odwiedź stronę"
    }
  };
});

export const getProjectCaseStudyPl = (slug: string) =>
  projectCaseStudiesPl.find((project) => project.slug === slug);

export const curiositiesPl = [
  "W liceum profilowałem się z geografii i języków obcych",
  "Moim ulubionym owocem są winogrona 🍇",
  "Moja przygoda z programowaniem zaczęła się od Javy w 2020 roku 🧑‍💻",
  "Moim wymarzonym miejscem do życia jest San Diego w Kalifornii, ponieważ uwielbiam słońce 🌻",
  "Trenuję kalistenikę 💪 od 2016 roku, ale z dość długimi przerwami",
  "Chcę tylko, żebyś wiedział/a, że życzę Ci wszystkiego najlepszego 🍀",
  "Jestem wielkim fanem Gry o Tron i przeczytałem wszystkie książki 📚",
  "Design tej strony nazywa się Neo-brutalizmem z akcentami Glassmorfizmu",
  "Poważnie, wciąż tu zaglądasz? 🤔",
  "Jeśli chcesz dowiedzieć się o mnie więcej, po prostu napisz na moich socialach",
  "Ukończyłem studia licencjackie ze średnią ocen 4.52 w skali do 5.0 🤓",
  "Staram się uczyć nowych technologii, takich jak AWS i Docker 🤓",
  "Uwielbiam gatunek muzyki Pop Punk 🎸",
  "Planuję tworzyć projekty SaaS",
  "Jeśli to czytasz, połączmy się na socialach!",
];
