export interface TelehoSession {
  readonly openHour: number;
  readonly closeHour: number;
}

export const TELEHOUDAI: TelehoSession = {
  openHour: 23,
  closeHour: 8,
};
