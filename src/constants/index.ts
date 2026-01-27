export const CONTACT_INFO = {
  telegram: `https://t.me/mhl_5`,
} as const;

export function CONTACT_SUPPORT_LINK(text?: string) {
  const supportUrl = new URL(CONTACT_INFO.telegram);
  if (text) supportUrl.searchParams.append("text", text);
  return supportUrl.href;
}
