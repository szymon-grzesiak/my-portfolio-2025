import { Metadata } from "next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Szymon Grzesiak",
  description: "Polityka prywatności i informacje o RODO dotyczące formularza kontaktowego w portfolio Szymona Grzesiaka.",
  alternates: {
    canonical: `${siteConfig.url}/pl/privacy-policy`,
  },
  openGraph: {
    title: "Polityka Prywatności | Szymon Grzesiak",
    description: "Polityka prywatności i informacje o RODO dotyczące formularza kontaktowego w portfolio Szymona Grzesiaka.",
    url: `${siteConfig.url}/pl/privacy-policy`,
    type: "website",
    images: [
      {
        url: "https://szymongrzesiak.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Szymon Grzesiak Portfolio",
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative purple-haze min-h-screen">
      <main className="px-6 md:pl-[130px] container relative mx-auto w-full flex-1 justify-center py-6 lg:pb-10 pr-5 z-10">
        <article className="relative container px-6 py-10 prose max-w-5xl mx-auto bg-white/90 rounded-xl shadow-[4px_4px] border-2 border-black">
          <div className="bg-white/95 backdrop-blur-md z-20 py-3 -mx-6 px-6 -mt-10 mb-8 border-b-2 border-black rounded-t-xl not-prose">
            <Breadcrumb className="relative">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="hover:text-indigo-500 hover:bg-indigo-50 px-2 py-1 rounded-lg duration-300 text-slate-700 text-sm font-semibold"
                    href="/pl"
                  >
                    Główna
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-indigo-500 text-sm font-bold">
                    Polityka Prywatności
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Polityka Prywatności (RODO / GDPR)</h1>
          
          <p className="text-sm text-slate-500 mb-8">Ostatnia aktualizacja: 19 czerwca 2026</p>

          <section className="space-y-6 text-slate-800">
            <div>
              <h2 className="text-xl font-bold mb-2">1. Administrator Danych Osobowych</h2>
              <p>
                Administratorem Twoich danych osobowych jest <strong>Szymon Grzesiak</strong>, programista z Polski. W sprawach związanych z ochroną danych możesz skontaktować się ze mną pod moim adresem e-mail lub poprzez formularz kontaktowy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">2. Rodzaj Przetwarzanych Danych i Cel</h2>
              <p>
                Korzystając z formularza kontaktowego, podajesz swój <strong>adres e-mail</strong> oraz <strong>treść wiadomości</strong>.
              </p>
              <p className="mt-2">
                Dane te są przetwarzane wyłącznie w celu:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Odpowiedzi na Twoje zapytanie, kontakt zwrotny lub omówienie potencjalnej współpracy przy projektach.</li>
                <li>Przekazania treści formularza bezpośrednio na moją prywatną skrzynkę pocztową.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">3. Przechowywanie Danych (Brak Zapisu w Bazie Danych)</h2>
              <p>
                W trosce o maksymalne bezpieczeństwo i prywatność, <strong>nie zapisuję ani nie przechowuję Twojego adresu e-mail ani treści wiadomości w żadnej bazie danych</strong>.
              </p>
              <p className="mt-2">
                Formularz kontaktowy przesyła treść zapytania bezpośrednio na moją prywatną skrzynkę e-mail za pośrednictwem bezpiecznego połączenia (nodemailer/SMTP). Po wysłaniu e-maila, dane te są czyszczone z pamięci tymczasowej serwera i nigdzie nie są archiwizowane w bazach danych serwisu.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">4. Podstawa Prawna Przetwarzania</h2>
              <p>
                Podstawą prawną przetwarzania Twoich danych jest Twoja zgoda (art. 6 ust. 1 lit. a RODO) wyrażona poprzez wysłanie wiadomości oraz mój prawnie uzasadniony interes polegający na udzielaniu odpowiedzi na kierowane zapytania (art. 6 ust. 1 lit. f RODO).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">5. Okres Przechowywania Danych</h2>
              <p>
                Wiadomości otrzymane w mojej skrzynce e-mail będą przechowywane przez okres niezbędny do obsługi zapytania, prowadzenia korespondencji lub do momentu zgłoszenia przez Ciebie żądania ich usunięcia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">6. Twoje Prawa</h2>
              <p>
                Zgodnie z RODO przysługuje Ci prawo do:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Żądania dostępu do swoich danych, ich sprostowania lub usunięcia z moich prywatnych archiwów pocztowych.</li>
                <li>Wycofania zgody na przetwarzanie danych w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem).</li>
                <li>Wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (PUODO).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">7. Bezpieczeństwo</h2>
              <p>
                Stosuję odpowiednie środki techniczne i organizacyjne chroniące przesyłane wiadomości, w tym szyfrowanie SSL/TLS podczas wysyłki formularza oraz bezpieczny dostęp do mojej prywatnej skrzynki pocztowej.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
