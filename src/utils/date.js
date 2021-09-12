import { intlFormat } from "date-fns";

function formatDateNative(date) {
  return intlFormat(new Date(date), 
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
    {
      locale: 'ru-RU'
    }
  );
}

export {
  formatDateNative,
}
