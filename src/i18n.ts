import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "jp", "th"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    onError(error) {
      console.log(error);
    },
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});