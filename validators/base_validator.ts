import { DefaultReplacer } from "../utils/default_message_replacer.ts";
import { Validator } from "../validation.ts";
import { ValidationError } from "../validation_error.ts";

export abstract class BaseValidator implements Validator {
  protected key = "value";

  #constructMessage(): string {
    return DefaultReplacer.replace(this.getMessage(), this.key);
  }

  setKey(key: string): Validator {
    this.key = key;
    return this;
  }

  validate(obj: unknown): ValidationError[] {
    const errors: ValidationError[] = [];
    if (!this.isValid(obj)) {
      errors.push(new ValidationError(this.#constructMessage()));
    }
    return errors;
  }

  protected abstract getMessage(): string;
  protected abstract isValid(obj: unknown): boolean;
}
