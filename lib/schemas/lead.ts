import {z} from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Enter a valid work email."),
  companyName: z.string().min(2, "Company name is required."),
  message: z.string().min(12, "Tell us a little about what you need."),
  productSlug: z.string().min(1),
  locale: z.enum(["en", "bn"]),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

export const defaultLeadValues: Omit<LeadFormValues, "productSlug"> = {
  fullName: "",
  email: "",
  companyName: "",
  message: "",
  locale: "en",
};
