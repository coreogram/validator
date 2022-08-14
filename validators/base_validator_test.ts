import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
import { BaseValidator } from "./base_validator.ts";

class DummyValidator extends BaseValidator {
  /**
   * for testing purpose
   */
  public getKey() {
    return this.key;
  }

  protected getMessage(): string {
    throw new Error("Method not implemented.");
  }
  protected isValid(_obj: unknown): boolean {
    throw new Error("Method not implemented.");
  }
}

Deno.test(BaseValidator.name, async (t) => {
  await t.step("setKey", async (t) => {
    const validator = new DummyValidator();

    await t.step("it should set the key", () => {
      validator.setKey("$aaa");
      assertEquals(validator.getKey(), "$aaa");
    });

    await t.step("it should return the validator", () => {
      const result = validator.setKey("$somekey");
      assertEquals(result, validator);
    });
  });
});
