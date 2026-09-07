"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";

import {BtnSubmit} from "@/components/buttons/action-buttons";
import {FormError, FormField} from "@/components/shared/form-field";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {NativeSelect} from "@/components/ui/native-select";
import {Textarea} from "@/components/ui/textarea";
import {submitDiscoveryInquiry} from "@/lib/api/discovery";
import {type Locale} from "@/lib/i18n/types";
import {
  defaultDiscoveryValues,
  discoverySchema,
  type DiscoveryFormValues,
} from "@/lib/schemas/discovery";
import {setStep, updateValues} from "@/lib/store/discovery-slice";
import type {AppDispatch, RootState} from "@/lib/store/store";
import {cn} from "@/lib/utils";
import "react-toastify/dist/ReactToastify.css";

const steps = ["Contact", "Project", "Budget", "Context", "Review"];

const serviceOptions = ["Product Strategy", "UI/UX Design", "Next.js Frontend", "Laravel API Integration"];

type DiscoveryFormProps = {
  locale: Locale;
};

export function DiscoveryForm({locale}: DiscoveryFormProps) {
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
    <Card>
      <CardContent className="space-y-0 p-0">
        <ToastContainer position="bottom-right" theme="colored" />
        <div className="grid gap-2 sm:grid-cols-5" aria-label="Discovery form steps">
          {steps.map((label, index) => (
            <Button
              key={label}
              type="button"
              variant={step === index ? "default" : "outline"}
              size="sm"
              onClick={() => persistAndMove(index)}
              className={cn(step !== index && "bg-background")}
            >
              {label}
            </Button>
          ))}
        </div>

        <form className="mt-8 space-y-6" onSubmit={form.handleSubmit(submit)}>
          {step === 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="Full Name" error={form.formState.errors.fullName?.message}>
                <Input {...form.register("fullName")} />
              </FormField>
              <FormField label="Business Email" error={form.formState.errors.email?.message}>
                <Input type="email" {...form.register("email")} />
              </FormField>
              <FormField label="Company/Product Name" error={form.formState.errors.companyName?.message}>
                <Input {...form.register("companyName")} />
              </FormField>
              <FormField label="Website" error={form.formState.errors.website?.message}>
                <Input placeholder="https://example.com" {...form.register("website")} />
              </FormField>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="Project Type" error={form.formState.errors.projectType?.message}>
                <NativeSelect {...form.register("projectType")}>
                  <option value="">Select one</option>
                  <option>MVP Build</option>
                  <option>Scaling Existing SaaS</option>
                  <option>Redesign</option>
                </NativeSelect>
              </FormField>
              <FormField label="Product Stage" error={form.formState.errors.productStage?.message}>
                <NativeSelect {...form.register("productStage")}>
                  <option value="">Select one</option>
                  <option>Idea</option>
                  <option>Prototype</option>
                  <option>Live Product</option>
                </NativeSelect>
              </FormField>
              <div className="md:col-span-2">
                <Label>Services Needed</Label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {serviceOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3 rounded-md border p-3 text-sm">
                      <input type="checkbox" value={option} {...form.register("servicesNeeded")} />
                      {option}
                    </label>
                  ))}
                </div>
                <FormError message={form.formState.errors.servicesNeeded?.message} />
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="Budget Range" error={form.formState.errors.budgetRange?.message}>
                <NativeSelect {...form.register("budgetRange")}>
                  <option value="">Select one</option>
                  <option>$5k-$10k</option>
                  <option>$10k-$25k</option>
                  <option>$25k+</option>
                </NativeSelect>
              </FormField>
              <FormField label="Timeline" error={form.formState.errors.timeline?.message}>
                <NativeSelect {...form.register("timeline")}>
                  <option value="">Select one</option>
                  <option>ASAP</option>
                  <option>1-3 months</option>
                  <option>3+ months</option>
                </NativeSelect>
              </FormField>
              <FormField
                label="Preferred Contact Method"
                error={form.formState.errors.preferredContactMethod?.message}
              >
                <NativeSelect {...form.register("preferredContactMethod")}>
                  <option value="">Select one</option>
                  <option>Email</option>
                  <option>Video Call</option>
                  <option>WhatsApp</option>
                </NativeSelect>
              </FormField>
            </div>
          ) : null}

          {step === 3 ? (
            <FormField label="Project Context" error={form.formState.errors.projectContext?.message}>
              <Textarea className="min-h-40" {...form.register("projectContext")} />
            </FormField>
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
            <Button
              type="button"
              variant="outline"
              disabled={step === 0}
              onClick={() => persistAndMove(Math.max(step - 1, 0))}
            >
              Back
            </Button>

            {step < steps.length - 1 ? (
              <Button type="button" onClick={() => persistAndMove(Math.min(step + 1, steps.length - 1))}>
                Continue
              </Button>
            ) : (
              <BtnSubmit
                label={isSubmitting ? "Submitting..." : "Submit Inquiry"}
                disabled={isSubmitting}
                showIcon={false}
              />
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
