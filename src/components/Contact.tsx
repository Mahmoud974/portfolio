"use client";
import React, { useState } from "react";
import { z } from "zod";
import WordRotate from "./ui/word-rotate";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(1, "Message is required").max(5000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
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
      if (flat.fieldErrors.subject?.[0]) newErrors.subject = flat.fieldErrors.subject[0];
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
        throw new Error(data?.error || "Failed to send message");
      }
      setStatus("success");
      setServerMessage("Votre message a été envoyé avec succès.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setServerMessage((err as Error).message || "Une erreur est survenue.");
    }
  };
  return (
    <div className="mb-12">
      <div className="md:flex hidden text-center mx-auto font-bold justify-center -mt-6 -mb-16">
        <WordRotate
          className="text-[7rem] uppercase font-[800] text-white dark:text-white"
          words={["CONTACTEZ"]}
        />
        <WordRotate
          className="text-[7rem] ml-2  uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["MOI"]}
        />
      </div>
      <div>
      
      </div>
      <p className="w-3/3 mt-9 md:text-3xl text-md text-left text-white">
  Envie de collaborer sur un site moderne, une app ou un design unique ? 
  Je suis disponible pour vos projets. 🚀
</p>


      <div className="  mx-auto w-full   font-[sans-serif]">
        <form className="mt-8 space-y-4 " onSubmit={onSubmit}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={onChange}
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={onChange}
              className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={form.message}
              onChange={onChange}
              className="w-full rounded-md px-4  bg-gray-900 focus:bg-transparent text-sm pt-3 outline-blue-500"
              aria-invalid={!!errors.message}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="text-black bg-[#04F7A4] hover:bg-[#1c6d52] disabled:opacity-60 tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            {status === "submitting" ? "Envoi..." : "Submit"}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-sm">{serverMessage}</p>
          )}
          {status === "error" && serverMessage && (
            <p className="text-red-400 text-sm">{serverMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
