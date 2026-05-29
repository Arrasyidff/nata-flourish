"use client";

import { useState } from "react";
import { submitContact, type ContactFormData } from "@/services/contact.service";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitContact(form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {(["name", "email", "phone"] as const).map((field) => (
        <input
          key={field}
          type={field === "email" ? "email" : "text"}
          placeholder={field === "name" ? "Nama" : field === "email" ? "Email" : "Nomor Telepon"}
          value={form[field]}
          onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))}
          required={field !== "phone"}
          className="w-full border border-green-light-active rounded-card px-4 py-3 text-body-1 focus:outline-none focus:border-green-normal transition-colors"
        />
      ))}
      <textarea
        placeholder="Pesan"
        rows={5}
        value={form.message}
        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
        required
        className="w-full border border-green-light-active rounded-card px-4 py-3 text-body-1 resize-none focus:outline-none focus:border-green-normal transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center min-w-[155px] self-start px-4 py-[14px] rounded-button bg-green-normal text-white text-btn uppercase hover:bg-green-normal-hover transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
      </button>
      {status === "success" && (
        <p className="text-body-2 text-green-normal">Pesan berhasil dikirim!</p>
      )}
      {status === "error" && (
        <p className="text-body-2 text-destructive">Gagal mengirim pesan. Coba lagi.</p>
      )}
    </form>
  );
}
