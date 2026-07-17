export function reportError(error: unknown, context?: Record<string, unknown>): void {
  console.error(error, context);
}
