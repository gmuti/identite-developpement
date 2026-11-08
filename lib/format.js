export function formatDate(value, locale) {
  if (!value) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Intl.DateTimeFormat(locale === "en" ? "en-CA" : "fr-CA", { dateStyle: "long", timeZone: "UTC" }).format(parsed);
}
