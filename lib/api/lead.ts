import type {LeadFormValues} from "@/lib/schemas/lead";

export type LeadSuccessResponse = {
  status: "success";
  message: string;
  referenceId?: string;
};

export type LeadErrorResponse = {
  status: "error";
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitProductLead(payload: LeadFormValues): Promise<LeadSuccessResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

  if (!baseUrl) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      status: "success",
      message: "Request captured locally. Configure NEXT_PUBLIC_LARAVEL_API_URL for live submissions.",
      referenceId: "local-preview",
    };
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/product-leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as LeadSuccessResponse | LeadErrorResponse;

  if (!response.ok || data.status === "error") {
    throw new Error(data.message || "Submission failed. Please review the form.");
  }

  return data;
}
