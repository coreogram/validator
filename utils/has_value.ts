// deno-lint-ignore no-explicit-any
export function hasValue<T = any>(obj: unknown): obj is T {
  return obj !== undefined && obj !== null;
}
