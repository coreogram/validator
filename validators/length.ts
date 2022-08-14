import { BaseValidator } from "./base_validator.ts";

export interface LengthProps {
  min?: number;
  max?: number;
  message?: string;
}

export class Length extends BaseValidator {
  constructor(private props?: LengthProps) {
    super();
  }

  protected getMessage(): string {
    throw new Error("Method not implemented.");
  }

  protected isValid(obj: unknown): boolean {
    throw new Error("Method not implemented.");
  }
}
