import { BaseValidator } from "./base_validator.ts";

export interface IsStringProps {
  message?: string;
}

export class IsString extends BaseValidator {
  private defaultMessage = "$key must be a string";

  constructor(private props?: IsStringProps) {
    super();
  }

  protected getMessage(): string {
    return this.props?.message ?? this.defaultMessage;
  }

  protected isValid(obj: unknown): boolean {
    return typeof obj === "string";
  }
}
