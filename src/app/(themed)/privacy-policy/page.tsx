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
  title: "Privacy Policy | Szymon Grzesiak",
  description: "Privacy Policy and GDPR compliance details for the contact form of Szymon Grzesiak's portfolio website. Learn how your personal data is handled and protected.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Szymon Grzesiak",
    description: "Privacy Policy and GDPR compliance details for the contact form of Szymon Grzesiak's portfolio website. Learn how your personal data is handled and protected.",
    url: `${siteConfig.url}/privacy-policy`,
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
    <main className="px-6 md:pl-[130px] container relative mx-auto w-full flex-1 justify-center py-6 lg:pb-10 pr-5 z-10">
      <article className="relative container px-6 py-10 prose max-w-5xl mx-auto bg-white/90 rounded-xl shadow-[4px_4px] border-2 border-black">
        <div className="bg-white/95 backdrop-blur-md z-20 py-3 -mx-6 px-6 -mt-10 mb-8 border-b-2 border-black rounded-t-xl not-prose">
          <Breadcrumb className="relative">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-indigo-500 hover:bg-indigo-50 px-2 py-1 rounded-lg duration-300 text-slate-700 text-sm font-semibold"
                  href="/"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-indigo-500 text-sm font-bold">
                  Privacy Policy
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Privacy Policy (GDPR / RODO)</h1>
        
        <p className="text-sm text-slate-500 mb-8">Last updated: June 19, 2026</p>

        <section className="space-y-6 text-slate-800">
          <div>
            <h2 className="text-xl font-bold mb-2">1. Data Controller</h2>
            <p>
              The administrator of your personal data is <strong>Szymon Grzesiak</strong>, a Full Stack Developer based in Poland. You can contact me regarding any privacy concerns at my email address or via the contact form.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">2. What Data is Processed & Purpose</h2>
            <p>
              When using the contact form, you provide your <strong>email address</strong> and the <strong>content of your message</strong>.
            </p>
            <p className="mt-2">
              This data is processed solely for the purpose of:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Answering your inquiries, answering questions, or discussing potential project collaborations.</li>
              <li>Transient transmission of the contact form message directly to my private inbox.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">3. Data Storage (No Database Storage)</h2>
            <p>
              To ensure maximum safety and respect for your privacy, <strong>I do not save or store your email address or message content in any database</strong>.
            </p>
            <p className="mt-2">
              The contact form uses a transient backend endpoint that instantly forwards the submitted details directly to my private email inbox via nodemailer/SMTP. Once the email is successfully dispatched, the form data is wiped from the server context and not kept in any database.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">4. Legal Basis for Processing</h2>
            <p>
              The processing of your data is based on your consent (Article 6(1)(a) of the GDPR) expressed by sending the message, and my legitimate interest to answer messages sent to me (Article 6(1)(f) of the GDPR).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">5. Data Retention</h2>
            <p>
              The messages sent to my email inbox will be kept for as long as necessary to handle your inquiry, maintain communication, or until you request their deletion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">6. Your Rights</h2>
            <p>
              According to the GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Request access to, rectification of, or erasure of your personal data from my email archives.</li>
              <li>Withdraw your consent to processing at any time (without affecting the lawfulness of processing based on consent before its withdrawal).</li>
              <li>File a complaint with a supervisory authority (e.g., President of the Personal Data Protection Office - UODO in Poland).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">7. Security</h2>
            <p>
              I take standard technical and organizational precautions to protect all forwarded messages, including using secure SSL/TLS connections for transmission and secure access to my private email mailbox.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
