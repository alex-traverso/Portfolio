import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  try {
    return {
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  } catch (e) {
    console.error(
      "No se pudo cargar el archivo de mensajes para el locale:",
      locale,
      e,
    );
    return { messages: {}, timeZone: "America/Argentina/Buenos_Aires" };
  }
});
