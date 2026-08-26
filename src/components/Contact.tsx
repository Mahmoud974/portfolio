"use client";

import React, { useState } from "react";
import { z } from "zod";
import SectionHeading from "./SectionHeading";
 

const ContactSchema = z.object({
  name: z.string().min(1, "Le nom est requis").max(100),
  email: z.string().email("Adresse e-mail invalide"),
  message: z.string().min(1, "Le message est requis").max(5000),
});

const inputClass =
  "w-full rounded-md py-3 px-4 text-white bg-gray-900/80 border border-white/10 focus:border-[#04F7A4]/50 focus:bg-transparent text-sm outline-none transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerMessage("");

    const parsed = ContactSchema.safeParse(form);
    if (!parsed.success) {
      const flat = parsed.error.flatten();
      const newErrors: Record<string, string> = {};
      if (flat.fieldErrors.name?.[0]) newErrors.name = flat.fieldErrors.name[0];
      if (flat.fieldErrors.email?.[0]) newErrors.email = flat.fieldErrors.email[0];
      if (flat.fieldErrors.message?.[0]) newErrors.message = flat.fieldErrors.message[0];
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Échec de l'envoi du message");
      }
      setStatus("success");
      setServerMessage("Votre message a été envoyé avec succès.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setServerMessage((err as Error).message || "Une erreur est survenue.");
    }
  };

  return (
    <div className="pb-8 mt-12 sm:mt-16 sm:pb-12">
      <SectionHeading number="04" label="Contact" title="contactez-moi" />

      <p className="mt-4 text-base sm:text-lg md:text-2xl lg:text-1xl text-center md:text-left text-white leading-relaxed">
      {`  Un besoin d' infra cloud, de CI/CD ou d' accompagnement DevOps ?
        Écrivez-moi, je suis disponible pour échanger.`}
      </p>

      <form
        className="mt-6 sm:mt-8 max-w-xl md:max-w-none space-y-4"
        onSubmit={onSubmit}
        noValidate
      >
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Nom
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Nom"
            autoComplete="name"
            value={form.name}
            onChange={onChange}
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-red-400 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            value={form.email}
            onChange={onChange}
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-red-400 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Message"
            rows={6}
            value={form.message}
            onChange={onChange}
            className={`${inputClass} pt-3 resize-y min-h-[120px]`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message && (
            <p id="contact-message-error" className="text-red-400 text-xs mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="text-black bg-[#04F7A4] hover:bg-[#03d98f] disabled:opacity-60 tracking-wide rounded-md text-sm px-4 py-3 w-full sm:w-auto sm:min-w-[160px] transition-colors"
        >
          {status === "submitting" ? "Envoi..." : "Envoyer"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm">{serverMessage}</p>
        )}
        {status === "error" && serverMessage && (
          <p className="text-red-400 text-sm">{serverMessage}</p>
        )}
      </form>
    </div>
  );
}
