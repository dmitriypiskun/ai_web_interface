const target = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

export function emailValidate(value?: string): boolean {
  return !!value && target.test(value);
}

export function hasStringUppercase(value?: string): boolean {
  return !!value && /[A-Z]/.test(value);
}

export function hasStringNumber(value?: string): boolean {
  return !!value && /d/.test(value);
}

export function hasStringSymbol(value?: string): boolean {
  return !!value && /[@#$%^&*(),.?:{}|<>]/.test(value);
}
