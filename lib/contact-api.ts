/** Base URL for the CaptureAPI v1 backend (no trailing slash). Used by the contact form on static hosts. */
export function getApiV1Base(): string {
  return (process.env.NEXT_PUBLIC_API_V1_URL || "https://api-v1.captureapi.net").replace(
    /\/$/,
    ""
  );
}

export function getContactEndpointUrl(): string {
  return `${getApiV1Base()}/api/contact/`;
}
