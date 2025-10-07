export function isValidEmail(email: string): boolean {
  const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validRegex.test(email);
}
