import type {DiscoveryFormValues} from "@/lib/schemas/discovery";

export type DiscoverySuccessResponse = {
  status: "success";
  message: string;
  referenceId?: string;
};

export type DiscoveryValidationErrorResponse = {
  status: "error";
  message: string;
  errors: Record<string, string[]>;
};

export async function submitDiscoveryInquiry(
  payload: DiscoveryFormValues,
): Promise<DiscoverySuccessResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

  if (!baseUrl) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      status: "success",
      message: "Inquiry captured locally. Configure NEXT_PUBLIC_LARAVEL_API_URL for live submissions.",
      referenceId: "local-preview",
    };
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/discovery-inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as DiscoverySuccessResponse | DiscoveryValidationErrorResponse;

  if (!response.ok || data.status === "error") {
    throw data;
  }

  return data;
}
