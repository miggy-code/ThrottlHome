"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData, topicOptions } from "@/lib/schemas";
import { FORMSPREE } from "@/lib/constants";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-[4px] border border-gridline bg-wash px-4 py-3 font-sans text-base text-ink transition-all duration-150 placeholder:text-charcoal/40 focus:border-blueprint focus:outline-none focus:ring-[3px] focus:ring-blueprint/15";

const labelBase = "block font-sans text-sm font-medium text-ink mb-1.5";

const errorBase = "mt-1 font-sans text-[13px] text-error";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      topic: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE.contactId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
          <svg className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-sans text-lg font-semibold text-ink">Message Sent</p>
        <p className="mt-2 text-charcoal">
          Thank you. Gabriel will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelBase}>Name *</label>
        <input
          id="name"
          type="text"
          className={cn(fieldBase, errors.name && "border-error")}
          {...register("name")}
        />
        {errors.name && <p className={errorBase}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelBase}>Email *</label>
        <input
          id="email"
          type="email"
          className={cn(fieldBase, errors.email && "border-error")}
          {...register("email")}
        />
        {errors.email && <p className={errorBase}>{errors.email.message}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelBase}>Company Name</label>
        <input
          id="company"
          type="text"
          className={fieldBase}
          {...register("company")}
        />
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className={labelBase}>Your Role / Title</label>
        <input
          id="role"
          type="text"
          className={fieldBase}
          {...register("role")}
        />
      </div>

      {/* Topic */}
      <div>
        <label htmlFor="topic" className={labelBase}>What can we help with? *</label>
        <select
          id="topic"
          className={cn(fieldBase, "appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat", errors.topic && "border-error")}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%233D4F5F' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          }}
          defaultValue=""
          {...register("topic")}
        >
          <option value="" disabled>Select a topic&hellip;</option>
          {topicOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.topic && <p className={errorBase}>{errors.topic.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelBase}>Tell us more</label>
        <textarea
          id="message"
          rows={4}
          className={cn(fieldBase, "resize-y")}
          {...register("message")}
        />
      </div>

      {/* Submit */}
      {submitError && (
        <p className="font-sans text-sm text-error">{submitError}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-[4px] bg-blueprint px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.05em] text-white transition-all duration-150 hover:bg-blueprint-hover hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending&hellip;
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
