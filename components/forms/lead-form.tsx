"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from "react-toastify";
import {submitProductLead} from "@/lib/api/lead";
import type {Locale} from "@/lib/i18n";
import {defaultLeadValues, leadSchema, type LeadFormValues} from "@/lib/schemas/lead";
import {SectionHeading} from "@/components/sections/section-heading";
import "react-toastify/dist/ReactToastify.css";

type LeadFormProps = {
  locale: Locale;
  productSlug: string;
  productName: string;
};

export function LeadForm({locale, productSlug, productName}: LeadFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {...defaultLeadValues, locale, productSlug},
    mode: "onBlur",
  });

  async function submit(values: LeadFormValues) {
    setIsSubmitting(true);

    try {
      const response = await submitProductLead(values);
      toast.success(response.message);
      router.push(`/confirmation?product=${productSlug}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Submission failed. Please review the form.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Demo"
          title={`Get a ${productName} walkthrough`}
          description="Share a bit of context and we will follow up with a focused product demo."
        />
        <form
          className="space-y-4 rounded-md border bg-card p-5 text-card-foreground md:p-6"
          onSubmit={form.handleSubmit(submit)}
        >
          <ToastContainer position="bottom-right" theme="colored" />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full Name" error={form.formState.errors.fullName?.message}>
              <input className="field" {...form.register("fullName")} />
            </Field>
            <Field label="Work Email" error={form.formState.errors.email?.message}>
              <input className="field" type="email" {...form.register("email")} />
            </Field>
          </div>
          <Field label="Company" error={form.formState.errors.companyName?.message}>
            <input className="field" {...form.register("companyName")} />
          </Field>
          <Field label="What do you want to see?" error={form.formState.errors.message?.message}>
            <textarea className="field min-h-32" {...form.register("message")} />
          </Field>
          <input type="hidden" {...form.register("productSlug")} />
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Request a demo"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: Readonly<{label: string; error?: string; children: React.ReactNode}>) {
  return (
    <label className="block text-sm font-medium">
      <span>{label}</span>
      <span className="mt-2 block">{children}</span>
      {error ? <p className="mt-2 text-sm text-red-500">{error}</p> : null}
    </label>
  );
}
