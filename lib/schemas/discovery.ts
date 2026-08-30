import {z} from "zod";

export const discoverySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Enter a valid business email."),
  companyName: z.string().min(2, "Company or product name is required."),
  website: z.string().url("Enter a valid URL.").optional().or(z.literal("")),
  projectType: z.string().min(1, "Select a project type."),
  productStage: z.string().min(1, "Select the current product stage."),
  servicesNeeded: z.array(z.string()).min(1, "Select at least one service."),
  budgetRange: z.string().min(1, "Select a budget range."),
  timeline: z.string().min(1, "Select a timeline."),
  projectContext: z.string().min(20, "Project context must be at least 20 characters."),
  preferredContactMethod: z.string().min(1, "Select a preferred contact method."),
  locale: z.enum(["en", "bn"]),
});

export type DiscoveryFormValues = z.infer<typeof discoverySchema>;

export const defaultDiscoveryValues: DiscoveryFormValues = {
  fullName: "",
  email: "",
  companyName: "",
  website: "",
  projectType: "",
  productStage: "",
  servicesNeeded: [],
  budgetRange: "",
  timeline: "",
  projectContext: "",
  preferredContactMethod: "",
  locale: "en",
};
