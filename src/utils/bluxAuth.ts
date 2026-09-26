const JWT_STORAGE_KEY = '__BLUX__JWT_STORE';
const RECENT_LOGIN_STORAGE_KEY = '__BLUX__RECENT_LOGIN_CONFIG';

export const readBluxSessionToken = (): string | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const direct = window.localStorage.getItem(JWT_STORAGE_KEY)?.trim();
  if (direct) {
    return direct;
  }

  const recent = window.localStorage.getItem(RECENT_LOGIN_STORAGE_KEY);
  if (!recent) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(recent) as { jwt?: unknown };
    if (typeof parsed.jwt === 'string' && parsed.jwt.trim()) {
      return parsed.jwt.trim();
    }
  } catch {
    return undefined;
  }

  return undefined;
};
