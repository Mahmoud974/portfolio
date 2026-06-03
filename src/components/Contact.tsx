"use client";

import React, { useState } from "react";
import { z } from "zod";
import WordRotate from "./ui/word-rotate";

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
    <div className="pb-8 sm:pb-12">
      <div className="hidden md:flex flex-wrap justify-center gap-x-2 text-center mx-auto font-extrabold uppercase -mt-8 lg:-mt-12 mb-6 lg:mb-12">
        <WordRotate
          className="text-5xl lg:text-7xl xl:text-[7.5rem] leading-none text-white"
          words={["CONTACTEZ"]}
        />
        <WordRotate
          className="text-5xl lg:text-7xl xl:text-[7.5rem] leading-none text-[#04F7A4] ml-2"
          words={["MOI"]}
        />
      </div>
      <h2 className="md:hidden mt-6 mb-6 text-4xl sm:text-5xl uppercase font-extrabold text-center text-white">
        CONTACT <span className="text-[#04F7A4]">MOI</span>
      </h2>

      <p className="mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl text-center md:text-left text-white leading-relaxed">
        Envie de collaborer sur un site moderne, une app ou un design unique ? Je
        suis disponible pour vos projets.
      </p>

      <form className="mt-6 sm:mt-8 max-w-xl md:max-w-none space-y-4" onSubmit={onSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Nom"
            value={form.name}
            onChange={onChange}
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            value={form.message}
            onChange={onChange}
            className={`${inputClass} pt-3 resize-y min-h-[120px]`}
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message}</p>
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
