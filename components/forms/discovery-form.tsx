"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {submitDiscoveryInquiry} from "@/lib/api/discovery";
import type {Locale} from "@/lib/i18n";
import {
  defaultDiscoveryValues,
  discoverySchema,
  type DiscoveryFormValues,
} from "@/lib/schemas/discovery";
import {setStep, updateValues} from "@/lib/store/discovery-slice";
import type {AppDispatch, RootState} from "@/lib/store/store";
import "react-toastify/dist/ReactToastify.css";

const steps = ["Contact", "Project", "Budget", "Context", "Review"];

const serviceOptions = ["Product Strategy", "UI/UX Design", "Next.js Frontend", "Laravel API Integration"];

export function DiscoveryForm({locale}: Readonly<{locale: Locale}>) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {step, values} = useSelector((state: RootState) => state.discovery);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DiscoveryFormValues>({
    resolver: zodResolver(discoverySchema),
    defaultValues: {...defaultDiscoveryValues, ...values, locale},
    mode: "onBlur",
  });

  const currentValues = form.watch();

  function persistAndMove(nextStep: number) {
    dispatch(updateValues(currentValues));
    dispatch(setStep(nextStep));
  }

  async function submit(valuesToSubmit: DiscoveryFormValues) {
    setIsSubmitting(true);
    dispatch(updateValues(valuesToSubmit));

    try {
      const response = await submitDiscoveryInquiry(valuesToSubmit);
      toast.success(response.message);
      router.push("/confirmation");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Submission failed. Please review the form.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-md border bg-card p-5 text-card-foreground md:p-6">
      <ToastContainer position="bottom-right" theme="colored" />
      <div className="grid gap-2 sm:grid-cols-5" aria-label="Discovery form steps">
        {steps.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => persistAndMove(index)}
            className={`rounded-md border px-3 py-2 text-sm font-medium ${
              step === index ? "border-primary bg-primary text-primary-foreground" : "bg-background"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(submit)}>
        {step === 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full Name" error={form.formState.errors.fullName?.message}>
              <input className="field" {...form.register("fullName")} />
            </Field>
            <Field label="Business Email" error={form.formState.errors.email?.message}>
              <input className="field" type="email" {...form.register("email")} />
            </Field>
            <Field label="Company/Product Name" error={form.formState.errors.companyName?.message}>
              <input className="field" {...form.register("companyName")} />
            </Field>
            <Field label="Website" error={form.formState.errors.website?.message}>
              <input className="field" placeholder="https://example.com" {...form.register("website")} />
            </Field>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Project Type" error={form.formState.errors.projectType?.message}>
              <select className="field" {...form.register("projectType")}>
                <option value="">Select one</option>
                <option>MVP Build</option>
                <option>Scaling Existing SaaS</option>
                <option>Redesign</option>
              </select>
            </Field>
            <Field label="Product Stage" error={form.formState.errors.productStage?.message}>
              <select className="field" {...form.register("productStage")}>
                <option value="">Select one</option>
                <option>Idea</option>
                <option>Prototype</option>
                <option>Live Product</option>
              </select>
            </Field>
            <div className="md:col-span-2">
              <p className="text-sm font-medium">Services Needed</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {serviceOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 rounded-md border p-3 text-sm">
                    <input type="checkbox" value={option} {...form.register("servicesNeeded")} />
                    {option}
                  </label>
                ))}
              </div>
              <ErrorText message={form.formState.errors.servicesNeeded?.message} />
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Budget Range" error={form.formState.errors.budgetRange?.message}>
              <select className="field" {...form.register("budgetRange")}>
                <option value="">Select one</option>
                <option>$5k-$10k</option>
                <option>$10k-$25k</option>
                <option>$25k+</option>
              </select>
            </Field>
            <Field label="Timeline" error={form.formState.errors.timeline?.message}>
              <select className="field" {...form.register("timeline")}>
                <option value="">Select one</option>
                <option>ASAP</option>
                <option>1-3 months</option>
                <option>3+ months</option>
              </select>
            </Field>
            <Field label="Preferred Contact Method" error={form.formState.errors.preferredContactMethod?.message}>
              <select className="field" {...form.register("preferredContactMethod")}>
                <option value="">Select one</option>
                <option>Email</option>
                <option>Video Call</option>
                <option>WhatsApp</option>
              </select>
            </Field>
          </div>
        ) : null}

        {step === 3 ? (
          <Field label="Project Context" error={form.formState.errors.projectContext?.message}>
            <textarea className="field min-h-40" {...form.register("projectContext")} />
          </Field>
        ) : null}

        {step === 4 ? (
          <div className="rounded-md bg-muted p-5 text-sm">
            <h2 className="text-lg font-semibold text-foreground">Review your inquiry</h2>
            <dl className="mt-4 grid gap-3 md:grid-cols-2">
              {Object.entries(currentValues).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-medium text-foreground">{key}</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {Array.isArray(value) ? value.join(", ") : value || "Not provided"}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}

        <div className="flex flex-wrap justify-between gap-3">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => persistAndMove(Math.max(step - 1, 0))}
            className="rounded-md border bg-card px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50"
          >
            Back
          </button>

          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={() => persistAndMove(Math.min(step + 1, steps.length - 1))}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          )}
        </div>
      </form>
    </div>
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
      <ErrorText message={error} />
    </label>
  );
}

function ErrorText({message}: Readonly<{message?: string}>) {
  return message ? <p className="mt-2 text-sm text-red-500">{message}</p> : null;
}
