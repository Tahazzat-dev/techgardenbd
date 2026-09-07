"use client";

import { BtnSubmit } from "@/components/buttons/action-buttons";
import { SectionHeading } from "@/components/sections/section-heading";
import { FormField } from "@/components/shared/form-field";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitProductLead } from "@/lib/api/lead";
import { type Locale } from "@/lib/i18n/types";
import { defaultLeadValues, leadSchema, type LeadFormValues } from "@/lib/schemas/lead";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type LeadFormProps = {
  productSlug: string;
  productName: string;
  locale: Locale;
};

export function LeadForm({productSlug, productName, locale}: LeadFormProps) {
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
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Demo"
          title={`Get a ${productName} walkthrough`}
          description="Share a bit of context and we will follow up with a focused product demo."
        />
        <Card>
          <form className="space-y-4" onSubmit={form.handleSubmit(submit)}>
            <ToastContainer position="bottom-right" theme="colored" />
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="Full Name" error={form.formState.errors.fullName?.message}>
                <Input {...form.register("fullName")} />
              </FormField>
              <FormField label="Work Email" error={form.formState.errors.email?.message}>
                <Input type="email" {...form.register("email")} />
              </FormField>
            </div>
            <FormField label="Company" error={form.formState.errors.companyName?.message}>
              <Input {...form.register("companyName")} />
            </FormField>
            <FormField label="What do you want to see?" error={form.formState.errors.message?.message}>
              <Textarea className="min-h-32" {...form.register("message")} />
            </FormField>
            <input type="hidden" {...form.register("productSlug")} />
            <BtnSubmit
              label={isSubmitting ? "Submitting..." : "Request a demo"}
              disabled={isSubmitting}
              showIcon={false}
            />
          </form>
        </Card>
      </div>
    </Section>
  );
}
