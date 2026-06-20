"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
  useExpandableScreen,
} from "@/components/ui/expandable-screen";
import Grainient from "@/components/ui/grainient";
import { TbMailShare } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { usePathname } from "next/navigation";

const getContactSchema = (isPolish: boolean) =>
  z.object({
    email: z
      .string()
      .email(isPolish ? "Niepoprawny adres e-mail" : "Invalid email address"),
    message: z
      .string()
      .min(
        10,
        isPolish
          ? "Wiadomość musi mieć co najmniej 10 znaków"
          : "Message must be at least 10 characters long"
      ),
    website: z.string().optional(), // Honeypot field - should be empty
  });

type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;

const ContactDrawer = () => {
  const pathname = usePathname();
  const isPolish = pathname.startsWith("/pl");

  return (
    <ExpandableScreen
      layoutId="contact-expandable-screen"
      triggerRadius="16px"
      contentRadius="24px"
    >
      <ExpandableScreenTrigger>
        <button className="mb-10 md:mb-0 flex justify-center items-end gap-3 rounded-2xl p-2 bg-white/20 hover:bg-white/40 transition-all duration-300 group cursor-pointer">
          <span className="text-3xl font-bold">
            {isPolish ? "Napisz do mnie" : "Contact Me"}
          </span>
          <TbMailShare className="text-3xl shrink-0 mb-1 text-indigo-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </ExpandableScreenTrigger>

      <ExpandableScreenContent className="bg-primary" showCloseButton>
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
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-y-auto p-4">
          <ContactForm />
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};

export const ContactForm = () => {
  const pathname = usePathname();
  const isPolish = pathname.startsWith("/pl");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "rate-limited"
  >("idle");
  const { collapse } = useExpandableScreen();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(getContactSchema(isPolish)),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Bot protection: if honeypot field is filled, it's likely a bot
    if (data.website && data.website.trim() !== "") {
      console.log("Bot detected - honeypot field filled");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          message: data.message,
          website: data.website || "", // Include honeypot for server-side validation
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => {
          collapse();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        if (response.status === 429) {
          setSubmitStatus("rate-limited");
        } else {
          setSubmitStatus("error");
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="z-20 mx-auto w-full max-w-md rounded-2xl border border-white/20 bg-black/35 p-4 shadow-2xl backdrop-blur-md md:p-8">
      <h2 className="text-xl font-semibold text-white">
        {isPolish ? "Napisz do mnie" : "Get in touch"}
      </h2>
      <p className="mt-2 text-sm text-white/80">
        {isPolish
          ? "Wyślij mi wiadomość, a odpowiem tak szybko, jak to możliwe."
          : "Send me a message and I'll get back to you as soon as possible."}
      </p>
      <p className="mt-1 text-sm text-white/70">
        {isPolish
          ? "Chcesz podobną stronę? Wyślij zapytanie e-mailem."
          : "Want a project like this? Send your inquiry by email."}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white"
          >
            {isPolish ? "Twój e-mail" : "Your email"}
          </label>
          <Input
            id="email"
            type="email"
            placeholder={isPolish ? "[ADRES_EMAIL]" : "[EMAIL_ADDRESS]"}
            {...register("email")}
            className={`border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:border-white/60 focus:ring-white/30 ${
              errors.email ? "border-red-400" : ""
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-200">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white"
          >
            {isPolish ? "Wiadomość" : "Message"}
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder={
              isPolish ? "W czym mogę Ci pomóc?" : "How can I help you?"
            }
            {...register("message")}
            className={`w-full resize-none rounded-md border border-white/30 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 ${
              errors.message ? "border-red-400" : ""
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-200">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Honeypot field hidden from humans; bots often fill it. */}
        <div
          className="pointer-events-none absolute left-[-9999px] opacity-0"
          aria-hidden="true"
        >
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            type="text"
            {...register("website")}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="text-xs text-white/70 text-center mt-4 mb-4">
          {isPolish ? (
            <span>
              Wysyłając formularz, akceptujesz{" "}
              <Link
                href="/pl/privacy-policy"
                className="underline hover:text-white transition-colors duration-200"
              >
                Politykę Prywatności
              </Link>
              .
            </span>
          ) : (
            <span>
              By submitting the form, you accept the{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              .
            </span>
          )}
        </div>

        {submitStatus === "success" && (
          <div className="rounded-lg bg-green-500/20 p-3 text-sm font-medium text-green-100">
            {isPolish
              ? "Wiadomość wysłana pomyślnie!"
              : "Message sent successfully!"}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="rounded-lg bg-red-500/20 p-3 text-sm font-medium text-red-100">
            {isPolish
              ? "Błąd wysyłania wiadomości. Spróbuj ponownie."
              : "Error sending message. Please try again."}
          </div>
        )}

        {submitStatus === "rate-limited" && (
          <div className="rounded-lg bg-yellow-500/20 p-3 text-sm font-medium text-yellow-100">
            {isPolish
              ? "Zbyt wiele prób. Odczekaj chwilę."
              : "Too many requests. Please wait before sending another message."}
          </div>
        )}

        <button
          disabled={isSubmitting}
          className="w-full rounded-md bg-indigo-400 px-4 py-2 font-medium text-black transition-all duration-300 hover:bg-indigo-300 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
          type="submit"
        >
          {isSubmitting
            ? isPolish
              ? "Wysyłanie..."
              : "Sending..."
            : isPolish
            ? "Wyślij wiadomość"
            : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default ContactDrawer;
