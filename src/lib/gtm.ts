// Google Tag Manager event tracking utility
// GTM container ID: GTM-5QDKB5M3

export const GTM_ID = "GTM-5QDKB5M3";

export type GTMEvent = {
  event: string;
  [key: string]: unknown;
};

/**
 * Push an event to the GTM dataLayer
 */
export const trackGTMEvent = (eventData: GTMEvent): void => {
  if (typeof window !== "undefined" && (window as Window & { dataLayer?: unknown[] }).dataLayer) {
    (window as Window & { dataLayer: unknown[] }).dataLayer.push(eventData);
  }
};

/**
 * Track a phone call click
 */
export const trackPhoneClick = (position: string): void => {
  trackGTMEvent({
    event: "phone_click",
    cta_position: position,
    device: typeof window !== "undefined" ? (window.innerWidth < 768 ? "mobile" : "desktop") : "unknown",
  });
};

/**
 * Track a WhatsApp click
 */
export const trackWhatsAppClick = (position: string, campaign?: string): void => {
  trackGTMEvent({
    event: "whatsapp_click",
    cta_position: position,
    campaign: campaign || "default",
    device: typeof window !== "undefined" ? (window.innerWidth < 768 ? "mobile" : "desktop") : "unknown",
  });
};

/**
 * Track a CTA click
 */
export const trackCTAClick = (ctaName: string, section: string): void => {
  trackGTMEvent({
    event: "cta_click",
    cta_name: ctaName,
    section: section,
    device: typeof window !== "undefined" ? (window.innerWidth < 768 ? "mobile" : "desktop") : "unknown",
  });
};

/**
 * Track form start
 */
export const trackFormStart = (formId: string): void => {
  trackGTMEvent({
    event: "form_start",
    form_id: formId,
  });
};

/**
 * Track form submission
 */
export const trackFormSubmit = (formData: {
  issue: string;
  area: string;
  formId: string;
}): void => {
  trackGTMEvent({
    event: "form_submit",
    issue: formData.issue,
    area: formData.area,
    form_id: formData.formId,
  });
};

/**
 * Track FAQ open
 */
export const trackFAQOpen = (question: string): void => {
  trackGTMEvent({
    event: "faq_open",
    question: question,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number): void => {
  trackGTMEvent({
    event: "scroll_depth",
    scroll_percentage: percentage,
  });
};

/**
 * Track lead source (UTM + referrer)
 */
export const trackLeadSource = (): void => {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || "";
  const utmMedium = urlParams.get("utm_medium") || "";
  const utmCampaign = urlParams.get("utm_campaign") || "";
  const referrer = document.referrer || "";

  trackGTMEvent({
    event: "lead_source",
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    referrer: referrer,
    landing_url: window.location.href,
  });
};