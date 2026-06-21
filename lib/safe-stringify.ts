import { stringify } from 'safe-stable-stringify';

export function safeStringify(value: any): string {
  try {
    return stringify(value) || '';
  } catch (error) {
    console.error('Safe stringify failed:', error);
    return JSON.stringify({ error: 'Could not stringify value' });
  }
}
