let toastFn: ((msg: string) => void) | null = null;

export function registerToast(fn: (msg: string) => void) {
  toastFn = fn;
}

export function showToastGlobal(message: string) {
  if (toastFn) toastFn(message);
}
