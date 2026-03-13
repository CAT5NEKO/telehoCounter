import type { ILocaleRepository } from "../../domain/repositories/ILocaleRepository";

export class BrowserLocaleRepository implements ILocaleRepository {
  getLocale(): string {
    return navigator.language;
  }

  getTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
}
