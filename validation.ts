import { ValidationError } from "./validation_error.ts";

export interface Validator {
  setKey(key: string): Validator;
  validate(obj: unknown): ValidationError[];
}
